import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import BorderGlow from "../components/common/BorderGlow";
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
      title: "UI/UX Design",
      icon: Code2,
      color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
      accent: "bg-pink-500 shadow-[0_0_10px_#EC4899]",
      items: [
        { name: "Figma & FigJam", level: 95, desc: "Prototyping, wireframing, and user flows." },
        { name: "HTML & Tailwind CSS", level: 95, desc: "Responsive interfaces and utility-first styling." }
      ]
    },
    {
      title: "Frontend Development",
      icon: MonitorPlay,
      color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
      accent: "bg-violet-500 shadow-[0_0_10px_#8B5CF6]",
      items: [
        { name: "React & React Native", level: 95, desc: "Building scalable web and mobile interfaces." },
        { name: "JavaScript & TypeScript", level: 90, desc: "Dynamic scripting and strong typing." },
        { name: "JSX / TSX", level: 90, desc: "Component-based UI architecture." }
      ]
    },
    {
      title: "Backend / Scripting",
      icon: Terminal,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
      accent: "bg-indigo-500 shadow-[0_0_10px_#6366F1]",
      items: [
        { name: "Python", level: 90, desc: "Backend logic, automation, and data processing." },
        { name: "Node.js", level: 85, desc: "REST APIs and server-side processing." }
      ]
    },
    {
      title: "Database & CMS",
      icon: Database,
      color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
      accent: "bg-sky-500 shadow-[0_0_10px_#0EA5E9]",
      items: [
        { name: "PostgreSQL", level: 90, desc: "Relational database modeling and queries." },
        { name: "SQLite", level: 90, desc: "Lightweight local storage integration." },
        { name: "WordPress", level: 85, desc: "Website content management and updates." }
      ]
    },
    {
      title: "Infrastructure & Cloud",
      icon: Settings,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      accent: "bg-cyan-500 shadow-[0_0_10px_#06B6D4]",
      items: [
        { name: "Cloud Hosting & VPS", level: 85, desc: "Server deployment and configuration." },
        { name: "DNS & SSL", level: 85, desc: "Domain management and security." },
        { name: "Storage & Backups", level: 85, desc: "Data retention and cloud storage." },
        { name: "Redis", level: 80, desc: "Caching and background task queues." }
      ]
    },
    {
      title: "QA & Testing",
      icon: Network,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
      accent: "bg-amber-500 shadow-[0_0_10px_#F59E0B]",
      items: [
        { name: "Functional & UI Testing", level: 95, desc: "Verifying system behaviors and interfaces." },
        { name: "Regression & Workflow", level: 90, desc: "End-to-end operational flow validation." }
      ]
    },
    {
      title: "AI & Automation",
      icon: Cpu,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      accent: "bg-emerald-500 shadow-[0_0_10px_#10B981]",
      items: [
        { name: "Generative AI & LLMs", level: 90, desc: "AI-assisted coding and ideation." },
        { name: "Prompt Engineering", level: 85, desc: "Contextual instruction for AI models." },
        { name: "Telegram Bots", level: 90, desc: "Automated notifications and tasks." },
        { name: "Scheduled Tasks", level: 85, desc: "Recurring background processes." }
      ]
    },
    {
      title: "Tools & Environments",
      icon: Sliders,
      color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
      accent: "bg-rose-500 shadow-[0_0_10px_#F43F5E]",
      items: [
        { name: "Git & GitHub", level: 90, desc: "Version control and repository management." },
        { name: "VS Code", level: 95, desc: "Primary development environment." },
        { name: "Excel", level: 90, desc: "Data reporting and analysis." }
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
              <BorderGlow
                key={gIdx}
                borderRadius={16}
                edgeSensitivity={30}
                glowRadius={35}
                glowIntensity={1}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                glowColor="270 80 80"
                className="h-full"
              >
                <div
                  className="bg-slate-100/40 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-6 h-full hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300"
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
              </BorderGlow>
            );
          })}
        </section>

      </div>
    </Layout>
  );
};

export default Skill;
