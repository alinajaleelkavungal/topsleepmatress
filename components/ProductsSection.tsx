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

// Business WhatsApp Configuration
// Note: Replace this placeholder number with your actual Business WhatsApp number (including country code, no '+' or spaces, e.g. '919876543210')
export const BUSINESS_WHATSAPP_NUMBER = '919061612539'

export function getProductWhatsAppUrl(productName: string, configDetails?: string) {
  const text = configDetails
    ? `Hello TopSleep, I would like to get the price details and availability for *${productName}* (${configDetails}).`
    : `Hello TopSleep, I would like to get the price details for *${productName}*.`
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function WhatsAppIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  )
}

export interface Product {
  id: string
  name: string
  category: string
  collection: 'Medicated Ortho' | 'Helixa Luxury' | 'Spring Support' | 'High Resilience'
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
    id: 'semi-medicated',
    name: 'Semi Medicated',
    category: 'Semi Medicated',
    collection: 'Medicated Ortho',
    tagline: 'Multi-Layer Support — Rebonded, EPE & Comfort Foam',
    description:
      'Engineered for orthopaedic spine alignment and rejuvenating rest. Built with High-Density Rebonded Foam, resilient EPE support, and contouring Comfort Foam, encased in breathable Organic Knitted Fabric that keeps you cool and fresh.',
    seriesBadge: 'Semi Medicated',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#E51D24',
    image: '/images/products/semi_medicated.jpg',
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
        name: 'Organic Knitted Fabric',
        desc: 'Breathable, soft and skin-friendly fabric made from organic fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Foam',
        desc: 'Provides comfort, cushioning and supports your body.',
      },
      {
        name: 'EPE',
        desc: 'Lightweight, durable and adds extra support and stability.',
      },
      {
        name: 'Rebonded',
        desc: 'High-density recycled foam for firm support and long-lasting durability.',
      },
    ],
    features: [
      'Multi-layer semi-medicated orthopaedic construction',
      'High-Density Rebonded Foam provides firm spinal support and durability',
      'EPE layer delivers lightweight durability and extra stability',
      'Comfort Foam layer cushions body contours and relieves pressure',
      'Organic Knitted Fabric made from organic fibres keeps you cool and fresh',
    ],
  },
  {
    id: 'medicated',
    name: 'Medicated',
    category: 'Medicated',
    collection: 'Medicated Ortho',
    tagline: 'Dual-Layer Orthopaedic Support — Rebonded with Super Soft Foam',
    description:
      'Engineered for deep healing rest and postural relief. Features High-Density Rebonded Foam core topped with plush Super Soft Foam that cradles pressure points, encased in breathable, hypoallergenic Organic Knitted Fabric.',
    seriesBadge: 'Medicated Ortho',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#E51D24',
    image: '/images/products/medicated.jpg',
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
        name: 'Organic Knitted Fabric',
        desc: 'Breathable, soft and skin-friendly fabric made from organic fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Super Soft Foam',
        desc: 'Provides plush comfort, reduces pressure points and supports your body for a restful sleep.',
      },
      {
        name: 'High-Density Rebonded Foam',
        desc: 'High-density recycled foam for firm support and long-lasting durability.',
      },
    ],
    features: [
      'Dual-layer medicated orthopaedic construction',
      'High-Density Rebonded Foam provides firm spinal posture support and durability',
      'Super Soft Foam provides plush comfort and relieves spinal pressure points',
      'Organic Knitted Fabric made from organic fibres keeps you cool and fresh',
      'Certified protection against bacteria, allergens, and dust mites',
    ],
  },
  {
    id: 'medicated-memory',
    name: 'Medicated Memory',
    category: 'Medicated Memory',
    collection: 'Medicated Ortho',
    tagline: 'High-Density Rebonded Core with Contouring Memory Foam',
    description:
      'Engineered for advanced orthopaedic spinal posture and body relief, pairing a high-density rebonded foam foundation with an adaptive memory foam layer that contours to pressure points, wrapped in breathable, skin-friendly Bamboo Fabric.',
    seriesBadge: 'Orthopaedic Memory',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#1E40AF',
    image: '/images/products/medicated_memory.jpg',
    basePrice: 14200,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 14200, '8 Inch': 16300, '10 Inch': 18900 },
          '75x36': { '6 Inch': 14600, '8 Inch': 16800, '10 Inch': 19400 },
          '72x48': { '6 Inch': 17200, '8 Inch': 20200, '10 Inch': 23500 },
          '72x60': { '6 Inch': 20500, '8 Inch': 24200, '10 Inch': 27900 },
          '75x60': { '6 Inch': 21200, '8 Inch': 24900, '10 Inch': 28800 },
          '72x72': { '6 Inch': 23800, '8 Inch': 27900, '10 Inch': 32400 },
          '75x72': { '6 Inch': 24500, '8 Inch': 28800, '10 Inch': 33300 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 17900, '10 Inch': 20400 },
          '75x36': { '8 Inch': 18300, '10 Inch': 20900 },
          '72x48': { '8 Inch': 21700, '10 Inch': 24900 },
          '72x60': { '8 Inch': 25900, '10 Inch': 29600 },
          '75x60': { '8 Inch': 26700, '10 Inch': 30600 },
          '72x72': { '8 Inch': 30100, '10 Inch': 34400 },
          '75x72': { '8 Inch': 31000, '10 Inch': 35400 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 19900, '10 Inch': 22700 },
          '75x36': { '8 Inch': 20400, '10 Inch': 23200 },
          '72x48': { '8 Inch': 23900, '10 Inch': 27500 },
          '72x60': { '8 Inch': 28400, '10 Inch': 32500 },
          '75x60': { '8 Inch': 29300, '10 Inch': 33600 },
          '72x72': { '8 Inch': 33100, '10 Inch': 37800 },
          '75x72': { '8 Inch': 34100, '10 Inch': 38900 },
        },
      },
    ],
    materials: [
      {
        name: 'Bamboo Fabric',
        desc: 'Naturally breathable and soft fabric made from bamboo fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Memory',
        desc: 'Contours to your body, relieves pressure points and enhances comfort.',
      },
      {
        name: 'Rebonded',
        desc: 'High-density recycled foam for firm support and long-lasting durability.',
      },
    ],
    features: [
      'Dual-layer orthopaedic construction engineered for therapeutic back pain relief',
      'High-Density Rebonded Foam core maintains rigid posture and spinal alignment',
      'Adaptive Memory Foam cushions middle body pressure points and enhances comfort',
      'Naturally breathable Bamboo Fabric cover made from bamboo fibres keeps you cool and fresh',
      'Certified hypoallergenic, dust-mite proof, and antimicrobial sleep sanctuary',
    ],
  },
  {
    id: 'medicated-latex',
    name: 'Medicated Latex',
    category: 'Medicated Latex',
    collection: 'Medicated Ortho',
    tagline: 'Orthopaedic Rebonded Core with Buoyant Natural Latex',
    description:
      'Engineered for therapeutic spinal alignment and back relief, combining a heavy-duty High-Density Rebonded Foam core with a resilient pin-core Natural Latex comfort layer, enveloped in breathable, organic Bamboo Fabric.',
    seriesBadge: 'Orthopaedic Natural Latex',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#C2410C',
    image: '/images/products/medicated_latex.jpg',
    basePrice: 14800,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 14800, '8 Inch': 16900, '10 Inch': 19500 },
          '75x36': { '6 Inch': 15200, '8 Inch': 17400, '10 Inch': 19900 },
          '72x48': { '6 Inch': 17900, '8 Inch': 20800, '10 Inch': 24200 },
          '72x60': { '6 Inch': 21200, '8 Inch': 24900, '10 Inch': 28600 },
          '75x60': { '6 Inch': 21900, '8 Inch': 25600, '10 Inch': 29500 },
          '72x72': { '6 Inch': 24600, '8 Inch': 28800, '10 Inch': 33200 },
          '75x72': { '6 Inch': 25400, '8 Inch': 29600, '10 Inch': 34200 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 18500, '10 Inch': 20900 },
          '75x36': { '8 Inch': 18900, '10 Inch': 21500 },
          '72x48': { '8 Inch': 22400, '10 Inch': 25600 },
          '72x60': { '8 Inch': 26700, '10 Inch': 30500 },
          '75x60': { '8 Inch': 27500, '10 Inch': 31500 },
          '72x72': { '8 Inch': 30900, '10 Inch': 35300 },
          '75x72': { '8 Inch': 31900, '10 Inch': 36400 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 20600, '10 Inch': 23400 },
          '75x36': { '8 Inch': 21100, '10 Inch': 23900 },
          '72x48': { '8 Inch': 24800, '10 Inch': 28400 },
          '72x60': { '8 Inch': 29400, '10 Inch': 33500 },
          '75x60': { '8 Inch': 30300, '10 Inch': 34600 },
          '72x72': { '8 Inch': 34100, '10 Inch': 38900 },
          '75x72': { '8 Inch': 35200, '10 Inch': 40100 },
        },
      },
    ],
    materials: [
      {
        name: 'Bamboo Fabric',
        desc: 'Naturally breathable and soft fabric made from bamboo fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Latex',
        desc: 'Responsive and resilient natural latex for superior comfort, pressure relief and breathability.',
      },
      {
        name: 'Rebonded',
        desc: 'High-density recycled foam for firm support and long-lasting durability.',
      },
    ],
    features: [
      'Pin-core responsive natural latex layer provides buoyant orthopaedic pressure relief',
      'High-Density Rebonded Foam foundation maintains rigid posture and deep spinal support',
      'Naturally breathable Bamboo Fabric cover made from bamboo fibres keeps you cool and fresh',
      'Perforated airflow ventilation prevents heat retention for sweat-free rest',
      'Hypoallergenic, anti-dust mite, and antimicrobial natural sleep protection',
    ],
  },
  {
    id: 'helixa-mattress',
    name: 'Helixa Mattress',
    category: 'Helixa Mattress',
    collection: 'Helixa Luxury',
    tagline: 'High-Resilience Aerated Helixa Foam with Cloud-Soft Comfort',
    description:
      'Engineered with an aerated High-Resilience Helixa foam core that provides superior airflow, pressure relief, and spinal alignment, cushioned by a plush Super Soft layer and wrapped in breathable Organic Knitted Fabric.',
    seriesBadge: 'Helixa Airflow Core',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#C2410C',
    image: '/images/products/helixa_mattress.jpg',
    basePrice: 11500,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 11500, '8 Inch': 13800, '10 Inch': 15900 },
          '75x36': { '6 Inch': 11800, '8 Inch': 14200, '10 Inch': 16300 },
          '72x48': { '6 Inch': 13900, '8 Inch': 16800, '10 Inch': 19500 },
          '72x60': { '6 Inch': 16500, '8 Inch': 19900, '10 Inch': 23200 },
          '75x60': { '6 Inch': 17000, '8 Inch': 20500, '10 Inch': 23900 },
          '72x72': { '6 Inch': 19200, '8 Inch': 23200, '10 Inch': 26800 },
          '75x72': { '6 Inch': 19800, '8 Inch': 23900, '10 Inch': 27600 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 15200, '10 Inch': 17400 },
          '75x36': { '8 Inch': 15600, '10 Inch': 17800 },
          '72x48': { '8 Inch': 18400, '10 Inch': 21200 },
          '72x60': { '8 Inch': 21800, '10 Inch': 25200 },
          '75x60': { '8 Inch': 22500, '10 Inch': 25900 },
          '72x72': { '8 Inch': 25400, '10 Inch': 29200 },
          '75x72': { '8 Inch': 26200, '10 Inch': 30100 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 16800, '10 Inch': 19200 },
          '75x36': { '8 Inch': 17200, '10 Inch': 19600 },
          '72x48': { '8 Inch': 20200, '10 Inch': 23200 },
          '72x60': { '8 Inch': 23900, '10 Inch': 27500 },
          '75x60': { '8 Inch': 24600, '10 Inch': 28400 },
          '72x72': { '8 Inch': 27800, '10 Inch': 31900 },
          '75x72': { '8 Inch': 28600, '10 Inch': 32800 },
        },
      },
    ],
    materials: [
      {
        name: 'Organic Knitted Fabric',
        desc: 'Breathable, skin-friendly and made from organic knitted fabric for a cooler, healthier sleep.',
      },
      {
        name: 'Super Soft',
        desc: 'A plush, ultra-soft layer that gently cushions your body for cloud-like comfort.',
      },
      {
        name: 'Helixa Foam',
        desc: 'High-resilience Helixa foam that provides superior support, pressure relief and long-lasting durability.',
      },
    ],
    features: [
      'Aerated High-Resilience Helixa foam core provides superior ergonomic spinal support',
      'Pinhole ventilation matrix promotes continuous airflow for cool, sweat-free sleep',
      'Super Soft plush layer gently contours around shoulders and hips for cloud-like comfort',
      'Organic Knitted Fabric made from organic fibres keeps you fresh and hypoallergenic',
      'Exceptional pressure redistribution and certified durability for restorative rest',
    ],
  },
  {
    id: 'helixa-memory',
    name: 'Helixa Memory',
    category: 'Helixa Memory',
    collection: 'Helixa Luxury',
    tagline: 'Contouring Memory Foam with Aerated Helixa & Bamboo Fabric',
    description:
      'Crafted with body-contouring Memory Foam that adapts dynamically to your posture, supported by a high-resilience aerated Helixa Foam core and encased in naturally breathable, eco-friendly Bamboo Fabric.',
    seriesBadge: 'Bamboo Memory Foam',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#2B8A3E',
    image: '/images/products/helixa_memory.jpg',
    basePrice: 12900,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 12900, '8 Inch': 14800, '10 Inch': 17200 },
          '75x36': { '6 Inch': 13200, '8 Inch': 15200, '10 Inch': 17600 },
          '72x48': { '6 Inch': 15600, '8 Inch': 18200, '10 Inch': 21500 },
          '72x60': { '6 Inch': 18500, '8 Inch': 21900, '10 Inch': 25400 },
          '75x60': { '6 Inch': 19200, '8 Inch': 22600, '10 Inch': 26200 },
          '72x72': { '6 Inch': 21500, '8 Inch': 25400, '10 Inch': 29500 },
          '75x72': { '6 Inch': 22200, '8 Inch': 26200, '10 Inch': 30400 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 16400, '10 Inch': 18800 },
          '75x36': { '8 Inch': 16800, '10 Inch': 19200 },
          '72x48': { '8 Inch': 19800, '10 Inch': 22800 },
          '72x60': { '8 Inch': 23800, '10 Inch': 27200 },
          '75x60': { '8 Inch': 24500, '10 Inch': 28100 },
          '72x72': { '8 Inch': 27600, '10 Inch': 31500 },
          '75x72': { '8 Inch': 28400, '10 Inch': 32500 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 18200, '10 Inch': 20800 },
          '75x36': { '8 Inch': 18600, '10 Inch': 21200 },
          '72x48': { '8 Inch': 21800, '10 Inch': 25200 },
          '72x60': { '8 Inch': 25900, '10 Inch': 29800 },
          '75x60': { '8 Inch': 26800, '10 Inch': 30800 },
          '72x72': { '8 Inch': 30200, '10 Inch': 34600 },
          '75x72': { '8 Inch': 31100, '10 Inch': 35600 },
        },
      },
    ],
    materials: [
      {
        name: 'Bamboo Fabric',
        desc: 'Naturally breathable and soft. Keeps you cool and fresh.',
      },
      {
        name: 'Memory Foam',
        desc: 'Adapts to your body, relieves pressure points and ensures a restful sleep.',
      },
      {
        name: 'Helixa Foam',
        desc: 'High-resilience foam for strong support; durability and long-lasting comfort.',
      },
    ],
    features: [
      'Visco-elastic Memory Foam adapts to your unique body contour and relieves pressure points',
      'High-resilience Helixa Foam core provides strong orthopaedic support and durability',
      'Naturally breathable Bamboo Fabric cover keeps the sleeping surface cool and fresh',
      'Dual-layer pressure-relief system prevents tossing and turning for deep restful sleep',
      'Hypoallergenic, anti-dust mite, and antimicrobial natural sleep environment',
    ],
  },
  {
    id: 'helixa-latex',
    name: 'Helixa Latex',
    category: 'Helixa Latex',
    collection: 'Helixa Luxury',
    tagline: 'Natural Pin-Core Latex with High-Resilience Helixa Support',
    description:
      'Combining pin-core responsive natural latex with a high-resilience Helixa foam core and breathable bamboo fabric cover for buoyant spinal alignment, supreme pressure distribution, and organic comfort.',
    seriesBadge: 'Natural Latex Core',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#15803D',
    image: '/images/products/helixa_latex.jpg',
    basePrice: 13800,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
        thicknesses: ['6 Inch', '8 Inch', '10 Inch'],
        prices: {
          '72x36': { '6 Inch': 13800, '8 Inch': 15900, '10 Inch': 18500 },
          '75x36': { '6 Inch': 14200, '8 Inch': 16400, '10 Inch': 18900 },
          '72x48': { '6 Inch': 16800, '8 Inch': 19600, '10 Inch': 22900 },
          '72x60': { '6 Inch': 19900, '8 Inch': 23500, '10 Inch': 27200 },
          '75x60': { '6 Inch': 20600, '8 Inch': 24200, '10 Inch': 28100 },
          '72x72': { '6 Inch': 23100, '8 Inch': 27200, '10 Inch': 31600 },
          '75x72': { '6 Inch': 23800, '8 Inch': 28100, '10 Inch': 32500 },
        },
      },
      {
        name: 'Euro Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 17500, '10 Inch': 19900 },
          '75x36': { '8 Inch': 17900, '10 Inch': 20400 },
          '72x48': { '8 Inch': 21200, '10 Inch': 24400 },
          '72x60': { '8 Inch': 25400, '10 Inch': 28900 },
          '75x60': { '8 Inch': 26200, '10 Inch': 29900 },
          '72x72': { '8 Inch': 29500, '10 Inch': 33600 },
          '75x72': { '8 Inch': 30400, '10 Inch': 34700 },
        },
      },
      {
        name: 'Pillow Top',
        thicknesses: ['8 Inch', '10 Inch'],
        prices: {
          '72x36': { '8 Inch': 19500, '10 Inch': 22200 },
          '75x36': { '8 Inch': 19900, '10 Inch': 22700 },
          '72x48': { '8 Inch': 23400, '10 Inch': 26900 },
          '72x60': { '8 Inch': 27800, '10 Inch': 31800 },
          '75x60': { '8 Inch': 28700, '10 Inch': 32900 },
          '72x72': { '8 Inch': 32400, '10 Inch': 36900 },
          '75x72': { '8 Inch': 33300, '10 Inch': 37900 },
        },
      },
    ],
    materials: [
      {
        name: 'Bamboo Fabric',
        desc: 'Naturally breathable and soft fabric made from bamboo fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Latex',
        desc: 'Responsive and resilient natural latex for superior comfort, pressure relief and breathability.',
      },
      {
        name: 'Helixa Foam',
        desc: 'High-resilience Helixa foam for strong support, durability and long-lasting comfort.',
      },
    ],
    features: [
      'Pin-core responsive natural latex layer delivers buoyant, ergonomic spine support',
      'High-resilience Helixa foam base ensures heavy-duty structural stability and durability',
      'Eco-friendly Bamboo Fabric made from natural bamboo fibres keeps you cool and fresh',
      'Perforated latex pin-holes promote continuous active airflow and temperature control',
      'Naturally hypoallergenic, dust-mite resistant, and antimicrobial sleeping surface',
    ],
  },
  {
    id: 'bonnell-spring',
    name: 'Bonnell Spring',
    category: 'Bonnell Spring',
    collection: 'Spring Support',
    tagline: 'High-Tensile Bonnell Coil System with Organic Knitted Cover',
    description:
      'Engineered with an interconnected Bonnell spring system, cushioned comfort layer, protective felt insulation, and high-density base foam, all wrapped in breathable Organic Knitted Fabric for exceptional spinal alignment and long-lasting durability.',
    seriesBadge: 'Bonnell Spring System',
    warranty: '7 Years Warranty',
    warrantyBadgeColor: '#E51D24',
    image: '/images/products/bonnell_spring.jpg',
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
        name: 'Organic Knitted Fabric',
        desc: 'Breathable, soft and skin-friendly fabric made from organic fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Comfort Layer',
        desc: 'Adds softness and enhances sleep comfort.',
      },
      {
        name: 'Bonnell Spring',
        desc: 'Provides firm support, keeps your spine aligned and ensures long-lasting durability.',
      },
      {
        name: 'Felt Layer',
        desc: 'Acts as a protective layer, reduces friction and adds stability.',
      },
      {
        name: 'Base Foam',
        desc: 'Gives extra support and maintains the mattress shape.',
      },
    ],
    features: [
      'Multi-layer Bonnell spring support system with protective felt layer',
      'Plush Comfort Layer provides cushioning and enhances sleep relaxation',
      'High-resilience Bonnell coil core maintains healthy spine alignment',
      'Breathable Organic Knitted Fabric made from organic fibres keeps you cool and fresh',
      'Reinforced base foam gives extra support and preserves mattress shape',
    ],
  },
  {
    id: 'pocketed-spring',
    name: 'Pocketed Spring',
    category: 'Pocketed Spring',
    collection: 'Spring Support',
    tagline: 'Zero Motion Transfer — Independent Pocket Coils & Organic Cover',
    description:
      'Engineered with individually wrapped pocket springs that move independently to eliminate partner disturbance, paired with a plush comfort layer and durable base foam, all encased in breathable Organic Knitted Fabric.',
    seriesBadge: 'Zero Partner Disturbance',
    warranty: '5 Years Warranty',
    warrantyBadgeColor: '#B07C12',
    image: '/images/products/pocketed_spring.jpg',
    basePrice: 13168,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
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
        name: 'Euro Top',
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
        name: 'Pillow Top',
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
        name: 'Organic Knitted Fabric',
        desc: 'Breathable, soft and skin-friendly fabric made from organic fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Comfort Layer',
        desc: 'Soft foam layer adds plush comfort and reduces pressure points.',
      },
      {
        name: 'Pocketed Spring',
        desc: 'Individually wrapped springs move independently, providing targeted support, less motion transfer and better spinal alignment.',
      },
      {
        name: 'Base Foam',
        desc: 'Adds stability and durability to the mattress.',
      },
    ],
    features: [
      'Individually wrapped pocket coils eliminate motion transfer and partner disturbance',
      'Plush Comfort Layer reduces pressure points on hips, back, and shoulders',
      'Targeted spinal alignment keeps posture naturally supported all night',
      'Breathable Organic Knitted Fabric made from organic fibres keeps you cool and fresh',
      'Reinforced base foam adds stability and ensures long-lasting durability',
    ],
  },
  {
    id: 'hr-mattress',
    name: 'HR Mattress',
    category: 'HR Mattress',
    collection: 'High Resilience',
    tagline: 'Cloud-Like Plush Comfort with High-Density Support Core',
    description:
      'Crafted with a robust High-Density (HD) foam core and a luxurious Super Soft foam layer that cushions pressure points with a cloud-like feel, all enveloped in breathable, skin-friendly Organic Knitted Fabric.',
    seriesBadge: 'High Resilience Foam',
    warranty: '5 Years Warranty',
    warrantyBadgeColor: '#2563EB',
    image: '/images/products/hr_mattress.jpg',
    basePrice: 7740,
    sizes: ['72x36', '75x36', '72x48', '72x60', '75x60', '72x72', '75x72'],
    styles: [
      {
        name: 'Standard',
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
        name: 'Organic Knitted Fabric',
        desc: 'Breathable, soft and skin-friendly fabric made from organic fibres. Keeps you cool and fresh.',
      },
      {
        name: 'Super Soft',
        desc: 'Provides plush comfort, reduces pressure points and gives a cloud-like feel for better sleep.',
      },
      {
        name: 'HD Foam',
        desc: 'High-density foam for strong support, durability and long-lasting comfort.',
      },
    ],
    features: [
      'Dual-layer high resilience foam construction for optimal pressure distribution',
      'Plush Super Soft Foam comfort layer delivers a cloud-like relaxing feel',
      'High-Density (HD) base foam core provides robust spinal support and durability',
      'Organic Knitted Fabric made from organic fibres keeps you cool and fresh',
      'Anti-dust mite and hypoallergenic treated protection for hygienic sleep',
    ],
  }
]

