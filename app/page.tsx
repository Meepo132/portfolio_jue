"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import {
  Shield, Code, GraduationCap, Cpu, Mail,
  Terminal, Download, Menu, X, Sun, Moon, ChevronsDown
} from 'lucide-react';
import {
  Home, User, Brain, Book, Briefcase, Folder
} from 'lucide-react';

// --- Skills Progress Bar Component ---
const SkillBar = ({ name, percentage }: { name: string; percentage: string }) => (
  <div className="mb-5 group/bar">
    <div className="flex justify-between mb-2">
      <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300 group-hover/bar:text-blue-500 transition-colors">{name}</span>
      <span className="text-[11px] font-mono text-gray-400">{percentage}</span>
    </div>
    <div className="w-full bg-black/5 dark:bg-white/5 h-1.5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
      <div
        className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out group-hover/bar:bg-cyan-400 group-hover/bar:shadow-[0_0_8px_#22d3ee]"
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

// --- Theme Toggle Component ---
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-blue-500 hover:text-white transition-all active:scale-90"
    >
      {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
    </button>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      navLinks.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-300 selection:bg-blue-500/30 font-sans transition-colors duration-300">

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tighter cursor-default">
            HEIN
          </div>
          <div className="hidden md:flex items-center gap-8 text-[14px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id === "home" ? "#" : `#${link.id}`}
                className={`relative py-1 transition-all ${activeSection === link.id ? "text-blue-600 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white"}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_#3b82f6]"></span>
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="md:hidden fixed top-4 right-8 z-[1000] flex flex-col-reverse items-end gap-4">
          <div className={`bg-white dark:bg-[#111] rounded-2xl shadow-2xl border border-black/5 dark:border-white/5 p-4 min-w-[200px] transition-all duration-300 transform origin-bottom-right ${isMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-90 invisible"}`}>
            <div className="flex flex-col gap-1">
              {[
                { name: 'Home', id: 'home', icon: <Home size={18} /> },
                { name: 'About', id: 'about', icon: <User size={18} /> },
                { name: 'Skills', id: 'skills', icon: <Brain size={18} /> },
                { name: 'Education', id: 'education', icon: <Book size={18} /> },
                { name: 'Experience', id: 'experience', icon: <Briefcase size={18} /> },
                { name: 'Projects', id: 'projects', icon: <Folder size={18} /> },
                { name: 'Contact', id: 'contact', icon: <Mail size={18} /> }
              ].map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeSection === link.id ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 font-bold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"}`}>
                  {link.icon} <span className="text-[15px]">{link.name}</span>
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-black/5 dark:border-white/5 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 shadow-xl text-white transition-all active:scale-90 z-[1001]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header id="home" className="relative w-full h-screen border-b border-black/5 dark:border-white/5 overflow-hidden flex items-center">
        {/* Abstract Background Decor */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] opacity-[0.05] dark:opacity-[0.03] text-blue-500 z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[0.5]"><circle cx="50" cy="50" r="48" strokeDasharray="5 5" /><path d="M50 2L98 50L50 98L2 50Z" /></svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10 pt-20 w-full">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500"></span> Discovery & Innovation
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              DevOps Engineer <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">& Full-Stack Dev</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              I'm <span className="text-gray-900 dark:text-white font-semibold">Hein Zayar Kyaw.</span> Specializing in building scalable, secure, and user-centric web applications with over 2 years of experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="/Resume.pdf" download className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-500 transition-all shadow-lg active:scale-95 whitespace-nowrap group">
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Skill Icons in Hero */}
              <div className="flex items-center gap-2 p-1.5 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01]">
                {['react', 'nextjs', 'typescript', 'nodejs', 'docker', 'kubernetes'].map((tech) => (
                  <div key={tech} className="group/icon relative w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-2 hover:border-blue-500 transition-all cursor-help">
                    <img src={`/tech/${tech}.svg`} alt={tech} className="w-full h-full object-contain opacity-60 group-hover/icon:opacity-100 transition-all" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-gray-800 text-white text-[10px] opacity-0 group-hover/icon:opacity-100 transition-all pointer-events-none capitalize">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image Holder */}
          <div className="flex-1 relative aspect-square hidden md:flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-[0.05] blur-[80px] animate-pulse"></div>
            <div className="relative w-[85%] h-[85%] rounded-full border border-black/5 dark:border-white/10 p-4 z-10 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/5">
                <img src="/hero-team.png" alt="Hein" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-500 animate-bounce"><ChevronsDown size={28} /></div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">

        {/* --- About Section --- */}
        <section id="about" className="mb-40 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500"></span> Discovery
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">About My <span className="text-gray-400 italic">Journey</span></h3>
              <div className="space-y-4 text-[17px] leading-relaxed text-gray-600 dark:text-gray-400">
                <p>I am a <span className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer</span> focusing on the <span className="text-gray-900 dark:text-white font-semibold">MERN stack</span> and Cloud infrastructure.</p>
                <p>Coming from a background in Cybersecurity, I prioritize system integrity and rapid deployment through automated DevOps pipelines.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all group">
                  <Code size={20} className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-sm dark:text-white">Clean Code</h4>
                </div>
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all group">
                  <Shield size={20} className="text-cyan-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-sm dark:text-white">SecOps</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Cpu size={22} /></div>
            <h3 className="text-3xl font-bold dark:text-white">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Frontend", icon: <Code size={16} />, skills: [["React.js", "90%"], ["Tailwind CSS", "95%"], ["TypeScript", "80%"], ["Next.js", "85%"]] },
              { title: "Backend", icon: <Terminal size={16} />, skills: [["Node.js", "85%"], ["Express.js", "85%"], ["MS SQL", "80%"], ["Oracle SQL", "75%"]] },
              { title: "Security", icon: <Shield size={16} />, skills: [["Network Defense", "85%"], ["Ethical Hacking", "70%"], ["Cyber Ops", "65%"]] },
              { title: "DevOps", icon: <Cpu size={16} />, skills: [["Linux", "80%"], ["Docker", "85%"], ["Kubernetes", "85%"], ["AWS", "70%"]] }
            ].map((group, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-3 group-hover:text-blue-500 transition-colors">
                  {group.icon} {group.title}
                </h4>
                {group.skills.map(([name, pct]) => (
                  <SkillBar key={name} name={name} percentage={pct} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Briefcase size={22} /></div>
            <h3 className="text-3xl font-bold dark:text-white">Experience</h3>
          </div>

          {/* TechLink - DevOps */}
          <div className="p-10 mb-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-[#0a0a0a] hover:border-cyan-500/30 transition-all duration-500 group relative">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center p-3 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Shield className="text-cyan-500" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors">DevOps Engineer — TechLink</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                    <span className="text-cyan-600">2024 — Present</span>
                    <span className="w-4 h-[1px] bg-gray-300 dark:bg-white/10"></span>
                    <span>Infrastructure & Automation</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8">
                    Automating <span className="dark:text-white">CI/CD pipelines</span> and managing <span className="dark:text-white">Cloud Infrastructure</span>. Specializing in Kubernetes orchestration and secure deployments on <span className="dark:text-white text-cyan-500">AWS</span>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Terraform', 'Kubernetes', 'Docker', 'AWS', 'Linux'].map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full border border-cyan-500/10 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Click Up - Full Stack */}
          <div className="p-10 mb-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500 group relative">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center p-3 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Cpu className="text-blue-500" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-blue-400 group-hover:text-blue-500 transition-colors">Full-Stack Developer — Click Up</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                    <span className="text-blue-600">2023 — 2024</span>
                    <span className="w-4 h-[1px] bg-gray-300 dark:bg-white/10"></span>
                    <span>Web Systems Development</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8">
                    Scaling web applications using the <span className="dark:text-white text-blue-500 font-medium">MERN stack</span>. Developed high-performance frontend interfaces and secure server-side logic.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'Tailwind', 'TypeScript'].map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Folder size={22} /></div>
            <h3 className="text-3xl font-bold dark:text-white">Featured Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Movie Streaming Website", tech: ["React", "Redux", "Shadcn"], image: "/image_1.png" },
              { title: "Hotel Management", tech: ["React", "Tanstack", "AWS"], image: "/image_3.png" },
              { title: "Coffee Shop Website", tech: ["NextJS", "Tailwind", "Azure"], image: "/image_4.png" }
            ].map((project, index) => (
              <div key={index} className="flex flex-col bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 hover:-translate-y-3 transition-all duration-500 shadow-xl">
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-lg active:scale-95">Demo</a>
                    <a href="#" className="flex-1 text-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-white py-3 rounded-xl text-xs font-bold transition-all">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-24 scroll-mt-20">
          <div className="max-w-xl mx-auto">
            <div className="bg-white dark:bg-[#111] rounded-[3rem] p-12 shadow-2xl border border-black/5 dark:border-white/5 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-blue-500/10">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">Get In Touch</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-10 font-medium">Have a project in mind or just want to say hi?</p>
              <a href="mailto:heinzeyarkyaw2017@gmail.com" className="w-full flex items-center justify-center gap-4 bg-blue-600 text-white px-6 py-5 rounded-2xl transition-all hover:bg-blue-500 shadow-xl active:scale-95 group/mail">
                <Mail size={22} className="group-hover/mail:rotate-12 transition-transform" />
                <span className="text-[17px] font-bold">heinzeyarkyaw2017@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 dark:border-white/5 py-12 text-center text-[12px] text-gray-500 font-medium">
        © {new Date().getFullYear()} HEIN. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
