// /components/Header.tsx
import Link from 'next/link';

const nav = [
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/litepaper', label: 'Litepaper' },
  { href: '/dao', label: 'DAO Portal' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/validators', label: 'Validators' },
  { href: '/press', label: 'Press' },
];

export default function Header() {
  return (
    <header className="border-b bg-gray-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-2">
        <Link href="/" className="text-2xl font-bold text-indigo-800">GUARDIAN<span className="text-yellow-600">CHAIN</span></Link>
        <div className="flex gap-6">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-indigo-600 font-semibold">{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
