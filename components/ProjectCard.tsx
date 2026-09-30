import Image from "next/image";
import AutoplayVideo from "@/components/AutoplayVideo";
import type { Project } from "@/data/content";

export default function ProjectCard({
  project,
  className = "aspect-video",
}: {
  project: Project;
  className?: string;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <a
      href={project.href}
      aria-label={project.title}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative block w-full overflow-hidden bg-[#e9e7e0] ${className}`}
    >
      {project.video ? (
        <AutoplayVideo
          src={project.video}
          title={project.title}
          speed={project.speed}
        />
      ) : project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-[15px] font-medium text-muted">
          {project.title}
        </span>
      )}
    </a>
  );
}
