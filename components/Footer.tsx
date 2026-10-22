'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bed, Mail, MapPin, Microscope, Phone, Shield } from 'lucide-react'
import { BUSINESS_WHATSAPP_NUMBER, products, requestProduct, WhatsAppIcon } from './ProductsSection'

const trustBadges = [
  { icon: Shield, label: 'Up to 15 Yrs Warranty' },
  { icon: Microscope, label: 'Anti-Dust Mite' },
  { icon: Bed, label: 'Zero Partner Disturbance' },
]

type FooterLink = { label: string; href: string; external?: boolean; internal?: boolean; onClick?: () => void }

const linkStyle: React.CSSProperties = {
  color: '#888',
  textDecoration: 'none',
  fontSize: '14px',
  transition: 'color 0.2s',
}

const productLink = (name: string, href: string): FooterLink => {
  const product = products.find((p) => p.name === name)
  return {
    label: name,
    href,
    onClick: product ? () => requestProduct({ productId: product.id }) : undefined,
  }
}

const WARRANTY_URL = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello TopSleep, I would like to register my mattress warranty.'
)}`

export default function Footer() {
  const pathname = usePathname()

  // Section views live on the home route, so links are absolute from any other page
  const isHome = pathname === '/'
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`)

  const links: Record<string, FooterLink[]> = {
    Products: [
      productLink('Semi Medicated', sectionHref('#products')),
      productLink('Medicated', sectionHref('#products')),
      productLink('Bonnell Spring', sectionHref('#products')),
      productLink('Pocketed Spring', sectionHref('#products')),
      productLink('HR Mattress', sectionHref('#products')),
      productLink('Helixa Mattress', sectionHref('#products')),
      productLink('Helixa Memory', sectionHref('#products')),
      productLink('Helixa Latex', sectionHref('#products')),
      productLink('Medicated Memory', sectionHref('#products')),
      productLink('Medicated Latex', sectionHref('#products')),
      {
        label: 'Custom Sizing',
        href: sectionHref('#products'),
        onClick: () => requestProduct({ customSize: true }),
      },
    ],
    Company: [
      { label: 'About Top Sleep', href: sectionHref('#about') },
      { label: 'Manufacturing Quality', href: sectionHref('#services') },
      { label: 'Warranty Registration', href: WARRANTY_URL, external: true },
      { label: 'Contact Us', href: sectionHref('#contact') },
      { label: 'Privacy Policy', href: '/privacy-policy', internal: true },
    ],
  }

  return (
    <footer className="site-footer" style={{ background: '#111', color: '#fff', padding: '72px 32px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Image
                quality={95}
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
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ccc',
                    fontSize: '11px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon size={13} strokeWidth={1.75} />
                  {label}
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
                <span style={{ display: 'inline-flex', flexShrink: 0 }}><Mail size={15} strokeWidth={1.75} /></span> <span>topglobalgroup1@gmail.com</span>
              </a>
              <a
                href="tel:+919847317211"
                id="footer-call-link"
                style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#aaa' }}
              >
                <span style={{ display: 'inline-flex', flexShrink: 0 }}><Phone size={15} strokeWidth={1.75} /></span> <span>+91 98473 17211 (Direct Call)</span>
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
                <span style={{ display: 'inline-flex', flexShrink: 0 }}><WhatsAppIcon size={15} /></span> <span>+91 9061612539 (WhatsApp)</span>
              </a>
              <div style={{ color: '#aaa', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ display: 'inline-flex', flexShrink: 0, marginTop: '2px' }}><MapPin size={15} strokeWidth={1.75} /></span>
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
                  <li key={item.label} style={{ marginBottom: '10px' }}>
                    {item.internal ? (
                      <Link
                        href={item.href}
                        style={linkStyle}
                        onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#E51D24' }}
                        onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#888' }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        style={linkStyle}
                        onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#E51D24' }}
                        onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#888' }}
                      >
                        {item.label}
                      </a>
                    )}
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
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Warranty Policy', href: '#' },
              { label: 'Sitemap', href: '#' },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ color: '#666', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#E51D24' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = '#666' }}
                onClick={(e) => {
                  if (l.href === '#') e.preventDefault()
                }}
              >
                {l.label}
              </Link>
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
