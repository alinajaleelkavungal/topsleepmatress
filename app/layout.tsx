import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TopSleep — Enjoy the Real Comfort',
  description:
    'TopSleep crafts world-class mattresses and sleep solutions engineered for your deepest, most restorative rest. Enjoy the real comfort with our luxury, orthopedic, and memory foam mattresses.',
  keywords: 'mattress, premium sleep, orthopedic mattress, memory foam, TopSleep, enjoy the real comfort',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
