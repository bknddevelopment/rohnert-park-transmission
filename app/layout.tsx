import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { JsonLd } from './components/JsonLd'
import { FloatingContact } from './components/FloatingContact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rohnertparktransmission.com'),
  title: {
    default: 'Rohnert Park Transmission & Auto Repair | Expert Auto Service Since 1997',
    template: '%s | Rohnert Park Transmission'
  },
  description: 'Expert auto repair and transmission services in Rohnert Park, CA. ASE certified technicians, 2-year warranty, and family-owned since 1997. Call (707) 584-7727.',
  keywords: ['auto repair', 'transmission service', 'Rohnert Park', 'CA', 'brake repair', 'engine tune-up', 'ASE certified', 'ATRA member'],
  authors: [{ name: 'Rohnert Park Transmission' }],
  creator: 'Rohnert Park Transmission',
  publisher: 'Rohnert Park Transmission',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Rohnert Park Transmission & Auto Repair | Expert Auto Service Since 1997',
    description: 'Expert auto repair and transmission services in Rohnert Park, CA. ASE certified technicians, 2-year warranty, and family-owned since 1997.',
    url: 'https://www.rohnertparktransmission.com',
    siteName: 'Rohnert Park Transmission',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohnert Park Transmission & Auto Repair',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohnert Park Transmission & Auto Repair',
    description: 'Expert auto repair and transmission services in Rohnert Park, CA.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.rohnertparktransmission.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B91C1C" />
      </head>
      <body className="flex flex-col min-h-screen">
        <JsonLd />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}