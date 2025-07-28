// app/layout.tsx
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export const metadata = {
  title: 'GuardianChain | Digital Whitepaper Portal',
  description: 'The institutional-grade protocol documentation for GuardianChain, featuring the world’s first sovereign memory infrastructure.',
  openGraph: {
    title: 'GuardianChain | Digital Whitepaper Portal',
    description: 'Explore GuardianChain’s protocol, tokenomics, and compliance. Immutable, sovereign, global.',
    url: 'https://guardian-global.com/',
    siteName: 'GuardianChain',
    images: [{ url: '/media/guardian-og.jpg', width: 1200, height: 630, alt: 'GuardianChain Protocol' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GuardianChain',
    title: 'GuardianChain | Digital Whitepaper Portal',
    description: 'The institutional-grade protocol documentation for GuardianChain.',
    image: '/media/guardian-og.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SEO />
      <body className="bg-gradient-to-b from-slate-900 to-white dark:from-black dark:to-gray-900 font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
