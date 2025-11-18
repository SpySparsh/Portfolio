import { LineChart, Code2, ShoppingBag, Activity } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Stock Screener",
      description:
        "A real-time small-cap stock screener with filters (Gap, RVOL, Halt Detection). Engineered with a Node.js/WebSocket backend to stream live market data to a React frontend via Socket.IO.",
      icon: LineChart,
      gradient: "from-purple-900 to-gray-900",
      iconColor: "text-purple-300",
      hoverGlow: "hover:shadow-purple-900/20",
      tags: ["React", "Node.js", "WebSockets", "Alpaca API"],
      liveUrl: "https://stock-screener-topaz.vercel.app/", // <-- ADD THIS
      codeUrl: "https://github.com/SpySparsh/Stock-Screener", // <-- ADD THIS
    },
    {
      title: "Collaborative Code Editor",
      description:
        "Full-stack editor enabling real-time collaboration. Features chat & session management via Redis, and secure in-browser live preview using the WebContainer API.",
      icon: Code2,
      gradient: "from-blue-900 to-gray-900",
      iconColor: "text-blue-300",
      hoverGlow: "hover:shadow-blue-900/20",
      tags: ["React", "Node.js", "Redis", "WebContainer"],
      liveUrl: "https://ai-project-collabrator-3875ox6jc.vercel.app/", // <-- ADD THIS
      codeUrl: "https://github.com/SpySparsh/AI-Project-Collabrator", // <-- ADD THIS
    },
    {
      title: "Full-Stack E-Commerce",
      description:
        "MERN stack app handling auth, cart, and orders. Integrated Razorpay for payments and a responsive admin dashboard for analytics.",
      icon: ShoppingBag,
      gradient: "from-indigo-900 to-gray-900",
      iconColor: "text-indigo-300",
      hoverGlow: "hover:shadow-indigo-900/20",
      tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
      liveUrl: "https://my-shop-p23q.vercel.app/", // <-- ADD THIS
      codeUrl: "https://github.com/SpySparsh/MyShop", // <-- ADD THIS
    },
    {
      title: "Live Search Scraper",
      description:
        "Real-time search engine scraper using Puppeteer and Node.js. Features a glassmorphic UI, anti-bot detection strategies, and a custom-built REST API.",
      icon: Search,
      gradient: "from-emerald-900 to-gray-900", // Green/Emerald theme for this one
      iconColor: "text-emerald-300",
      hoverGlow: "hover:shadow-emerald-900/20",
      tags: ["Puppeteer", "Node.js", "Express", "Docker"],
      liveUrl: "https://web-scraper-k3idijaj1-sparsh-sharmas-projects-d06435ee.vercel.app/", // REPLACE with your Vercel URL
      codeUrl: "https://github.com/SpySparsh/Web-Scraper", // REPLACE with your GitHub URL
    },
    {
      title: "Multimodal AI Diagnosis",
      description:
        "Dual-stream CNN-MLP model in PyTorch fusing X-rays with patient metadata. Integrated Grad-CAM & SHAP for explainability.",
      icon: Activity,
      gradient: "from-pink-900 to-gray-900",
      iconColor: "text-pink-300",
      hoverGlow: "hover:shadow-pink-900/20",
      tags: ["PyTorch", "CNN", "Pandas", "SHAP"],
      liveUrl: "https://your-live-demo-link.com", // <-- ADD THIS
      codeUrl: "https://github.com/SpySparsh/Multimodal-Disease-Classification-on-Clinical-Images-and-Metadata/tree/master", // <-- ADD THIS
    },
  ];

  return (
    <section id="projects" className="py-20 reveal relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`glass-card rounded-xl overflow-hidden flex flex-col group transition-all hover:scale-[1.02] hover:shadow-xl ${project.hoverGlow}`}
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-card relative overflow-hidden group-hover:opacity-90 transition-opacity">
              <div
                className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <project.icon className={`w-16 h-16 ${project.iconColor} opacity-50`} />
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {/* LIVE DEMO BUTTON */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-sm">
                      Live Demo
                    </Button>
                  </a>
                )}

                {/* CODE BUTTON */}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full glass-card text-sm">
                      Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
