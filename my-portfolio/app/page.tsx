import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { AnimatedStats } from "@/components/AnimatedStats"; 
const stats = [
  { label: "Hackathons", value: "7+" },
  { label: "Projects Completed", value: "12+" },
  { label: "Coffee Beans Tasted", value: "24+" },
  { label: "Miles Logged Running", value: "220+" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="projects" className="mt-24 space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-accent-2">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold text-white">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
             A rotating set of prototypes, hackathon winners, and shipped
             products that pushed my thinking on how to blend resilient
             architecture with delightful user journeys.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent-2 transition hover:text-white"
          >
            Browse all →
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mt-24 grid gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/30 p-8 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-accent-2">
            About me
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Resilient, competitive, and relentlessly curious.
          </h2>
          <p className="text-slate-300">
            I&apos;m a Mexican American first-generation student at UTSA.
            Growing up between cultures taught me grit—after my parents were
            deported I learned how to adapt quickly, lean on community, and use
            education as a launchpad. Today, I channel that same resilience into
            hackathons, ICPC contests, research, and every build session.
          </p>
          <p className="text-slate-300">
            Outside of code you&apos;ll find me running 5Ks, learning about
            specialty coffee, or journaling ideas for the next side project. My
            favorite collaborations are those where product thinking, ML, and
            storytelling overlap.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-2 transition hover:text-white"
          >
            Read the full story →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <AnimatedStats
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mt-24 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center"
      >
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.4em] text-accent-2">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Let&apos;s build something memorable.
          </h2>
          <p className="text-slate-300">
            Whether you&apos;re hiring, planning your next hackathon team, or
            just want to nerd out about computer science, coffee, or running my inbox is
            always open. I reply within 24 hours.
          </p>
          <div className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Preferred channels
            </p>
            <ul className="mt-3 space-y-2 text-slate-200">
              <li>Email: bryanchora@gmail.com</li>
              <li>LinkedIn: /in/bryanchora</li>
              <li>GitHub: @Choroyo</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
