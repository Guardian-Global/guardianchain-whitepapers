// /components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-4 text-center text-sm text-gray-500">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} GuardianChain LLC — All rights reserved.</span>
        <a
          href="https://replit.com/@your-replit-username/guardianchain-app"
          className="underline hover:text-indigo-600"
          target="_blank" rel="noopener noreferrer"
        >
          Main App Portal
        </a>
      </div>
    </footer>
  );
}
