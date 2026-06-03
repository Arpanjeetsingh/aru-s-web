import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono text-primary mb-2">06. Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">build something</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm currently open to full-time roles, internships, and interesting
            freelance projects. The fastest way to reach me is email.
          </p>

          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow-primary transition-shadow"
          >
            <Mail className="h-4 w-4" />
            you@example.com
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Your City, Country
            </span>
            <a
              href="https://github.com/"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
