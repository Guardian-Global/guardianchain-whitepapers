// components/SEO.tsx
import Head from "next/head";

export default function SEO({
  title = "GUARDIANCHAIN | Truth Verification Protocol",
  description = "GUARDIANCHAIN is the sovereign infrastructure for capsule-authenticated data, blockchain-based governance, and the Guardian Truth Token (GTT).",
  image = "/media/logo.png",
  url = "https://guardianchain.app",
  siteName = "GUARDIANCHAIN",
  twitterHandle = "@GuardianChain"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en" />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, Discord, Telegram) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
