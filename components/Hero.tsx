// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0B0F1A] text-white py-20 px-6 border-b border-[#1F2739]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo */}
        <Image
          src="/media/logo.png"
          alt="GUARDIANCHAIN Logo"
          width={96}
          height={96}
          className="mb-2"
          priority
        />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
          <span className="text-[#06FC99]">GUARDIAN</span>
          <span className="text-[#7F5DF4]">CHAIN</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-lg max-w-2xl">
          Powering the world’s first blockchain-based truth verification economy — with real-time token metrics, sovereign smart contracts, and capsule-verified data integrity.
        </p>

        {/* GTT Token Info */}
        <div className="bg-[#1A1F2E] px-6 py-4 rounded-xl border border-[#2C3655] shadow flex flex-col sm:flex-row items-center gap-6 text-sm font-medium">
          <div className="text-[#06FC99]">💰 GTT Price: <span className="text-white">$0.0075</span></div>
          <div className="text-[#7F5DF4]">📈 Market Cap: <span className="text-white">$18.75M</span></div>
          <div className="text-orange-400">🧑‍💻 Holders: <span className="text-white">15,847</span></div>
        </div>

      </div>
    </section>
  );
}
