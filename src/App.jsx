import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import TargetCursor from "./components/common/TargetCursor";

export default function App() {
  return (
    <BrowserRouter>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#B497CF"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </BrowserRouter>
  );
} 
