// components/SectionNav.tsx
'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface TOCItem {
  label: string;
  href: string;
}

export default function SectionNav({ toc }: { toc: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = null;
      for (const section of toc) {
        const el = document.querySelector(section.href);
        if (el && el instanceof HTMLElement && el.offsetTop <= scrollPosition) {
          current = section.href;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  return (
    <nav className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 text-sm space-y-2">
      {toc.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={clsx(
            'block hover:text-indigo-600 transition-colors',
            activeId === item.href ? 'text-indigo-600 font-bold' : 'text-gray-700 dark:text-gray-300'
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
