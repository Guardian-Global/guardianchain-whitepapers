// components/DarkModeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) setDark(true);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 text-lg font-bold"
      onClick={() => setDark(!dark)}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
