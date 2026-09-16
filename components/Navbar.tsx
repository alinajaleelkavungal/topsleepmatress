'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.10)' : 'none',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      {/* Top notice bar */}
      <div
        style={{
          background: '#E51D24',
          color: '#fff',
          textAlign: 'center',
          padding: '8px 24px',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
      >
        🛏️ &nbsp;Free Shipping on all orders above ₹5,999 &nbsp;|&nbsp; 100-Night Free Trial
      </div>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 32px',
        }}
      >
        {/* Logo */}
        <Link
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Image
            src="/images/logo.png"
            alt="TopSleep Mattress"
            width={180}
            height={76}
            priority
            style={{
              height: '54px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '8px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: '#1A1A1A',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '15px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.background = 'rgba(204,20,20,0.12)'
                  ;(e.target as HTMLElement).style.color = '#D85B5B'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.background = 'transparent'
                  ;(e.target as HTMLElement).style.color = '#1A1A1A'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#products"
              style={{
                background: '#E51D24',
                color: '#fff',
                padding: '10px 22px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'inline-block',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#C8161D'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#E51D24'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Shop Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#1A1A1A',
            fontSize: '24px',
            padding: '4px',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            background: '#fff',
            padding: '16px 32px 24px',
            borderTop: '1px solid #f0f0f0',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                borderBottom: '1px solid #f5f5f5',
                color: '#1A1A1A',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: '16px',
              background: '#E51D24',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '50px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Shop Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  )
}
