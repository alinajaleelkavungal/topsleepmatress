'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

export default function ContactSection() {
  const { ref, visible } = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '100px 32px',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <span
            style={{
              color: '#D85B5B',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            ◆ Reach Out
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(34px, 4vw, 50px)',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Let's Talk <span style={{ color: '#D85B5B' }}>Sleep</span>
          </h2>
          <p style={{ color: '#6B6B6B', fontSize: '17px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Have questions? Want a custom quote? Our sleep experts are standing by to help you find your perfect rest.
          </p>
        </div>

        {/* Two-panel layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '40px',
            alignItems: 'start',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          }}
          className="contact-grid"
        >
          {/* Left info panel */}
          <div
            style={{
              background: 'linear-gradient(135deg, #D85B5B 0%, #A14040 100%)',
              borderRadius: '24px',
              padding: '48px 40px',
              color: '#fff',
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '28px',
                fontWeight: 700,
                marginBottom: '12px',
              }}
            >
              Contact Information
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: 1.7, marginBottom: '40px' }}>
              We're here Monday – Saturday, 9 AM to 7 PM IST.
            </p>

            {[
              { icon: '📍', title: 'Address', detail: '42 Comfort Lane, MG Road, Bengaluru — 560001' },
              { icon: '📞', title: 'Phone', detail: '+91 80 4567 8900' },
              { icon: '✉️', title: 'Email', detail: 'hello@topsleep.in' },
              { icon: '🕐', title: 'Hours', detail: 'Mon–Sat: 9 AM – 7 PM IST' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '15px', color: '#fff' }}>{item.detail}</div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {['Instagram', 'Facebook', 'YouTube'].map((soc) => (
                <a
                  key={soc}
                  href="#"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.28)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)' }}
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            style={{
              background: '#FAF9F9',
              borderRadius: '24px',
              padding: '48px 40px',
              border: '1.5px solid #F0F0F0',
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                  Message Sent!
                </h3>
                <p style={{ color: '#6B6B6B', fontSize: '16px', lineHeight: 1.7 }}>
                  Thank you for reaching out. Our sleep experts will get back to you within 24 hours.
                </p>
                <button
                  id="send-another-btn"
                  onClick={() => { setForm({ name: '', email: '', phone: '', message: '' }); setSent(false) }}
                  style={{
                    marginTop: '24px',
                    padding: '12px 28px',
                    background: '#D85B5B',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '15px',
                    cursor: 'pointer',
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form">
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', fontWeight: 700, color: '#1A1A1A', marginBottom: '28px' }}>
                  Send us a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <FormField
                    id="contact-name"
                    label="Full Name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <FormField
                    id="contact-phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                </div>

                <FormField
                  id="contact-email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                  style={{ marginBottom: '16px' }}
                />

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#4A4A4A', marginBottom: '8px', letterSpacing: '0.03em' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell us what you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid #E8E8E8',
                      background: '#fff',
                      fontSize: '15px',
                      color: '#1A1A1A',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#D85B5B' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E8E8' }}
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: '#D85B5B',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = '#A14040' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = '#D85B5B' }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  style: extraStyle,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div style={{ ...extraStyle }}>
      <label
        htmlFor={id}
        style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#4A4A4A', marginBottom: '8px', letterSpacing: '0.03em' }}
      >
        {label} {required && <span style={{ color: '#D85B5B' }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          width: '100%',
          padding: '13px 16px',
          borderRadius: '12px',
          border: '1.5px solid #E8E8E8',
          background: '#fff',
          fontSize: '15px',
          color: '#1A1A1A',
          outline: 'none',
          transition: 'border-color 0.2s',
          fontFamily: 'inherit',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = '#D85B5B' }}
        onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E8E8' }}
      />
    </div>
  )
}
