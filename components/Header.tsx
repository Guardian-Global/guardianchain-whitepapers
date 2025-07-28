import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#0B0F1A] shadow-lg border-b border-[#1F2739]">
      {/* Brand Logo + Title */}
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/media/logo.png"
          alt="GUARDIANCHAIN Logo"
          width={48}
          height={48}
          className="rounded-sm"
          priority
        />
        <h1 className="text-2xl font-extrabold tracking-wide uppercase leading-none">
          <span className="text-[#06FC99] drop-shadow-sm">GUARDIAN</span>
          <span className="text-[#7F5DF4] drop-shadow-sm">CHAIN</span>
        </h1>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
        <Link href="/whitepaper/gtt-tokenomics" className="hover:text-white transition">Tokenomics</Link>
        <Link href="/whitepaper/guardianchain-protocol" className="hover:text-white transition">Protocol</Link>
        <Link href="/whitepaper/roadmap" className="hover:text-white transition">Roadmap</Link>
        <Link href="/whitepaper/faq" className="hover:text-white transition">FAQ</Link>
      </nav>
    </header>
  );
}
