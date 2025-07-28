// app/page.tsx
import Hero from '../components/Hero'
import SectionNav from '../components/SectionNav'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-3xl mx-auto text-center mt-16 px-4">
        <h2 className="text-2xl font-bold mb-6">GuardianChain Whitepaper Library</h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          The world’s most advanced protocol for sovereign digital memory. Read our full doctrine, tokenomics, yield design, governance, and legal compliance in a fully interactive, living digital format.
        </p>
        <SectionNav />
      </section>
    </>
  )
}
