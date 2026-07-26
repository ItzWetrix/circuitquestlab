import Link from "next/link";
import { getContentItems } from "@/modules/content-reader";
import { Project } from "@/modules/types";
import ProjectGrid from "@/modules/components/ProjectGrid";

export default function ProjectsPage() {
  const projects = getContentItems<Project>("projects");

  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-200 font-sans py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-b border-zinc-900 pb-8">
          <Link href="/" className="text-sm font-bold text-[#A855F7] hover:underline uppercase tracking-wider">
            ← Back to Lab
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 uppercase">
            Engineering Documentation
          </h1>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}