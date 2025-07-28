// components/AuthorBadge.tsx
export default function AuthorBadge({ author }: { author?: string }) {
  if (!author) return null;
  return (
    <div className="mt-8 flex items-center gap-2 text-xs text-indigo-800 dark:text-yellow-400 border-l-4 border-indigo-700 dark:border-yellow-400 pl-3 py-1 bg-indigo-50/60 dark:bg-yellow-100/10 rounded">
      <span className="font-bold">Author Verified:</span>
      <span>{author}</span>
    </div>
  );
}
