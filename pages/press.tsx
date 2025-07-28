// /pages/press.tsx
import Layout from "../components/Layout";

export default function Press() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Press & Media</h1>
      <p className="mb-4">
        For interviews, media kits, or official statements, contact us:<br />
        <a href="mailto:press@guardianchain.io" className="underline text-indigo-700">press@guardianchain.io</a>
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Logos, founder bios, and project assets: download below</li>
        <li>Media coverage: [List major coverage, awards, etc. as they occur]</li>
        <li>Quotes: “GuardianChain is to memory what Ethereum is to contracts.”</li>
      </ul>
      <a
        href="/GuardianChain_PressKit.zip"
        className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
        download
      >
        Download Press Kit
      </a>
    </Layout>
  );
}
