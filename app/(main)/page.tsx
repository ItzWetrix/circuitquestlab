import Image from "next/image";
import Link from "next/link";
import { getContentItems } from "@/modules/content-reader";
import { Project, Article } from "@/modules/types";
import ProjectCard from "@/modules/components/ProjectCard";
import StarLayer from "@/modules/components/StarLayer";

export default function Home() {
  const projects = getContentItems<Project>("projects").filter(
    (project) => project.title && project.description && project.date
  );
  const articles = getContentItems<Article>("articles").filter(
    (article) => article.title && article.description && article.date
  );
  const featuredProjects = projects.slice(0, 3);
  const latestArticles = articles.slice(0, 2);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0e12] font-sans text-gray-200 antialiased">
      <StarLayer />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <main className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="rounded-4xl border border-white/10 bg-[#11131c]/80 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-[#0f172a]/95 shadow-[0_0_35px_rgba(168,85,247,0.18)]">
                <Image src="/images/icon.svg" alt="Circuit Quest Lab Logo" width={48} height={48} />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Circuit Quest Lab
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-zinc-300 leading-relaxed">
              Documenting hardware builds, DIY engineering, and exploring physics. Follow my journey from the first prototype to the final product.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                href="https://www.youtube.com/@CircuitQuestLab?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B80710]"
              >
                <Image
                  src="/images/youtube-logo-icon_filled.svg"
                  alt="YouTube Logo"
                  width={18}
                  height={18}
                  className="invert"
                />
                YouTube
              </a>
              <a
                href="https://links.circuitquestlab.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#A855F7] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b56bf8]"
              >
                Links Hub
              </a>
              <Link
                href="#featured-projects"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-zinc-800 bg-[#11131c] px-6 py-3.5 text-sm font-semibold text-[#A855F7] transition hover:border-[#A855F7] hover:bg-[#161a29]"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-[#11131c] p-6 text-left">
              <span className="text-xs uppercase tracking-[0.28em] text-[#A855F7]">Projects</span>
              <p className="mt-4 text-3xl font-bold text-white">{projects.length}</p>
              <p className="mt-2 text-sm text-zinc-400">Active engineering builds and documentation pages.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-[#11131c] p-6 text-left">
              <span className="text-xs uppercase tracking-[0.28em] text-[#A855F7]">Articles</span>
              <p className="mt-4 text-3xl font-bold text-white">{articles.length}</p>
              <p className="mt-2 text-sm text-zinc-400">Bench notes, electronics lessons, and lab experiments.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-[#11131c] p-6 text-left">
              <span className="text-xs uppercase tracking-[0.28em] text-[#A855F7]">Latest Update</span>
              <p className="mt-4 text-3xl font-bold text-white">{articles[0]?.title ?? "No article yet"}</p>
              <p className="mt-2 text-sm text-zinc-400">Fresh content from the lab linked below.</p>
            </div>
          </div>
        </main>

        <section id="featured-projects" className="mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#A855F7]">Featured Builds</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Latest project work</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-[#11131c] px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-500/50 hover:bg-[#161a29]"
            >
              View all projects
            </Link>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-3">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))
            ) : (
              <div className="rounded-3xl border border-zinc-800 bg-[#11131c] p-10 text-center text-zinc-400">
                No projects available.
              </div>
            )}
          </div>
        </section>

        <section className="mt-24 pb-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#A855F7]">Lab Articles</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Bench notes & updates</h2>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-[#11131c] px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-500/50 hover:bg-[#161a29]"
            >
              Read all articles
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {latestArticles.length > 0 ? (
              latestArticles.map((article) => {
                const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group block rounded-3xl border border-zinc-800 bg-[#11131c] p-6 transition hover:border-purple-500/50 hover:bg-[#161a29]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.24em] text-[#A855F7]">{formattedDate}</span>
                      <span className="rounded-full bg-[#181b25] px-3 py-1 text-xs font-semibold text-zinc-300">Article</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-purple-300">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{article.description}</p>
                    <div className="mt-6 text-sm font-semibold text-purple-400 transition group-hover:text-purple-300">
                      Read the article →
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="rounded-3xl border border-zinc-800 bg-[#11131c] p-10 text-center text-zinc-400">
                No articles available.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
