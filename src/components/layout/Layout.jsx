import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "../common/MyNavbar";
import { useScrollSpeed } from "../../hooks/useScrollSpeed";

const routeOrder = ["/", "/about", "/projects", "/skills", "/contact"];

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Accelerate and smooth scroll speed
  useScrollSpeed(1.65);
  
  // Theme State
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Page Transition Direction Check
  const currentIndex = routeOrder.indexOf(location.pathname);
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [direction, setDirection] = useState("forward");

  if (prevIndex !== currentIndex) {
    setDirection(currentIndex >= prevIndex ? "forward" : "backward");
    setPrevIndex(currentIndex);
  }

  const flipClass = direction === "forward" 
    ? "animate-page-flip-forward" 
    : "animate-page-flip-backward";

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#ffffff] via-[#f8fafc] to-[#ffffff] dark:from-[#030712] dark:via-[#0b0f19] dark:to-[#030712] text-slate-800 dark:text-slate-100 relative overflow-x-clip notebook-overlay">
      {/* Subtle background glow highlights */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <MyNavbar theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
        
        {/* Main Content Area with 3D Page Flip */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col justify-start page-flip-container">
          <div key={location.pathname} className={`w-full ${flipClass}`}>
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="w-full py-6 text-center text-slate-500 dark:text-slate-500 text-xs border-t border-slate-200/40 dark:border-white/5 bg-white/50 dark:bg-[#030712]/30 backdrop-blur-sm mt-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Meng. Full-Stack Developer & IT Support Specialist.</p>
            <p className="text-slate-400 dark:text-slate-600">Built with React, Tailwind CSS, and 3D Transitions.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
