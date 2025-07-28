// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-slate-900 to-white dark:from-black dark:to-gray-900 py-8 mt-16 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xl font-bold text-indigo-800 dark:text-yellow-400">GuardianChain</span> <span className="text-gray-400">© {new Date().getFullYear()}</span>
          <span className="ml-2 text-sm text-gray-400">Sovereign Memory Infrastructure</span>
        </div>
        <div className="flex gap-4">
          <a href="https://twitter.com/GuardianChain" target="_blank" className="hover:underline">Twitter</a>
          <a href="mailto:press@guardian-global.com" className="hover:underline">Press</a>
          <a href="/press" className="hover:underline">Media Kit</a>
          <a href="https://replit.com/@your-replit-username/guardianchain-app" target="_blank" className="hover:underline text-indigo-700 dark:text-yellow-400">Main App</a>
        </div>
      </div>
    </footer>
  );
}
