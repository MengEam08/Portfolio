import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  Code,
  Layers,
  CheckCircle2,
  Cloud,
  Wrench,
  Calendar,
  Sparkles
} from "lucide-react";

const About = () => {
  // Dynamically set title
  useEffect(() => {
    document.title = "About | Meng - Dev & IT Support";
  }, []);

  const coreFocus = [
    {
      title: "Software Development",
      icon: Code,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
      bullets: [
        "Designed and developed a complete Student Management System using React and Python.",
        "Created custom Python Telegram bots with React-based configuration dashboard interfaces.",
        "Maintained and resolved critical bugs in legacy .NET system environments.",
        "Experienced in Laravel (PHP), Python, C#, database design, and REST APIs."
      ]
    },
    {
      title: "UI/UX Design",
      icon: Layers,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
      bullets: [
        "Designed user-centered interfaces and prototyping layouts before start of development.",
        "Collaborated with external teams, preparing UI blueprints for React Native mobile systems.",
        "Engineered fully responsive frontend code using Tailwind CSS, HTML5, and Bootstrap."
      ]
    },
    {
      title: "System Testing & QA",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      bullets: [
        "Coordinated user acceptance & functional testing for third-party web and mobile systems.",
        "Audited third-party developer builds to ensure requirements alignment prior to production.",
        "Documented, tracked, and verified bug resolutions throughout regression loops."
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
      bullets: [
        "Researched, analyzed, and compared cloud VPS nodes and dedicated server plans.",
        "Audited server network bandwidth, storage models, and compute capacities for projects.",
        "Prepared hosting performance assessments based on pricing, scalability, and downtime risk."
      ]
    },
    {
      title: "IT Support & Services",
      icon: Wrench,
      color: "text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/20",
      bullets: [
        "Installed operating systems, device drivers, and configured user system permissions.",
        "Troubleshot hardware, resolved local network disconnects, and configured peripherals.",
        "Secured client laptops, cleaned active malware threats, and ran vulnerability checks."
      ]
    }
  ];

  const timelineEvents = [
    {
      period: "Full-Stack System Engineer",
      role: "Student Management Suite",
      description: "Designed, scaffolded, and deployed a React dashboard talking to a Python backend, optimizing student registry updates and reporting queries."
    },
    {
      period: "Mobile Collaborator & Prototyper",
      role: "React Native UI Blueprinting",
      description: "Collaborated with offshore development teams to create responsive layouts and interactive visual flows for cross-platform mobile apps."
    },
    {
      period: "QA & Verification Specialist",
      role: "Application Audit Pipelines",
      description: "Administered systematic pre-release software tests for external teams. Managed JIRA-style bug logs and verified final release builds."
    },
    {
      period: "IT Support Engineer",
      role: "Infrastructure & Device Resolution",
      description: "Supported end-user hardware, secured local networks, isolated virus outbreaks, and configured virtual private servers for company projects."
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-16 text-left max-w-5xl mx-auto">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <Sparkles size={12} />
            <span>Profile Summary</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About My Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
            I am a multi-disciplinary **Full-Stack Developer and IT Support Specialist** with experience in building systems from scratch, modernizing legacy configurations, managing quality assurance loops, and diagnosing infrastructure issues.
          </p>
        </section>

        {/* Expertise Cards */}
        <section className="flex flex-col gap-8 animate-slide-up delay-200">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFocus.map((focus, index) => {
              const Icon = focus.icon;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 flex flex-col gap-4 relative group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${focus.bg} ${focus.color}`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{focus.title}</h4>
                  </div>
                  
                  <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400 pl-2">
                    {focus.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${focus.color} opacity-75`}></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="flex flex-col gap-8 animate-slide-up delay-400">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">System Integration Journey</h3>
          
          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 pl-8 flex flex-col gap-10">
            {timelineEvents.map((evt, index) => (
              <div key={index} className="relative text-left">
                {/* Timeline Dot Indicator */}
                <span className="absolute -left-[41px] top-1 bg-[#faf9f6] dark:bg-[#030712] border border-violet-500 p-1.5 rounded-full text-violet-600 dark:text-violet-400 z-10">
                  <Calendar size={12} />
                </span>
                
                <div className="glass-panel rounded-2xl p-5 hover:border-violet-500/20 transition-all duration-300">
                  <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                    {evt.period}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">{evt.role}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default About;
