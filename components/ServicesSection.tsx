'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
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

type ServiceItem = {
  title: string
  desc: string
  tag: string
  accent: string
  sizes?: string[]
  warrantyTiers?: { period: string; label: string }[]
  highlights?: string[]
}

const services: ServiceItem[] = [
  {
    title: 'Custom Size Mattresses',
    desc: 'Every bed frame is unique. We manufacture standard dimensions and custom cuts tailored to your space:',
    tag: 'Made to Order',
    accent: '#E51D24',
    sizes: ['72 × 36', '75 × 36', '72 × 48', '72 × 60', '75 × 60', '72 × 72', '75 × 72', 'Bespoke Cuts'],
  },
  {
    title: 'Up to 15 Years Warranty',
    desc: 'Top Sleep mattresses come with official manufacturer warranty backing across every model tier:',
    tag: 'Official Warranty',
    accent: '#E51D24',
    warrantyTiers: [
      { period: '15 Years', label: 'Helixa Series Luxury Models' },
      { period: '10 Years', label: 'Medicated, Memory & Latex' },
      { period: '5 Years', label: 'Bonnell, Pocketed Spring & HR' },
      { period: '4 Years', label: 'Semi Medicated Core' },
    ],
  },
  {
    title: 'Medical & Ortho Consultation',
    desc: 'Specially engineered for persistent back pain relief. Personalized guidance on:',
    tag: 'Back Pain Relief',
    accent: '#1D4ED8',
    highlights: [
      'High-Density Rebonded Foam Cores',
      'Memory Foam Pressure Contouring',
      'Spinal Ergonomics & Ortho Alignment',
    ],
  },
  {
    title: 'Anti-Dust Mite & Fungus Shield',
    desc: 'All our top-layer knitted fabrics are certified and chemically treated against allergens:',
    tag: 'Certified Protection',
    accent: '#E51D24',
    highlights: [
      'Anti-Dust Mite Barrier Defense',
      'Anti-Bacterial & Anti-Fungal Treatment',
      'Certified Hypoallergenic Knitted Fabric',
    ],
  },
  {
    title: 'Direct Doorstep Delivery',
    desc: 'Reliable and safe delivery directly from our manufacturing facilities to your home:',
    tag: 'Doorstep Care',
    accent: '#E51D24',
    highlights: [
      'Direct Factory Dispatch',
      'Multi-Layer Hygienic Packaging',
      'Safe Transit Across Major Cities',
    ],
  },
  {
    title: 'Zero Partner Disturbance',
    desc: 'Our Pocketed Spring line isolates localized weight transfers completely:',
    tag: 'Pocketed Springs',
    accent: '#E51D24',
    highlights: [
      'Independent Pocketed Spring Coils',
      'Zero Motion Transfer Isolation',
      'Peaceful, Undisturbed Partner Rest',
    ],
  },
]

export default function ServicesSection() {
  const { ref, visible } = useInView()

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '100px 32px',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span
            style={{
              color: '#E51D24',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            Engineered For Your Well-Being
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(34px, 4vw, 50px)',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Services Built Around <span style={{ color: '#E51D24' }}>Your Sleep</span>
          </h2>
          <p style={{ color: '#6B6B6B', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            From custom dimensions to certified anti-allergen treatments &mdash; engineered by Top Sleep so you enjoy the real comfort.
          </p>
        </div>

        {/* Cards grid — alternating layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  visible,
}: {
  service: ServiceItem
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? '#1A1A1A' : '#E4E4E4'}`,
        borderRadius: '6px',
        padding: '32px 28px 28px',
        cursor: 'default',
        transition: 'border-color 0.25s ease, opacity 0.6s ease',
        transitionDelay: visible ? '0s' : `${index * 0.07}s`,
        opacity: visible ? 1 : 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent line */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '3px',
          width: hovered ? '100%' : '48px',
          background: service.accent,
          transition: 'width 0.4s ease',
        }}
      />

      {/* Number + tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '12px',
          marginBottom: '28px',
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '28px',
            fontWeight: 600,
            color: '#D4D4D4',
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          style={{
            color: service.accent,
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '22px',
          fontWeight: 600,
          color: '#1A1A1A',
          marginBottom: '12px',
          lineHeight: 1.25,
        }}
      >
        {service.title}
      </h3>

      {/* Desc / Intro */}
      <p
        style={{
          fontSize: '13.5px',
          color: '#5F5F5F',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {service.desc}
      </p>

      {/* Options: Sizes text list */}
      {service.sizes && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '6px 10px',
            marginTop: '14px',
            fontSize: '12.5px',
            lineHeight: 1.6,
          }}
        >
          {service.sizes.map((s, idx) => {
            const isCustom = s === 'Bespoke Cuts'
            return (
              <span
                key={s}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: isCustom ? 700 : 600,
                  color: isCustom ? '#E51D24' : '#2D3748',
                }}
              >
                <span>{isCustom ? '+ Bespoke Cuts' : s}</span>
                {idx < (service.sizes?.length ?? 0) - 1 && (
                  <span style={{ color: '#D1D5DB', fontWeight: 400 }}>&bull;</span>
                )}
              </span>
            )
          })}
        </div>
      )}

      {/* Options: Warranty Tiers */}
      {service.warrantyTiers && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: '14px' }}>
          {service.warrantyTiers.map((tier) => (
            <div
              key={tier.period}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                fontSize: '12px',
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontWeight: 700, color: '#E51D24', whiteSpace: 'nowrap' }}>
                {tier.period}
              </span>
              <span style={{ color: '#555555', textAlign: 'right', fontSize: '12px', marginLeft: '10px' }}>
                {tier.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: Feature highlights */}
      {service.highlights && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {service.highlights.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12.5px',
                color: '#4A4A4A',
                lineHeight: 1.4,
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke={service.accent}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
