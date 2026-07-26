import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getContentBySlug } from "@/modules/content-reader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Načteme data ze složky content/articles podle parametru slug
  const articleData = getContentBySlug("articles", slug);

  // Pokud článek neexistuje, Next.js automaticky zobrazí 404
  if (!articleData) notFound();

  const { metadata, content } = articleData;
  const htmlContent = marked(content);

  const formattedDate = new Date(metadata.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-200 font-sans py-20 px-6">
      <article className="max-w-3xl mx-auto">
        
        {/* Navigace zpět */}
        <Link href="/articles" className="text-sm font-bold text-[#A855F7] hover:underline uppercase tracking-wider">
          ← Back to Articles
        </Link>

        {/* Hlavička článku */}
        <header className="mt-6 mb-12 border-b border-zinc-900 pb-8">
          <span className="text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
            Published on {formattedDate}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
            {metadata.title}
          </h1>
          {metadata.description && (
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed italic">
              {metadata.description}
            </p>
          )}
        </header>

        {/* Samotný text článku vygenerovaný z Markdownu */}
        <div 
          className="prose prose-invert prose-purple max-w-none 
            prose-headings:text-white prose-headings:font-bold 
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2 prose-h2:mt-10
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-code:text-purple-300 prose-code:bg-zinc-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-[#13141c] prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

      </article>
    </div>
  );
}