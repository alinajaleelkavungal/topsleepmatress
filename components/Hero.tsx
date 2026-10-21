'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'


const slides = [
  { src: '/images/hero.png', alt: 'TopSleep Premium Luxury Mattress', pill: '10 Years Full Warranty', icon: '😴', title: 'Medical & Orthopaedic', sub: 'Certified Back Pain Relief' },
  { src: '/images/products/medicated_memory.jpg', alt: 'Medicated Memory Foam Mattress', pill: 'Orthopaedic Memory', icon: '🧠', title: 'Medicated Memory Foam', sub: 'Contours to Every Pressure Point' },
  { src: '/images/products/helixa_latex.jpg', alt: 'Helixa Latex Mattress', pill: 'Natural Latex', icon: '🌿', title: 'Helixa Natural Latex', sub: 'Buoyant, Breathable Comfort' },
  { src: '/images/products/pocketed_spring.jpg', alt: 'Pocketed Spring Mattress', pill: 'Zero Disturbance', icon: '💤', title: 'Pocketed Spring', sub: 'Independent Spring Support' },
  { src: '/images/products/bonnell_spring.jpg', alt: 'Bonnell Spring Mattress', pill: 'Firm Support', icon: '🛏️', title: 'Bonnell Spring', sub: 'Durable, Firm & Supportive' },
  { src: '/images/products/hr_mattress.jpg', alt: 'HR Foam Mattress', pill: 'High Resilience', icon: '✨', title: 'HR Foam Mattress', sub: 'Strong Support, Lasting Comfort' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [active])

  const slide = slides[active]

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 55%, #F4F4F5 100%)',
      }}
    >
      {/* Decorative ambient glowing auras */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '-4%',
          width: '540px',
          height: '540px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 29, 36, 0.08) 0%, rgba(229, 29, 36, 0.01) 65%, transparent 75%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-4%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(19, 62, 135, 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Hero Container */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '125px 36px 40px',
          gap: '52px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* LEFT: Image Showcase */}
        <figure
          className="hero-image-col"
          style={{
            width: '100%',
            maxWidth: '480px',
            justifySelf: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}
        >
          {/* Main Image Frame */}
          <div
            style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '6px',
              overflow: 'hidden',
              position: 'relative',
              background: '#F1F1F1',
            }}
          >
            {slides.map((s, i) => (
              <Image
                quality={95}
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 990px) 100vw, 480px"
                style={{
                  objectFit: 'cover',
                  opacity: i === active ? 1 : 0,
                  transition: 'opacity 0.9s ease',
                }}
                priority={i === 0}
              />
            ))}

            {/* Slide tag */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                background: '#fff',
                borderBottomRightRadius: '6px',
                padding: '8px 14px',
                color: '#1A1A1A',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E51D24' }} />
              {slide.pill}
            </div>
          </div>

          {/* Caption */}
          <figcaption
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px',
              marginTop: '16px',
              textAlign: 'left',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  lineHeight: 1.25,
                }}
              >
                {slide.title}
              </div>
              <div style={{ color: '#6B6B6B', fontSize: '14px', marginTop: '2px' }}>{slide.sub}</div>
            </div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#9A9A9A',
                fontVariantNumeric: 'tabular-nums',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: '#1A1A1A' }}>{String(active + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
            </div>
          </figcaption>

          {/* Slide indicators */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '14px' }}>
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
                style={{
                  flex: 1,
                  height: '14px',
                  padding: 0,
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    background: i === active ? '#E51D24' : '#DCDCDC',
                    transition: 'background 0.3s ease',
                  }}
                />
              </button>
            ))}
          </div>
        </figure>

        {/* RIGHT: Writings & Call to Action */}
        <div
          className="hero-text-col"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(24px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow Pill Badge */}
          <div
            className="hero-eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(229, 29, 36, 0.06)',
              border: '1px solid rgba(229, 29, 36, 0.18)',
              color: '#E51D24',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#E51D24',
                boxShadow: '0 0 8px rgba(229, 29, 36, 0.6)',
              }}
            />
            <span>Luxury Mattress Collection</span>
          </div>

          {/* Main Title: Top Sleep */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(48px, 5.8vw, 78px)',
              fontWeight: 800,
              color: '#141414',
              lineHeight: 1.04,
              marginBottom: '10px',
              letterSpacing: '-0.025em',
            }}
          >
            Top{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: '#E51D24',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Sleep
            </span>
          </h1>

          {/* Brand Tagline */}
          <div
            className="hero-caption"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                width: '28px',
                height: '2px',
                background: '#E51D24',
                borderRadius: '2px',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(19px, 2.2vw, 25px)',
                fontWeight: 600,
                color: '#2D3748',
                letterSpacing: '-0.01em',
              }}
            >
              Enjoy The Real{' '}
              <em style={{ fontStyle: 'italic', color: '#E51D24' }}>Comfort.</em>
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              color: '#4B5563',
              fontSize: '15.5px',
              lineHeight: 1.68,
              maxWidth: '510px',
              marginBottom: '26px',
            }}
          >
            Discover mattresses engineered with decades of orthopaedic expertise — crafted to give you the deepest, most restorative rest and genuine therapeutic comfort.
          </p>

          {/* Call to Action Buttons */}
          <div
            className="hero-buttons-row"
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '30px',
            }}
          >
            <a
              href="#products"
              id="hero-shop-btn"
              className="hero-primary-btn"
              style={{
                background: '#E51D24',
                color: '#fff',
                padding: '13px 26px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '14.5px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(229, 29, 36, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#C8141A'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 6px 18px rgba(229, 29, 36, 0.35)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#E51D24'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 14px rgba(229, 29, 36, 0.25)'
              }}
            >
              <span>Explore Products</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#about"
              id="hero-about-btn"
              className="hero-secondary-btn"
              style={{
                border: '1px solid #D1D5DB',
                color: '#1F2937',
                background: '#FFFFFF',
                padding: '13px 24px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '14.5px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#1F2937'
                el.style.color = '#111827'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#D1D5DB'
                el.style.color = '#1F2937'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)'
              }}
            >
              Learn More
            </a>
          </div>

          {/* Organized Trust Features Grid */}
          <div
            className="hero-trust-container"
            style={{
              width: '100%',
              maxWidth: '520px',
              paddingTop: '20px',
              borderTop: '1px solid #E5E7EB',
            }}
          >
            <div
              className="hero-trust-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                width: '100%',
              }}
            >
              {/* Feature 1: Warranty */}
              <div
                className="hero-trust-card"
                style={{
                  background: '#FFFFFF',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#F87171'
                  el.style.boxShadow = '0 6px 16px rgba(229, 29, 36, 0.08)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E5E7EB'
                  el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#FEF2F2',
                    color: '#E51D24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#111827', fontSize: '12.5px', fontWeight: 700, lineHeight: 1.25 }}>
                    15 Years Warranty
                  </div>
                  <div style={{ color: '#6B7280', fontSize: '11px', fontWeight: 500, lineHeight: 1.25, marginTop: '2px' }}>
                    Comprehensive coverage
                  </div>
                </div>
              </div>

              {/* Feature 2: Anti-Dust & Fungus */}
              <div
                className="hero-trust-card"
                style={{
                  background: '#FFFFFF',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#F87171'
                  el.style.boxShadow = '0 6px 16px rgba(229, 29, 36, 0.08)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E5E7EB'
                  el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#FEF2F2',
                    color: '#E51D24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="14" />
                    <line x1="9" y1="11" x2="15" y2="11" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#111827', fontSize: '12.5px', fontWeight: 700, lineHeight: 1.25 }}>
                    Anti-Dust & Fungus
                  </div>
                  <div style={{ color: '#6B7280', fontSize: '11px', fontWeight: 500, lineHeight: 1.25, marginTop: '2px' }}>
                    Certified hypoallergenic
                  </div>
                </div>
              </div>

              {/* Feature 3: Zero Disturbance */}
              <div
                className="hero-trust-card"
                style={{
                  background: '#FFFFFF',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#F87171'
                  el.style.boxShadow = '0 6px 16px rgba(229, 29, 36, 0.08)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E5E7EB'
                  el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#FEF2F2',
                    color: '#E51D24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 4v16" />
                    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                    <path d="M2 17h20" />
                    <path d="M6 8v9" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#111827', fontSize: '12.5px', fontWeight: 700, lineHeight: 1.25 }}>
                    Zero Disturbance
                  </div>
                  <div style={{ color: '#6B7280', fontSize: '11px', fontWeight: 500, lineHeight: 1.25, marginTop: '2px' }}>
                    Pocket spring isolation
                  </div>
                </div>
              </div>

              {/* Feature 4: Doorstep Delivery */}
              <div
                className="hero-trust-card"
                style={{
                  background: '#FFFFFF',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#F87171'
                  el.style.boxShadow = '0 6px 16px rgba(229, 29, 36, 0.08)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E5E7EB'
                  el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#FEF2F2',
                    color: '#E51D24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                    <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                    <circle cx="7" cy="18" r="2" />
                    <path d="M15 18H9" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#111827', fontSize: '12.5px', fontWeight: 700, lineHeight: 1.25 }}>
                    Doorstep Delivery
                  </div>
                  <div style={{ color: '#6B7280', fontSize: '11px', fontWeight: 500, lineHeight: 1.25, marginTop: '2px' }}>
                    Fast dispatch across cities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 990px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 130px !important;
            padding-bottom: 36px !important;
            gap: 36px !important;
          }
          .hero-image-col {
            order: 1;
            width: 100%;
          }
          .hero-text-col {
            order: 2;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-text-col p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-caption {
            justify-content: center !important;
          }
          .hero-buttons-row {
            justify-content: center;
          }
          .hero-trust-container {
            margin: 0 auto;
          }
          .hero-trust-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 580px) {
          .hero-trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}


