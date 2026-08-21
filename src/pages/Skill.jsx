import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  Code2,
  Terminal,
  Database,
  Sliders,
  Settings,
  Cpu,
  MonitorPlay,
  Network
} from "lucide-react";

const Skill = () => {
  // Dynamically set title
  useEffect(() => {
    document.title = "Skills | Meng - Tech Stack";
  }, []);

  const skillGroups = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
      accent: "bg-violet-500 shadow-[0_0_10px_#8B5CF6]",
      items: [
        { name: "React & Next.js", level: 95, desc: "Building scalable interfaces and SPAs." },
        { name: "TypeScript & JS", level: 90, desc: "Strongly typed logic and dynamic state." },
        { name: "Tailwind CSS", level: 95, desc: "Utility-first styling, glassmorphism, responsive UI." },
        { name: "Vite & React Router", level: 90, desc: "Fast build tools and complex application routing." },
        { name: "Dashboard & Tables", level: 90, desc: "Data filtering, form validation, and Excel/PDF export." }
      ]
    },
    {
      title: "Backend Development",
      icon: Terminal,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
      accent: "bg-indigo-500 shadow-[0_0_10px_#6366F1]",
      items: [
        { name: "Node.js & Express.js", level: 90, desc: "REST APIs, background processing, and middlewares." },
        { name: "Python & FastAPI", level: 85, desc: "AI integrations, data processing, and fast endpoints." },
        { name: "Java & Spring Boot", level: 75, desc: "Enterprise patterns and structured architectures." },
        { name: "API Integration", level: 90, desc: "Auth, validation, error handling, and webhooks." }
      ]
    },
    {
      title: "Database & Data",
      icon: Database,
      color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
      accent: "bg-sky-500 shadow-[0_0_10px_#0EA5E9]",
      items: [
        { name: "PostgreSQL", level: 90, desc: "Relational modeling, constraints, relationships." },
        { name: "SQL & SQLite", level: 85, desc: "Complex queries, data reporting, lightweight DBs." },
        { name: "Financial Data Management", level: 85, desc: "Excel data processing and transaction schemas." }
      ]
    },
    {
      title: "Infrastructure & DevOps",
      icon: Settings,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      accent: "bg-cyan-500 shadow-[0_0_10px_#06B6D4]",
      items: [
        { name: "Linux / Ubuntu & VPS", level: 85, desc: "Server provisioning, application & worker servers." },
        { name: "Redis & PostgreSQL Infra", level: 80, desc: "Caching, state management, and DB hosting." },
        { name: "Load Balancing & SSL", level: 85, desc: "High availability, DNS, reverse proxies." },
        { name: "AWS S3 & Backups", level: 80, desc: "Object storage and retention planning." }
      ]
    },
    {
      title: "Networking & IT Support",
      icon: Network,
      color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
      accent: "bg-pink-500 shadow-[0_0_10px_#EC4899]",
      items: [
        { name: "TCP/IP & IPv4 / NAT", level: 90, desc: "Network fundamentals, routing, troubleshooting." },
        { name: "Wi-Fi & DNS", level: 90, desc: "Local connectivity and domain resolution." },
        { name: "PowerShell & Windows", level: 85, desc: "OS configuration and developer environment setups." },
        { name: "iOS IPA Deployment", level: 80, desc: "Apple Dev Mode, certs, and mobile device management." }
      ]
    },
    {
      title: "AI & Video Automation",
      icon: MonitorPlay,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      accent: "bg-emerald-500 shadow-[0_0_10px_#10B981]",
      items: [
        { name: "Local LLMs (Ollama, Qwen)", level: 85, desc: "AI Coding tools, structured JSON, app concepts." },
        { name: "Workflow Automation", level: 90, desc: "Telegram Bots, scheduled tasks, processing pipelines." },
        { name: "FFmpeg & yt-dlp", level: 85, desc: "Video processing automation and media handling." },
        { name: "Premiere Pro Plugin Dev", level: 80, desc: "AI video editing concepts and automations." }
      ]
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-12 text-left max-w-6xl mx-auto px-6 py-12">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <Sliders size={12} />
            <span>Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            A comprehensive overview of my technology stack, framework proficiencies, and systems engineering tools.
          </p>
        </section>

        {/* Skill Groups Grid */}
        <section className="grid md:grid-cols-2 gap-8 animate-slide-up delay-200">
          {skillGroups.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <div
                key={gIdx}
                className={`bg-slate-100/40 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${group.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{group.title}</h3>
                </div>

                <div className="grid sm:grid-cols-1 gap-6">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1.5 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/skill:text-violet-600 dark:group-hover/skill:text-violet-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      
                      {/* Bar Container */}
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-300 dark:border-white/5">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${group.accent}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-500 leading-relaxed mt-0.5 opacity-90 group-hover/skill:opacity-100 transition-opacity">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

      </div>
    </Layout>
  );
};

export default Skill;
