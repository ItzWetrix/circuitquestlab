import Link from "next/link";
import { getContentItems } from "@/modules/content-reader";
import { Article } from "@/modules/types";

export default function ArticlesPage() {
  const articles = getContentItems<Article>("articles");

  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-200 font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16 border-b border-zinc-900 pb-8">
          <Link href="/" className="text-sm font-bold text-[#A855F7] hover:underline uppercase tracking-wider">
            ← Back to Lab
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 uppercase">
            Lab Notes & Articles
          </h1>
          <p className="text-zinc-400 mt-2 max-w-xl">
            Quick updates, physics rants, and engineering thoughts straight from the bench.
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="text-zinc-500">No articles available.</p>
        ) : (
          <div className="flex flex-col gap-8">
            {articles.map((article) => {
              const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              });

              return (
                <Link
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                  className="group block p-6 bg-[#13141c] border border-zinc-800 rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300"
                >
                  <span className="text-xs font-semibold text-[#A855F7] tracking-wider uppercase">
                    {formattedDate}
                  </span>
                  <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mt-2 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-4 text-xs font-bold text-purple-400 group-hover:text-purple-300 flex items-center gap-1">
                    READ ARTICLE →
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}