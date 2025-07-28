"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#0B0F1A] shadow-lg border-b border-[#1F2739] relative z-50">
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

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
        <Link href="/whitepaper/gtt-tokenomics" className="hover:text-white transition">Tokenomics</Link>
        <Link href="/whitepaper/guardianchain-protocol" className="hover:text-white transition">Protocol</Link>
        <Link href="/whitepaper/roadmap" className="hover:text-white transition">Roadmap</Link>
        <Link href="/whitepaper/faq" className="hover:text-white transition">FAQ</Link>
      </nav>

      {/* Mobile Nav Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-white bg-[#1F2739] rounded"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0B0F1A] border-t border-[#1F2739] flex flex-col items-center gap-6 py-6 text-lg text-white md:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#06FC99]">Home</Link>
          <Link href="/whitepaper/gtt-tokenomics" onClick={() => setOpen(false)} className="hover:text-[#06FC99]">Tokenomics</Link>
          <Link href="/whitepaper/guardianchain-protocol" onClick={() => setOpen(false)} className="hover:text-[#7F5DF4]">Protocol</Link>
          <Link href="/whitepaper/roadmap" onClick={() => setOpen(false)} className="hover:text-[#FFA500]">Roadmap</Link>
          <Link href="/whitepaper/faq" onClick={() => setOpen(false)} className="hover:text-white">FAQ</Link>
        </div>
      )}
    </header>
  );
}
