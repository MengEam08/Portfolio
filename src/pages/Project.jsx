import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Layout from "../components/layout/Layout";
import BorderGlow from "../components/common/BorderGlow";
import {
  Folder,
  Globe,
  Layers,
  Code2,
  Terminal,
  Activity,
  Server,
  Bot,
  GraduationCap,
  Truck,
  ExternalLink,
  Play,
  X,
  Monitor,
  Tablet,
  Smartphone
} from "lucide-react";

const Project = () => {
  const [filter, setFilter] = useState("All");
  const [previewProject, setPreviewProject] = useState(null);
  const [viewportMode, setViewportMode] = useState("desktop");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Dynamically set title
  useEffect(() => {
    document.title = "Experience & Projects | Meng - Portfolio";
  }, []);

  // Close preview modal on Escape and lock background scroll while open
  useEffect(() => {
    if (!previewProject) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPreviewProject(null);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewProject]);

  const openPreview = (project) => {
    setViewportMode(project.defaultViewport || "desktop");
    setIframeLoaded(false);
    setPreviewProject(project);
  };

  const projectsData = [
    {
      title: "AMF Express — UI Prototype",
      category: "Design",
      status: "Live Demo",
      liveUrl: "https://app-ui-amf.vercel.app/",
      defaultViewport: "mobile",
      testTip: "Try Tracking code 'BN260513000001', branch maps, or enter sample credentials in Account → Login.",
      description: [
        "Cross-platform shipping and logistics mobile UI prototype built with Expo SDK 54, React Native 0.81.5, React 19.1, and TypeScript.",
        "Interactive web demo on Vercel featuring shipment status filters, tracking lookup, warehouse maps with Leaflet, simulated demo login, and address GPS selector.",
        "Created as a high-fidelity handoff reference for an external development team to implement the production backend, APIs, and real services."
      ],
      technologies: [
        "TypeScript",
        "React Native",
        "Expo SDK 54",
        "React 19",
        "React Navigation 7",
        "Leaflet Maps",
        "Playwright"
      ],
      icon: Truck
    },
    {
      title: "Angkor Student Management",
      category: "Development",
      status: "Live",
      liveUrl: "https://angkor-student-management.vercel.app/login",
      testTip: "Authentication login portal demo. Enter sample credentials or open directly in new tab.",
      description: [
        "Full-stack student management web application deployed on Vercel with an authentication login portal.",
        "Streamlines student records, class administration, and daily academic tracking in a responsive web interface.",
        "Built across frontend and backend layers using React / Next.js, JavaScript, Tailwind CSS, Node.js / Express, Python, and PostgreSQL / SQLite."
      ],
      technologies: [
        "JavaScript",
        "React / Next.js",
        "Tailwind CSS",
        "Node.js / Express",
        "Python",
        "PostgreSQL / SQLite"
      ],
      icon: GraduationCap
    },
    {
      title: "UI/UX Design & Prototyping",
      category: "Design",
      description: [
        "Designed and refined website interfaces using Figma, including UI improvements after external development teams completed approximately 70% of the implementation.",
        "Designed UI/UX for internal Operations Management Systems using Figma, HTML, and Tailwind CSS.",
        "Created user flows, wireframes, prototypes, and system workflows using Figma FigJam.",
        "Designed a mobile tracking application interface for shipment/tracking search using Figma and React Native.",
        "Developed a sample Android APK to demonstrate the tracking application UI and user experience.",
        "Provided UI reviews, usability feedback, and improvement suggestions for new and existing websites.",
        "Collaborated with development and operations teams to improve system usability and user experience."
      ],
      technologies: ["Figma", "FigJam", "HTML", "Tailwind CSS", "React Native"],
      icon: Layers
    },
    {
      title: "Website & Content Management",
      category: "Web & CMS",
      description: [
        "Managed and maintained WordPress websites, including website content, posts, titles, descriptions, images, and general content updates.",
        "Reviewed website content and layout to ensure consistency, accuracy, and usability.",
        "Supported website improvement activities and provided UI/UX feedback for new website features."
      ],
      technologies: ["WordPress", "Content Management", "UI/UX Review"],
      icon: Globe
    },
    {
      title: "Software Development",
      category: "Development",
      description: [
        "Developed internal mini systems and prototypes using React, TypeScript/TSX, JavaScript/JSX, Python, SQLite, and Tailwind CSS.",
        "Created a TikTok analytics mini system to collect and display video metrics such as views, comments, main comments, and shares.",
        "Developed an Attendance Management Mini System with user login, employee/attendance CRUD operations, payment due-date management, on-screen payment notifications, data export to Excel, local data storage using SQLite, and Windows desktop executable/application packaging.",
        "Developed and tested application prototypes based on business requirements and operational workflows.",
        "Created automation and scheduled tasks using Telegram Bots for notifications and recurring processes."
      ],
      technologies: ["React", "TypeScript", "Python", "SQLite", "Tailwind CSS"],
      icon: Code2
    },
    {
      title: "Quality Assurance & System Testing",
      category: "QA & Testing",
      description: [
        "Performed QA testing for Operations Management Systems, covering system features, workflows, UI behavior, and functional requirements.",
        "Performed comprehensive QA testing for HRM systems, including employee management, attendance, leave, overtime, payroll, reports, user management, permissions, and related features.",
        "Tested complete user workflows from login through data processing and reporting.",
        "Identified UI/functional issues and provided feedback to development teams for correction and improvement.",
        "Conducted regression testing after system updates and feature changes."
      ],
      technologies: ["Functional Testing", "Regression Testing", "UI Testing", "Workflow Testing"],
      icon: Activity
    },
    {
      title: "System Analysis & Workflow Design",
      category: "Architecture",
      description: [
        "Analyzed business requirements and converted operational processes into system workflows and user flows.",
        "Created process diagrams and workflows using FigJam/Figma to communicate system requirements with development and operations teams.",
        "Documented system processes, feature relationships, and user interactions.",
        "Assisted in analyzing how business operations could be improved through software and automation."
      ],
      technologies: ["Business Analysis", "Workflow Design", "Process Documentation"],
      icon: Folder
    },
    {
      title: "AI & Generative AI",
      category: "AI & Automation",
      description: [
        "Applied Generative AI tools to support software development, research, documentation, troubleshooting, and productivity.",
        "Used AI-assisted development workflows for generating, reviewing, refactoring, and debugging code.",
        "Used AI tools to assist with UI/UX ideation, including interface concepts, layouts, user flows, and feature ideas.",
        "Used Generative AI for requirements analysis, converting business requirements into technical tasks and system workflows.",
        "Used AI to assist with software testing by generating test scenarios, edge cases, validation checklists, and QA documentation.",
        "Researched and experimented with AI coding assistants and local AI models to improve development productivity.",
        "Explored AI-assisted automation for repetitive business processes, data processing, content generation, and internal tools."
      ],
      technologies: ["LLMs", "Prompt Engineering", "Local AI Models", "AI-assisted Coding"],
      icon: Bot
    },
    {
      title: "Cloud, Hosting & Infrastructure",
      category: "Architecture",
      description: [
        "Researched cloud hosting and server infrastructure for web applications and business systems.",
        "Compared VPS, managed databases, cloud storage, application servers, worker servers, Redis, backups, SSL, DNS, and related infrastructure services.",
        "Researched basic storage technologies and drive types, including SSD, NVMe, HDD, partition structures, and file systems.",
        "Assisted with server/application deployment planning and basic infrastructure configuration.",
        "Researched cloud storage solutions such as object storage and database storage requirements."
      ],
      technologies: ["VPS", "DNS", "SSL", "Storage", "Backup", "Redis"],
      icon: Server
    },
    {
      title: "IT Support & Networking",
      category: "IT Support",
      description: [
        "Provided basic IT support related to networking, applications, operating systems, and hardware.",
        "Assisted with network configuration and troubleshooting.",
        "Installed applications and performed basic software configuration on Windows systems.",
        "Worked with SSDs and storage devices, including partition management, drive merging, formatting, and cross-platform compatibility.",
        "Configured storage drives with file systems that can be used across Windows and macOS.",
        "Assisted with Windows troubleshooting, system recovery, boot issues, and basic system maintenance.",
        "Supported users with application installation, configuration, and troubleshooting."
      ],
      technologies: ["Networking", "Windows Troubleshooting", "Hardware Setup"],
      icon: Terminal
    }
  ];

  const categoryThemes = {
    Design: {
      glowColor: "270 80 80",
      colors: ["#c084fc", "#f472b6", "#38bdf8"],
      accentBg: "bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-600 dark:text-fuchsia-400",
      ambientGlow: "from-fuchsia-500/15 via-violet-500/5 to-transparent",
      titleHover: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-300",
      pillHover: "group-hover:border-fuchsia-500/30",
      dotColor: "bg-fuchsia-500/70 dark:bg-fuchsia-400/70"
    },
    "Web & CMS": {
      glowColor: "190 80 80",
      colors: ["#22d3ee", "#38bdf8", "#818cf8"],
      accentBg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-600 dark:text-cyan-400",
      ambientGlow: "from-cyan-500/15 via-sky-500/5 to-transparent",
      titleHover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-300",
      pillHover: "group-hover:border-cyan-500/30",
      dotColor: "bg-cyan-500/70 dark:bg-cyan-400/70"
    },
    Development: {
      glowColor: "240 80 80",
      colors: ["#818cf8", "#6366f1", "#38bdf8"],
      accentBg: "bg-indigo-500/10 border-indigo-500/25 text-indigo-600 dark:text-indigo-400",
      ambientGlow: "from-indigo-500/15 via-blue-500/5 to-transparent",
      titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-300",
      pillHover: "group-hover:border-indigo-500/30",
      dotColor: "bg-indigo-500/70 dark:bg-indigo-400/70"
    },
    "QA & Testing": {
      glowColor: "150 80 80",
      colors: ["#34d399", "#10b981", "#38bdf8"],
      accentBg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400",
      ambientGlow: "from-emerald-500/15 via-teal-500/5 to-transparent",
      titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-300",
      pillHover: "group-hover:border-emerald-500/30",
      dotColor: "bg-emerald-500/70 dark:bg-emerald-400/70"
    },
    Architecture: {
      glowColor: "38 90 70",
      colors: ["#fbbf24", "#f59e0b", "#fb7185"],
      accentBg: "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
      ambientGlow: "from-amber-500/15 via-orange-500/5 to-transparent",
      titleHover: "group-hover:text-amber-600 dark:group-hover:text-amber-300",
      pillHover: "group-hover:border-amber-500/30",
      dotColor: "bg-amber-500/70 dark:bg-amber-400/70"
    },
    "AI & Automation": {
      glowColor: "260 85 78",
      colors: ["#a78bfa", "#38bdf8", "#34d399"],
      accentBg: "bg-violet-500/10 border-violet-500/25 text-violet-600 dark:text-violet-400",
      ambientGlow: "from-violet-500/15 via-cyan-500/5 to-transparent",
      titleHover: "group-hover:text-violet-600 dark:group-hover:text-violet-300",
      pillHover: "group-hover:border-violet-500/30",
      dotColor: "bg-violet-500/70 dark:bg-violet-400/70"
    },
    "IT Support": {
      glowColor: "350 85 75",
      colors: ["#fb7185", "#f43f5e", "#c084fc"],
      accentBg: "bg-rose-500/10 border-rose-500/25 text-rose-600 dark:text-rose-400",
      ambientGlow: "from-rose-500/15 via-pink-500/5 to-transparent",
      titleHover: "group-hover:text-rose-600 dark:group-hover:text-rose-300",
      pillHover: "group-hover:border-rose-500/30",
      dotColor: "bg-rose-500/70 dark:bg-rose-400/70"
    }
  };

  const categories = ["All", "Design", "Web & CMS", "Development", "QA & Testing", "Architecture", "AI & Automation", "IT Support"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const ModalIcon = previewProject?.icon || Globe;

  return (
    <Layout>
      <div className="flex flex-col gap-12 text-left max-w-6xl mx-auto py-8">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <Folder size={12} />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">Software & Systems Development</h2>
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up delay-200">
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;
            const theme = categoryThemes[project.category] || categoryThemes["AI & Automation"];
            const cardNumber = String(idx + 1).padStart(2, "0");
            const descriptions = Array.isArray(project.description)
              ? project.description
              : [project.description];

            return (
              <BorderGlow
                key={project.title}
                borderRadius={16}
                edgeSensitivity={30}
                glowRadius={35}
                glowIntensity={1}
                colors={theme.colors}
                glowColor={theme.glowColor}
                className="h-full"
              >
                <div className="group relative overflow-hidden glass-panel rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
                  {/* Ambient top-right gradient wash on hover */}
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${theme.ambientGlow} blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Subtle top hairline accent */}
                  <div
                    className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${theme.colors[0]}, ${theme.colors[1]}, transparent)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col gap-4">
                    {/* Card Header: Icon Badge + Index & Category Pill */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${theme.accentBg}`}
                      >
                        <IconComponent size={20} strokeWidth={1.85} />
                      </div>

                      <div className="flex items-center gap-2">
                        {project.status && (
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {project.status}
                          </span>
                        )}
                        <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 bg-slate-900/[0.04] dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 px-2.5 py-1 rounded-full">
                          {cardNumber} // {project.category}
                        </span>
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold tracking-tight text-black dark:text-slate-100 transition-colors duration-300 ${theme.titleHover}`}>
                      {project.title}
                    </h3>

                    <ul className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                      {descriptions.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${theme.dotColor}`} />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges & Action Buttons */}
                  <div className="relative z-10 flex flex-col gap-4 pt-4 border-t border-slate-200/60 dark:border-white/[0.07]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-900/[0.035] dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 px-2.5 py-1 rounded-md transition-colors duration-300 ${theme.pillHover}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => openPreview(project)}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all duration-200 cursor-pointer"
                        >
                          <Play size={13} className="fill-current" />
                          <span>Preview & Test</span>
                        </button>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200/80 dark:border-white/15 bg-slate-900/[0.04] dark:bg-white/[0.05] text-slate-700 dark:text-slate-200 hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200"
                        >
                          <ExternalLink size={13} />
                          <span>Open Live App</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </section>

      </div>

      {/* Interactive Preview & Test Modal */}
      {previewProject &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${previewProject.title} Live Preview`}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl h-[88vh] flex flex-col rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/15 bg-white dark:bg-[#0b0f19] shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/60">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <ModalIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                        {previewProject.title}
                      </h3>
                      {previewProject.status && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {previewProject.status}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {previewProject.liveUrl}
                    </p>
                  </div>
                </div>

                {/* Viewport Switcher & Actions */}
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {[
                      { id: "desktop", label: "Desktop view", Icon: Monitor },
                      { id: "tablet", label: "Tablet view", Icon: Tablet },
                      { id: "mobile", label: "Mobile view", Icon: Smartphone }
                    ].map(({ id, label, Icon }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setViewportMode(id)}
                        title={label}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          viewportMode === id
                            ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                        }`}
                      >
                        <Icon size={14} />
                      </button>
                    ))}
                  </div>

                  <a
                    href={previewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Open in New Tab</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setPreviewProject(null)}
                    aria-label="Close preview"
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Tech Stack & Test Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-2.5 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/60 dark:bg-slate-900/30 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400 mr-1">
                    Stack:
                  </span>
                  {previewProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {previewProject.testTip ? (
                  <span className="text-[11px] text-slate-600 dark:text-slate-300">
                    <strong className="text-indigo-600 dark:text-indigo-400">Demo test tip:</strong> {previewProject.testTip}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Interactive test view — if blocked by browser security headers, use <strong className="text-slate-700 dark:text-slate-200">Open in New Tab</strong>.
                  </span>
                )}
              </div>

              {/* Live Iframe Area */}
              <div className="flex-1 relative bg-slate-200/60 dark:bg-[#050811] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none z-10">
                    <div className="w-7 h-7 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      Loading live application preview...
                    </span>
                  </div>
                )}
                <div
                  className={`h-full bg-white rounded-xl overflow-hidden border border-slate-300/70 dark:border-white/10 shadow-xl transition-all duration-300 ${
                    viewportMode === "desktop"
                      ? "w-full"
                      : viewportMode === "tablet"
                        ? "w-full max-w-[768px]"
                        : "w-full max-w-[390px]"
                  }`}
                >
                  <iframe
                    src={previewProject.liveUrl}
                    title={`${previewProject.title} Live Preview`}
                    onLoad={() => setIframeLoaded(true)}
                    className="w-full h-full border-0 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
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
