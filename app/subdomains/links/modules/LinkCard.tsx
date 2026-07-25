import Image from "next/image";
import type { LinkItem } from "./link-data";

export default function LinkCard({ link, className = "" }: { link: LinkItem; className?: string }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-4xl border border-white/10 bg-[#11131c]/95 p-6 text-left shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#A855F7]/35 hover:shadow-[0_25px_70px_rgba(168,85,247,0.22)] ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative flex items-center gap-4">
        <div className={`flex h-16 w-16 aspect-square items-center justify-center rounded-3xl bg-linear-to-br ${link.accent} shadow-[0_0_30px_rgba(168,85,247,0.18)]`}>
          
          {/* FIX: Locked wrapper box with relative sizing */}
          <div className="relative h-7 w-7 flex items-center justify-center">
            <Image
              src={link.icon}
              alt={`${link.label} icon`}
              fill
              className={`object-contain ${link.invert ? "invert" : ""}`}
            />
          </div>

        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">{link.label}</h2>
          <p className="mt-2 text-sm text-zinc-400">{link.description}</p>
        </div>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A855F7] transition group-hover:translate-x-1">
        Visit {link.label}
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}