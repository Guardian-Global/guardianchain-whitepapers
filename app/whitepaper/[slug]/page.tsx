import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import WhitepaperLayout from '../../../components/WhitepaperLayout';
import { MDXRemote } from 'next-mdx-remote/rsc';

const whitepaperDir = path.join(process.cwd(), 'content', 'whitepapers');

export async function generateStaticParams() {
  return fs
    .readdirSync(whitepaperDir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => ({ slug: f.replace('.mdx', '') }));
}

interface PageProps {
  params: { slug: string };
}

export default async function WhitepaperPage({ params }: PageProps) {
  const slug = params.slug;
  const filePath = path.join(whitepaperDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();
  const source = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(source);

  return (
    <WhitepaperLayout
      title={data.title}
      description={data.description}
      sealedAt={data.sealedAt}
      veritasId={data.veritasId}
      author={data.author}
      toc={data.toc}
    >
      <MDXRemote source={content} />
    </WhitepaperLayout>
  );
}
