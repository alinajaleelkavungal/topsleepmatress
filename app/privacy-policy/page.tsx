import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export const metadata: Metadata = {
  title: 'Privacy Policy | TopSleep Mattress',
  description:
    'How Top Sleep Mattress, associated with Top Global Group, collects, uses, stores, shares and protects your personal information.',
  alternates: {
    canonical: 'https://www.topsleepmattress.com/privacy-policy',
  },
}

const ACCENT = '#E51D24'

const heading: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: 'clamp(21px, 2.2vw, 26px)',
  lineHeight: 1.35,
  color: '#1A1A1A',
  margin: '0 0 18px',
}

const paragraph: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.85,
  color: '#4A4A4A',
  margin: '0 0 16px',
}

const inlineLink: React.CSSProperties = {
  color: ACCENT,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  wordBreak: 'break-word',
}

const sections: { id: string; title: string; content: React.ReactNode }[] = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        We may collect your name, phone number, email address, delivery address, enquiry details, order information, and
        website usage data when you visit our website, contact us, or purchase our products.
      </p>
    ),
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Your information may be used to respond to enquiries, process orders, arrange deliveries, provide customer support, manage
        warranty claims, improve our services, and meet legal obligations.
      </p>
    ),
  },
  {
    id: 'cookies-and-third-parties',
    title: 'Cookies and Third Parties',
    content: (
      <>
        <p style={paragraph}>
          Our website may use cookies and analytics tools to improve functionality and understand website traffic. We may share
          necessary information with trusted payment providers, delivery partners, hosting providers, and service providers.
        </p>
        <p style={{ ...paragraph, marginBottom: 0 }}>We do not sell your personal information to third parties.</p>
      </>
    ),
  },
  {
    id: 'data-security-and-retention',
    title: 'Data Security and Retention',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        We take reasonable measures to protect your information from unauthorised access, misuse, loss, or disclosure. Information
        is retained only as long as reasonably necessary for business, customer service, and legal purposes.
      </p>
    ),
  },
  {
    id: 'your-privacy-rights',
    title: 'Your Privacy Rights',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Subject to applicable law, you may request access to, correction of, or deletion of your personal information, or withdraw
        consent where applicable. Contact us to submit a request.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
      </p>
    ),
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        We may update this policy from time to time. Changes will be published on this page.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p style={paragraph}>
          <strong style={{ color: '#1A1A1A' }}>Top Sleep Mattress &mdash; Top Global Group</strong>
        </p>
        <div
          style={{
            background: '#FAF9F9',
            border: '1px solid #ECECEC',
            borderRadius: '16px',
            padding: '28px 30px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'grid', gap: '10px', fontSize: '15px', color: '#4A4A4A' }}>
            <div>
              <span style={{ color: '#6B6B6B', marginRight: '8px' }}>Website:</span>
              <a
                href="https://www.topsleepmattress.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={inlineLink}
              >
                https://www.topsleepmattress.com/
              </a>
            </div>
            <div>
              <span style={{ color: '#6B6B6B', marginRight: '8px' }}>Email:</span>
              <a href="mailto:topglobalgroup1@gmail.com" style={inlineLink}>
                topglobalgroup1@gmail.com
              </a>
            </div>
            <div>
              <span style={{ color: '#6B6B6B', marginRight: '8px' }}>Phone:</span>
              <a href="tel:+919847317211" style={inlineLink}>
                +91 98473 17211
              </a>
            </div>
            <div>
              <span style={{ color: '#6B6B6B', marginRight: '8px' }}>WhatsApp:</span>
              <a href="https://wa.me/919061612539" target="_blank" rel="noopener noreferrer" style={inlineLink}>
                +91 90616 12539
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar view="privacy" />
      <main className="view-offset" style={{ background: '#fff' }}>
        <section style={{ padding: '72px 32px 88px', maxWidth: '960px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#6B6B6B', marginBottom: '26px' }}>
            <Link href="/" style={{ color: '#6B6B6B', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ margin: '0 8px', color: '#CCC' }}>/</span>
            <span style={{ color: ACCENT, fontWeight: 600 }}>Privacy Policy</span>
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
              Legal
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
              Privacy Policy
            </h1>
            <p style={{ color: '#6B6B6B', fontSize: '15px', margin: '0 0 22px' }}>Last Updated: 22 October 2026</p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#4A4A4A', margin: 0, maxWidth: '720px' }}>
              Top Sleep Mattress, associated with Top Global Group, respects your privacy and is committed to protecting your
              personal information.
            </p>
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
            <div className="policy-toc" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px' }}>
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

          {/* Policy sections */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="policy-section" style={{ marginBottom: '44px' }}>
              <h2 style={heading}>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </section>
      </main>
      <Footer />
      <FloatingContact />

      <style>{`
        .policy-section {
          scroll-margin-top: 150px;
        }
        .policy-toc a:hover {
          color: ${ACCENT};
        }
        @media (max-width: 768px) {
          .policy-toc {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
