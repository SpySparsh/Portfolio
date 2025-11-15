import { Code, Trophy, ArrowRight } from "lucide-react";

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="py-20 reveal relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        Problem <span className="gradient-text">Solving</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {/* LeetCode Card */}
        <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-xl hover:shadow-yellow-900/20 transition-all group border-t-4 border-yellow-500">
          <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
            <Code className="w-10 h-10 text-yellow-500" />
          </div>
          <h3 className="text-6xl font-extrabold mb-2">150+</h3>
          <p className="text-2xl text-yellow-400 font-semibold mb-4">LeetCode Problems</p>
          <p className="text-muted-foreground">
            Consistently solving complex algorithmic challenges to strengthen Data Structures and
            Algorithms knowledge.
          </p>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 hover:text-yellow-400 font-medium flex items-center gap-2 transition-colors"
          >
            View Profile <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hackathon Card */}
        <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-xl hover:shadow-blue-900/20 transition-all group border-t-4 border-blue-500">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
            <Trophy className="w-10 h-10 text-blue-500" />
          </div>
          <h3 className="text-3xl font-bold mb-2">Hackathon Competitor</h3>
          <p className="text-xl text-blue-400 font-semibold mb-4">College Level</p>
          <p className="text-muted-foreground">
            Built and presented a real-time collaborative coding platform (MERN Stack) in a
            competitive environment.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
              Team Leader
            </span>
            <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
              Presenter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
