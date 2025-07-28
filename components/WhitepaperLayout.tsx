// components/WhitepaperLayout.tsx
import SectionNav from "./SectionNav";
import AuthorBadge from "./AuthorBadge";
import DownloadButton from "./DownloadButton";
import SocialShare from "./SocialShare";
import SEO from "./SEO";

export default function WhitepaperLayout({
  title,
  description,
  sealedAt,
  veritasId,
  author,
  toc,
  children,
  image = "/media/logo.png",
  slug = ""
}: {
  title: string;
  description?: string;
  sealedAt?: string;
  veritasId?: string;
  author?: string;
  toc?: Array<{ label: string; href: string }>;
  children: React.ReactNode;
  image?: string;
  slug?: string;
}) {
  const seoUrl = `https://guardianchain.app/whitepaper/${slug}`;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <SEO
        title={title}
        description={description}
        image={image}
        url={seoUrl}
      />

      <section className="relative py-14 px-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-500 text-white shadow-xl">
        <h1 className="text-4xl font-extrabold mb-1">{title}</h1>
        <p className="text-lg mb-3 text-indigo-100">{description}</p>
        <div className="flex gap-6 items-center text-xs text-indigo-200">
          {sealedAt && <span>Sealed: {sealedAt}</span>}
          {veritasId && <span>Veritas ID: {veritasId}</span>}
          {author && <span>By: {author}</span>}
        </div>
        <div className="absolute right-6 top-6">
          <SocialShare />
        </div>
      </section>

      <div className="container mx-auto flex flex-col md:flex-row gap-10 pt-8 pb-24 px-6">
        {toc && (
          <aside className="w-full md:w-64 sticky top-24 mb-8">
            <SectionNav toc={toc} />
            <DownloadButton />
            <AuthorBadge author={author} />
          </aside>
        )}
        <article className="flex-1 prose dark:prose-invert lg:prose-lg max-w-3xl">{children}</article>
      </div>
    </div>
  );
}
