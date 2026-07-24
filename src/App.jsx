import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/about" element ={<About />} />
        <Route path ="/projects" element ={<Project />} />
        <Route path ="/skills" element ={<Skill />} />
        <Route path ="/contact" element ={<Contact />} />

      </Routes> 
    </BrowserRouter>
  );
} 
