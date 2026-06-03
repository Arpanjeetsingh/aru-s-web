import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Your Name. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" className="hover:text-foreground transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="mailto:you@example.com" aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
