import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Sello.art | Professional Product Photography & Design Services',
  description: 'Professional product photography, retouching, and design services for e-commerce brands. Specializing in Amazon optimization, packaging design, and brand marketing.',
  keywords: 'product photography, e-commerce photography, Amazon optimization, packaging design, brand marketing, product retouching, e-commerce visuals, product design, commercial photography, product branding',
  authors: [{ name: 'Sello.art' }],
  creator: 'Sello.art',
  publisher: 'Sello.art',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sello.art'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sello.art | Professional Product Photography & Design Services',
    description: 'Professional product photography, retouching, and design services for e-commerce brands. Specializing in Amazon optimization, packaging design, and brand marketing.',
    url: 'https://sello.art',
    siteName: 'Sello.art',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sello.art - Professional Product Photography & Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sello.art | Professional Product Photography & Design Services',
    description: 'Professional product photography, retouching, and design services for e-commerce brands.',
    creator: '@selloart',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-site-verification',
  },
  category: 'Photography & Design Services',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'msapplication-TileColor': '#d4b88e',
    'theme-color': '#d4b88e',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vidaloka&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#d4b88e" />
        <link rel="canonical" href="https://sello.art" />
        <meta name="geo.region" content="US-ID" />
        <meta name="geo.placename" content="Boise" />
        <meta name="geo.position" content="43.6150;-116.2023" />
        <meta name="ICBM" content="43.6150, -116.2023" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sello.art",
            "url": "https://sello.art",
            "logo": "https://sello.art/logo.png",
            "description": "Professional product photography and design services for e-commerce brands.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1611 W. Warren St",
              "addressLocality": "Boise",
              "addressRegion": "ID",
              "postalCode": "83706",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-208-631-3301",
              "contactType": "customer service",
              "email": "contact.sello.art@gmail.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/selloart",
              "https://www.instagram.com/selloart",
              "https://twitter.com/selloart",
              "https://www.linkedin.com/company/selloart"
            ]
          })}
        </script>
      </head>
      <body className="font-roboto">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
