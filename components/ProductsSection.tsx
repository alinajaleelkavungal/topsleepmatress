'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.05) {
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

const categories = ['All', 'Orthopaedic', 'Memory Foam', 'Super Soft Foam', 'PU Foam', 'Spring']

const products = [
  {
    id: 'elegant-medicated',
    name: 'Elegant (Medicated)',
    category: 'Memory Foam',
    tagline: 'High Density Rebonded Foam and Memory Foam',
    price: 17906,
    originalPrice: 22382,
    rating: 4.9,
    reviews: 2154,
    badge: '7 Years Warranty',
    badgeColor: '#D85B5B',
    features: ['High Density Rebonded Foam', 'Memory Foam', 'Anti-Fungus & Bacteria', 'Knitted Fabric'],
    thickness: '5 to 10 inch',
    warranty: '7 Years',
    trial: '100 Nights',
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    highlight: true,
  },
  {
    id: 'luxury-plus',
    name: 'Luxury Plus',
    category: 'Super Soft Foam',
    tagline: 'Rebonded with Super Soft Foam',
    price: 13235,
    originalPrice: 16543,
    rating: 4.8,
    reviews: 1893,
    badge: '7 Years Warranty',
    badgeColor: '#1A6E4A',
    features: ['Rebonded Foam', 'Super Soft Foam', 'Relief from back pain', 'Knitted Fabric'],
    thickness: '6 to 10 inch',
    warranty: '7 Years',
    trial: '100 Nights',
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    highlight: false,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    category: 'PU Foam',
    tagline: 'Rebonded with PU Foam',
    price: 10982,
    originalPrice: 13727,
    rating: 4.7,
    reviews: 1542,
    badge: '7 Years Warranty',
    badgeColor: '#4A7C59',
    features: ['PU Foam', 'Knitted Fabric', 'Anti-Fungus & Bacteria', 'Breathable'],
    thickness: '5 to 10 inch',
    warranty: '7 Years',
    trial: '100 Nights',
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    highlight: false,
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    category: 'Spring',
    tagline: 'Bonnel & Pocketed Spring Mattress',
    price: 13168,
    originalPrice: 16460,
    rating: 4.9,
    reviews: 2012,
    badge: '5 Years Warranty',
    badgeColor: '#B07C12',
    features: ['Bonnell Spring', 'Pocketed Spring', 'Hard Cotton Felt', 'High Density PU Foam'],
    thickness: '6 to 10 inch',
    warranty: '5 Years',
    trial: '100 Nights',
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    highlight: false,
  },
  {
    id: 'classic',
    name: 'Classic',
    category: 'Orthopaedic',
    tagline: 'High Density Rubberized Coir',
    price: 7740,
    originalPrice: 9675,
    rating: 4.6,
    reviews: 1205,
    badge: '3 Years Warranty',
    badgeColor: '#7B4CC1',
    features: ['Coir & PU Foam', 'Superior Spinal Support', 'Healthy & Natural Sleep', 'Knitted Fabric'],
    thickness: '4 to 8 inch',
    warranty: '3 Years',
    trial: '100 Nights',
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    highlight: false,
  }
]

