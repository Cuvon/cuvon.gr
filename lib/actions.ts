'use server'

// Contact form Server Action.
// Validates fields with Zod, then dispatches via Resend.
// Called from ContactForm component (components/ContactForm.tsx).
// No client-side API keys — RESEND_API_KEY stays server-only.

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Validation schema ────────────────────────────────────────────────────
const ContactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName:  z.string().min(1, 'Last name is required'),
  company:   z.string().min(1, 'Company is required'),
  email:     z.string().email('Invalid email address'),
  role:      z.enum(['manufacturer', 'pharmacy', 'hcp', 'distributor', 'other'], {
    errorMap: () => ({ message: 'Please select a role' }),
  }),
  message:   z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactResult = { ok: true } | { ok: false; error: string }

// ── Server Action ────────────────────────────────────────────────────────
export async function submitContact(fd: FormData): Promise<ContactResult> {
  // 1. Parse and validate
  const raw = {
    firstName: fd.get('firstName'),
    lastName:  fd.get('lastName'),
    company:   fd.get('company'),
    email:     fd.get('email'),
    role:      fd.get('role'),
    message:   fd.get('message'),
  }

  const parsed = ContactSchema.safeParse(raw)
  if (!parsed.success) {
    const first = parsed.error.errors[0]?.message ?? 'Validation error'
    return { ok: false, error: first }
  }

  const { firstName, lastName, company, email, role, message } = parsed.data

  const roleLabels: Record<string, string> = {
    manufacturer: 'Manufacturer',
    pharmacy:     'Pharmacy / Chain',
    hcp:          'Healthcare Professional',
    distributor:  'Distribution Partner',
    other:        'Other',
  }

  // 2. Send via Resend
  const to = process.env.CONTACT_EMAIL_TO ?? 'info@cuvon.gr'

  try {
    await resend.emails.send({
      from:    'Cuvon Website <noreply@cuvon.gr>',
      to:      [to],
      reply_to: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${company}`,
      text: [
        `Name:    ${firstName} ${lastName}`,
        `Company: ${company}`,
        `Email:   ${email}`,
        `Role:    ${roleLabels[role] ?? role}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <table style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#2E3A4A;width:100%;max-width:600px;">
          <tr><td style="padding:32px 0 24px;">
            <p style="font-size:22px;font-weight:700;color:#1D3557;margin:0 0 24px;">New enquiry — Cuvon Website</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6B7A8D;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;width:120px;">Name</td><td style="padding:8px 0;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7A8D;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Company</td><td style="padding:8px 0;">${company}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7A8D;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1D3557;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6B7A8D;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Role</td><td style="padding:8px 0;">${roleLabels[role] ?? role}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid rgba(29,53,87,0.1);margin:24px 0;"/>
            <p style="color:#6B7A8D;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Message</p>
            <p style="margin:0;line-height:1.65;">${message.replace(/\n/g, '<br/>')}</p>
          </td></tr>
          <tr><td style="padding:24px 0 0;border-top:1px solid rgba(29,53,87,0.1);font-size:13px;color:#6B7A8D;">
            Cuvon &nbsp;·&nbsp; cuvon.gr
          </td></tr>
        </table>
      `,
    })

    return { ok: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { ok: false, error: 'Failed to send message. Email us directly at info@cuvon.gr' }
  }
}
