import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";

const stats = [
  { label: "Hackathons", value: "10+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Coffee Beans Tasted", value: "35" },
  { label: "Miles Logged (5K)", value: "220" },
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
              A sample of the experiments, hackathon builds, and production apps
              that taught me how to design resilient systems and joyful
              interfaces.
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
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-6 text-center"
            >
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                {stat.label}
              </p>
            </div>
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
            just want to nerd out about ML, coffee, or running—my inbox is
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
