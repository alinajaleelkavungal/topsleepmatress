'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ProductsSection from './ProductsSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

export type View = 'home' | 'about' | 'services' | 'products' | 'contact'

const hashToView: Record<string, View> = {
  '#hero': 'home',
  '#about': 'about',
  '#services': 'services',
  '#products': 'products',
  '#contact': 'contact',
}

export default function SiteShell() {
  const [view, setView] = useState<View>('home')

  // Restore the view from the URL hash on load and on back / forward
  useEffect(() => {
    const fromHash = () => setView(hashToView[window.location.hash] ?? 'home')
    fromHash()
    window.addEventListener('popstate', fromHash)
    return () => window.removeEventListener('popstate', fromHash)
  }, [])

  // Section links (#about, /#products, ...) switch the visible sections
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"], a[href^="/#"]')
      const href = anchor?.getAttribute('href') ?? ''
      const hash = href.startsWith('/') ? href.slice(1) : href
      const next = hashToView[hash]
      if (!next) return
      e.preventDefault()
      window.history.pushState(null, '', next === 'home' ? window.location.pathname : hash)
      setView(next)
      window.scrollTo({ top: 0 })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Navbar view={view} />
      <main className={view === 'home' ? undefined : 'view-offset'}>
        {view === 'home' && <Hero />}
        {(view === 'home' || view === 'about') && <AboutSection />}
        {(view === 'home' || view === 'services') && <ServicesSection />}
        {(view === 'home' || view === 'products') && <ProductsSection />}
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
