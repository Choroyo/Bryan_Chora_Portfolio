import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project not found | Bryan Chora",
    };
  }

  return {
    title: `${project.title} | Bryan Chora`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-accent-2">
            Case Study
          </p>
          <h1 className="text-4xl font-semibold text-white">
            {project.title}
          </h1>
          <p className="text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-800/70 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-white"
              >
                <FaGithub />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-white"
              >
                <RiExternalLinkLine />
                Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-800/80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 600px"
            priority
          />
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/30 p-8">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <ul className="space-y-4 text-slate-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <p>{highlight}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 text-center">
        <p className="text-lg text-slate-200">
          Want the TL;DR or prefer a narrated walkthrough?
        </p>
        <p className="text-sm text-slate-400">
          Reach out and I&apos;ll share behind-the-scenes notes or a quick demo
          recording.
        </p>
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-900 transition hover:bg-accent-2"
        >
          Contact Bryan
        </Link>
      </section>
    </div>
  );
}
