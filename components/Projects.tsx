import ProjectCard from "@/components/ProjectCard";
import PhoneFrame from "@/components/PhoneFrame";
import Sparkle from "@/components/Sparkle";
import { projects } from "@/data/content";

export default function Projects() {
  const gridProjects = projects.filter((p) => p.layout !== "vertical");
  const verticalProjects = projects.filter((p) => p.layout === "vertical");

  return (
    <section id="projects" className="relative overflow-hidden bg-cream text-ink">
      {/* duo sparkles — desktop gutters only */}
      <div
        className="pointer-events-none absolute inset-0 z-0 motion-reduce:hidden"
        aria-hidden="true"
      >
        <Sparkle className="absolute top-[70%] left-[1%] hidden w-16 -rotate-12 text-[#FBBF24] opacity-80 animate-[spin_28s_linear_infinite] lg:block" />
        <Sparkle className="absolute top-[60%] right-[2%] hidden w-10 rotate-[18deg] text-[#FB923C] opacity-70 lg:block" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-4xl scroll-mt-8 px-6 py-14 sm:py-16">
        <h2 className="text-[16px] font-normal text-muted">Projects</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {gridProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {verticalProjects.length > 0 && (
          <div className="mt-4 flex flex-col items-center gap-4">
            {verticalProjects.map((project) =>
              project.video ? (
                <PhoneFrame
                  key={project.title}
                  src={project.video}
                  title={project.title}
                  speed={project.speed}
                />
              ) : (
                <ProjectCard
                  key={project.title}
                  project={project}
                  className="aspect-[9/16] w-full max-w-[300px]"
                />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
