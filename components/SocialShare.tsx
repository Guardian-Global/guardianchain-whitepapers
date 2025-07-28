// components/SocialShare.tsx
"use client";
export default function SocialShare() {
  const url = typeof window !== "undefined" ? window.location.href : '';
  const shareMsg = encodeURIComponent("Check out the GuardianChain protocol whitepaper — the most advanced sovereign memory project in Web3.");
  return (
    <div className="flex gap-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${shareMsg}&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        title="Share on Twitter"
      >🐦</a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${shareMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        title="Share on LinkedIn"
      >💼</a>
      <a
        href={`mailto:?subject=GuardianChain Whitepaper&body=${shareMsg} ${url}`}
        className="hover:underline"
        title="Share via Email"
      >✉️</a>
    </div>
  );
}