export default function ProductsSection() {
  const { ref, visible } = useInView()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section
      id="products"
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
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <div>
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
              ◆ Our Collection
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(34px, 4vw, 50px)',
                fontWeight: 700,
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Find Your <span style={{ color: '#D85B5B' }}>Perfect Mattress</span>
            </h2>
          </div>
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#D85B5B' : '#E0E0E0',
                  background: activeCategory === cat ? '#D85B5B' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#4A4A4A',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '64px',
          }}
          className="products-grid"
        >
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              visible={visible}
              selected={selectedProduct.id === product.id}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Selected product detail panel */}
        <ProductDetailPanel product={selectedProduct} visible={visible} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProductCard({
  product,
  index,
  visible,
  selected,
  onSelect,
}: {
  product: (typeof products)[0]
  index: number
  visible: boolean
  selected: boolean
  onSelect: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: `2px solid ${selected ? '#D85B5B' : hovered ? '#D85B5B' : '#F0F0F0'}`,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered || selected ? '0 20px 60px rgba(204,20,20,0.15)' : '0 2px 12px rgba(0,0,0,0.05)',
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #FFF5F5 0%, #F5F5F5 100%)',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/mattress.png"
          alt={product.name}
          width={240}
          height={140}
          style={{ objectFit: 'contain', transition: 'transform 0.4s', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {/* Badge */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: product.badgeColor,
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '50px',
            letterSpacing: '0.06em',
          }}
        >
          {product.badge}
        </span>
        {/* Discount */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#1A1A1A',
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '50px',
          }}
        >
          -{discount}% OFF
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: '24px' }}>
        <div style={{ fontSize: '11px', color: '#D85B5B', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {product.category}
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '13px', color: '#6B6B6B', marginBottom: '14px' }}>{product.tagline}</p>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
          <span style={{ color: '#F4B400', fontSize: '13px' }}>{'★'.repeat(Math.round(product.rating))}</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>{product.rating}</span>
          <span style={{ fontSize: '12px', color: '#9B9B9B' }}>({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <span style={{ fontSize: '22px', fontWeight: 800, color: '#D85B5B' }}>
            ₹{product.price.toLocaleString()}
          </span>
          <span style={{ fontSize: '14px', color: '#9B9B9B', textDecoration: 'line-through' }}>
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Action */}
        <button
          id={`buy-${product.id}`}
          style={{
            marginTop: '16px',
            width: '100%',
            padding: '11px',
            background: selected ? '#D85B5B' : '#FCF0F0',
            color: selected ? '#fff' : '#D85B5B',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {selected ? '✓ Viewing Details' : 'View Details'}
        </button>
      </div>
    </div>
  )
}

function ProductDetailPanel({ product, visible }: { product: (typeof products)[0]; visible: boolean }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #D85B5B 0%, #A14040 100%)',
        borderRadius: '28px',
        padding: '52px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transition: 'all 0.5s ease',
      }}
      className="detail-panel"
    >
      {/* Left */}
      <div>
        <span
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.18)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: '50px',
            marginBottom: '20px',
          }}
        >
          {product.badge}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '10px',
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '16px', marginBottom: '28px', lineHeight: 1.7 }}>
          {product.tagline}
        </p>

        {/* Feature list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          {product.features.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.90)', fontSize: '14px' }}>
              <span style={{ width: '20px', height: '20px', background: 'rgba(255,255,255,0.20)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', flexShrink: 0 }}>✓</span>
              {f}
            </div>
          ))}
        </div>

        {/* Specs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { label: 'Thickness', value: product.thickness },
            { label: 'Warranty', value: product.warranty },
            { label: 'Trial', value: product.trial },
          ].map((spec) => (
            <div
              key={spec.label}
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '12px 18px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '11px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{spec.label}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
        {/* Sizes */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ color: 'rgba(255,255,255,0.70)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            Available Sizes
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {product.sizes.map((size) => (
              <span
                key={size}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.20)',
                }}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div
          style={{
            background: 'rgba(255,255,255,0.10)',
            borderRadius: '18px',
            padding: '28px',
            border: '1px solid rgba(255,255,255,0.15)',
            marginBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '40px', fontWeight: 800, color: '#fff' }}>
              ₹{product.price.toLocaleString()}
            </span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', textDecoration: 'line-through' }}>
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <div style={{ color: '#F2D8D8', fontSize: '13px', fontWeight: 600 }}>
            You save ₹{(product.originalPrice - product.price).toLocaleString()} (
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            id={`detail-buy-${product.id}`}
            style={{
              flex: 1,
              padding: '15px',
              background: '#fff',
              color: '#D85B5B',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            Buy Now
          </button>
          <button
            id={`detail-trial-${product.id}`}
            style={{
              flex: 1,
              padding: '15px',
              background: 'transparent',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.50)',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.80)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.50)'
            }}
          >
            Free Trial
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .detail-panel {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  )
}
