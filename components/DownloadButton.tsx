// components/DownloadButton.tsx
export default function DownloadButton() {
  return (
    <a
      href="/docs/GuardianChain_Whitepaper.pdf"
      download
      className="block mt-6 bg-indigo-700 text-white px-4 py-2 rounded font-semibold shadow hover:bg-indigo-800 text-center"
    >
      Download PDF
    </a>
  );
}
