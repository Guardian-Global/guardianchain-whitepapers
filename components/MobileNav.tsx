// components/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 z-50 fixed top-4 right-4 text-white bg-[#1F2739] rounded"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 bg-[#0B0F1A] z-40 flex flex-col items-center justify-center gap-8 text-lg text-white">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#06FC99]">Home</Link>
          <Link href="/whitepaper/gtt-tokenomics" onClick={() => setOpen(false)} className="hover:text-[#06FC99]">Tokenomics</Link>
          <Link href="/whitepaper/guardianchain-protocol" onClick={() => setOpen(false)} className="hover:text-[#7F5DF4]">Protocol</Link>
          <Link href="/whitepaper/roadmap" onClick={() => setOpen(false)} className="hover:text-[#FFA500]">Roadmap</Link>
          <Link href="/whitepaper/faq" onClick={() => setOpen(false)} className="hover:text-white">FAQ</Link>
        </div>
      )}
    </>
  );
}
