import ProjectCard from "@/components/ProjectCard";
import PhoneFrame from "@/components/PhoneFrame";
import { projects } from "@/data/content";

export default function Projects() {
  const gridProjects = projects.filter((p) => p.layout !== "vertical");
  const verticalProjects = projects.filter((p) => p.layout === "vertical");

  return (
    <section id="projects" className="bg-cream text-ink">
      <div className="mx-auto w-full max-w-4xl scroll-mt-8 px-6 py-14 sm:py-16">
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
