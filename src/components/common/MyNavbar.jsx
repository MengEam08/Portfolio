import {
  Code2,
  FolderKanban,
  Home,
  MessageCircle,
  User,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyNavbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: FolderKanban },
    { path: "/skills", label: "Skills", icon: Code2 },
    { path: "/contact", label: "Contact", icon: MessageCircle },
  ];

  const getLinkClass = (path) => {
    const base = "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300";
    if (isActive(path)) {
      return `${base} text-violet-700 dark:text-white bg-violet-500/10 dark:bg-violet-600/20 border border-violet-500/30 dark:border-violet-500/40 shadow-sm dark:shadow-[0_0_15px_rgba(124,58,237,0.25)] dark:text-glow`;
    }
    return `${base} text-slate-600 dark:text-slate-300 border border-transparent hover:text-slate-900 hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/5 dark:hover:border-violet-500/20`;
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 max-w-7xl mx-auto">
      <div className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:from-violet-500 dark:group-hover:from-violet-300 group-hover:to-indigo-500 dark:group-hover:to-indigo-300 transition-colors">
            Meng
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path} className={getLinkClass(item.path)}>
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme and Menu buttons container */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-2 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={getLinkClass(item.path)}
              >
                <Icon size={18} />
                <span className="text-base">{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default MyNavbar;
