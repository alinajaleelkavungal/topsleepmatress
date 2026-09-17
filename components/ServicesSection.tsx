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

const services = [
  {
    icon: '🛏️',
    title: 'Custom Size Mattresses',
    desc: 'Every bed frame is unique. We manufacture mattresses in any custom dimension — 72x36, 75x36, 72x48, 72x60, 75x60, 72x72, 75x72 or bespoke cuts tailored to your space.',
    tag: 'Made to Order',
    accent: '#E51D24',
  },
  {
    icon: '🛡️',
    title: 'Up to 7 Years Warranty',
    desc: 'Top Sleep mattresses come with official manufacturer warranty (up to 7 Years on Elegant, Luxury Plus, and Luxury models; 5 Years on Deluxe; 3 Years on Classic).',
    tag: 'Official Warranty',
    accent: '#E51D24',
  },
  {
    icon: '🔬',
    title: 'Medical & Ortho Consultation',
    desc: 'Specially engineered for persistent back pain relief. Our specialists guide you on high-density rebonded foam, memory foam contouring, and spinal ergonomics.',
    tag: 'Back Pain Relief',
    accent: '#E51D24',
  },
  {
    icon: '✨',
    title: 'Anti-Dust Mite & Fungus Shield',
    desc: 'All our top-layer knitted fabrics are certified and chemically treated against fungus, bacteria, and house dust mites for long-lasting hygienic sleep.',
    tag: 'Certified Protection',
    accent: '#E51D24',
  },
  {
    icon: '🚚',
    title: 'Direct Doorstep Delivery',
    desc: 'Reliable and safe delivery directly from Top Global Group manufacturing facilities to your home, ensuring your mattress arrives in pristine condition.',
    tag: 'Doorstep Care',
    accent: '#E51D24',
  },
  {
    icon: '💤',
    title: 'Zero Partner Disturbance',
    desc: 'Our Deluxe pocketed spring line isolates localized weight transfers completely, allowing you and your partner uninterrupted, peaceful rest.',
    tag: 'Pocketed Springs',
    accent: '#E51D24',
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
            ✦ Engineered For Your Well-Being
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
            From custom dimensions to certified anti-allergen treatments &mdash; engineered by Top Global Group so you enjoy the real comfort.
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
  service: (typeof services)[0]
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const isFeatured = index === 0 || index === 1

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#E51D24' : isFeatured ? '#FFF8F8' : '#fff',
        border: `1.5px solid ${hovered ? '#E51D24' : '#EBEBEB'}`,
        borderRadius: '20px',
        padding: '36px 32px',
        cursor: 'default',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 0.07}s`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(229,29,36,0.20)' : '0 2px 12px rgba(0,0,0,0.04)',
        opacity: visible ? 1 : 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Tag */}
      <span
        style={{
          display: 'inline-block',
          background: hovered ? 'rgba(255,255,255,0.20)' : 'rgba(229,29,36,0.10)',
          color: hovered ? '#fff' : '#E51D24',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '50px',
          marginBottom: '20px',
        }}
      >
        {service.tag}
      </span>

      {/* Icon */}
      <div
        style={{
          fontSize: '40px',
          marginBottom: '16px',
          lineHeight: 1,
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: hovered ? '#fff' : '#1A1A1A',
          marginBottom: '12px',
          transition: 'color 0.2s',
        }}
      >
        {service.title}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontSize: '14px',
          color: hovered ? 'rgba(255,255,255,0.85)' : '#6B6B6B',
          lineHeight: 1.7,
          transition: 'color 0.2s',
        }}
      >
        {service.desc}
      </p>

      {/* Bottom arrow */}
      <div
        style={{
          marginTop: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          fontWeight: 600,
          color: hovered ? 'rgba(255,255,255,0.90)' : '#E51D24',
          transition: 'all 0.3s',
        }}
      >
        Learn more
        <span style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s' }}>
          →
        </span>
      </div>
    </div>
  )
}
