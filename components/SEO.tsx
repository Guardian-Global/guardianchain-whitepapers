// components/SEO.tsx
import Head from 'next/head';

export default function SEO() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>GuardianChain | Digital Whitepaper Portal</title>
      <meta name="description" content="The institutional-grade protocol documentation for GuardianChain, featuring the world’s first sovereign memory infrastructure." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GuardianChain" />
      <meta property="og:title" content="GuardianChain | Digital Whitepaper Portal" />
      <meta property="og:description" content="Explore GuardianChain’s protocol, tokenomics, and compliance. Immutable, sovereign, global." />
      <meta property="og:url" content="https://guardian-global.com/" />
      <meta property="og:image" content="/media/guardian-og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GuardianChain | Digital Whitepaper Portal" />
      <meta name="twitter:description" content="The institutional-grade protocol documentation for GuardianChain." />
      <meta name="twitter:image" content="/media/guardian-og.jpg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GuardianChain",
          "url": "https://guardian-global.com",
          "logo": "/media/guardian-og.jpg",
          "sameAs": [
            "https://twitter.com/GuardianChain"
          ]
        }
      `}} />
    </Head>
  )
}
