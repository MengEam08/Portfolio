import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  Folder,
  Globe,
  Layers,
  Code2,
  Terminal,
  Activity,
  Search
} from "lucide-react";

const Github = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Project = () => {
  const [filter, setFilter] = useState("All");

  // Dynamically set title
  useEffect(() => {
    document.title = "Projects | Meng - Portfolio";
  }, []);

  const projectsData = [
    {
      title: "Student Management System",
      category: "Full-Stack",
      description: "Designed and developed a complete administrative system. Built with a responsive React frontend dashboard and secure Python API backend, organizing student enrollments, schedules, and grading metrics.",
      technologies: ["React", "Python", "SQL", "MySQL", "REST API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Telegram AI Integration Bot",
      category: "Full-Stack",
      description: "Programmed a smart Telegram bot using Python for automation. Configured a React-based frontend view embedded inside the app for options adjustments, leveraging AI tools to accelerate build speed.",
      technologies: ["Python", "React", "AI Integration", "XAMPP", "REST API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Legacy .NET System Modernization",
      category: "Systems & IT",
      description: "Maintained, debugged, and optimized legacy business database systems. Resolved critical application exceptions, optimized query loops, and modernised server operations using Visual Studio.",
      technologies: ["C#", ".NET", "SQL Server", "Visual Studio", "System Maintenance"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "React Native UI Prototypes",
      category: "UI/UX",
      description: "Drafted high-fidelity layout interfaces and blueprints for cross-platform mobile apps. Provided clear vector wireframes and design parameters to remote coding teams.",
      technologies: ["React Native", "UI/UX Design", "Figma", "Responsive Web Design"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure & Server Evaluator",
      category: "Systems & IT",
      description: "Conducted systems research on virtual private servers (VPS) and dedicated hosting networks, providing pricing, capacity, and deployment roadmap options for corporate needs.",
      technologies: ["Cloud VPS", "Dedicated Servers", "Networking", "Technical Documentation"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "QA System Testing Loop",
      category: "Systems & IT",
      description: "Administered systematic pre-deployment audits for external software deliveries. Logged bug statuses, managed compliance checks, and verified build stability.",
      technologies: ["QA Testing", "Functional Testing", "Git", "Bug Verification"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Full-Stack", "UI/UX", "Systems & IT"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <Layout>
      <div className="flex flex-col gap-12 text-left max-w-6xl mx-auto">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <Folder size={12} />
            <span>Project Index</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Recent Works</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Here is a catalog of development projects, user interfaces, legacy environment refactoring, and server evaluations.
          </p>
        </section>

        {/* Filters */}
        <section className="flex flex-wrap gap-3 border-b border-slate-200/50 dark:border-white/5 pb-6 animate-slide-up delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-violet-600 text-white shadow-sm dark:shadow-lg dark:shadow-violet-600/30"
                  : "bg-black/5 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-violet-500/30 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Project Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up delay-200">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
            >
              {/* Radial light gradient inside cards */}
              <div className="absolute inset-0 bg-radial-gradient from-violet-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider bg-violet-500/10 px-2.5 py-1 rounded-md border border-violet-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-mono">
                    <Activity size={12} className="text-emerald-500 animate-pulse" />
                    <span>Deployed</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-6 relative z-10">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300 bg-black/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-white/5 text-sm font-semibold">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-1.5 text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
                  >
                    <Globe size={14} />
                    <span>Live View</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  >
                    <Github size={14} />
                    <span>Codebase</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
    </Layout>
  );
};

export default Project;
