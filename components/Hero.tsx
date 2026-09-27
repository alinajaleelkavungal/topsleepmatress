'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const stats = [
  { value: '10L+', label: 'Happy Customers' },
  { value: '25+', label: 'Years of Excellence' },
  { value: '100', label: 'Night Free Trial' },
  { value: '4.8★', label: 'Average Rating' },
]

const trustBadges = [
  { icon: '🛡️', title: 'Up to 7 Years Warranty', sub: 'Comprehensive coverage' },
  { icon: '🔬', title: 'Anti-Dust Mite & Fungus', sub: 'Hypoallergenic certified' },
  { icon: '💤', title: 'Zero Disturbance', sub: 'Independent pocket springs' },
  { icon: '🚚', title: 'Free Doorstep Delivery', sub: 'Across all major cities' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

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
          background: 'radial-gradient(circle, rgba(229, 29, 36, 0.04) 0%, transparent 70%)',
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
            <Image
              src="/images/hero.png"
              alt="TopSleep Premium Luxury Mattress"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />

            {/* Overlay badge 1: Top Right Warranty Pill */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'linear-gradient(135deg, rgba(229,29,36,0.94) 0%, rgba(185,18,24,0.94) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                padding: '7px 15px',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.02em',
                boxShadow: '0 4px 16px rgba(229,29,36,0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '12px' }}>★</span>
              <span>7 Years Full Warranty</span>
            </div>

            {/* Overlay badge 2: Bottom Orthopaedic Glass Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(14px)',
                borderRadius: '16px',
                padding: '11px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 10px 28px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(229, 29, 36, 0.14)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(229,29,36,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                  }}
                >
                  😴
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '13px', lineHeight: 1.2 }}>
                    Medical &amp; Orthopaedic
                  </div>
                  <div style={{ color: '#E51D24', fontWeight: 800, fontSize: '14px', lineHeight: 1.2 }}>
                    Certified Back Pain Relief
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#F0FFF4',
                  border: '1px solid #B8E8C5',
                  color: '#166534',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>✓</span>
                <span>Doctor Tested</span>
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
              gap: '8px',
              background: 'rgba(229,29,36,0.06)',
              color: '#E51D24',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              border: '1px solid rgba(229,29,36,0.20)',
              boxShadow: '0 2px 8px rgba(229,29,36,0.04)',
            }}
          >
            <span style={{ fontSize: '12px' }}>✦</span>
            <span>Enjoy The Real Comfort</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(38px, 4.4vw, 62px)',
              fontWeight: 700,
              color: '#141414',
              lineHeight: 1.12,
              marginBottom: '18px',
              letterSpacing: '-0.025em',
            }}
          >
            Enjoy The Real{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: '#E51D24',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Comfort.
            </span>
          </h1>

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
            Discover mattresses and sleep solutions engineered with decades of expertise — crafted to give you the deepest, most restorative rest and the real comfort you deserve.
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
                background: 'linear-gradient(135deg, #E51D24 0%, #C8161D 100%)',
                color: '#fff',
                padding: '14px 34px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
                boxShadow: '0 8px 24px rgba(229,29,36,0.28)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 14px 32px rgba(229,29,36,0.38)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(229,29,36,0.28)'
              }}
            >
              Explore Products →
            </a>
            <a
              href="#about"
              id="hero-about-btn"
              style={{
                border: '2px solid #E51D24',
                color: '#E51D24',
                background: 'transparent',
                padding: '13px 32px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(229,29,36,0.06)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.90)',
                  padding: '9px 12px',
                  borderRadius: '12px',
                  border: '1px solid #EAEAEA',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '18px' }}>{badge.icon}</span>
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

      {/* Stats strip */}
      <div
        style={{
          borderTop: '1px solid #E8E8E8',
          background: '#fff',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '22px 18px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #E8E8E8' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: '#6B6B6B',
                  fontSize: '12px',
                  marginTop: '6px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
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
          .hero-buttons-row {
            justify-content: center;
          }
          .hero-trust-grid {
            grid-template-columns: 1fr 1fr !important;
            margin: 0 auto;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #E8E8E8;
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


