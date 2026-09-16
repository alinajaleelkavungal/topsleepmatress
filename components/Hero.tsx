'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const stats = [
  { value: '10L+', label: 'Happy Customers' },
  { value: '25+', label: 'Years of Excellence' },
  { value: '100', label: 'Night Free Trial' },
  { value: '4.8★', label: 'Average Rating' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
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
        overflow: 'hidden',
        background: '#FAFAFA',
      }}
    >
      {/* Decorative circle blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(216,91,91,0.05)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(216,91,91,0.04)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '140px 32px 60px',
          gap: '60px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left: text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(229,29,36,0.08)',
              color: '#E51D24',
              padding: '6px 18px',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              border: '1px solid rgba(229,29,36,0.2)',
            }}
          >
            ✦ Enjoy The Real Comfort
          </span>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(42px, 6vw, 76px)',
              fontWeight: 700,
              color: '#1A1A1A',
              lineHeight: 1.08,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Enjoy The Real
            <br />
            <em style={{ fontStyle: 'italic', color: '#E51D24' }}>Comfort.</em>
          </h1>

          <p
            style={{
              color: '#4A4A4A',
              fontSize: '18px',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            Discover mattresses and sleep solutions engineered with decades of expertise — crafted to give you the deepest, most restorative rest and the real comfort you deserve.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#products"
              id="hero-shop-btn"
              style={{
                background: '#E51D24',
                color: '#fff',
                padding: '15px 36px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s',
                boxShadow: '0 8px 32px rgba(229,29,36,0.25)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(229,29,36,0.35)'
                ;(e.currentTarget as HTMLElement).style.background = '#C8161D'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(229,29,36,0.25)'
                ;(e.currentTarget as HTMLElement).style.background = '#E51D24'
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
                padding: '15px 36px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(229,29,36,0.08)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              Learn More
            </a>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}>
            {[
              { icon: '🚚', text: 'Free Delivery' },
              { icon: '🔄', text: '100-Night Trial' },
              { icon: '🛡️', text: '10-Year Warranty' },
            ].map((badge) => (
              <div
                key={badge.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#4A4A4A',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: '18px' }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div
          style={{
            position: 'relative',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glow ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(216,91,91,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: '100%',
              maxWidth: '540px',
              aspectRatio: '4/3',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.12)',
              position: 'relative',
              border: '2px solid rgba(216,91,91,0.12)',
            }}
          >
            <Image
              src="/images/hero.png"
              alt="Woman sleeping peacefully on a TopSleep premium mattress"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Overlay badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '14px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
            >
              <span style={{ fontSize: '28px' }}>😴</span>
              <div>
                <div style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '14px' }}>Sleep Score</div>
                <div style={{ color: '#E51D24', fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>98 / 100</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        style={{
          borderTop: '1px solid #E8E8E8',
          background: '#fff',
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
                padding: '28px 24px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #E8E8E8' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: '#6B6B6B', fontSize: '13px', marginTop: '6px', fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 120px !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid > div:last-child {
            display: none !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #E8E8E8;
          }
        }
      `}</style>
    </section>
  )
}

