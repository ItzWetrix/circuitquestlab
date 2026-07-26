import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getContentBySlug } from "@/modules/content-reader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectData = getContentBySlug("projects", slug);

  if (!projectData) notFound();

  const { metadata, content } = projectData;
  const htmlContent = marked(content);

  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-200 font-sans py-20 px-6">
      <article className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-sm font-bold text-[#A855F7] hover:underline uppercase tracking-wider">
          ← Back to Projects
        </Link>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 mb-4">{metadata.title}</h1>
        
        {metadata.videoUrl && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 my-8">
            <iframe className="w-full h-full" src={metadata.videoUrl} allowFullScreen></iframe>
          </div>
        )}

        <div 
          className="prose prose-invert prose-purple max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}