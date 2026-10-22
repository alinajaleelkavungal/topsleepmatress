import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service | TopSleep Mattress',
  description:
    'The terms that apply when you access the Top Sleep Mattress website or purchase our mattresses and sleep products.',
  alternates: {
    canonical: 'https://www.topsleepmattress.com/terms-of-service',
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
    id: 'products-and-pricing',
    title: 'Products and Pricing',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        We offer mattresses and related sleep products in various models, sizes, and materials. Product images and descriptions
        are illustrative, and minor variations may occur. Prices, taxes, delivery charges, and customisation costs will be
        communicated during the ordering process.
      </p>
    ),
  },
  {
    id: 'orders-and-payments',
    title: 'Orders and Payments',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        All orders are subject to product availability, confirmed specifications, pricing, and agreed payment terms. Customers
        must verify mattress dimensions and customisation details before confirming an order.
      </p>
    ),
  },
  {
    id: 'delivery',
    title: 'Delivery',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Delivery timelines and charges may vary by location and product availability. Customers should provide accurate contact and
        delivery details and report any visible damage or incorrect items promptly.
      </p>
    ),
  },
  {
    id: 'cancellations-returns-and-refunds',
    title: 'Cancellations, Returns, and Refunds',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Cancellations, returns, exchanges, and refunds are subject to the applicable order terms and any advertised trial offer.
        Customised products may have specific conditions disclosed before purchase. Nothing in this policy limits rights
        available under applicable consumer protection law.
      </p>
    ),
  },
  {
    id: 'warranty',
    title: 'Warranty',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Warranty coverage depends on the purchased mattress model and its applicable warranty terms. Please refer to our{' '}
        <strong style={{ color: '#1A1A1A' }}>Warranty Policy</strong> for details.
      </p>
    ),
  },
  {
    id: 'website-use-and-intellectual-property',
    title: 'Website Use and Intellectual Property',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Users must not misuse the website, submit fraudulent information, interfere with its security, or reproduce our protected
        content without permission or legal authorisation.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Liability',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        We are not responsible for indirect losses or interruptions beyond our reasonable control, to the extent permitted by
        law. Nothing in these Terms excludes liability or consumer rights that cannot legally be excluded.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        These Terms are governed by the laws of India, subject to applicable consumer protection legislation and mandatory legal
        provisions.
      </p>
    ),
  },
  {
    id: 'changes-and-contact',
    title: 'Changes and Contact',
    content: (
      <>
        <p style={paragraph}>We may update these Terms by publishing a revised version on our website.</p>
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
        <p style={{ ...paragraph, marginBottom: 0 }}>
          For questions about products, orders, payments, or delivery, please contact our team.
        </p>
      </>
    ),
  },
]

export default function TermsOfServicePage() {
  return (
    <LegalPage
      view="terms"
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="Last Updated: 22 October 2026"
      intro={
        <>
          Welcome to Top Sleep Mattress. By accessing{' '}
          <a
            href="https://www.topsleepmattress.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#E51D24', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            https://www.topsleepmattress.com/
          </a>{' '}
          or purchasing our products, you agree to these Terms of Service.
        </>
      }
      sections={sections}
    />
  )
}
