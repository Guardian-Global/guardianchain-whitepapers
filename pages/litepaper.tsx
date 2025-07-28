// /pages/litepaper.tsx
import Layout from "../components/Layout";

export default function Litepaper() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Litepaper</h1>
      <p className="mb-4">A concise overview for institutional partners, journalists, and the public.</p>
      <a
        href="/GuardianChain_Litepaper.pdf"
        className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 mb-4"
        download
      >
        Download Litepaper PDF
      </a>
      <h2 className="text-xl font-bold mt-8 mb-2">Key Points</h2>
      <ul className="list-disc pl-6">
        <li>Sovereign digital infrastructure for truth and memory</li>
        <li>Protocol transparency, security, and public auditability</li>
        <li>DAO governance, GTT token economics, and compliant design</li>
      </ul>
    </Layout>
  );
}
