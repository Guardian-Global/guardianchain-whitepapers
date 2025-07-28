// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-[#1F2739] text-white/80 py-8 px-4 text-sm mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/media/logo.png"
            alt="GUARDIANCHAIN Logo"
            width={32}
            height={32}
          />
          <span className="text-sm font-semibold uppercase tracking-wide">
            <span className="text-[#06FC99]">GUARDIAN</span>
            <span className="text-[#7F5DF4]">CHAIN</span>
          </span>
        </Link>

        {/* Copyright and Links */}
        <div className="flex flex-col md:items-end md:text-right gap-2">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} GUARDIANCHAIN. Sovereign Memory Infrastructure
          </p>
          <div className="flex gap-4 text-xs text-white/70">
            <a href="https://twitter.com/GuardianChain" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            <a href="mailto:press@guardian-global.com" className="hover:text-white">Press</a>
            <a href="/press" className="hover:text-white">Media Kit</a>
            <a href="https://replit.com/@your-replit-username/guardianchain-app" target="_blank" rel="noopener noreferrer" className="hover:text-[#06FC99]">Main App</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
