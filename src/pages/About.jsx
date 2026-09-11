import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import BorderGlow from "../components/common/BorderGlow";
import ScrollReveal from "../components/common/ScrollReveal";
import {
  Code,
  CheckCircle2,
  Cloud,
  Wrench,
  Sparkles,
  Map,
  Target,
  List
} from "lucide-react";

const About = () => {
  // Dynamically set title
  useEffect(() => {
    document.title = "About | Meng - Dev & IT Systems Engineer";
  }, []);

  const coreFocus = [
    {
      title: "Business Application Development",
      icon: Code,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
      bullets: [
        "Designing and developing systems for HR, Attendance, Overtime, and Finance.",
        "Translating business workflows into structured software processes.",
        "Building interfaces with React/Next.js/Vite and backends with Node.js/Python."
      ]
    },
    {
      title: "System Architecture & DevOps",
      icon: Cloud,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
      bullets: [
        "Planning application infrastructure for production-oriented business systems.",
        "Evaluating CPU, RAM, database capacity, and storage expansion requirements.",
        "Managing VPS, Load Balancing, Redis, PostgreSQL, and AWS S3 environments."
      ]
    },
    {
      title: "AI & Automation Integration",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      bullets: [
        "Using Local LLMs (Ollama, Qwen) for code generation, review, and logic design.",
        "Developing automated Telegram notification workflows and scheduled tasks.",
        "Exploring AI video automation concepts and Adobe Premiere Pro plugins."
      ]
    },
    {
      title: "IT Support & Networking",
      icon: Wrench,
      color: "text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/20",
      bullets: [
        "Troubleshooting Windows, DNS, Wi-Fi, and network configurations.",
        "Deploying iOS IPAs using Apple Developer Mode and managing devices.",
        "Resolving local network disconnects and configuring developers environments."
      ]
    }
  ];

  const troubleshootingSteps = [
    "Identify Problem",
    "Collect Error / Logs",
    "Reproduce Problem",
    "Identify Root Cause",
    "Implement Fix",
    "Test & Verify",
    "Document"
  ];

  const interests = [
    "Full-Stack Software Engineering",
    "Backend Engineering",
    "Business Application Development",
    "System Architecture",
    "DevOps & Infrastructure",
    "AI Application Development",
    "Automation",
    "Cloud Technologies",
    "Database Engineering",
    "QA & Software Testing",
    "Video Processing & AI Video Automation"
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-16 text-left max-w-5xl mx-auto py-8">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <Sparkles size={12} />
            <span>Profile Summary</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">About My Experience</h2>
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            containerClassName="max-w-3xl my-2"
            textClassName="text-slate-700 dark:text-slate-200 text-lg md:text-xl font-normal leading-relaxed"
            wordAnimationEnd="bottom 75%"
          >
            I am a Full-Stack Software Developer and IT Systems Engineer with practical experience designing, developing, integrating, and troubleshooting business applications and IT systems.
          </ScrollReveal>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
            My experience covers frontend and backend development, database design, REST API development, system architecture, infrastructure planning, networking, automation, QA/testing, and AI-assisted application development.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mt-2">
            I actively use AI as a development partner across my projects to improve productivity, research solutions, analyze errors, generate and review code, explore architecture options, and accelerate troubleshooting.
          </p>
        </section>

        {/* Expertise Cards */}
        <section className="flex flex-col gap-8 animate-slide-up delay-200">
          <h3 className="text-2xl font-bold text-black dark:text-slate-200">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFocus.map((focus, index) => {
              const Icon = focus.icon;
              return (
                <BorderGlow
                  key={index}
                  borderRadius={16}
                  edgeSensitivity={30}
                  glowRadius={35}
                  glowIntensity={1}
                  colors={["#c084fc", "#818cf8", "#38bdf8"]}
                  glowColor="260 80 80"
                  className="h-full"
                >
                  <div className="glass-panel rounded-2xl p-6 h-full transition-all duration-300 flex flex-col gap-4 relative group hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${focus.bg} ${focus.color}`}>
                        <Icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-black dark:text-slate-100">{focus.title}</h4>
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
                </BorderGlow>
              );
            })}
          </div>
        </section>

        {/* Problem Solving / Troubleshooting */}
        <section className="flex flex-col gap-8 animate-slide-up delay-300">
          <div className="flex items-center gap-3">
            <Wrench className="text-cyan-500" size={28} />
            <h3 className="text-2xl font-bold text-black dark:text-slate-200">Problem Solving & Troubleshooting</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            A significant part of my IT experience involves diagnosing and resolving technical problems. I have worked on issues involving API HTTP 500 errors, PostgreSQL constraint errors, JS runtime errors, React/Vite config, Windows networking, DNS, background task failures, and more.
          </p>
          
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-white/10">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Standard Troubleshooting Flow</h4>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              {troubleshootingSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-violet-500/50 transition-colors cursor-default">
                    {step}
                  </div>
                  {idx < troubleshootingSteps.length - 1 && (
                    <div className="hidden md:block text-slate-400 dark:text-slate-600">
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Career Direction & Interests */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up delay-400">
          <section className="flex flex-col gap-6">
             <div className="flex items-center gap-3">
              <Target className="text-violet-500" size={24} />
              <h3 className="text-2xl font-bold text-black dark:text-slate-200">Career Direction</h3>
            </div>
            <BorderGlow
              borderRadius={16}
              edgeSensitivity={30}
              glowRadius={35}
              glowIntensity={1}
              colors={["#c084fc", "#a855f7", "#6366f1"]}
              glowColor="270 80 80"
              className="h-full"
            >
              <div className="glass-panel p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 h-full">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  My long-term goal is to become a strong software and systems engineer capable of working across the entire technology lifecycle:
                </p>
                <div className="mt-6 text-sm text-violet-700 dark:text-violet-300 font-mono font-bold leading-loose">
                  Business Requirements → System Design → Development → Database → Infrastructure → Deployment → Testing → Monitoring → Automation → AI Integration
                </div>
                <p className="text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
                  I am particularly interested in building practical technology solutions that solve real business problems and can scale from small internal applications into reliable production systems.
                </p>
              </div>
            </BorderGlow>
          </section>

          <section className="flex flex-col gap-6">
             <div className="flex items-center gap-3">
              <Map className="text-indigo-500" size={24} />
              <h3 className="text-2xl font-bold text-black dark:text-slate-200">Areas of Interest</h3>
            </div>
            <BorderGlow
              borderRadius={16}
              edgeSensitivity={30}
              glowRadius={35}
              glowIntensity={1}
              colors={["#818cf8", "#38bdf8", "#34d399"]}
              glowColor="230 80 80"
              className="h-full"
            >
              <div className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-center">
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {interests.map((interest, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                        <span>{interest}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </BorderGlow>
          </section>
        </div>

      </div>
    </Layout>
  );
};

export default About;
