import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Warranty Policy | TopSleep Mattress',
  description:
    'Warranty periods, coverage, exclusions and the claim process for Top Sleep Mattress mattresses by Top Global Group.',
  alternates: {
    canonical: 'https://www.topsleepmattress.com/warranty-policy',
  },
}

const ACCENT = '#E51D24'

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

const bullet: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.8,
  color: '#4A4A4A',
  marginBottom: '10px',
  paddingLeft: '20px',
  position: 'relative',
}

function BulletList({ items }: { items: { label?: string; text: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px' }}>
      {items.map((item) => (
        <li key={item.text} style={bullet}>
          <span style={{ position: 'absolute', left: 0, top: 0, color: ACCENT, fontWeight: 700 }}>&bull;</span>
          {item.label ? <strong style={{ color: '#1A1A1A' }}>{item.label}</strong> : null}
          {item.label ? ' ' : null}
          {item.text}
        </li>
      ))}
    </ul>
  )
}

const sections: LegalSection[] = [
  {
    id: 'warranty-period',
    title: '1. Warranty Period',
    content: (
      <>
        <p style={paragraph}>The warranty period varies according to the mattress model:</p>
        <BulletList
          items={[
            { label: '15 Years:', text: 'Helixa Mattress, Helixa Memory, and Helixa Latex.' },
            { label: '10 Years:', text: 'Medicated, Medicated Memory, and Medicated Latex.' },
            { label: '5 Years:', text: 'Bonnell Spring, Pocketed Spring, and HR Mattress.' },
            { label: '4 Years:', text: 'Semi Medicated.' },
          ]}
        />
        <p style={{ ...paragraph, marginBottom: 0 }}>
          The warranty period begins from the date specified in the applicable warranty documentation. Customers should retain
          their purchase invoice and warranty details for reference.
        </p>
      </>
    ),
  },
  {
    id: 'warranty-coverage',
    title: '2. Warranty Coverage',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        The warranty covers eligible manufacturing defects in materials and workmanship, subject to the specific product&rsquo;s
        warranty terms. This may include qualifying defects in the mattress core, internal structure, or construction that affect
        its intended use.
      </p>
    ),
  },
  {
    id: 'warranty-exclusions',
    title: '3. Warranty Exclusions',
    content: (
      <>
        <p style={paragraph}>
          Unless covered by the applicable warranty or required by law, the warranty does not cover normal wear and tear, stains,
          liquid damage, burns, cuts, accidental damage, misuse, improper handling, unsuitable bed support, unauthorised
          alterations, or damage caused by failure to follow care instructions.
        </p>
        <p style={{ ...paragraph, marginBottom: 0 }}>
          Changes in comfort preference alone do not necessarily qualify as manufacturing defects.
        </p>
      </>
    ),
  },
  {
    id: 'how-to-claim-warranty',
    title: '4. How to Claim Warranty',
    content: (
      <>
        <p style={paragraph}>To request warranty service, contact our support team and provide:</p>
        <BulletList
          items={[
            { text: 'Purchase invoice or proof of purchase.' },
            { text: 'Customer name and contact details.' },
            { text: 'Mattress model and purchase date.' },
            { text: 'Description of the issue.' },
            { text: 'Supporting photographs or videos, if available.' },
          ]}
        />
        <p style={{ ...paragraph, marginBottom: 0 }}>
          Our team may request additional information or arrange an inspection to assess the claim.
        </p>
      </>
    ),
  },
  {
    id: 'repair-or-replacement',
    title: '5. Repair or Replacement',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Approved warranty claims will be handled according to the applicable product warranty terms and consumer protection laws.
        Depending on the circumstances, the remedy may include repair, replacement, or another legally required remedy. Our team
        will communicate the applicable process to the customer.
      </p>
    ),
  },
  {
    id: 'customer-responsibilities',
    title: '6. Customer Responsibilities',
    content: (
      <>
        <p style={paragraph}>
          Customers should retain proof of purchase, use a suitable bed frame or support base, follow the mattress care
          instructions, and report suspected manufacturing defects promptly.
        </p>
        <p style={{ ...paragraph, marginBottom: 0 }}>
          Custom-size mattresses may have specific warranty conditions, which will be communicated at the time of purchase.
        </p>
      </>
    ),
  },
  {
    id: 'important-information',
    title: '7. Important Information',
    content: (
      <p style={{ ...paragraph, marginBottom: 0 }}>
        Warranty coverage and conditions may vary by mattress model. Please refer to your invoice and product warranty
        documentation for the exact terms, exclusions, and claim procedure. This policy does not limit any statutory rights
        available under applicable law.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: '8. Contact Us',
    content: (
      <>
        <p style={{ ...paragraph, marginBottom: '18px' }}>
          For warranty claims or assistance, please contact:
        </p>
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
        <p style={{ ...paragraph, marginBottom: 0 }}>
          We are committed to reviewing warranty concerns fairly and assisting our customers in accordance with the applicable
          warranty terms.
        </p>
      </>
    ),
  },
]

export default function WarrantyPolicyPage() {
  return (
    <LegalPage
      view="warranty"
      eyebrow="Legal"
      title="Warranty Policy"
      lastUpdated="Last Updated: 22 October 2026"
      intro="Top Sleep Mattress, associated with Top Global Group, is committed to providing quality mattresses designed for comfort, support, and durability. Our mattresses are covered by a manufacturer warranty against eligible defects, subject to the applicable product warranty terms."
      sections={sections}
    />
  )
}
