import Link from "next/link";
import Image from "next/image";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="group flex flex-col bg-[#13141c] border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300"
    >
      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
        <Image
          src={project.image || "/images/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-[#A855F7] tracking-wider uppercase mb-2">
          {formattedDate}
        </span>
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>
        
        <div className="mt-auto flex items-center text-xs font-bold text-white bg-zinc-800 group-hover:bg-[#A855F7] py-2.5 px-4 rounded-xl transition-colors justify-center w-full">
          VIEW DOCUMENTATION
        </div>
      </div>
    </Link>
  );
}