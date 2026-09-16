'use client'

import Image from 'next/image'

export default function Footer() {
  const links = {
    Products: ['OrthoElite Pro', 'CoolMem Luxe', 'NaturLatex Supreme', 'DualComfort Flip', 'CloudSoft Pillow Top', 'SmartSleep Hybrid'],
    Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog', 'Contact'],
    Support: ['Track Order', 'FAQ', 'Return Policy', '100-Night Trial', 'Warranty', 'Store Locator'],
  }

  return (
    <footer style={{ background: '#111', color: '#fff', padding: '72px 32px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Image
                src="/images/logo.png"
                alt="TopSleep Mattress"
                width={180}
                height={76}
                style={{
                  height: '56px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.8, maxWidth: '280px', marginBottom: '28px' }}>
              Crafting premium sleep experiences since 1999. Engineered comfort, built to last — enjoy the real comfort.
            </p>
            {/* Awards */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['🏆 Best Mattress 2024', '⭐ ISO Certified', '🌿 Eco Friendly'].map((a) => (
                <span
                  key={a}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: '#ccc',
                    fontSize: '11px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontWeight: 500,
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>
                    <a
                      href="#"
                      style={{
                        color: '#888',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#D85B5B' }}
                      onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#888' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          style={{
            background: 'rgba(204,20,20,0.12)',
            border: '1px solid rgba(204,20,20,0.25)',
            borderRadius: '16px',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '4px' }}>
              Get sleep tips & exclusive offers
            </div>
            <div style={{ color: '#888', fontSize: '13px' }}>Join 50,000+ subscribers. No spam, ever.</div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flex: '0 0 auto' }}>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              style={{
                padding: '11px 18px',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(255,255,255,0.10)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                width: '240px',
              }}
            />
            <button
              id="newsletter-subscribe-btn"
              style={{
                padding: '11px 22px',
                background: '#D85B5B',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span style={{ color: '#666', fontSize: '13px' }}>
            © 2024 TopSleep. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ color: '#666', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#D85B5B' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#666' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
