// /pages/validators.tsx
import Layout from "../components/Layout";

export default function Validators() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Validator Documentation</h1>
      <p className="mb-4">Join the GuardianChain network as a validator, operator, or node runner. All requirements, setup steps, and rules are below.</p>
      <ul className="list-decimal pl-6 mb-4">
        <li>Requirements: Hardware, OS, uptime, and security expectations</li>
        <li>Step-by-step setup: Full node install, CLI and Docker guides</li>
        <li>Rewards: GTT distribution, yield schedule, and reputation scoring</li>
        <li>Support: Escalation, troubleshooting, and operator onboarding</li>
      </ul>
      <a
        href="/GuardianChain_ValidatorGuide.pdf"
        className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
        download
      >
        Download Validator Guide
      </a>
    </Layout>
  );
}
