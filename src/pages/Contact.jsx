import { useState, useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import emailjs from "@emailjs/browser";
import BorderGlow from "../components/common/BorderGlow";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Sparkles
} from "lucide-react";

// ─── EmailJS Config ──────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service → copy the Service ID below
// 3. Create a template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set "To Email" in the template to: mengeam55@gmail.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID = "service_zhgqak6";   // ← replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_nm925tl";  // ← replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "Dw2vspiJrFZw6cWGj";   // ← replace with your EmailJS public key

const Contact = () => {
  const formRef = useRef(null);

  // Form states
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  // UI Flow states
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [sentEmail, setSentEmail] = useState("");

  // Dynamically set title
  useEffect(() => {
    document.title = "Contact | Meng - Get In Touch";
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mengeam55@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    setSentEmail(form.from_email);
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(
        "Failed to transmit via EmailJS. Please ensure your EmailJS credentials are configured or email me directly at mengeam55@gmail.com."
      );
    }
  };

  const resetForm = () => {
    setForm({ from_name: "", from_email: "", subject: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
    setSentEmail("");
  };

 

  return (
    <Layout>
      <div className="flex flex-col gap-10 text-left max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Intro Section */}
        <section className="flex flex-col gap-3 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold w-fit">
            <MessageSquare size={13} />
            <span>Support &amp; Inquiries</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Have a project, collaboration, or technical inquiry in mind? Send me a direct message below or reach out through my direct ports.
          </p>
        </section>

        {/* Main Grid: Form (7 cols) & Contacts (5 cols) */}
        <div className="grid md:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Form / Success State (7 cols) */}
          <div className="md:col-span-7 animate-slide-up delay-100">
            {status === "success" ? (
              <BorderGlow
                borderRadius={24}
                edgeSensitivity={30}
                glowRadius={35}
                glowColor="270 80 80"
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                className="h-full"
              >
                <div className="glass-panel rounded-2xl p-8 flex flex-col items-center justify-center gap-5 text-center min-h-[420px] border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
                  {/* Glow Circle */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 animate-in zoom-in-50 duration-300">
                    <CheckCircle size={36} />
                  </div>

                  <div className="flex flex-col gap-2 max-w-md">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Message Transmitted!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Thank you for reaching out. Your transmission has been queued. A reply will be sent to{" "}
                      <span className="font-semibold text-slate-900 dark:text-slate-200">{sentEmail}</span>{" "}
                      within 24 hours.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-violet-600/20 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </BorderGlow>
            ) : (
              <BorderGlow
                borderRadius={24}
                edgeSensitivity={30}
                glowRadius={35}
                glowColor="270 80 80"
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                className="h-full"
              >
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col gap-5 border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md"
                >
                {/* EmailJS Variable Aliases: ensures {{email}}, {{name}}, and {{reply_to}} all get filled */}
                <input type="hidden" name="email" value={form.from_email} />
                <input type="hidden" name="name" value={form.from_name} />
                <input type="hidden" name="reply_to" value={form.from_email} />

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="form-name"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <User size={13} className="text-violet-500" />
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      name="from_name"
                      type="text"
                      required
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all duration-200 w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="form-email"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <Mail size={13} className="text-violet-500" />
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      name="from_email"
                      type="email"
                      required
                      value={form.from_email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all duration-200 w-full"
                    />
                  </div>
                </div>

                {/* Subject Row */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="form-subject"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <Sparkles size={13} className="text-violet-500" />
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Consultation, or Hello"
                    className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all duration-200 w-full"
                  />
                </div>

                {/* Message Row */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="form-message"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <MessageSquare size={13} className="text-violet-500" />
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all duration-200 w-full resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <p className="text-xs text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-2.5 leading-relaxed">
                    {errorMsg}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-violet-600/30 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                  Direct dispatch to <span className="font-semibold text-slate-600 dark:text-slate-400">mengeam55@gmail.com</span>
                </p>
              </form>
            </BorderGlow>
            )}
          </div>

          {/* Right: Polite Typing Meme Card (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-5 animate-slide-up delay-200">
            <BorderGlow
              borderRadius={24}
              edgeSensitivity={30}
              glowRadius={35}
              glowColor="270 80 80"
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              {/* Polite Meme Card */}
              <div className="glass-panel border border-violet-500/20 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md rounded-3xl p-5 sm:p-6 flex flex-col gap-4 text-left relative overflow-hidden shadow-xl">
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-violet-500/10 text-violet-500">
                      <Sparkles size={14} />
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide">
                      Polite Dispatch Assistant
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Always Polite</span>
                  </div>
                </div>

                {/* Meme GIF Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950/60 shadow-inner group">
                  <img
                    src="https://media.tenor.com/xA4q0AO9UH0AAAAC/keyboard-hanamaru-kindergarten.gif"
                    alt="Anime girl typing politely on laptop keyboard"
                    className="w-full h-52 sm:h-56 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Status Pill over GIF */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-[11px] text-slate-200 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping inline-block" />
                      {status === "sending"
                        ? "TRANSMITTING..."
                        : form.message
                        ? "TYPING POLITELY..."
                        : "AWAITING MESSAGE..."}
                    </span>
                    <span className="text-violet-300 font-sans text-[10px]">100% Courtesy</span>
                  </div>
                </div>

                {/* Interactive Speech / Polite Note */}
                <div className="p-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 dark:bg-violet-950/25 flex flex-col gap-2 relative">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-violet-600 dark:text-violet-400">
                    <span>💌</span>
                    <span>
                      {form.from_name ? `Honorable Guest: ${form.from_name}` : "Kind Etiquette Protocol:"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    {status === "sending"
                      ? "“Kindly stand by! I am delivering your transmission with the highest courtesy and utmost priority...” 🚀"
                      : status === "success"
                      ? "“Delivered with immense gratitude! Meng has received your note and will reply within 24 hours. Have a wonderful day!” 🌸"
                      : form.message
                      ? `“Drafting your respectful inquiry: ‘${form.message.slice(0, 45)}${form.message.length > 45 ? "..." : ""}’. Ready to transmit whenever you click send!” ✨`
                      : "“I hope this message finds you in magnificent spirits! Type your thoughts on the left, and I shall type them out with utmost respect.” ☕"}
                  </p>
                </div>
              </div>
            </BorderGlow>
          </div>


        </div>

      </div>
    </Layout>
  );
};

export default Contact;
