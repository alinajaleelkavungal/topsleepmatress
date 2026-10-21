'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
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

export default function AboutSection() {
  const { ref, visible } = useInView()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '100px 32px',
        background: '#FAF9F9',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
            marginBottom: '80px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="about-header-grid"
        >
          {/* Left */}
          <div>
            <span
              style={{
                color: '#E51D24',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              About Top Sleep
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(36px, 4vw, 54px)',
                fontWeight: 700,
                color: '#1A1A1A',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Enjoy The Real
              <br />
              <span style={{ color: '#E51D24' }}>Comfort Every Night</span>
            </h2>
          </div>

          {/* Right */}
          <div style={{ paddingTop: '16px' }}>
            <p
              style={{
                color: '#4A4A4A',
                fontSize: '17px',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              Top Sleep Mattress is dedicated to the science and craftsmanship of restorative rest. Combining high-density rebonded foam, premium memory foam, and zero-partner-disturbance spring systems, our mattresses transform the way you sleep.
            </p>
            <p style={{ color: '#6B6B6B', fontSize: '16px', lineHeight: 1.8 }}>
              Every mattress is specifically engineered to relieve back pain and support the spine, enveloped in imported knitted fabric that is scientifically treated against fungus, bacteria, and house dust mites.
            </p>

            {/* CTA */}
            <a
              href="#products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '32px',
                color: '#E51D24',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                borderBottom: '2px solid #E51D24',
                paddingBottom: '2px',
                transition: 'gap 0.2s',
              }}
              onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.gap = '14px' }}
              onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.gap = '8px' }}
            >
              Explore Official Brochure Range →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-header-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
