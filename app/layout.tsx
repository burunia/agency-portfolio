import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sello Art | Professional Product Photography & Design Services',
  description: 'Professional product photography, retouching, and design services for e-commerce brands. Specializing in Amazon optimization, packaging design, and brand marketing.',
  keywords: 'product photography, e-commerce photography, Amazon optimization, packaging design, brand marketing, product retouching',
  authors: [{ name: 'Sello Art' }],
  creator: 'Sello Art',
  publisher: 'Sello Art',
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
    title: 'Sello Art | Professional Product Photography & Design Services',
    description: 'Professional product photography, retouching, and design services for e-commerce brands. Specializing in Amazon optimization, packaging design, and brand marketing.',
    url: 'https://sello.art',
    siteName: 'Sello Art',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sello Art | Professional Product Photography & Design Services',
    description: 'Professional product photography, retouching, and design services for e-commerce brands.',
    creator: '@selloart',
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
      </head>
      <body className="font-roboto">
        {children}
      </body>
    </html>
  )
}
