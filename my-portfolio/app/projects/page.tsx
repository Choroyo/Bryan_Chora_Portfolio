import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-accent-2">
          Projects
        </p>
        <h1 className="text-4xl font-semibold text-white">
          A mix of hackathon builds, research, and production-ready apps.
        </h1>
        <p className="text-slate-300">
          Every project below taught me a new skill—whether that was scaling a
          backend, modeling data, or crafting delightful motion. Dive in to see
          what I&apos;ve been experimenting with lately.
        </p>
      </section>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
