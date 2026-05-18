'use client'

// ContactForm — client component (needs state for field tracking and success message).
// Submits via Server Action (lib/actions.ts → Resend).
// No third-party form library — vanilla React state keeps JS bundle minimal.

import { useState, useTransition } from 'react'
import { submitContact } from '@/lib/actions'

type FormState = {
  firstName: string
  lastName: string
  company: string
  email: string
  role: string
  message: string
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  role: '',
  message: '',
}

const ROLES = [
  { value: 'manufacturer',  label: 'Manufacturer' },
  { value: 'pharmacy',      label: 'Pharmacy / Chain' },
  { value: 'hcp',           label: 'Healthcare Professional' },
  { value: 'distributor',   label: 'Distribution Partner' },
  { value: 'other',         label: 'Other' },
]

// Shared input class — matches brand: light border, teal focus ring
const inputCls =
  'w-full font-sans text-[0.9375rem] text-body bg-white border-[1.5px] border-deep-blue/18 rounded-brand px-4 py-3 outline-none transition-colors focus:border-soft-teal placeholder:text-caption'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function set(key: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    startTransition(async () => {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))

      const result = await submitContact(fd)

      if (result.ok) {
        setDone(true)
      } else {
        setError(result.error ?? 'Something went wrong. Email us directly at info@cuvon.gr')
      }
    })
  }

  if (done) {
    return (
      <div className="border border-soft-teal bg-soft-teal/8 rounded-brand p-6">
        <p className="text-[0.9375rem] font-semibold text-deep-blue mb-1">Message received.</p>
        <p className="text-[0.9375rem] text-slate-blue">
          We will respond directly — typically within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name row */}
      <div className="grid grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-[0.8125rem] font-semibold text-deep-blue tracking-[0.04em] mb-2">
            First name
          </label>
          <input
            type="text"
            className={inputCls}
            value={form.firstName}
            onChange={e => set('firstName', e.target.value)}
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label className="block text-[0.8125rem] font-semibold text-deep-blue tracking-[0.04em] mb-2">
            Last name
          </label>
          <input
            type="text"
            className={inputCls}
            value={form.lastName}
            onChange={e => set('lastName', e.target.value)}
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      {/* Company */}
      <div className="mb-6">
        <label className="block text-[0.8125rem] font-semibold text-deep-blue tracking-[0.04em] mb-2">
          Company / Organisation
        </label>
        <input
          type="text"
          className={inputCls}
          value={form.company}
          onChange={e => set('company', e.target.value)}
          autoComplete="organization"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-[0.8125rem] font-semibold text-deep-blue tracking-[0.04em] mb-2">
          Email address
        </label>
        <input
          type="email"
          className={inputCls}
          value={form.email}
          onChange={e => set('email', e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      {/* Role */}
      <div className="mb-6">
        <label className="block text-[0.8125rem] font-semibold text-deep-blue tracking-[0.04em] mb-2">
          Your role
        </label>
        <select
          className={`${inputCls} appearance-none cursor-pointer`}
          value={form.role}
          onChange={e => set('role', e.target.value)}
          required
        >
          <option value="" disabled>Select your role</option>
          {ROLES.map(r => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-[0.8125rem] font-semibold text-deep-blue tracking-[0.04em] mb-2">
          Message
        </label>
        <textarea
          className={`${inputCls} resize-y min-h-[120px]`}
          value={form.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Tell us what you are looking for. The more specific, the faster we can respond."
          required
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-[0.875rem] text-red-600 mb-4">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full text-[0.9375rem] font-semibold text-white bg-deep-blue rounded-brand py-4 transition-colors hover:bg-slate-blue disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
