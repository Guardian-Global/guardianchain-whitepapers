// /pages/dao.tsx
import Layout from "../components/Layout";

export default function DAO() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">DAO Portal</h1>
      <p className="mb-4">
        GuardianChain's DAO controls treasury, protocol upgrades, and validator admission. All major decisions are proposed, voted, and auditable on-chain.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Voting: 1 GTT = 1 Vote. Delegation supported.</li>
        <li>Transparency: View all proposals and vote history (link to governance UI or Etherscan if available).</li>
        <li>Access: Anyone can participate — subject to KYC/compliance checks for certain actions.</li>
      </ul>
      <a
        href="https://etherscan.io/address/your-dao-contract" // update with your DAO contract or governance UI
        className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
        target="_blank" rel="noopener noreferrer"
      >
        View DAO Governance
      </a>
    </Layout>
  );
}
