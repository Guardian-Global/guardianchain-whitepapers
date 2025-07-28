// components/Header.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/whitepaper/guardianchain-protocol', label: 'Protocol' },
  { href: '/whitepaper/gtt-tokenomics', label: 'Tokenomics' },
  { href: '/whitepaper/governance', label: 'Governance' },
  { href: '/whitepaper/compliance', label: 'Compliance' },
  { href: '/press', label: 'Press' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-3xl font-extrabold tracking-tighter text-indigo-700 dark:text-yellow-400">
          GUARDIAN<span className="text-yellow-500 dark:text-indigo-400">CHAIN</span>
        </Link>
        <div className="hidden md:flex gap-7">
          {nav.map(link => (
            <Link key={link.href} href={link.href} className="font-semibold text-slate-800 dark:text-white hover:underline">
              {link.label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white dark:bg-black">
          {nav.map(link => (
            <Link key={link.href} href={link.href} className="font-semibold" onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}
