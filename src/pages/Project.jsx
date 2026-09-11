import React, { useState, useEffect } from "react";
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

  const categories = ["All", "Design", "Web & CMS", "Development", "QA & Testing", "Architecture", "AI & Automation", "IT Support"];

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
              <BorderGlow
                key={idx}
                borderRadius={16}
                edgeSensitivity={30}
                glowRadius={35}
                glowIntensity={1}
                colors={["#c084fc", "#818cf8", "#38bdf8"]}
                glowColor="260 80 80"
                className="h-full"
              >
                <div
                  className="glass-panel rounded-2xl p-6 flex flex-col justify-between h-full hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 relative group overflow-hidden"
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
                    
                    <ul className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[80px] list-disc pl-4 space-y-1.5">
                      {Array.isArray(project.description) ? project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      )) : <li>{project.description}</li>}
                    </ul>
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
              </BorderGlow>
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
