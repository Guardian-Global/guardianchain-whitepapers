// /pages/whitepaper.tsx
import Layout from "../components/Layout";

export default function Whitepaper() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Whitepaper</h1>
      <p className="mb-4">
        Download or read the full GuardianChain whitepaper below. This document covers our architecture, economics, security, and governance in detail.
      </p>
      <a
        href="/GuardianChain_Whitepaper.pdf"
        className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 mb-4"
        download
      >
        Download Whitepaper PDF
      </a>
      <h2 className="text-xl font-bold mt-8 mb-2">Executive Summary</h2>
      <ul className="list-disc pl-6 mb-2">
        <li>Purpose: Establish an incorruptible, legally recognized memory infrastructure</li>
        <li>Architecture: Multi-layered, open, and audit-driven (SealChain, Vaultstream, DAO)</li>
        <li>Compliance: Full legal and regulatory adherence (see Compliance page)</li>
        <li>Yield: Proof-bound GTT tokenomics and real economic yield</li>
        <li>Governance: Transparent, DAO-controlled protocol upgrades</li>
      </ul>
    </Layout>
  );
}
