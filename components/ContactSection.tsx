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
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Elegant (Medicated)',
    size: '72x36',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span
            style={{
              color: '#E51D24',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            ✦ Get In Touch
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
            Let&apos;s Talk <span style={{ color: '#E51D24' }}>Sleep & Custom Sizing</span>
          </h2>
          <p style={{ color: '#6B6B6B', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Have questions about brochure pricing, custom dimensions, or orthopaedic recommendations? Our sleep experts are standing by.
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
              background: 'linear-gradient(135deg, #E51D24 0%, #B71218 100%)',
              borderRadius: '24px',
              padding: '48px 40px',
              color: '#fff',
              boxShadow: '0 20px 48px rgba(229,29,36,0.25)',
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
              Top Sleep Mattress
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px' }}>
              A division of <strong>Top Global Group</strong>. Certified manufacturers of medical, orthopaedic, and luxury spring mattresses.
            </p>

            {[
              { icon: '🌐', title: 'Official Website', detail: 'www.topglobalgroup.com' },
              { icon: '📍', title: 'Corporate Office', detail: 'Top Global Group Headquarters, India' },
              { icon: '📞', title: 'Phone & WhatsApp', detail: '+91 80 4567 8900 / +91 98450 12345' },
              { icon: '✉️', title: 'Email Support', detail: 'info@topglobalgroup.com / contact@topsleep.in' },
              { icon: '🛡️', title: 'Warranty & Claims', detail: 'Up to 7-Year Replacement Warranty Support' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(255,255,255,0.18)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '11px', color: 'rgba(255,255,255,0.70)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{item.detail}</div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {['Official Website', 'Instagram', 'WhatsApp'].map((soc) => (
                <a
                  key={soc}
                  href="http://www.topglobalgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.18)',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.30)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)' }}
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
              padding: '44px 40px',
              border: '1.5px solid #F0F0F0',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(229,29,36,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    margin: '0 auto 20px',
                    color: '#E51D24',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                  Thank you, {form.name}!
                </h3>
                <p style={{ color: '#6B6B6B', fontSize: '15px', maxWidth: '400px', margin: '0 auto 24px', lineHeight: 1.7 }}>
                  Our mattress specialists will contact you shortly with brochure specifications and custom quotation details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: '#E51D24',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 28px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>
                  Request Brochure Quote / Custom Sizing
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <FormField
                    id="contact-name"
                    label="Full Name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <FormField
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <FormField
                    id="contact-phone"
                    label="Phone / WhatsApp"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    required
                  />
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#4A4A4A', marginBottom: '8px' }}>
                      Mattress Model
                    </label>
                    <select
                      id="contact-model"
                      value={form.model}
                      onChange={(e) => setForm({ ...form, model: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid #E8E8E8',
                        background: '#fff',
                        fontSize: '14px',
                        color: '#1A1A1A',
                        outline: 'none',
                      }}
                    >
                      <option value="Elegant (Medicated)">Elegant (Medicated) — Rebonded Memory Foam</option>
                      <option value="Luxury Plus">Luxury Plus — Rebonded Super Soft Foam</option>
                      <option value="Luxury">Luxury — Rebonded PU Foam</option>
                      <option value="Deluxe">Deluxe — Bonnel & Pocketed Spring</option>
                      <option value="Classic">Classic — Rubberized Coir Orthopaedic</option>
                      <option value="Custom Bespoke">Bespoke / Custom Dimension Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#4A4A4A', marginBottom: '8px' }}
                  >
                    Size / Custom Dimensions & Inquiries
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Specify your bed dimensions (e.g. 72x36, 75x60, 72x72) or specific back pain relief requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid #E8E8E8',
                      background: '#fff',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#E51D24' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E8E8' }}
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: '#E51D24',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = '#C8161D' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = '#E51D24' }}
                >
                  Send Inquiry & Request Pricing →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}: {
  id: string
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (val: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#4A4A4A', marginBottom: '8px' }}
      >
        {label} {required && <span style={{ color: '#E51D24' }}>*</span>}
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
          fontSize: '14px',
          color: '#1A1A1A',
          outline: 'none',
          transition: 'border-color 0.2s',
          fontFamily: 'inherit',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = '#E51D24' }}
        onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E8E8' }}
      />
    </div>
  )
}
