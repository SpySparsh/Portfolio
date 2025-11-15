import { useEffect, useState } from "react";
import { Download, Send, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const roles = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Backend Engineer",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        timeout = setTimeout(type, 150);
      } else if (!isDeleting && charIndex === currentRole.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        timeout = setTimeout(type, 75);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        timeout = setTimeout(type, 500);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [roleIndex, charIndex, isDeleting]);

  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-center text-center reveal relative z-10">
      {/* Profile Photo */}
      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <Avatar className="w-32 h-32 md:w-40 md:h-40 relative border-4 border-primary/30">
          <AvatarImage src={profilePhoto} alt="Sparsh Sharma" className="object-cover" />
          <AvatarFallback className="text-4xl font-bold">SS</AvatarFallback>
        </Avatar>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Hi, I'm <span className="gradient-text">Sparsh Sharma</span>
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        I'm a <span className="text-muted-foreground typing-cursor">{displayedText}</span>
      </h2>
      <p className="max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed px-4">
        I am a passionate Full Stack Developer with a strong foundation in building real-time,
        scalable applications and a keen interest in AI/ML. I thrive on solving complex problems,
        whether it's engineering a live stock screener, a collaborative code editor, or a
        multimodal diagnostic tool.
      </p>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        <a href="/resume.pdf" download="Resume-sparsh.pdf">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </a>
        <a href="#contact">
          <Button variant="outline" className="glass-card border-glass-border hover:border-muted transition-all">
            <Send className="w-5 h-5 mr-2" />
            Get in Touch
          </Button>
        </a>
      </div>

      {/* Social Chips */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://www.linkedin.com/in/sparsh-sharma-064070355/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:border-secondary transition-all"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/SpySparsh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:border-muted transition-all"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