export interface CollectionSection {
  id: string
  title: string
  badge: string
  subtitle: string
  icon: string
  productIds: string[]
}

export const collectionSections: CollectionSection[] = [
  {
    id: 'medicated-ortho',
    title: 'Medicated Orthopaedic Line',
    badge: '🏥 Certified Orthopaedic Care (4 Models)',
    subtitle: 'High-Density Rebonded Foam foundation engineered for therapeutic spinal alignment, joint pressure relief, and posture correction.',
    icon: '🏥',
    productIds: ['semi-medicated', 'medicated', 'medicated-memory', 'medicated-latex'],
  },
  {
    id: 'helixa-series',
    title: 'Helixa Signature Luxury Series',
    badge: '🌿 Pin-Core Airflow Matrix (3 Models)',
    subtitle: 'Aerated High-Resilience Helixa core with pinhole matrix ventilation for active cooling, cloud-soft contouring, and organic fabric luxury.',
    icon: '🌿',
    productIds: ['helixa-mattress', 'helixa-memory', 'helixa-latex'],
  },
  {
    id: 'spring-comfort',
    title: 'Spring Systems & Everyday Comfort',
    badge: '🌀 Dynamic Coil & HR Foam (3 Models)',
    subtitle: 'Interconnected Bonnell spring coils, zero partner disturbance independent pocket coils, and high-resilience foundational comfort.',
    icon: '🌀',
    productIds: ['bonnell-spring', 'pocketed-spring', 'hr-mattress'],
  },
]

