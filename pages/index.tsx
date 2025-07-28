// /pages/index.tsx
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to GUARDIAN<span className="text-yellow-600">CHAIN</span></h1>
        <p className="text-lg mb-6 text-gray-700">
          The sovereign memory infrastructure. Immutable. Compliant. Transparent.<br />
          Explore our protocol documentation, governance, and compliance below.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/whitepaper" className="bg-indigo-700 text-white px-5 py-2 rounded hover:bg-indigo-800 font-semibold">Whitepaper</a>
          <a href="/dao" className="bg-gray-200 text-indigo-800 px-5 py-2 rounded hover:bg-gray-300 font-semibold">DAO Portal</a>
          <a href="/compliance" className="bg-gray-200 text-indigo-800 px-5 py-2 rounded hover:bg-gray-300 font-semibold">Compliance</a>
        </div>
      </section>
    </Layout>
  );
}
