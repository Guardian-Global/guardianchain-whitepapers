// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[420px] bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-400 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-extrabold mb-3">GUARDIAN<span className="text-yellow-400">CHAIN</span></h1>
      <p className="text-2xl mb-6 max-w-2xl text-center">
        Immutable Sovereign Memory • Tokenized Truth • DAO-Governed Compliance
      </p>
      <div className="flex gap-4">
        <Link href="/whitepaper/guardianchain-protocol" className="bg-yellow-400 text-indigo-900 px-6 py-2 rounded font-bold hover:bg-yellow-500 transition">Read Protocol</Link>
        <Link href="/whitepaper/gtt-tokenomics" className="bg-white text-indigo-900 px-6 py-2 rounded font-bold hover:bg-indigo-100 transition">Tokenomics</Link>
      </div>
      <span className="absolute bottom-4 right-8 text-xs opacity-60">Veritas Authenticated | VCW-00000</span>
    </section>
  )
}
