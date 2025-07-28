// components/WhitepaperLayout.tsx
import SectionNav from "./SectionNav";
import AuthorBadge from "./AuthorBadge";
import DownloadButton from "./DownloadButton";
import SocialShare from "./SocialShare";

export default function WhitepaperLayout({
  title,
  description,
  sealedAt,
  veritasId,
  author,
  toc = [],
  children
}: {
  title: string;
  description?: string;
  sealedAt?: string;
  veritasId?: string;
  author?: string;
  toc?: Array<{ label: string; href: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <section className="relative py-14 px-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-500 text-white shadow-xl">
        <h1 className="text-4xl font-extrabold mb-1">{title}</h1>
        <p className="text-sm opacity-80">{description}</p>
        <div className="mt-4 flex items-center gap-4 text-xs">
          {sealedAt && <span>Sealed: {sealedAt}</span>}
          {veritasId && <span>Veritas ID: {veritasId}</span>}
        </div>
      </section>

      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full px-6 py-12 gap-8">
        {toc && (
          <aside className="w-full md:w-64 sticky top-24 mb-8">
            <SectionNav toc={toc} />
            <DownloadButton />
            <AuthorBadge author={author} />
          </aside>
        )}
        <article className="flex-1 prose prose-slate dark:prose-invert">
          {children}
          <SocialShare />
        </article>
      </div>
    </div>
  );
}
