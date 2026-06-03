import { Code2, Cloud, Rocket } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    body: "End-to-end product work — from API design to pixel-perfect UI.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    body: "Comfortable deploying on AWS, GCP, Vercel, and serverless platforms.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    body: "Bias toward shipping. MVPs in days, polished iterations after.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-primary mb-2">01. About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A quick intro.
          </h2>
          <div className="text-muted-foreground space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              I'm a developer who likes building products people actually use.
              My day-to-day spans React, TypeScript, Node, and a healthy bit of
              cloud infrastructure.
            </p>
            <p>
              [Replace with a short story about you — what you're working on,
              what you care about, what you've shipped recently.]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
