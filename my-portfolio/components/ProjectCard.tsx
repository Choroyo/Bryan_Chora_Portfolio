"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

const ProjectCard = ({ project, priority }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group flex flex-col rounded-3xl border border-slate-700 bg-blue_navy p-6 backdrop-blur"
    >
      <div className="relative mb-4 h-64 overflow-hidden rounded-2xl border border-slate-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 500px"
          priority={priority}
        />
      </div>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>{project.year}</span>
        <span>{project.technologies[0]}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-slate-300">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-slate-700 px-3 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-slate-900 transition hover:text-white hover:opacity-80 border border-slate-700"
        >
          Project Details
          <RiExternalLinkLine />
        </Link>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-white"
          >
            <FaGithub />
            Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-accent hover:text-white"
          >
            <RiExternalLinkLine />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
