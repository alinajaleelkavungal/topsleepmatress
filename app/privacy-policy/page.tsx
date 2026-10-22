import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | TopSleep Mattress',
  description:
    'How Top Sleep Mattress, associated with Top Global Group, collects, uses, stores, shares and protects your personal information.',
  alternates: {
    canonical: 'https://www.topsleepmattress.com/privacy-policy',
  },
}

const paragraph: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.85,
  color: '#4A4A4A',
  margin: '0 0 16px',
}

const inlineLink: React.CSSProperties = {
  color: '#E51D24',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  wordBreak: 'break-word',
}

const sections: LegalSection[] = [
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
        <p style={{ ...paragraph, marginBottom: '18px' }}>
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
    <LegalPage
      view="privacy"
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="Last Updated: 22 October 2026"
      intro="Top Sleep Mattress, associated with Top Global Group, respects your privacy and is committed to protecting your personal information."
      sections={sections}
    />
  )
}
