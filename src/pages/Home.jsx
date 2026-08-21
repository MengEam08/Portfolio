import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import myfav from "../assets/myFav.png"
import {
  Cpu,
  Database,
  Globe,
  ArrowRight,
  Activity,
  Bot
} from "lucide-react";

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
              <span>Full-Stack Developer & IT Systems Engineer</span>
            </div> 

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-400">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                 MengEam Seng 
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              I am a Full-Stack Software Developer and IT Systems Engineer with practical experience designing, developing, integrating, and troubleshooting business applications and IT systems. I enjoy turning real-world business requirements into reliable, scalable, and user-friendly software solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-sm hover:shadow-violet-600/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Experience</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-violet-500/35 hover:bg-black/10 dark:hover:bg-white/10 text-slate-800 dark:text-white font-medium transition-all duration-300"
              >
                <span>Get In Touch</span>
              </Link>
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

        {/* CORE SPECIALTIES SUMMARY */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.06)] dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 text-left animate-slide-up delay-300 group">
            <div className="p-3 bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Full-Stack Development</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Engineering end-to-end web systems using React, Node.js, Python, and SQL. Building REST APIs and responsive dashboards tailored to complex business workflows.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(79,70,229,0.06)] dark:hover:shadow-[0_0_20px_rgba(79,70,229,0.1)] transition-all duration-300 text-left animate-slide-up delay-400 group">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Infrastructure & DevOps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Designing scalable system architectures using Application Servers, Redis, PostgreSQL, and AWS S3. Planning networking, load balancing, and secure deployments.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 text-left animate-slide-up delay-500 group">
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">AI & Automation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrating local LLMs (Ollama, Qwen) and building automated workflows (Telegram Bots, scheduled tasks). Enhancing engineering speed with AI assistants.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Home;
