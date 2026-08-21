import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  Folder,
  Globe,
  Layers,
  Code2,
  Terminal,
  Activity,
  Server,
  Bot
} from "lucide-react";

const Project = () => {
  const [filter, setFilter] = useState("All");

  // Dynamically set title
  useEffect(() => {
    document.title = "Experience & Projects | Meng - Portfolio";
  }, []);

  const projectsData = [
    {
      title: "HR Management System",
      category: "Business Systems",
      description: "Employee registration, department management, attendance tracking (Check-in/out, QR, Location/geofencing), overtime workflows, and notification integration.",
      technologies: ["React", "PostgreSQL", "REST APIs", "Backend Services", "Role-based Logic"],
      icon: Activity
    },
    {
      title: "Finance Management System",
      category: "Business Systems",
      description: "Chart of Accounts, Journal Entries, General Ledger, Trial Balance, Income Statement, Balance Sheet, Cash Flow, Expense Management, and Fixed Assets.",
      technologies: ["Debit/Credit Validation", "Financial Data Structures", "Excel/PDF Export", "Relational DB"],
      icon: Layers
    },
    {
      title: "Logistics Management System",
      category: "Business Systems",
      description: "Scalable architecture for logistics operations, designed to support increasing business transactions and high user volumes.",
      technologies: ["Worker Services", "Redis", "Object Storage", "Background Processing", "PostgreSQL"],
      icon: Server
    },
    {
      title: "System Architecture & Infrastructure",
      category: "Architecture",
      description: "Planned application infrastructure including Load Balancers, App Servers, Redis, PostgreSQL, Background Workers, and AWS S3.",
      technologies: ["VPS Sizing", "Load Balancing", "SSL", "Monitoring & Alerting", "Backup Infrastructure"],
      icon: CloudIcon
    },
    {
      title: "AI Video Assistant Concept",
      category: "AI & Automation",
      description: "An AI assistant for Adobe Premiere Pro. Converts natural-language instructions into structured JSON commands for editing operations via plugin.",
      technologies: ["LLM", "Structured JSON", "Premiere Pro Plugin", "Video Processing", "AI Integration"],
      icon: Bot
    },
    {
      title: "Automated Notifications & Workflows",
      category: "AI & Automation",
      description: "Developed Telegram notification systems for automated attendance, overtime requests, approval workflows, and scheduled data processing.",
      technologies: ["Python", "FastAPI", "Telegram Bot API", "APScheduler", "SQLite"],
      icon: Terminal
    }
  ];

  const categories = ["All", "Business Systems", "Architecture", "AI & Automation"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <Layout>
      <div className="flex flex-col gap-12 text-left max-w-6xl mx-auto py-8">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <Folder size={12} />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Software & Systems Development</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            A catalog of business management systems, scalable system architectures, and AI-driven automation workflows I have designed and developed.
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
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial-gradient from-violet-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider bg-violet-500/10 px-2.5 py-1 rounded-md border border-violet-500/20">
                      {project.category}
                    </span>
                    <IconComponent size={18} className="text-slate-400 dark:text-slate-500" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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
                </div>
              </div>
            );
          })}
        </section>

      </div>
    </Layout>
  );
};

// Helper for the Cloud icon missing in imports
const CloudIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.5 19a1.5 1.5 0 0 0 1.5-1.5 4.5 4.5 0 0 0-3-4.2V13a4.5 4.5 0 0 0-8.8-1.3A3.5 3.5 0 0 0 4 15.5a1.5 1.5 0 0 0 1.5 1.5Z"/>
  </svg>
);

export default Project;
