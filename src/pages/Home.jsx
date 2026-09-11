import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import myfav from "../assets/myFav.png";
import { Activity } from "lucide-react";
import Dock from "../components/common/Dock";
import BorderGlow from "../components/common/BorderGlow";
import ScrollReveal from "../components/common/ScrollReveal";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    style: "bg-[#1877F2]/10 border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/60 hover:shadow-[0_0_16px_rgba(24,119,242,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    style: "bg-pink-500/10 border-pink-500/30 text-pink-500 hover:bg-pink-500/20 hover:border-pink-500/60 hover:shadow-[0_0_16px_rgba(236,72,153,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    style: "bg-[#0A66C2]/10 border-[#0A66C2]/30 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/60 hover:shadow-[0_0_16px_rgba(10,102,194,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/MengEam08",
    style: "bg-slate-500/10 border-slate-500/30 text-slate-700 dark:text-slate-300 hover:bg-slate-500/20 hover:border-slate-500/60 hover:shadow-[0_0_16px_rgba(100,116,139,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  },
  {
    label: "Gmail",
    href: "mailto:mengEam@gmail.com",
    style: "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_16px_rgba(239,68,68,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    )
  },
  {
    label: "Download CV",
    href: "#",
    style: "bg-violet-500/10 border-violet-500/30 text-violet-500 hover:bg-violet-500/20 hover:border-violet-500/60 hover:shadow-[0_0_16px_rgba(139,92,246,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <polyline points="9,15 12,18 15,15"/>
      </svg>
    )
  }
];

const whatIDoItems = [
  {
    title: "UI/UX Design",
    desc: "Figma, FigJam, wireframes, prototypes, user flows, website UI/UX.",
    glowColor: "270 80 80",
    colors: ["#c084fc", "#f472b6", "#38bdf8"],
    colSpan: ""
  },
  {
    title: "Frontend Development",
    desc: "React, React Native, JavaScript, TypeScript, JSX, TSX, HTML, Tailwind CSS.",
    glowColor: "240 80 80",
    colors: ["#818cf8", "#6366f1", "#38bdf8"],
    colSpan: ""
  },
  {
    title: "Application Development",
    desc: "Internal management systems, attendance systems, tracking applications, automation tools, and mini systems.",
    glowColor: "190 80 80",
    colors: ["#38bdf8", "#06b6d4", "#818cf8"],
    colSpan: ""
  },
  {
    title: "QA & Testing",
    desc: "Functional testing, regression testing, UI testing, workflow testing, HRM and operations system testing.",
    glowColor: "150 80 80",
    colors: ["#34d399", "#10b981", "#38bdf8"],
    colSpan: ""
  },
  {
    title: "System Analysis",
    desc: "Business requirements, workflow design, process mapping, system feature analysis, and documentation.",
    glowColor: "35 90 70",
    colors: ["#fbbf24", "#f59e0b", "#f472b6"],
    colSpan: ""
  },
  {
    title: "Website Management",
    desc: "WordPress administration, content management, website updates, and UI feedback.",
    glowColor: "340 80 80",
    colors: ["#fb7185", "#f43f5e", "#c084fc"],
    colSpan: ""
  },
  {
    title: "Automation",
    desc: "Telegram bots, scheduled notifications, data processing, and workflow automation.",
    glowColor: "200 85 75",
    colors: ["#38bdf8", "#0284c7", "#a855f7"],
    colSpan: ""
  },
  {
    title: "Database",
    desc: "SQLite and PostgreSQL fundamentals, CRUD operations, data export, and local storage.",
    glowColor: "290 80 80",
    colors: ["#e879f9", "#d946ef", "#818cf8"],
    colSpan: ""
  },
  {
    title: "Cloud & Infrastructure",
    desc: "VPS, cloud hosting, DNS, SSL, backups, storage, Redis, and basic server architecture.",
    glowColor: "215 85 75",
    colors: ["#60a5fa", "#3b82f6", "#2dd4bf"],
    colSpan: ""
  },
  {
    title: "IT Support",
    desc: "Networking, Windows troubleshooting, application installation, configuration, SSD/storage management, and cross-platform storage.",
    glowColor: "25 90 70",
    colors: ["#fb923c", "#f97316", "#fbbf24"],
    colSpan: ""
  },
  {
    title: "Generative AI",
    desc: "AI-assisted coding, LLMs, prompt engineering, AI-powered research, test-case generation, documentation, UI ideation, debugging, automation, and local AI experimentation.",
    glowColor: "170 80 75",
    colors: ["#2dd4bf", "#14b8a6", "#818cf8"],
    colSpan: "md:col-span-2 lg:col-span-2"
  }
];

