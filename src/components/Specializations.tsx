import {
  Layout,
  Server,
  BrainCircuit,
  FileCode2,
  Code2,
  Atom,
  Box,
  Database,
  Cloud,
  GitBranch,
} from "lucide-react";

const Specializations = () => {
  const domains = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Crafting responsive and dynamic user interfaces with React, TailwindCSS, and modern JavaScript.",
      color: "text-purple-400",
      glowColor: "hover:shadow-purple-900/20",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust server-side logic, REST APIs, and WebSockets with Node.js, Express, MongoDB & PostgreSQL.",
      color: "text-blue-400",
      glowColor: "hover:shadow-blue-900/20",
    },
    {
      icon: BrainCircuit,
      title: "AI / ML",
      description:
        "Developing models with PyTorch, scikit-learn, Pandas, and NumPy for data analysis and prediction.",
      color: "text-indigo-400",
      glowColor: "hover:shadow-indigo-900/20",
    },
  ];

  const technologies = [
    { icon: FileCode2, name: "JavaScript", color: "text-yellow-400" },
    { icon: Code2, name: "Python", color: "text-blue-400" },
    { icon: Atom, name: "React", color: "text-cyan-400" },
    { icon: Box, name: "Node.js", color: "text-green-500" },
    { icon: Database, name: "SQL/NoSQL", color: "text-gray-400" },
    { icon: Cloud, name: "AWS/Vercel", color: "text-orange-400" },
    { icon: GitBranch, name: "Git", color: "text-red-400" },
  ];

  return (
    <section id="specializations" className="py-20 reveal relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Specializations</span>
      </h2>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className={`glass-card p-6 rounded-xl hover:shadow-xl ${domain.glowColor} transition-all transform hover:-translate-y-1`}
          >
            <domain.icon className={`w-10 h-10 mb-4 ${domain.color}`} />
            <h3 className="text-2xl font-semibold mb-2">{domain.title}</h3>
            <p className="text-muted-foreground">{domain.description}</p>
          </div>
        ))}
      </div>

      {/* Technology Icons */}
      <h3 className="text-2xl font-bold text-center mb-8 text-muted-foreground">
        Technologies I Work With
      </h3>
      <div className="glass-card p-8 rounded-xl mx-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech) => (
            <div key={tech.name} className="text-center group">
              <tech.icon className={`w-10 h-10 mx-auto ${tech.color} mb-2`} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
