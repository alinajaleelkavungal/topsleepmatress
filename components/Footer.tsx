'use client'

import Image from 'next/image'

export default function Footer() {
  const links = {
    Products: [
      'Semi Medicated',
      'Medicated',
      'Bonnell Spring',
      'Pocketed Spring',
      'HR Mattress',
      'Helixa Mattress',
      'Helixa Memory',
      'Helixa Latex',
      'Medicated Memory',
      'Medicated Latex',
      'Custom Sizing',
    ],
    Company: [
      'About Top Sleep',
      'Manufacturing Quality',
      'Warranty Registration',
      'Contact Us',
    ],
    Support: [
      'Brochure Pricing',
      '100-Night Trial',
      'Back Pain Consultation',
      'Care & Cleaning Guide',
      'Store Locator',
    ],
  }

  return (
    <footer className="site-footer" style={{ background: '#111', color: '#fff', padding: '72px 32px 32px' }}>
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
            <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.8, maxWidth: '300px', marginBottom: '24px' }}>
              Dedicated to high-density rebonded foam, memory foam, and luxury spring systems &mdash; enjoy the real comfort.
            </p>
            {/* Awards & Certifications from Brochure */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['🛡️ Up to 10 Yrs Warranty', '🔬 Anti-Dust Mite', '🛏️ Zero Partner Disturbance'].map((a) => (
                <span
                  key={a}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
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

            {/* Contact details */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a
                href="mailto:topglobalgroup1@gmail.com"
                style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#aaa' }}
              >
                <span>✉️</span> <span>topglobalgroup1@gmail.com</span>
              </a>
              <a
                href="tel:+919847317211"
                id="footer-call-link"
                style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#aaa' }}
              >
                <span>📞</span> <span>+91 98473 17211 (Direct Call)</span>
              </a>
              <a
                href="https://wa.me/919061612539"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#aaa' }}
              >
                <span>💬</span> <span>+91 9061612539 (WhatsApp)</span>
              </a>
              <div style={{ color: '#aaa', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span>📍</span>
                <div>
                  <div>Top Sleep Mattress Headquarters, India</div>
                  <a
                    href="tel:+919946862203"
                    id="footer-office-link"
                    style={{ color: '#aaa', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#aaa' }}
                  >
                    +91 99468 62203
                  </a>
                </div>
              </div>
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
                      href="#products"
                      style={{
                        color: '#888',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#E51D24' }}
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
            © 2024 Top Sleep Mattress &bull; All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Warranty Policy', 'Sitemap'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ color: '#666', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#E51D24' }}
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
