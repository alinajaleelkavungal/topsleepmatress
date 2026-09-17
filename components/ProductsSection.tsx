'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

export interface StyleOption {
  name: string
  thicknesses: string[]
  prices: Record<string, Record<string, number>>
}

export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  seriesBadge: string
  warranty: string
  warrantyBadgeColor: string
  image: string
  basePrice: number
  sizes: string[]
  styles: StyleOption[]
  materials: { name: string; desc: string }[]
  features: string[]
}

export const products: Product[] = [
  {
    id: 'elegant-medicated',
    name: 'Elegant (Medicated)',
    category: 'Memory Foam',
    tagline: 'Orthopaedic Mattress — Rebonded with Memory Foam',
    description:
      'Very special in relieving back pain. Made with High Density Rebonded Foam and Memory Foam, covered with High Quality Knitted Fabric treated against fungus, bacteria, and house dust mites.',
    seriesBadge: 'Medical Orthopaedic',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#E51D24',
    image: '/images/products/elegant_clean.jpg',
    basePrice: 17906,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['5 Inch', '6 Inch', '8 Inch'],
        prices: {
          '72x36': { '5 Inch': 17906, '6 Inch': 19797, '8 Inch': 24153 },
          '75x36': { '5 Inch': 20492, '6 Inch': 22712, '8 Inch': 27255 },
          '72x48': { '5 Inch': 22572, '6 Inch': 25136, '8 Inch': 30158 },
          '72x60': { '5 Inch': 25780, '6 Inch': 28383, '8 Inch': 34323 },
          '75x60': { '5 Inch': 26229, '6 Inch': 28866, '8 Inch': 34981 },
          '72x72': { '5 Inch': 30084, '6 Inch': 33249, '8 Inch': 40344 },
          '75x72': { '5 Inch': 30978, '6 Inch': 34269, '8 Inch': 41684 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 21237, '8 Inch': 24600, '10 Inch': 26526 },
          '75x36': { '6 Inch': 24237, '8 Inch': 27840, '10 Inch': 29040 },
          '72x48': { '6 Inch': 26590, '8 Inch': 31080, '10 Inch': 32292 },
          '72x60': { '6 Inch': 29940, '8 Inch': 35040, '10 Inch': 36120 },
          '75x60': { '6 Inch': 30402, '8 Inch': 36192, '10 Inch': 43344 },
          '72x72': { '6 Inch': 34452, '8 Inch': 41544, '10 Inch': 42984 },
          '75x72': { '6 Inch': 36069, '8 Inch': 43484, '10 Inch': 44760 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 22440, '8 Inch': 27720, '10 Inch': 29040 },
          '75x36': { '6 Inch': 25800, '8 Inch': 29511, '10 Inch': 30840 },
          '72x48': { '6 Inch': 27780, '8 Inch': 32040, '10 Inch': 33960 },
          '72x60': { '6 Inch': 31200, '8 Inch': 36336, '10 Inch': 38160 },
          '75x60': { '6 Inch': 31800, '8 Inch': 37440, '10 Inch': 39612 },
          '72x72': { '6 Inch': 35640, '8 Inch': 42996, '10 Inch': 45582 },
          '75x72': { '6 Inch': 37500, '8 Inch': 44676, '10 Inch': 47880 },
        },
      },
    ],
    materials: [
      {
        name: 'High Rebonded Foam',
        desc: 'Rebonded foams are made from multiple foam densities re-bonded under high mechanical pressure, offering superior sound and shock absorption.',
      },
      {
        name: 'Memory Foam',
        desc: 'Helps the body freely float on the mattress, improves blood circulation through pressure management, and actively adjusts to body temperature.',
      },
      {
        name: 'Treated Knitted Fabric',
        desc: 'Covered with high-quality knitted fabric certified against fungus, bacteria, and house dust mites.',
      },
    ],
    features: [
      'Engineered specifically to alleviate persistent back pain',
      'Memory Foam contouring eliminates pressure points',
      'High-Density Rebonded Foam provides robust orthopaedic spinal alignment',
      'Anti-fungus, anti-bacterial, and dust-mite treated fabric',
    ],
  },
  {
    id: 'luxury-plus',
    name: 'Luxury Plus',
    category: 'Super Soft Foam',
    tagline: 'Rebonded with Super Soft Foam',
    description:
      'High Density Rebonded Foam combined with Super Soft Foam, wrapped in premium knitted fabric treated against fungus, bacteria, and dust mites to deliver genuine relief from back pain.',
    seriesBadge: 'Super Soft Comfort',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#E51D24',
    image: '/images/products/luxury_plus_clean.jpg',
    basePrice: 13235,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 13235, '8 Inch': 14782, '10 Inch': 17611 },
          '75x36': { '6 Inch': 13800, '8 Inch': 15997, '10 Inch': 17853 },
          '72x48': { '6 Inch': 16391, '8 Inch': 19569, '10 Inch': 24654 },
          '72x60': { '6 Inch': 19656, '8 Inch': 23582, '10 Inch': 26409 },
          '75x60': { '6 Inch': 20190, '8 Inch': 24246, '10 Inch': 27157 },
          '72x72': { '6 Inch': 22820, '8 Inch': 27483, '10 Inch': 30836 },
          '75x72': { '6 Inch': 23461, '8 Inch': 28313, '10 Inch': 31800 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 14285, '8 Inch': 15981, '10 Inch': 18876 },
          '75x36': { '6 Inch': 14860, '8 Inch': 17207, '10 Inch': 19054 },
          '72x48': { '6 Inch': 17471, '8 Inch': 20749, '10 Inch': 25839 },
          '72x60': { '6 Inch': 20736, '8 Inch': 24801, '10 Inch': 27569 },
          '75x60': { '6 Inch': 21215, '8 Inch': 25496, '10 Inch': 28410 },
          '72x72': { '6 Inch': 23910, '8 Inch': 28673, '10 Inch': 32022 },
          '75x72': { '6 Inch': 24541, '8 Inch': 29614, '10 Inch': 33035 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 15535, '8 Inch': 17431, '10 Inch': 20396 },
          '75x36': { '6 Inch': 16120, '8 Inch': 18687, '10 Inch': 20895 },
          '72x48': { '6 Inch': 18751, '8 Inch': 22208, '10 Inch': 27365 },
          '72x60': { '6 Inch': 21976, '8 Inch': 26299, '10 Inch': 29086 },
          '75x60': { '6 Inch': 22475, '8 Inch': 27016, '10 Inch': 29940 },
          '72x72': { '6 Inch': 25316, '8 Inch': 30158, '10 Inch': 33447 },
          '75x72': { '6 Inch': 25909, '8 Inch': 31108, '10 Inch': 35515 },
        },
      },
    ],
    materials: [
      {
        name: 'Super Soft Foam',
        desc: 'Chemically inert, biodegradable polyurethane foam engineered to deliver cloud-like comfort and stress relief.',
      },
      {
        name: 'Rebonded Core',
        desc: 'Heavy-duty rebonded foam foundation providing essential posture stability beneath the plush surface.',
      },
      {
        name: 'Anti-Allergen Fabric',
        desc: 'Silky smooth knitted cover treated to resist dust mites, bacteria, and allergens.',
      },
    ],
    features: [
      'Dual-layer composition: plush Super Soft Foam over rebonded base',
      'Provides relief from lingering spinal and lumbar fatigue',
      'Biodegradable and skin-friendly hypoallergenic materials',
      'Durable construction backed by 7-Year warranty',
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    category: 'PU Foam',
    tagline: 'Rebonded with PU Foam / Premium Foam',
    description:
      'Engineered with High Density Rebonded Foam and PU Foam, finished with an imported breathable knitted cloth that permits air circulation and repels house dust mites.',
    seriesBadge: 'Premium PU Foam',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#E51D24',
    image: '/images/products/luxury_clean.jpg',
    basePrice: 10982,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['5 Inch', '6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '5 Inch': 10982, '6 Inch': 11996, '8 Inch': 14189, '10 Inch': 16821 },
          '75x36': { '5 Inch': 11210, '6 Inch': 12300, '8 Inch': 14600, '10 Inch': 16678 },
          '72x48': { '5 Inch': 13289, '6 Inch': 14301, '8 Inch': 17409, '10 Inch': 20151 },
          '72x60': { '5 Inch': 16157, '6 Inch': 17367, '8 Inch': 21346, '10 Inch': 24843 },
          '75x60': { '5 Inch': 17057, '6 Inch': 18309, '8 Inch': 23104, '10 Inch': 26595 },
          '72x72': { '5 Inch': 17907, '6 Inch': 19347, '8 Inch': 24198, '10 Inch': 28198 },
          '75x72': { '5 Inch': 18413, '6 Inch': 22120, '8 Inch': 24997, '10 Inch': 29120 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 13446, '8 Inch': 15779, '10 Inch': 17800 },
          '75x36': { '6 Inch': 13795, '8 Inch': 16189, '10 Inch': 18198 },
          '72x48': { '6 Inch': 15786, '8 Inch': 18987, '10 Inch': 21672 },
          '72x60': { '6 Inch': 18816, '8 Inch': 22916, '10 Inch': 26383 },
          '75x60': { '6 Inch': 19895, '8 Inch': 24560, '10 Inch': 27995 },
          '72x72': { '6 Inch': 20867, '8 Inch': 25718, '10 Inch': 29728 },
          '75x72': { '6 Inch': 22858, '8 Inch': 26557, '10 Inch': 30650 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 15046, '8 Inch': 17346, '10 Inch': 19686 },
          '75x36': { '6 Inch': 15325, '8 Inch': 17749, '10 Inch': 20192 },
          '72x48': { '6 Inch': 17284, '8 Inch': 20558, '10 Inch': 23236 },
          '72x60': { '6 Inch': 20080, '8 Inch': 24405, '10 Inch': 27912 },
          '75x60': { '6 Inch': 21418, '8 Inch': 26124, '10 Inch': 29527 },
          '72x72': { '6 Inch': 22397, '8 Inch': 27370, '10 Inch': 31148 },
          '75x72': { '6 Inch': 24381, '8 Inch': 28099, '10 Inch': 32218 },
        },
      },
    ],
    materials: [
      {
        name: 'PU Foam Layer',
        desc: 'Advanced polyurethane foam providing balanced cushioning, resilience, and ergonomic support.',
      },
      {
        name: 'Imported Knitted Cloth',
        desc: 'Breathable imported knitted fabric allows continuous ventilation and prevents dust mites.',
      },
      {
        name: 'Rebonded Core Base',
        desc: 'Firm rebonded core prevents sagging and ensures consistent spinal support throughout.',
      },
    ],
    features: [
      'High-resilience PU foam for flexible weight distribution',
      'Imported breathable cloth prevents body heat accumulation',
      'Treated against fungus, bacteria, and allergens',
      'Full choice of Standard, Euro Top, and Pillow Top models',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    category: 'Spring',
    tagline: 'Bonnel & Pocketed Spring Mattress',
    description:
      'Crafted with Bonnel Coil Spring and Pocketed Springs, Hard Cotton Felt, and High Density PU Foam. Featuring zero partner disturbance and electronically heat-tempered springs.',
    seriesBadge: 'Zero Partner Disturbance',
    warranty: '5 Years Warranty',
    warrantyBadgeColor: '#B07C12',
    image: '/images/products/deluxe_clean.jpg',
    basePrice: 13168,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard (Bonnell Spring)',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 13168, '8 Inch': 16146, '10 Inch': 17625 },
          '75x36': { '6 Inch': 13222, '8 Inch': 16254, '10 Inch': 17962 },
          '72x48': { '6 Inch': 14337, '8 Inch': 17738, '10 Inch': 19640 },
          '72x60': { '6 Inch': 15399, '8 Inch': 19223, '10 Inch': 21547 },
          '75x60': { '6 Inch': 15628, '8 Inch': 19538, '10 Inch': 21949 },
          '72x72': { '6 Inch': 17138, '8 Inch': 21383, '10 Inch': 24128 },
          '75x72': { '6 Inch': 17778, '8 Inch': 22128, '10 Inch': 24979 },
        },
      },
      {
        name: 'Euro Top (Bonnell Spring)',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 17196, '10 Inch': 18742 },
          '75x36': { '8 Inch': 17304, '10 Inch': 19012 },
          '72x48': { '8 Inch': 18788, '10 Inch': 20690 },
          '72x60': { '8 Inch': 20273, '10 Inch': 22597 },
          '75x60': { '8 Inch': 20588, '10 Inch': 22999 },
          '72x72': { '8 Inch': 22433, '10 Inch': 25178 },
          '75x72': { '8 Inch': 23178, '10 Inch': 26029 },
        },
      },
      {
        name: 'Pillow Top (Pocketed Spring)',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 21026, '10 Inch': 22505 },
          '75x36': { '8 Inch': 21133, '10 Inch': 22570 },
          '72x48': { '8 Inch': 22618, '10 Inch': 24519 },
          '72x60': { '8 Inch': 24103, '10 Inch': 26426 },
          '75x60': { '8 Inch': 24418, '10 Inch': 26828 },
          '72x72': { '8 Inch': 26263, '10 Inch': 28998 },
          '75x72': { '8 Inch': 27008, '10 Inch': 29860 },
        },
      },
    ],
    materials: [
      {
        name: 'Pocketed Springs',
        desc: 'Individually encased pocket springs isolate movement completely — ensuring zero partner disturbance.',
      },
      {
        name: 'Bonnell Springs',
        desc: 'Electronically heat-tempered hourglass coils prevent breaking or flattening under pressure.',
      },
      {
        name: 'Hard Cotton Felt & PU Foam',
        desc: 'Protective cotton felt insulation layer and high-density PU foam cushioning for long-lasting comfort.',
      },
    ],
    features: [
      'Zero Partner Disturbance: pocketed coils respond independently',
      'Double heat-treated Bonnell springs resist sagging and breakage',
      'Reinforced hard cotton felt layer ensures seamless coil isolation',
      'Knitted quilted cover treated against bacteria and dust mites',
    ],
  },
  {
    id: 'classic',
    name: 'Classic',
    category: 'Orthopaedic',
    tagline: 'High Density Rubberized Coir',
    description:
      'Made with High Density Rubberized Coir covered with High Quality Knitted Fabric treated against fungus, bacteria, and dust mites. Provides superior natural support to the spinal cord and middle body.',
    seriesBadge: 'Natural Coir Support',
    warranty: '3 Years Warranty',
    warrantyBadgeColor: '#2B8A3E',
    image: '/images/products/classic_clean.jpg',
    basePrice: 7740,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard (Rubberized Coir)',
        thicknesses: ['4 Inch', '5 Inch', '6 Inch'],
        prices: {
          '72x36': { '4 Inch': 7740, '5 Inch': 8920, '6 Inch': 9950 },
          '75x36': { '4 Inch': 8120, '5 Inch': 9380, '6 Inch': 10450 },
          '72x48': { '4 Inch': 9850, '5 Inch': 11350, '6 Inch': 12690 },
          '72x60': { '4 Inch': 11980, '5 Inch': 13800, '6 Inch': 15450 },
          '75x60': { '4 Inch': 12450, '5 Inch': 14350, '6 Inch': 15990 },
          '72x72': { '4 Inch': 13950, '5 Inch': 16100, '6 Inch': 17950 },
          '75x72': { '4 Inch': 14450, '5 Inch': 16700, '6 Inch': 18600 },
        },
      },
    ],
    materials: [
      {
        name: 'Rubberized Coir',
        desc: 'Natural coconut fiber infused with natural rubber latex for firm, resilient, and breathable spinal support.',
      },
      {
        name: 'High Density PU Foam',
        desc: 'Comfort transition layer cushioning the body while maintaining orthopaedic posture alignment.',
      },
      {
        name: 'Breathable Knitted Fabric',
        desc: 'Air-permeable knit fabric treated to eliminate allergens, dust mites, and bacteria.',
      },
    ],
    features: [
      '100% natural, eco-friendly rubberized coir core',
      'Provides firm, orthopaedic alignment for spine and lumbar region',
      'Natural ventilation keeps mattress cool and fresh',
      'Anti-fungal and antibacterial treated cover',
    ],
  },
]

