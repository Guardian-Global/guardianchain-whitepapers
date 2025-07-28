// app/page.tsx
'use client';

import SectionNav from '@/components/SectionNav';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to GuardianChain</h1>
        <p className="text-lg mb-6">
          The world’s most advanced protocol for sovereign digital memory. Read our full doctrine, tokenomics, yield design,
          governance, and legal compliance in a fully interactive, living digital format.
        </p>

        {/* Option 1: remove the component if unused */}
        {/* <SectionNav /> */}

        {/* Option 2: safely pass a minimal prop */}
        <SectionNav toc={[]} />
      </section>
    </main>
  );
}
