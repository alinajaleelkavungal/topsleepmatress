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

const milestones = [
  { year: '1999', title: 'Founded', desc: 'TopSleep was born from a simple belief — everyone deserves perfect sleep.' },
  { year: '2007', title: 'First Ortho Range', desc: 'Launched our award-winning orthopedic mattress line, trusted by 1M+ sleepers.' },
  { year: '2015', title: 'Memory Foam Era', desc: 'Pioneered CoolGel memory foam in India, revolutionizing comfort and temperature regulation.' },
  { year: '2024', title: 'Smart Sleep Tech', desc: 'Introduced AI-powered sleep tracking integration with our SmartSleep mattress range.' },
]

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
              ✦ About Top Sleep
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
              Part of <strong>Top Global Group</strong> (www.topglobalgroup.com), Top Sleep Mattress is dedicated to the science and craftsmanship of restorative rest. Combining high-density rebonded foam, premium memory foam, and zero-partner-disturbance spring systems, our mattresses transform the way you sleep.
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

        {/* Timeline milestones */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#E8E8E8',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
          className="milestone-grid"
        >
          {milestones.map((m, i) => (
            <div
              key={m.year}
              style={{
                background: i % 2 === 0 ? '#fff' : '#E51D24',
                color: i % 2 === 0 ? '#1A1A1A' : '#fff',
                padding: '40px 32px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.12}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '42px',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '8px',
                  color: i % 2 === 0 ? '#E51D24' : 'rgba(255,255,255,0.5)',
                }}
              >
                {m.year}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '17px',
                  marginBottom: '12px',
                  color: i % 2 === 0 ? '#1A1A1A' : '#fff',
                }}
              >
                {m.title}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: i % 2 === 0 ? '#6B6B6B' : 'rgba(255,255,255,0.80)',
                }}
              >
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-header-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .milestone-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .milestone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
