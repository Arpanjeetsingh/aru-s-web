import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "Project One",
    description:
      "Short pitch: what it does, who it's for, the interesting tech choice.",
    tags: ["Next.js", "Postgres", "Stripe"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "AI-powered tool that does [thing]. Built in a weekend, used by [N] people.",
    tags: ["Python", "FastAPI", "OpenAI"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Project Three",
    description: "Dev tool I built to scratch my own itch. CLI + web dashboard.",
    tags: ["Go", "React", "SQLite"],
    repo: "#",
  },
  {
    title: "Project Four",
    description: "Mobile app for [use case]. Cross-platform, offline-first.",
    tags: ["React Native", "Expo", "Supabase"],
    live: "#",
    repo: "#",
  },
  {
    title: "Project Five",
    description: "Hackathon win. [What it solved] using [interesting approach].",
    tags: ["TypeScript", "WebSockets"],
    repo: "#",
  },
  {
    title: "Project Six",
    description: "Open-source library for [X]. Used in [N] downstream projects.",
    tags: ["TypeScript", "OSS"],
    repo: "#",
  },
];

function Card({ p }: { p: Project }) {
  return (
    <div className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-lg bg-gradient-primary opacity-90 group-hover:shadow-glow-primary transition-shadow" />
        <div className="flex items-center gap-2 text-muted-foreground">
          {p.repo && (
            <a href={p.repo} aria-label="Repository" className="hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
          )}
          {p.live && (
            <a href={p.live} aria-label="Live" className="hover:text-foreground">
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {p.title}
      </h3>
      <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {p.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="flex items-end justify-between mb-12 max-w-3xl">
          <div>
            <p className="text-sm font-mono text-primary mb-2">05. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Things I've built.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
