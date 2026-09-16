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
    desc: 'Every body is different. We craft mattresses in any dimension — single to king, standard or bespoke — tailored to your bed frame and sleeping style.',
    tag: 'Made to Order',
    accent: '#D85B5B',
  },
  {
    icon: '🚚',
    title: 'Free Home Delivery',
    desc: "White-glove delivery to your doorstep. Our trained crew sets up your mattress, removes old bedding, and ensures you're satisfied before leaving.",
    tag: 'Pan-India',
    accent: '#D85B5B',
  },
  {
    icon: '🔬',
    title: 'Sleep Consultation',
    desc: 'Not sure which mattress is right for you? Our certified sleep experts analyze your posture, weight, and sleeping habits to recommend the perfect match.',
    tag: 'Expert Advice',
    accent: '#D85B5B',
  },
  {
    icon: '🔄',
    title: '100-Night Free Trial',
    desc: "We're so confident you'll love it that we give you 100 nights to decide. If it's not for you, we pick it up and refund you — no questions asked.",
    tag: 'Risk Free',
    accent: '#D85B5B',
  },
  {
    icon: '🛡️',
    title: 'Extended Warranty',
    desc: 'Every TopSleep mattress comes with up to 10 years of comprehensive warranty. Sleep easy knowing your investment is fully protected.',
    tag: 'Up to 10 Years',
    accent: '#D85B5B',
  },
  {
    icon: '♻️',
    title: 'Old Mattress Pickup',
    desc: "When you upgrade to TopSleep, we handle your old mattress responsibly — donating or recycling it so it doesn't end up in a landfill.",
    tag: 'Eco Friendly',
    accent: '#D85B5B',
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
              color: '#D85B5B',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            ◆ What We Offer
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
            Services Built Around <span style={{ color: '#D85B5B' }}>Your Sleep</span>
          </h2>
          <p style={{ color: '#6B6B6B', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From custom craftsmanship to post-purchase care — we go the extra mile so you can rest.
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
  const isFeatured = index === 0 || index === 4

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#D85B5B' : isFeatured ? '#FCF0F0' : '#fff',
        border: `1.5px solid ${hovered ? '#D85B5B' : '#EBEBEB'}`,
        borderRadius: '20px',
        padding: '36px 32px',
        cursor: 'default',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 0.07}s`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(204,20,20,0.20)' : '0 2px 12px rgba(0,0,0,0.04)',
        opacity: visible ? 1 : 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Tag */}
      <span
        style={{
          display: 'inline-block',
          background: hovered ? 'rgba(255,255,255,0.20)' : 'rgba(204,20,20,0.10)',
          color: hovered ? '#fff' : '#D85B5B',
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
          filter: hovered ? 'brightness(1.2)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '19px',
          fontWeight: 700,
          color: hovered ? '#fff' : '#1A1A1A',
          marginBottom: '12px',
          transition: 'color 0.3s',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {service.title}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.75,
          color: hovered ? 'rgba(255,255,255,0.85)' : '#6B6B6B',
          transition: 'color 0.3s',
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
          color: hovered ? 'rgba(255,255,255,0.90)' : '#D85B5B',
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