const categories = ['All', 'Orthopaedic', 'Memory Foam', 'Super Soft Foam', 'PU Foam', 'Spring']

export default function ProductsSection() {
  const { ref, visible } = useInView()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
  const [showPriceTable, setShowPriceTable] = useState(false)

  // Interactive calculator state
  const [selectedSize, setSelectedSize] = useState<string>('72x36')
  const [selectedStyleIndex, setSelectedStyleIndex] = useState<number>(0)
  const [selectedThickness, setSelectedThickness] = useState<string>('5 Inch')

  // Keep calculator selections valid when product changes
  useEffect(() => {
    setSelectedSize(selectedProduct.sizes[0] || '72x36')
    setSelectedStyleIndex(0)
    const firstStyle = selectedProduct.styles[0]
    if (firstStyle && firstStyle.thicknesses.length > 0) {
      setSelectedThickness(firstStyle.thicknesses[0])
    }
  }, [selectedProduct])

  // Current calculated price
  const activeStyle = selectedProduct.styles[selectedStyleIndex] || selectedProduct.styles[0]
  const currentPrice =
    activeStyle?.prices?.[selectedSize]?.[selectedThickness] ??
    selectedProduct.basePrice

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

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
            marginBottom: '40px',
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
                color: '#E51D24',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '14px',
              }}
            >
              ✦ Official Brochure Collection
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(34px, 4vw, 48px)',
                fontWeight: 700,
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Enjoy The Real <span style={{ color: '#E51D24' }}>Comfort</span>
            </h2>
            <p style={{ color: '#666', fontSize: '15px', marginTop: '8px', maxWidth: '600px' }}>
              Engineered by Top Global Group with certified medical-grade orthopaedic support, premium memory foam, and anti-dust mite protection.
            </p>
          </div>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#E51D24' : '#E0E0E0',
                  background: activeCategory === cat ? '#E51D24' : '#fff',
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
            marginBottom: '56px',
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
              onSelect={() => {
                setSelectedProduct(product)
                const elem = document.getElementById('product-interactive-calculator')
                if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            />
          ))}
        </div>

        {/* Interactive Customizer & Price Calculator */}
        <div id="product-interactive-calculator" style={{ scrollMarginTop: '100px' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: '24px',
              border: '2px solid #F0F0F0',
              padding: '40px',
              boxShadow: '0 12px 48px rgba(0,0,0,0.06)',
              marginBottom: '32px',
            }}
          >
            {/* Header with Title and Brochure Price Table button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderBottom: '1px solid #EEE',
                paddingBottom: '24px',
                marginBottom: '32px',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(229,29,36,0.08)',
                    color: '#E51D24',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    marginBottom: '8px',
                  }}
                >
                  {selectedProduct.seriesBadge} &bull; {selectedProduct.warranty}
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                  }}
                >
                  {selectedProduct.name}
                </h3>
                <p style={{ color: '#666', fontSize: '15px', marginTop: '4px' }}>
                  {selectedProduct.tagline}
                </p>
              </div>

              <button
                id="toggle-brochure-table-btn"
                onClick={() => setShowPriceTable(!showPriceTable)}
                style={{
                  background: showPriceTable ? '#1A1A1A' : '#E51D24',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '12px 24px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s',
                }}
              >
                📊 {showPriceTable ? 'Hide Brochure Price Table' : 'View Full Brochure Price Table'}
              </button>
            </div>

            {/* Main Interactive Grid: Left Image & Specs, Right Price Calculator */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '40px',
                alignItems: 'start',
              }}
              className="calculator-grid"
            >
              {/* Left Column: Authentic Mattress Photo & Material Highlights */}
              <div>
                <div
                  style={{
                    position: 'relative',
                    background: '#F8F9FA',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid #EAEAEA',
                    padding: '24px',
                    textAlign: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: '#E51D24',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '50px',
                    }}
                  >
                    {selectedProduct.warranty}
                  </div>
                </div>

                {/* Key Benefits / Materials from Brochure */}
                <div style={{ background: '#FAF9F9', borderRadius: '16px', padding: '20px', border: '1px solid #F0F0F0' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Brochure Technical Specifications
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedProduct.materials.map((m) => (
                      <div key={m.name} style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 700, color: '#E51D24' }}>{m.name}: </span>
                        <span style={{ color: '#4A4A4A' }}>{m.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Size, Style, Thickness Selectors & Live Price */}
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', marginBottom: '16px' }}>
                  Configure Your Mattress (Brochure MRP Calculator)
                </h4>

                {/* Step 1: Select Style (Standard, Euro Top, Pillow Top) */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    1. Select Construction Style:
                  </label>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {selectedProduct.styles.map((style, idx) => {
                      const isSelected = selectedStyleIndex === idx
                      return (
                        <button
                          key={style.name}
                          onClick={() => {
                            setSelectedStyleIndex(idx)
                            // If currently selected thickness is not in new style, pick first
                            if (!style.thicknesses.includes(selectedThickness)) {
                              setSelectedThickness(style.thicknesses[0])
                            }
                          }}
                          style={{
                            flex: 1,
                            minWidth: '120px',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: `2px solid ${isSelected ? '#E51D24' : '#E0E0E0'}`,
                            background: isSelected ? 'rgba(229,29,36,0.04)' : '#fff',
                            color: isSelected ? '#E51D24' : '#333',
                            fontWeight: 700,
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {style.name}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 2: Select Size */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    2. Select Mattress Size (Length x Width in Inches):
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }} className="sizes-grid">
                    {selectedProduct.sizes.map((size) => {
                      const isSelected = selectedSize === size
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          style={{
                            padding: '10px',
                            borderRadius: '10px',
                            border: `2px solid ${isSelected ? '#E51D24' : '#E8E8E8'}`,
                            background: isSelected ? '#E51D24' : '#fff',
                            color: isSelected ? '#fff' : '#333',
                            fontWeight: 700,
                            fontSize: '13px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {size}&quot;
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 3: Select Thickness */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    3. Select Mattress Thickness:
                  </label>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {activeStyle.thicknesses.map((th) => {
                      const isSelected = selectedThickness === th
                      return (
                        <button
                          key={th}
                          onClick={() => setSelectedThickness(th)}
                          style={{
                            padding: '10px 20px',
                            borderRadius: '10px',
                            border: `2px solid ${isSelected ? '#E51D24' : '#E8E8E8'}`,
                            background: isSelected ? '#E51D24' : '#fff',
                            color: isSelected ? '#fff' : '#333',
                            fontWeight: 700,
                            fontSize: '13px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {th}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Price Display Card */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
                    color: '#fff',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                  }}
                >
                  <div>
                    <div style={{ color: '#AAA', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                      Official Brochure MRP (Incl. of All Taxes)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ fontSize: '36px', fontWeight: 800, color: '#fff' }}>
                        ₹{currentPrice.toLocaleString()}
                      </span>
                      <span style={{ color: '#4ADE80', fontSize: '13px', fontWeight: 600 }}>
                        ✓ {selectedProduct.warranty}
                      </span>
                    </div>
                    <div style={{ color: '#bbb', fontSize: '13px', marginTop: '4px' }}>
                      Selected: <strong>{activeStyle.name}</strong> &bull; <strong>{selectedSize}&quot;</strong> &bull; <strong>{selectedThickness}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href="#contact"
                      style={{
                        background: '#E51D24',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        fontWeight: 700,
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = '#C8161D'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = '#E51D24'
                      }}
                    >
                      Enquire / Order Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsible Full Brochure MRP Price Table */}
            {showPriceTable && (
              <div
                style={{
                  marginTop: '40px',
                  borderTop: '2px dashed #E0E0E0',
                  paddingTop: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A' }}>
                    Official Maximum Retail Price (MRP) Table &mdash; {selectedProduct.name}
                  </h4>
                  <span style={{ fontSize: '13px', color: '#666' }}>All amounts in Indian Rupees (₹) Inclusive of All Taxes</span>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '13px',
                      textAlign: 'center',
                    }}
                  >
                    <thead>
                      <tr style={{ background: '#1A1A1A', color: '#fff' }}>
                        <th style={{ padding: '12px 8px', border: '1px solid #333' }}>SIZE</th>
                        {selectedProduct.styles.map((st) => (
                          <th
                            key={st.name}
                            colSpan={st.thicknesses.length}
                            style={{
                              padding: '12px 8px',
                              border: '1px solid #333',
                              background: '#E51D24',
                            }}
                          >
                            {st.name.toUpperCase()}
                          </th>
                        ))}
                      </tr>
                      <tr style={{ background: '#F2F2F2', color: '#333', fontWeight: 700 }}>
                        <th style={{ padding: '10px 8px', border: '1px solid #E0E0E0' }}>Length x Width</th>
                        {selectedProduct.styles.map((st) =>
                          st.thicknesses.map((th) => (
                            <th key={st.name + th} style={{ padding: '10px 8px', border: '1px solid #E0E0E0' }}>
                              {th}
                            </th>
                          ))
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProduct.sizes.map((sz, rowIdx) => (
                        <tr
                          key={sz}
                          style={{
                            background: rowIdx % 2 === 0 ? '#fff' : '#FBFBFB',
                          }}
                        >
                          <td style={{ padding: '10px 8px', fontWeight: 700, border: '1px solid #E0E0E0', background: '#F7F7F7' }}>
                            {sz}
                          </td>
                          {selectedProduct.styles.map((st) =>
                            st.thicknesses.map((th) => {
                              const p = st.prices[sz]?.[th]
                              const isHighlighted =
                                selectedSize === sz &&
                                activeStyle.name === st.name &&
                                selectedThickness === th
                              return (
                                <td
                                  key={st.name + th}
                                  style={{
                                    padding: '10px 8px',
                                    border: '1px solid #E0E0E0',
                                    fontWeight: isHighlighted ? 800 : 500,
                                    color: isHighlighted ? '#fff' : '#1A1A1A',
                                    background: isHighlighted ? '#E51D24' : 'transparent',
                                  }}
                                >
                                  {p ? `₹${p.toLocaleString()}` : '—'}
                                </td>
                              )
                            })
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .calculator-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .sizes-grid { grid-template-columns: repeat(2, 1fr) !important; }
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
  product: Product
  index: number
  visible: boolean
  selected: boolean
  onSelect: () => void
}) {
  const [hovered, setHovered] = useState(false)

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
        border: `2px solid ${selected ? '#E51D24' : hovered ? '#E51D24' : '#F0F0F0'}`,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered || selected ? '0 20px 60px rgba(229,29,36,0.15)' : '0 2px 12px rgba(0,0,0,0.05)',
        opacity: visible ? 1 : 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #FFF8F8 0%, #F5F5F5 100%)',
          height: '210px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '20px',
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={280}
          height={160}
          style={{
            objectFit: 'contain',
            transition: 'transform 0.4s',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Warranty Badge */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: product.warrantyBadgeColor,
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '50px',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {product.warranty}
        </span>
        {/* Category tag */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#1A1A1A',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '50px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '13px', color: '#6B6B6B', marginBottom: '14px', lineHeight: 1.5 }}>
          {product.tagline}
        </p>

        {/* Feature bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {product.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} style={{ fontSize: '12px', color: '#555', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
              <span style={{ color: '#E51D24', fontWeight: 700 }}>✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Price & Action */}
        <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #F0F0F0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#888', display: 'block' }}>Starting from</span>
              <span style={{ fontSize: '22px', fontWeight: 800, color: '#E51D24' }}>
                ₹{product.basePrice.toLocaleString()}
              </span>
            </div>
            <span style={{ fontSize: '12px', color: '#666', background: '#F5F5F5', padding: '3px 8px', borderRadius: '6px' }}>
              {product.styles.length} Styles Available
            </span>
          </div>

          <button
            id={`configure-${product.id}`}
            style={{
              width: '100%',
              padding: '11px',
              background: selected ? '#E51D24' : '#FFF0F0',
              color: selected ? '#fff' : '#E51D24',
              border: `1.5px solid ${selected ? '#E51D24' : 'rgba(229,29,36,0.3)'}`,
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {selected ? '✓ Configuring Options' : 'Configure & View Price List'}
          </button>
        </div>
      </div>
    </div>
  )
}
