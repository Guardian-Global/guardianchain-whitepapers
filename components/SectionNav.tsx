// components/SectionNav.tsx
import Link from "next/link";
export default function SectionNav() {
  const links = [
    { href: "/whitepaper/guardianchain-protocol", label: "Protocol" },
    { href: "/whitepaper/gtt-tokenomics", label: "Tokenomics" },
    { href: "/whitepaper/yield-engine", label: "Yield Doctrine" },
    { href: "/whitepaper/governance", label: "Governance" },
    { href: "/whitepaper/compliance", label: "Compliance" },
    { href: "/press", label: "Press & Media" }
  ]
  return (
    <nav className="flex flex-wrap justify-center gap-4">
      {links.map(link =>
        <Link key={link.href} href={link.href}
          className="px-4 py-2 rounded border border-indigo-200 dark:border-yellow-400 font-medium bg-white/60 dark:bg-black/60 hover:bg-indigo-100 dark:hover:bg-yellow-900 transition">
          {link.label}
        </Link>
      )}
    </nav>
  )
}
