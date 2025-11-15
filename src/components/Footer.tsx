import { Github, Linkedin, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-card/30 border-t border-border pt-16 pb-8 relative z-10"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
          I'm currently open to new opportunities. Whether you have a project in mind or just want
          to connect, feel free to reach out!
        </p>

        <a
          href="mailto:sparshs730@gmail.com"
          className="text-2xl font-semibold hover:gradient-text transition-all inline-block mb-8"
        >
          sparshs730@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/SpySparsh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sparsh-sharma-064070355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/u/spyspring2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 transform"
          >
            <Code className="w-8 h-8" />
          </a>
        </div>

        <p className="text-muted-foreground/70">© 2024 Sparsh Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
