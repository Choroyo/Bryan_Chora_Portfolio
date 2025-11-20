import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

const timeline = [
  {
    year: "2024",
    title: "Data Science & SWE focus at UTSA",
    description:
      "Deepening my work in ML systems, leading hackathon teams, and mentoring freshmen on how to ship confidently.",
  },
  {
    year: "2023",
    title: "Hackathon wins + ML experimentation",
    description:
      "Traveled across Texas to compete, earned top ranks, and fell in love with rapid prototyping.",
  },
  {
    year: "2021",
    title: "Nitro Coffee & Android builds",
    description:
      "Shipped my first social app, learned product analytics, and realized how much I enjoy community-building.",
  },
  {
    year: "2019",
    title: "First-gen journey begins",
    description:
      "Navigated college as a first-gen student, balancing family responsibilities with a relentless curiosity.",
  },
];

const values = [
  {
    label: "Resilience",
    copy:
      "I show up for my team with optimism and grit, especially when the stakes are high.",
  },
  {
    label: "Craft",
    copy: "Every screen, API, and deck gets the same level of care and polish.",
  },
  {
    label: "Community",
    copy:
      "I lift others up through mentorship, organizing meetups, and sharing knowledge.",
  },
  {
    label: "Curiosity",
    copy: "I ask better questions to build better products.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-accent-2">
            About
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Bryan Chora, a builder rooted in gratitude and possibility.
          </h1>
          <p className="text-lg text-slate-300">
            I&apos;m a Mexican American, first-generation student at UTSA who is
            fueled by a love for technology, community, and great coffee. My
            parents&apos; deportation forced me to mature quickly—learning how
            to navigate grants, jobs, and school on my own. Instead of slowing
            me down, those experiences taught me how to lead with empathy, plan
            ahead, and stay calm under pressure.
          </p>
          <p className="text-lg text-slate-300">
            Today I chase ambitious ideas that combine data, ML, and expressive
            interfaces. Whether I&apos;m prepping for an ICPC contest, leading a
            hackathon squad, or iterating on a product, I bring the same energy:
            thoughtful questions, clean execution, and a collaborative spirit.
          </p>
          <SocialLinks />
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-900/30 p-6">
          <div className="relative aspect-[6/4]  overflow-hidden rounded-2xl border border-slate-800/70">
            <Image
              src="/images/hackathon_pic.jpg"
              alt="Bryan working from a coffeeshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">
            Fun facts
          </p>
          <ul className="mt-3 space-y-2 text-slate-200">
            <li>☕ Certified coffee nerd brewing V60s and experimenting with beans.</li>
            <li>🏃 Weekly 5K runner chasing a sub-20 minute PR.</li>
            <li>🧠 Always prototyping the next ML-powered tool for students.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-white">Values</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.label}
              className="rounded-2xl border border-slate-700 bg-blue_navy p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent-2">
                {value.label}
              </p>
              <p className="mt-3 text-slate-300">{value.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-white">Timeline</h2>
        <div className="space-y-6 border-l border-slate-800 pl-6">
          {timeline.map((entry) => (
            <div key={entry.year} className="relative">
              <span className="absolute -left-[30px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-slate-950" />
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
                {entry.year}
              </p>
              <h3 className="text-xl font-semibold text-white">
                {entry.title}
              </h3>
              <p className="text-slate-300">{entry.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
