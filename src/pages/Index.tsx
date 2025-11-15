import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specializations from "@/components/Specializations";
import ProblemSolving from "@/components/ProblemSolving";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import spaceBackground from "@/assets/space-background.jpg";

const Index = () => {
  useEffect(() => {
    // Set space background
    document.body.style.backgroundImage = `url(${spaceBackground})`;

    // Cursor glow effect
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <Hero />
        <Specializations />
        <ProblemSolving />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