const Home = () => {
  // Dynamically set document title
  useEffect(() => {
    document.title = "Meng | Full-Stack Dev & IT Systems Engineer";
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-16 md:gap-24 relative mt-4">
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center gap-12 pt-4 md:pt-10">
          <div className="flex-1 flex flex-col gap-6 text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold w-fit">
              <Activity size={12} className="animate-pulse" />
              <span>Full-Stack Developer & Generative AI Builder</span>
            </div>

            {/* <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-400">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Meng
              </span>
            </h1> */}

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
             Hey! I'm MengEam a Full-Stack Software Developer from Kandal,
              Cambodia, passionate about building business solutions and
              emerging technologies. Generative AI Builder focused on AI-powered
              applications, automation, and turning ideas into practical
              software.
            </p>

            {/* SOCIAL LINKS DOCK */}
            <div className="mt-2 overflow-visible">
              <Dock
                items={socialLinks.map((social) => ({
                  icon: social.icon,
                  label: social.label,
                  href: social.href,
                  target: social.href.startsWith("mailto") || social.href === "#" ? "_self" : "_blank",
                  className: `border backdrop-blur-sm ${social.style}`
                }))}
                panelHeight={56}
                baseItemSize={44}
                magnification={66}
                distance={140}
              />
            </div>
          </div>

          {/* PERSONAL IMAGE WITH TECH STYLE FRAME */}
          <div className="w-full lg:w-5/12 flex items-center justify-center animate-slide-up delay-200 mt-8 lg:mt-0">
            <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer Glow Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 via-indigo-600/10 to-cyan-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

              {/* Glass Card Base */}
              <div className="absolute inset-0 rounded-3xl glass-panel border border-slate-200/60 dark:border-white/10 overflow-hidden shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:border-violet-500/30">
                {/* Tech Grid Background Lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Dotted Inner Tech Frame */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 pointer-events-none transition-colors duration-500 group-hover:border-violet-500/30"></div>

              {/* Corner Tech Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-violet-500/40 dark:border-violet-400/40 group-hover:border-violet-500 transition-colors duration-300"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-violet-500/40 dark:border-violet-400/40 group-hover:border-violet-500 transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-violet-500/40 dark:border-violet-400/40 group-hover:border-violet-500 transition-colors duration-300"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-violet-500/40 dark:border-violet-400/40 group-hover:border-violet-500 transition-colors duration-300"></div>

              {/* Lined watermark label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-slate-200/60 dark:border-white/5 pt-2 font-mono text-[10px] text-slate-400 dark:text-slate-500 z-20 transition-colors duration-300 group-hover:text-violet-500 group-hover:border-violet-500/20">
                <span>MENG // DEV.IT</span>
                <span>SYS_NOMINAL</span>
              </div>

              {/* Portrait Image (pops out of the top of the frame on hover) */}
              <div className="absolute inset-x-0 bottom-0 -top-16 flex items-end justify-center pointer-events-none z-10">
                <img
                  src={myfav}
                  alt="Meng - Full-Stack Developer & IT Systems Engineer"
                  className="w-[800px] h-[400px] object-contain opacity-90 transition-all duration-500 transform group-hover:scale-115 group-hover:-translate-y-6 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL REVEAL PHILOSOPHY BANNER */}
      

        {/* WHAT I DO & MY SKILLS */}
        <section className="flex flex-col gap-8 animate-slide-up delay-300">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              What I Do
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-4xl">
              I work across{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                UI/UX design, software development, QA testing, system analysis,
                IT support, and Generative AI
              </strong>
              , with experience building and testing internal business systems
              and application prototypes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIDoItems.map((item, idx) => (
              <BorderGlow
                key={idx}
                borderRadius={16}
                edgeSensitivity={30}
                glowRadius={35}
                glowIntensity={1}
                colors={item.colors}
                glowColor={item.glowColor}
                className={`h-full ${item.colSpan}`}
              >
                <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-center hover:shadow-[0_0_20px_rgba(124,58,237,0.06)] dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
