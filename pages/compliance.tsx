// /pages/compliance.tsx
import Layout from "../components/Layout";

export default function Compliance() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Compliance & Legal</h1>
      <p className="mb-4">
        GuardianChain operates under strict legal, regulatory, and audit protocols. Our structure is optimized for global compliance, transparency, and public trust.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Entity: LLC (transition to C-Corp planned)</li>
        <li>Protocols: GDPR, FATF, WIPO, OECD compliance</li>
        <li>Certifications: Veritas Certificate, SealChain, VCW-00000 Authorship</li>
        <li>Audits: Annual smart contract and security audits, with published reports</li>
      </ul>
      <a
        href="/GuardianChain_ComplianceBundle.pdf"
        className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
        download
      >
        Download Compliance Documents
      </a>
    </Layout>
  );
}
