import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  Code2,
  Terminal,
  Database,
  Sliders,
  Settings,
  Cpu
} from "lucide-react";

const Skill = () => {
  // Dynamically set title
  useEffect(() => {
    document.title = "Skills | Meng - Tech Stack";
  }, []);

  const skillGroups = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
      accent: "bg-violet-500 shadow-[0_0_10px_#8B5CF6]",
      items: [
        { name: "React", level: 90, desc: "Created complex dashboards, hook architectures, and routing matrices." },
        { name: "Tailwind CSS", level: 95, desc: "Built modern custom utility designs and glassmorphic user flows." },
        { name: "JavaScript (ES6+)", level: 85, desc: "Developed dynamic frontend state managers and async fetch clients." },
        { name: "Bootstrap & HTML5", level: 90, desc: "Standard responsive columns, accessible markup, and layout styling." },
        { name: "Responsive Web Design", level: 95, desc: "Fluid layouts matching mobile, tablet, and widescreen viewports." }
      ]
    },
    {
      title: "Backend Development",
      icon: Terminal,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
      accent: "bg-indigo-500 shadow-[0_0_10px_#6366F1]",
      items: [
        { name: "Python", level: 85, desc: "Built Flask/FastAPI structures, Telegram APIs, and automation routines." },
        { name: "Laravel (PHP)", level: 80, desc: "MVC frameworks, routing pipelines, Eloquent ORMs, and secure models." },
        { name: "C# (.NET)", level: 75, desc: "Maintained and fixed legacy software systems, managing thread loads." },
        { name: "Java", level: 60, desc: "Fundamental object-oriented patterns and memory structures." }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
      accent: "bg-sky-500 shadow-[0_0_10px_#0EA5E9]",
      items: [
        { name: "SQL", level: 85, desc: "Wrote structured statements, custom joins, and indexing schemas." },
        { name: "MySQL", level: 85, desc: "Configured tables, primary keys, relational maps, and connection pools." }
      ]
    },
    {
      title: "Tools & Environments",
      icon: Settings,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      accent: "bg-cyan-500 shadow-[0_0_10px_#06B6D4]",
      items: [
        { name: "Git & Version Control", level: 88, desc: "Handled branch trees, merge conflict resolutions, and commit tags." },
        { name: "XAMPP", level: 90, desc: "Configured Apache virtual hosts and local database servers." },
        { name: "Visual Studio & VS Code", level: 92, desc: "Code compiler plugins, remote tunnels, and debugging pipelines." }
      ]
    },
    {
      title: "IT Support & Specialties",
      icon: Cpu,
      color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
      accent: "bg-pink-500 shadow-[0_0_10px_#EC4899]",
      items: [
        { name: "Malware Clean & Scan", level: 95, desc: "Removed trojans, ran quarantine protocols, and patched systems." },
        { name: "Hardware Diagnostic", level: 90, desc: "Isolated ram failures, system bottlenecks, and hardware faults." },
        { name: "Cloud VPS Research", level: 88, desc: "Analyzed virtual cloud instances, compute units, and pricing scales." },
        { name: "QA Release Audits", level: 90, desc: "Conducted acceptance check matrices on third-party deliverables." }
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
            A comprehensive review of my technology stack, developer toolkits, and infrastructure services.
          </p>
        </section>

        {/* Skill Groups Grid */}
        <section className="grid md:grid-cols-2 gap-8 animate-slide-up delay-200">
          {skillGroups.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <div
                key={gIdx}
                className={`bg-slate-100/40 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 ${gIdx === skillGroups.length - 1 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${group.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{group.title}</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
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
