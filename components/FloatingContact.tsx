'use client'

import { useState } from 'react'

const CALL_NUMBER = '+919847317211'
const CALL_DISPLAY = '+91 98473 17211'
const WHATSAPP_NUMBER = '919061612539'
const WHATSAPP_DISPLAY = '+91 9061612539'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello TopSleep, I would like to inquire about your mattresses and products.'
)}`

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
      className="floating-contact-container"
    >
      {/* Expanded Menu Options */}
      {open && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'flex-end',
            marginBottom: '4px',
            animation: 'floatSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* WhatsApp Action Card */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: '#fff',
              color: '#1A1A1A',
              padding: '10px 18px 10px 14px',
              borderRadius: '50px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(37, 211, 102, 0.2)',
              textDecoration: 'none',
              border: '1.5px solid #25D366',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.02)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.35)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.14)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#25D366',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                WhatsApp Chat
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A1A' }}>
                {WHATSAPP_DISPLAY}
              </div>
            </div>
          </a>

          {/* Call Dialer Action Card */}
          <a
            href={`tel:${CALL_NUMBER}`}
            id="floating-call-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: '#fff',
              color: '#1A1A1A',
              padding: '10px 18px 10px 14px',
              borderRadius: '50px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(229, 29, 36, 0.2)',
              textDecoration: 'none',
              border: '1.5px solid #E51D24',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.02)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(229, 29, 36, 0.35)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.14)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E51D24 0%, #C8161D 100%)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}
            >
              📞
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '11px', color: '#E51D24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Direct Call (Call Log)
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A1A' }}>
                {CALL_DISPLAY}
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-contact-trigger-btn"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close Contact Menu' : 'Open Call and WhatsApp Menu'}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          border: 'none',
          background: open
            ? '#1A1A1A'
            : 'linear-gradient(135deg, #E51D24 0%, #25D366 100%)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: open ? '20px' : '22px',
          cursor: 'pointer',
          boxShadow: '0 8px 28px rgba(0, 0, 0, 0.22)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
        }}
      >
        {open ? (
          '✕'
        ) : (
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>📞</span>
            <span
              style={{
                position: 'absolute',
                top: '-6px',
                right: '-8px',
                width: '14px',
                height: '14px',
                background: '#25D366',
                borderRadius: '50%',
                border: '2px solid #fff',
              }}
            />
          </div>
        )}
      </button>

      <style>{`
        @keyframes floatSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