const collectionTabs = [
  { id: 'all', label: 'All Models', count: 10, icon: '✦' },
  { id: 'medicated', label: 'Medicated Ortho', count: 4, icon: '🏥' },
  { id: 'helixa', label: 'Helixa Series', count: 3, icon: '🌿' },
  { id: 'spring', label: 'Spring Systems', count: 2, icon: '🌀' },
  { id: 'hr', label: 'HR Comfort', count: 1, icon: '☁️' },
]

const materialPills = [
  { id: 'all', label: 'All Materials' },
  { id: 'bamboo', label: '🎋 Bamboo Fabric (4)' },
  { id: 'latex', label: '🌱 Natural Latex (2)' },
  { id: 'memory', label: '☁️ Memory Foam (2)' },
  { id: 'spring', label: '🌀 Pocketed / Bonnell (2)' },
  { id: 'rebonded', label: '🧱 Rebonded Foam (4)' },
]

export default function ProductsSection() {
  const { ref, visible } = useInView()
  const [activeTab, setActiveTab] = useState('all')
  const [activeMaterial, setActiveMaterial] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])

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

  const activeStyle = selectedProduct.styles[selectedStyleIndex] || selectedProduct.styles[0]

  // Filtered products list
  const filteredProducts = products.filter((p) => {
    // Collection filter
    if (activeTab === 'medicated' && p.collection !== 'Medicated Ortho') return false
    if (activeTab === 'helixa' && p.collection !== 'Helixa Luxury') return false
    if (activeTab === 'spring' && p.collection !== 'Spring Support') return false
    if (activeTab === 'hr' && p.collection !== 'High Resilience') return false

    // Material filter
    if (activeMaterial === 'bamboo') {
      const hasBamboo = p.materials.some((m) => m.name.toLowerCase().includes('bamboo'))
      if (!hasBamboo) return false
    }
    if (activeMaterial === 'latex') {
      const hasLatex = p.materials.some((m) => m.name.toLowerCase().includes('latex'))
      if (!hasLatex) return false
    }
    if (activeMaterial === 'memory') {
      const hasMemory = p.materials.some((m) => m.name.toLowerCase().includes('memory'))
      if (!hasMemory) return false
    }
    if (activeMaterial === 'spring') {
      const hasSpring = p.materials.some((m) => m.name.toLowerCase().includes('spring'))
      if (!hasSpring) return false
    }
    if (activeMaterial === 'rebonded') {
      const hasRebonded = p.materials.some((m) => m.name.toLowerCase().includes('rebonded'))
      if (!hasRebonded) return false
    }

    return true
  })

  const isDefaultView = activeTab === 'all' && activeMaterial === 'all'

  const scrollToCalculator = (product: Product) => {
    setSelectedProduct(product)
    const elem = document.getElementById('product-interactive-calculator')
    if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
            marginBottom: '32px',
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
              ✦ Official Brochure Collection &bull; 10 Signature Models
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
            <p style={{ color: '#666', fontSize: '15px', marginTop: '8px', maxWidth: '640px', lineHeight: 1.6 }}>
              Crafted by Top Global Group. Explore our 10 certified mattresses categorized into therapeutic orthopaedic rebonded cores, aerated Helixa luxury, and dynamic spring systems.
            </p>
          </div>

          {/* Primary Collection Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {collectionTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  id={`filter-tab-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id)
                  }}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '50px',
                    border: '1.5px solid',
                    borderColor: isActive ? '#E51D24' : '#E0E0E0',
                    background: isActive ? '#E51D24' : '#fff',
                    color: isActive ? '#fff' : '#4A4A4A',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: isActive ? '0 4px 12px rgba(229,29,36,0.2)' : 'none',
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.25)' : '#F0F0F0',
                      color: isActive ? '#fff' : '#666',
                      fontSize: '11px',
                      padding: '2px 7px',
                      borderRadius: '50px',
                      fontWeight: 700,
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Secondary Material Quick Filter Pill Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '44px',
            padding: '12px 18px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #ECECEC',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '4px' }}>
            Filter by Core Material:
          </span>
          {materialPills.map((pill) => {
            const isActive = activeMaterial === pill.id
            return (
              <button
                key={pill.id}
                id={`material-filter-${pill.id}`}
                onClick={() => setActiveMaterial(pill.id)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '30px',
                  border: '1px solid',
                  borderColor: isActive ? '#1A1A1A' : '#E5E7EB',
                  background: isActive ? '#1A1A1A' : '#F9FAFB',
                  color: isActive ? '#FFF' : '#4B5563',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {pill.label}
              </button>
            )
          })}
          {(activeTab !== 'all' || activeMaterial !== 'all') && (
            <button
              onClick={() => {
                setActiveTab('all')
                setActiveMaterial('all')
              }}
              style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                color: '#E51D24',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                padding: '4px 8px',
                textDecoration: 'underline',
              }}
            >
              Reset Filters ↺
            </button>
          )}
        </div>

        {/* PRODUCTS PRESENTATION */}
        {isDefaultView ? (
          /* BALANCED 3-ROW COLLECTION LAYOUT: Row 1 = 4 cards, Row 2 = 3 cards, Row 3 = 3 cards = 10 perfectly aligned cards! */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', marginBottom: '60px' }}>
            {collectionSections.map((sec, secIdx) => {
              const secProducts = sec.productIds
                .map((id) => products.find((p) => p.id === id))
                .filter(Boolean) as Product[]

              const isFourCol = secProducts.length === 4

              return (
                <div key={sec.id} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Collection Section Header Banner */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      padding: '16px 24px',
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      borderLeft: '4px solid #E51D24',
                      border: '1px solid #ECECEC',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#E51D24', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {sec.badge}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>
                        {sec.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#666', marginTop: '4px', margin: 0 }}>
                        {sec.subtitle}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab(sec.id === 'spring-comfort' ? 'spring' : sec.id === 'helixa-series' ? 'helixa' : 'medicated')}
                      style={{
                        background: 'none',
                        border: '1.5px solid #E0E0E0',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#4A4A4A',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.borderColor = '#E51D24'
                        ;(e.currentTarget as HTMLElement).style.color = '#E51D24'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'
                        ;(e.currentTarget as HTMLElement).style.color = '#4A4A4A'
                      }}
                    >
                      Focus Collection ({secProducts.length}) →
                    </button>
                  </div>

                  {/* Section Products Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isFourCol ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
                      gap: '20px',
                    }}
                    className={isFourCol ? 'products-grid-four' : 'products-grid-three'}
                  >
                    {secProducts.map((product, pIdx) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={pIdx}
                        visible={visible}
                        selected={selectedProduct.id === product.id}
                        onSelect={() => scrollToCalculator(product)}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Filtered View */
          <div style={{ marginBottom: '60px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #ECECEC',
                marginBottom: '24px',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>
                Showing <strong>{filteredProducts.length}</strong> of 10 mattresses matching criteria
              </span>
              <button
                onClick={() => {
                  setActiveTab('all')
                  setActiveMaterial('all')
                }}
                style={{
                  background: '#F5F5F7',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#4B5563',
                  cursor: 'pointer',
                }}
              >
                Clear Filters
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #EAEAEA',
                }}
              >
                <p style={{ fontSize: '18px', fontWeight: 600, color: '#666', marginBottom: '12px' }}>
                  No mattresses match the active filter combination.
                </p>
                <button
                  onClick={() => {
                    setActiveTab('all')
                    setActiveMaterial('all')
                  }}
                  style={{
                    background: '#E51D24',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  View All 10 Mattresses
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    filteredProducts.length >= 4
                      ? 'repeat(4, 1fr)'
                      : filteredProducts.length === 3
                      ? 'repeat(3, 1fr)'
                      : filteredProducts.length === 2
                      ? 'repeat(2, 1fr)'
                      : 'repeat(1, minmax(320px, 460px))',
                  gap: '20px',
                  justifyContent: 'center',
                }}
                className={filteredProducts.length >= 4 ? 'products-grid-four' : 'products-grid-three'}
              >
                {filteredProducts.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    visible={visible}
                    selected={selectedProduct.id === product.id}
                    onSelect={() => scrollToCalculator(product)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

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

              <a
                href={getProductWhatsAppUrl(
                  selectedProduct.name,
                  `Style: ${activeStyle.name}, Size: ${selectedSize}", Thickness: ${selectedThickness}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-quote-btn"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#20BA5A'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#25D366'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <WhatsAppIcon size={18} />
                <span>Price Details on WhatsApp</span>
              </a>
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
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid #EAEAEA',
                    padding: '0px',
                    textAlign: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '340px' }}>
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
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
                  Select Dimensions &amp; Construction Style
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
                            padding: '10px 8px',
                            borderRadius: '10px',
                            border: `1.5px solid ${isSelected ? '#E51D24' : '#E0E0E0'}`,
                            background: isSelected ? '#E51D24' : '#fff',
                            color: isSelected ? '#fff' : '#4A4A4A',
                            fontWeight: 600,
                            fontSize: '13px',
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.15s',
                          }}
                        >
                          {size}"
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 3: Select Thickness */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    3. Select Thickness:
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
                            border: `1.5px solid ${isSelected ? '#1A1A1A' : '#E0E0E0'}`,
                            background: isSelected ? '#1A1A1A' : '#fff',
                            color: isSelected ? '#fff' : '#4A4A4A',
                            fontWeight: 700,
                            fontSize: '13px',
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                          }}
                        >
                          {th}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Official Brochure Pricing on Request */}
                <div
                  style={{
                    background: '#1A1A1A',
                    borderRadius: '18px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  }}
                >
                  <div>
                    <div style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                      Official Brochure Pricing
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '24px', fontWeight: 800, color: '#fff' }}>
                        Price Details on Request
                      </span>
                      <span style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#4ADE80', border: '1px solid rgba(74, 222, 128, 0.3)', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px' }}>
                        ✓ {selectedProduct.warranty}
                      </span>
                    </div>
                    <div style={{ color: '#D1D5DB', fontSize: '13px', lineHeight: 1.5 }}>
                      Selected: <strong style={{ color: '#fff' }}>{activeStyle.name}</strong> &bull; <strong style={{ color: '#fff' }}>{selectedSize}&quot;</strong> &bull; <strong style={{ color: '#fff' }}>{selectedThickness}</strong>
                    </div>
                  </div>

                  <a
                    href={getProductWhatsAppUrl(
                      selectedProduct.name,
                      `Style: ${activeStyle.name}, Size: ${selectedSize}", Thickness: ${selectedThickness}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="configurator-whatsapp-btn"
                    style={{
                      background: '#25D366',
                      color: '#fff',
                      padding: '14px 28px',
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.background = '#20BA5A'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.background = '#25D366'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    }}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Get Price Details on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Catalog Inquiry Box */}
            <div
              style={{
                marginTop: '32px',
                background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)',
                border: '1.5px solid #BBF7D0',
                borderRadius: '16px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#14532D', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📲</span> Looking for Complete Brochure &amp; Custom Size Quotations?
                </h4>
                <p style={{ fontSize: '13px', color: '#166534', margin: 0, lineHeight: 1.5 }}>
                  Chat with our team directly on WhatsApp for official pricing sheets, bulk orders, and custom dimension advice.
                </p>
              </div>
              <a
                href={getProductWhatsAppUrl(selectedProduct.name, 'Full Brochure & Custom Size Quotation')}
                target="_blank"
                rel="noopener noreferrer"
                id="catalog-whatsapp-chat-btn"
                style={{
                  background: '#16A34A',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '13px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
                  transition: 'all 0.2s',
                }}
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .products-grid-four { grid-template-columns: repeat(2, 1fr) !important; }
          .products-grid-three { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 992px) {
          .products-grid-four { grid-template-columns: repeat(2, 1fr) !important; }
          .products-grid-three { grid-template-columns: repeat(2, 1fr) !important; }
          .calculator-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .products-grid-four { grid-template-columns: 1fr !important; }
          .products-grid-three { grid-template-columns: 1fr !important; }
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
          background: '#FFFFFF',
          height: '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '0px',
          borderBottom: '1px solid #F0F0F0',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            style={{
              objectFit: 'cover',
              transition: 'transform 0.4s',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        </div>
        {/* Warranty Badge */}
        <span
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 2,
            background: product.warrantyBadgeColor,
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700,
            padding: '3px 9px',
            borderRadius: '50px',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {product.warranty}
        </span>
        {selected && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 2,
              background: '#E51D24',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 700,
              padding: '3px 9px',
              borderRadius: '50px',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(229,29,36,0.3)',
            }}
          >
            Active ✓
          </span>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: '#E51D24',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              background: 'rgba(229,29,36,0.08)',
              padding: '3px 8px',
              borderRadius: '50px',
            }}
          >
            {product.category}
          </span>
          <span style={{ fontSize: '10px', fontWeight: 600, color: '#888' }}>
            {product.seriesBadge}
          </span>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>
          {product.tagline}
        </p>

        {/* Materials Chips */}
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {product.materials.map((m) => (
            <span
              key={m.name}
              style={{
                fontSize: '10px',
                fontWeight: 600,
                background: '#F5F5F7',
                color: '#374151',
                padding: '2px 7px',
                borderRadius: '6px',
                border: '1px solid #E5E7EB',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ color: '#E51D24', fontSize: '7px' }}>●</span>
              {m.name}
            </span>
          ))}
        </div>

        {/* Feature bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {product.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} style={{ fontSize: '11px', color: '#555', display: 'flex', alignItems: 'flex-start', gap: '5px', lineHeight: 1.4 }}>
              <span style={{ color: '#E51D24', fontWeight: 700 }}>✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Price on Request & Action */}
        <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #F0F0F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#166534',
                background: '#F0FDF4',
                padding: '4px 10px',
                borderRadius: '20px',
                border: '1px solid #DCFCE7',
              }}
            >
              <span>🏷️</span> Price on Request
            </span>
            <span style={{ fontSize: '12px', color: '#666', background: '#F5F5F5', padding: '3px 8px', borderRadius: '6px' }}>
              {product.styles.length} Styles Available
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href={getProductWhatsAppUrl(product.name, 'Price Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              id={`price-details-${product.id}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                padding: '11px 14px',
                background: '#25D366',
                color: '#fff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#20BA5A'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#25D366'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <WhatsAppIcon size={16} />
              <span>Price Details</span>
            </a>

            <button
              type="button"
              id={`configure-${product.id}`}
              onClick={(e) => {
                e.stopPropagation()
                onSelect()
              }}
              style={{
                padding: '11px 14px',
                background: selected ? '#FFF0F0' : '#FAFAFA',
                color: selected ? '#E51D24' : '#4B5563',
                border: `1.5px solid ${selected ? '#E51D24' : '#E5E7EB'}`,
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {selected ? '✓ Sizes' : 'View Sizes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
