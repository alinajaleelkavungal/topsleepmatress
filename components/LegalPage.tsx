import type { ReactNode } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

const ACCENT = '#E51D24'

export type LegalSection = {
  id: string
  title: string
  content: ReactNode
}

type LegalPageProps = {
  view: string
  eyebrow: string
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
}

export default function LegalPage({ view, eyebrow, title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <>
      <Navbar view={view} />
      <main className="view-offset" style={{ background: '#fff' }}>
        <section style={{ padding: '72px 32px 88px', maxWidth: '960px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#6B6B6B', marginBottom: '26px' }}>
            <Link href="/" style={{ color: '#6B6B6B', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ margin: '0 8px', color: '#CCC' }}>/</span>
            <span style={{ color: ACCENT, fontWeight: 600 }}>{title}</span>
          </nav>

          {/* Page header */}
          <header style={{ marginBottom: '36px' }}>
            <span
              style={{
                color: ACCENT,
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </span>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(34px, 4vw, 50px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#1A1A1A',
                margin: '14px 0 16px',
              }}
            >
              {title}
            </h1>
            <p style={{ color: '#1A1A1A', fontSize: '15px', fontWeight: 600, margin: '0 0 22px' }}>{lastUpdated}</p>
            <div style={{ fontSize: '17px', lineHeight: 1.8, color: '#4A4A4A', margin: 0, maxWidth: '720px' }}>{intro}</div>
          </header>

          {/* Table of contents */}
          <div
            style={{
              background: '#FAF9F9',
              border: '1px solid #ECECEC',
              borderRadius: '16px',
              padding: '26px 30px',
              marginBottom: '52px',
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                marginBottom: '16px',
              }}
            >
              On this page
            </div>
            <div className="legal-toc" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px' }}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '15px' }}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="legal-section" style={{ marginBottom: '44px' }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(21px, 2.2vw, 26px)',
                  lineHeight: 1.35,
                  color: '#1A1A1A',
                  margin: '0 0 18px',
                }}
              >
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </section>
      </main>
      <Footer />
      <FloatingContact />

      <style>{`
        .legal-section {
          scroll-margin-top: 150px;
        }
        .legal-toc a:hover {
          color: ${ACCENT};
        }
        @media (max-width: 768px) {
          .legal-toc {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
