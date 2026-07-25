import LinkCard from "./modules/LinkCard";
import { featuredLink, links } from "./modules/link-data";

export default function LinksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090f] text-white">
      <div
        className="absolute inset-0 z-0 bg-repeat opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/bg-stars.svg')",
          backgroundSize: "500px 500px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.55)] backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/5 shadow-[0_0_50px_rgba(168,85,247,0.14)]">
                <img src="/images/icon.svg" alt="Circuit Quest Lab Logo" className="h-14 w-14" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#A855F7]">Circuit Quest Lab</p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Links & Socials</h1>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#11131c]/90 px-5 py-4 text-left shadow-[0_8px_40px_rgba(0,0,0,0.28)]">
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Lab Mission</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200 max-w-sm">
                Follow the lab for electronics builds, DIY circuit experiments, and future project drops.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard link={featuredLink} className="sm:col-span-2 lg:col-span-3" />
          {links.map((link) => (
            <LinkCard key={link.label} link={link} />
          ))}
        </section>
      </div>
    </div>
  );
}
