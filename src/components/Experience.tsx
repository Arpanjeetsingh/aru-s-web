const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    org: "Company Name",
    period: "Summer 2025",
    bullets: [
      "Built [feature] used by [N] internal users, reducing [metric] by X%.",
      "Owned the migration from [old] to [new], including data backfill and rollout.",
      "Worked across the stack — React, Node, Postgres, AWS Lambda.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Previous Company",
    period: "2024 – 2025",
    bullets: [
      "Shipped [N] customer-facing features end-to-end.",
      "Improved core page load by Xs through code-splitting and caching.",
      "Mentored two interns through their onboarding projects.",
    ],
  },
  {
    role: "Open Source / Side Projects",
    org: "Self-directed",
    period: "Ongoing",
    bullets: [
      "Maintain [project] with [N] stars and weekly contributors.",
      "Write occasional posts about [topic] on [platform].",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">03. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where I've worked.
          </h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-3" />
          <div className="space-y-10">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="relative pl-10 md:pl-12">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary shadow-glow-primary md:left-1" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold">
                    {item.role}{" "}
                    <span className="text-primary">@ {item.org}</span>
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
