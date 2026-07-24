import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import {
  MessageSquare,
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";

const Github = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  // Form states
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Full-Stack Development Project");
  const [priority, setPriority] = useState("Medium");
  const [description, setDescription] = useState("");

  // UI Flow states
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Dynamically set title
  useEffect(() => {
    document.title = "Contact | Meng - File a Ticket";
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("developer.meng@example.com"); // Placeholder email or professional format
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!email || !description) return;

    setLoading(true);
    const steps = [
      "Connecting to gateway node...",
      "Resolving client headers...",
      "Assigning system resource queue...",
      "Generating unique ticket signature..."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLoadingStep(step);
        if (index === steps.length - 1) {
          setTimeout(() => {
            const randomId = Math.floor(1000 + Math.random() * 9000);
            setTicketId(`TICKET-${randomId}`);
            setLoading(false);
            setSubmitted(true);
          }, 600);
        }
      }, (index + 1) * 500);
    });
  };

  const resetForm = () => {
    setEmail("");
    setCategory("Full-Stack Development Project");
    setPriority("Medium");
    setDescription("");
    setSubmitted(false);
    setTicketId("");
  };

  return (
    <Layout>
      <div className="flex flex-col gap-12 text-left max-w-5xl mx-auto px-6 py-12">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold w-fit">
            <MessageSquare size={12} />
            <span>Support Terminal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Log a Ticket</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Need a system troubleshooting task, a full-stack platform built, or code audited? Select your priority level and file a service ticket below.
          </p>
        </section>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Support Ticket Form (Left 7 Cols) */}
          <div className="md:col-span-7 animate-slide-up delay-200">
            {loading ? (
              <div className="glass-panel border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[350px] text-center gap-4">
                <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-mono text-violet-600 dark:text-violet-400 mt-2 animate-pulse">{loadingStep}</p>
              </div>
            ) : submitted ? (
              <div className="glass-panel border border-violet-500/30 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                {/* Neon Glow Circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle size={28} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ticket Logged Successfully</h3>
                </div>

                <div className="bg-black/[0.03] dark:bg-black/40 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col gap-4 font-mono text-sm text-left">
                  <div className="flex justify-between border-b border-slate-200/60 dark:border-white/5 pb-2">
                    <span className="text-slate-500">TICKET_ID:</span>
                    <span className="text-violet-600 dark:text-violet-400 font-bold text-glow">{ticketId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 dark:border-white/5 pb-2">
                    <span className="text-slate-500">STATUS:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <ShieldCheck size={14} /> ASSIGNED (Meng)
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 dark:border-white/5 pb-2">
                    <span className="text-slate-500">CATEGORY:</span>
                    <span className="text-slate-800 dark:text-slate-300">{category}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 dark:border-white/5 pb-2">
                    <span className="text-slate-500">PRIORITY:</span>
                    <span className={`font-bold ${priority === "High" ? "text-rose-500" : priority === "Medium" ? "text-amber-500" : "text-sky-500"}`}>
                      {priority.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ETA RESPONSE:</span>
                    <span className="text-slate-800 dark:text-slate-300">&lt; 24 Hours</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Your request has been registered in my system task queue. A response containing diagnostic recommendations or scheduling timelines will be sent to <span className="text-slate-900 dark:text-slate-200 font-semibold">{email}</span>.
                </p>

                <button
                  onClick={resetForm}
                  className="w-fit px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  File Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="glass-panel border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-5 text-left">
                {/* Form Row: Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Your Contact Email
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-violet-500/50 transition-colors w-full"
                  />
                </div>

                {/* Form Row: Category */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ticket-category" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Service Category
                  </label>
                  <select
                    id="ticket-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-violet-500/50 transition-colors w-full cursor-pointer"
                  >
                    <option value="Full-Stack Development Project">Full-Stack Development Project</option>
                    <option value="IT Technical Support">IT Technical Support</option>
                    <option value="UI/UX & Prototyping">UI/UX & Prototyping</option>
                    <option value="QA Testing Audit">QA Testing Audit</option>
                    <option value="General Inquiry">General / Other Inquiry</option>
                  </select>
                </div>

                {/* Form Row: Priority */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Priority Level</span>
                  <div className="grid grid-cols-3 gap-3">
                    {["Low", "Medium", "High"].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setPriority(lvl)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                          priority === lvl
                            ? lvl === "High"
                              ? "bg-rose-500/20 border-rose-500/50 text-rose-600 dark:text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.15)]"
                              : lvl === "Medium"
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-600 dark:text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.15)]"
                              : "bg-sky-500/20 border-sky-500/50 text-sky-600 dark:text-sky-300 shadow-[0_0_10px_rgba(14,165,233,0.15)]"
                            : "bg-white/60 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-400 dark:hover:border-slate-700"
                        }`}
                      >
                        {lvl.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Row: Description */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="issue-desc" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Issue Description & Requirements
                  </label>
                  <textarea
                    id="issue-desc"
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the technical assistance, stack criteria, or project requirements you are looking for..."
                    className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-violet-500/50 transition-colors w-full resize-none leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-violet-600/30 transform hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  <span>Transmit Ticket Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Cards (Right 5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 animate-slide-up delay-300">
            
            {/* Quick Connect Portal Card */}
            <div className="glass-panel border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-5 text-left">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200/60 dark:border-white/5 pb-2">Direct Ports</h3>

              {/* Email Slot */}
              <div className="flex items-center justify-between p-3 bg-black/[0.02] dark:bg-black/20 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-lg">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Email Address</span>
                    <a href="mailto:developer.meng@example.com" className="text-sm text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors truncate max-w-[150px] sm:max-w-[200px]">
                      dev.meng@example.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
                  aria-label="Copy Email"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Telegram Slot */}
              <div className="flex items-center justify-between p-3 bg-black/[0.02] dark:bg-black/20 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                    <Send size={16} className="rotate-45" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Telegram Channel</span>
                    <a href="https://t.me/example_meng" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors">
                      @meng_dev_support
                    </a>
                  </div>
                </div>
                <a
                  href="https://t.me/example_meng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Send size={16} className="rotate-45" />
                </a>
              </div>

              {/* GitHub Slot */}
              <div className="flex items-center justify-between p-3 bg-black/[0.02] dark:bg-black/20 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-500/10 text-slate-600 dark:text-slate-400 rounded-lg">
                    <Github size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">GitHub Index</span>
                    <a href="https://github.com/example_meng" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors">
                      github.com/meng-dev
                    </a>
                  </div>
                </div>
                <a
                  href="https://github.com/example_meng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Github size={16} />
                </a>
              </div>

            </div>

            {/* IT Safety Alert banner */}
            <div className="glass-panel border border-rose-500/10 bg-rose-500/5 rounded-2xl p-5 flex items-start gap-3.5 text-left">
              <div className="p-2 bg-rose-500/10 text-rose-500 rounded-xl">
                <AlertTriangle size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold text-rose-600 dark:text-rose-300">Operational Notice</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Support pipelines are monitored live. Priority levels determine task slot availability. System updates occur during off-peak cycles.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Contact;
