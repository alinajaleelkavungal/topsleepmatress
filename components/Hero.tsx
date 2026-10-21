'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const trustBadges = [
  { icon: '🛡️', title: 'Up to 7 Years Warranty', sub: 'Comprehensive coverage', iconBg: '#F0F7FF' },
  { icon: '🔬', title: 'Anti-Dust Mite & Fungus', sub: 'Hypoallergenic certified', iconBg: '#F0F9FF' },
  { icon: '💤', title: 'Zero Disturbance', sub: 'Independent pocket springs', iconBg: '#FFF5F5' },
  { icon: '🚚', title: 'Doorstep Delivery Available', sub: 'Across all major cities', iconBg: '#F8FAFC' },
]

const slides = [
  { src: '/images/hero.png', alt: 'TopSleep Premium Luxury Mattress', pill: '7 Years Full Warranty', icon: '😴', title: 'Medical & Orthopaedic', sub: 'Certified Back Pain Relief' },
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
  }, [])

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
        <div
          className="hero-image-col"
          style={{
            position: 'relative',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.97)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Subtle architectural halo accent */}
          <div
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, rgba(229, 29, 36, 0.07) 0%, rgba(229, 29, 36, 0.02) 100%)',
              border: '1px solid rgba(229, 29, 36, 0.14)',
              pointerEvents: 'none',
            }}
          />

          {/* Main Image Frame */}
          <div
            style={{
              width: '100%',
              maxWidth: '540px',
              aspectRatio: '4/3',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -12px rgba(0,0,0,0.13), 0 10px 25px -6px rgba(229,29,36,0.10)',
              position: 'relative',
              border: '1px solid rgba(229, 29, 36, 0.16)',
              background: '#fff',
            }}
          >
            {slides.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="540px"
                style={{
                  objectFit: 'cover',
                  opacity: i === active ? 1 : 0,
                  transition: 'opacity 0.9s ease',
                }}
                priority={i === 0}
              />
            ))}

            {/* Overlay badge 1: Top Right Warranty Pill */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#E51D24',
                borderRadius: '4px',
                padding: '6px 12px',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {slide.pill}
            </div>

            {/* Overlay badge 2: Bottom Orthopaedic Glass Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: '#fff',
                borderRadius: '4px',
                borderLeft: '3px solid #E51D24',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '13px', lineHeight: 1.2 }}>
                    {slide.title}
                  </div>
                  <div style={{ color: '#E51D24', fontWeight: 800, fontSize: '14px', lineHeight: 1.2 }}>
                    {slide.sub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#E51D24',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: '#E51D24' }} />
            <span>Luxury Mattress Collection</span>
          </div>

          {/* Main Title: Top Sleep with Big Font */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(52px, 6.4vw, 84px)',
              fontWeight: 800,
              color: '#141414',
              lineHeight: 1.02,
              marginBottom: '12px',
              letterSpacing: '-0.03em',
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

          {/* Minimized Caption: Enjoy The Real Comfort */}
          <div
            className="hero-caption"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '2px',
                background: '#E51D24',
                borderRadius: '2px',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(18px, 2.2vw, 24px)',
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
              fontSize: '16px',
              lineHeight: 1.7,
              maxWidth: '500px',
              marginBottom: '26px',
            }}
          >
            Discover mattresses and sleep solutions engineered with years of expertise — crafted to give you the deepest, most restorative rest and the real comfort you deserve.
          </p>

          {/* Call to Action Buttons */}
          <div
            className="hero-buttons-row"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}
          >
            <a
              href="#products"
              id="hero-shop-btn"
              style={{
                background: '#E51D24',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#B8141A'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#E51D24'
              }}
            >
              Explore Products →
            </a>
            <a
              href="#about"
              id="hero-about-btn"
              style={{
                border: '1px solid #1A1A1A',
                color: '#1A1A1A',
                background: 'transparent',
                padding: '13px 28px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#1A1A1A'
                ;(e.currentTarget as HTMLElement).style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = '#1A1A1A'
              }}
            >
              Learn More
            </a>
          </div>

          {/* Structured Trust Badges (2x2 Grid) */}
          <div
            className="hero-trust-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              width: '100%',
              maxWidth: '500px',
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                style={{
                  background: '#fff',
                  padding: '10px 14px',
                  borderRadius: '4px',
                  border: '1px solid #E4E4E4',
                  borderLeft: '2px solid #E51D24',
                  textAlign: 'left',
                }}
              >
                <div>
                  <div style={{ color: '#1A1A1A', fontSize: '12px', fontWeight: 700, lineHeight: 1.25 }}>
                    {badge.title}
                  </div>
                  <div style={{ color: '#71717A', fontSize: '11px', fontWeight: 500, lineHeight: 1.2 }}>
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
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
          .hero-trust-grid {
            grid-template-columns: 1fr 1fr !important;
            margin: 0 auto;
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


