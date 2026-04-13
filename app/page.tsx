"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield, Code, GraduationCap, Cpu, Mail,
  Terminal, Download, ExternalLink, Menu, X,
} from 'lucide-react';
import {
  Home, User, Brain, Book, Briefcase, Folder
} from 'lucide-react';

// --- Skills Progress Bar Component ---
const SkillBar = ({ name, percentage }: { name: string; percentage: string }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2">
      <span className="text-[13px] font-medium text-gray-300">{name}</span>
      <span className="text-[11px] font-mono text-gray-500">{percentage}</span>
    </div>
    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
      <div
        className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  // Navigation Links Array
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  // Scroll Spy 
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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-blue-500/30 font-sans">

      {/* --- Burger Menu --- */}
      <nav className="fixed top-0 w-full z-[100] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tighter cursor-default">
            HEIN
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10 text-[14px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id === "home" ? "#" : `#${link.id}`}
                className={`relative py-1 transition-all ${activeSection === link.id ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_#3b82f6]"></span>
                )}
              </a>
            ))}
          </div>

          {/* <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button> */}
        </div>

        {/* --- Floating Mobile Menu (Standard Tailwind Animation) --- */}
        <div className="md:hidden fixed top-4 right-8 z-[1000] flex flex-col-reverse items-end gap-4">

          {/* The Pop-up Menu Box */}
          <div
            className={`
              bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-4 min-w-[200px]
              transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right
              ${isMenuOpen
                ? "opacity-100 translate-y-0 scale-100 visible"
                : "opacity-0 translate-x-10 scale-90 invisible"}
            `}
          >
            <div className="flex flex-col gap-1">
              {[
                { name: 'Home', id: 'home', icon: <Home size={20} /> },
                { name: 'About', id: 'about', icon: <User size={20} /> },
                { name: 'Skills', id: 'skills', icon: <Brain size={20} /> },
                { name: 'Education', id: 'education', icon: <Book size={20} /> },
                { name: 'Experience', id: 'experience', icon: <Briefcase size={20} /> },
                { name: 'Projects', id: 'projects', icon: <Folder size={20} /> },
                { name: 'Contact', id: 'contact', icon: <Mail size={20} /> }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeSection === link.id
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-gray-600 hover:bg-gray-50 active:bg-gray-100"
                    }`}
                >
                  <span className={activeSection === link.id ? "text-blue-600" : "text-blue-500"}>
                    {link.icon}
                  </span>
                  <span className="text-[15px]">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* The Main Toggle Button (The Blue Circle) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 shadow-2xl transition-all duration-300 active:scale-90 z-[1001] overflow-hidden"
          >
            {/* Icons with smooth rotation */}
            <div className={`absolute transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
              <Menu size={30} className="text-white" />
            </div>
            <div className={`absolute transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
              <X size={30} className="text-white" />
            </div>

            {/* Outer Glow Ring Effect */}
            {!isMenuOpen && (
              <span className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping opacity-30"></span>
            )}
          </button>
        </div>
      </nav>

      {/* --- Hero Section with Background Mask Image --- */}
      <header id="home" className="relative w-full h-screen border-b border-white/5 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40 md:opacity-60"
          style={{
            backgroundImage: 'url(/image_2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Overlay Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0"></div>

        <div className="max-w-5xl mx-auto h-full px-6 flex flex-col justify-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            DevOps Engineer <br />
            <span className="text-gray-500">& Full-Stack Developer</span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-8">
            ကျွန်တော်သည် <span className="text-blue-400 font-medium">University of Central Lancashire</span> တွင် ပညာသင်ကြားနေပြီး လုံခြုံစိတ်ချရသော Web Application များနှင့် ကွန်ရက်စနစ်များ တည်ဆောက်ရန် စိတ်အားထက်သန်ပါသည်။
          </p>

          <div className="flex gap-4">
            {/* --- Download Resume Button (With Icon) --- */}
            <a
              href="/Resume.pdf"
              className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95 group"
            >

              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
            {/* <a href="mailto:your-email@example.com" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 text-gray-400 hover:text-white"><Mail size={20} /></a> */}
            {/* <a href="https://github.com" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 text-gray-400 hover:text-white"><Github size={20} /></a>
            <a href="https://linkedin.com" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 text-gray-400 hover:text-white"><Linkedin size={20} /></a> */}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">

        {/* --- About Section (Discovery) --- */}
        <section id="about" className="mb-40 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500"></span> Discovery
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                About <span className="text-gray-500 italic">My Journey</span>
              </h3>
              <div className="space-y-6 text-[17px] leading-relaxed text-gray-400">
                <p className="text-gray-300 leading-relaxed">
                    My name is <span className="text-white font-semibold underline decoration-blue-500/30">Hein Zayar Kyaw.</span> I'm a <span className="text-blue-400 font-medium">Software Engineer</span> with over 2 years of hands-on experience building scalable, responsive, and user-focused web applications.
                  </p>
                  
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    I specialize in creating seamless front-end experiences using <span className="text-white">React, and Tailwind CSS</span>, and developing robust back-end solutions with <span className="text-white">Node.js and Express.</span>
                  </p>
                  
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    I'm also skilled in working with relational databases such as <span className="text-white">Microsoft SQL Server and Oracle SQL.</span> I'm passionate about transforming complex ideas into clean, maintainable code and delivering meaningful, impactful user experiences.
                  </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <Shield size={20} className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold text-sm mb-1">Security-First</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Code ရေးတိုင်း လုံခြုံရေးကို အမြဲဦးစားပေး စဉ်းစားပါတယ်။</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <Terminal size={20} className="text-cyan-500 mb-3" />
                  <h4 className="text-white font-bold text-sm mb-1">Clean Code</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">ဖတ်ရလွယ်ကူပြီး စနစ်ကျတဲ့ Code တွေရေးဖို့ ကြိုးစားပါတယ်။</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <Cpu className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                <Code size={14} className="text-blue-400" /> Frontend
              </h4>
              <SkillBar name="React.js" percentage="90%" />
              <SkillBar name="Tailwind CSS" percentage="85%" />
              <SkillBar name="TypeScript" percentage="75%" />
              <SkillBar name="Next.js" percentage="75%" />
            </div>

            {/* Backend Skills */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" /> Backend
              </h4>
              <SkillBar name="Node.js" percentage="80%" />
              <SkillBar name="Express.js" percentage="85%" />
              <SkillBar name="PHP" percentage="90%" />
              <SkillBar name="GO" percentage="70%" />
            </div>

            {/* Security Skills */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                <Shield size={14} className="text-red-400" /> Security
              </h4>
              <SkillBar name="Network Defense" percentage="85%" />
              <SkillBar name="Ethical Hacking" percentage="70%" />
              <SkillBar name="Cyber Ops" percentage="65%" />
            </div>

            {/* Others */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                <Cpu size={14} className="text-purple-400" /> DevOps & Infrastructure
              </h4>
              <SkillBar name="Linux" percentage="80%" />
              <SkillBar name="Git / GitHub" percentage="90%" />
              <SkillBar name="Docker" percentage="85%" />
              <SkillBar name="Kubernetes" percentage="85%" />
            </div>
            {/* Cloud */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                <Cpu size={14} className="text-purple-400" /> Cloud
              </h4>
              <SkillBar name="AWS" percentage="80%" />
              <SkillBar name="Azure" percentage="90%" />
            </div>
            {/* Database */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                <Cpu size={14} className="text-purple-400" /> Database
              </h4>
              <SkillBar name="MongoDB" percentage="80%" />
              <SkillBar name="MySQL" percentage="90%" />
              <SkillBar name="PostgreSQl" percentage="85%" />
              <SkillBar name="Firebase" percentage="85%" />
            </div>
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <GraduationCap className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition group">
              <span className="text-blue-500 font-mono text-xs font-bold">2023 — 2026</span>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition">BSc (Hons) Cybersecurity and Networking</h4>
              <p className="text-gray-500 mt-1 text-sm leading-relaxed">University of Central Lancashire (UCLan)</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition group">
              <span className="text-cyan-500 font-mono text-xs font-bold">Certification</span>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-400 transition">MERN Stack Development</h4>
              <p className="text-gray-500 mt-1 text-sm leading-relaxed">WTC Technology</p>
            </div>
          </div>
        </section>

        {/* --- Experience Section--- */}
        <section id="experience" className="mb-30 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <Code className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Experience</h3>
          </div>

          <div className="p-8 mb-8 rounded-[2rem] border border-white/10 bg-[#0a0a0a] relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex gap-6">
                {/* Company Icon Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[calc(1rem-2px)] flex items-center justify-center">
                    <Cpu className="text-blue-400" size={30} />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">TeachLink</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl mb-6">
                    Cybersecurity နှင့် Web Development ပိုင်းဆိုင်ရာ သင်ခန်းစာများကို စနစ်တကျ ပြင်ဆင်ခြင်း၊
                    လုံခြုံစိတ်ချရသော platform architecture များအား လေ့လာဆန်းစစ်ခြင်းနှင့်
                    ခေတ်မီနည်းပညာများ အသုံးပြု၍ interactive ဖြစ်သော website များအား တည်ဆောက်ခဲ့ပါသည်။
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={14} className="text-gray-500" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Technologies</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 self-start">
                <div className="w-6 h-6 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-300 tracking-wide">2023 — 2026</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-[2rem] border border-white/10 bg-[#0a0a0a] relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex gap-6">
                {/* Company Icon Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[calc(1rem-2px)] flex items-center justify-center">
                    <Cpu className="text-blue-400" size={30} />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">TeachLink</h4>
                    <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl mb-6">
                      Cybersecurity နှင့် Web Development ပိုင်းဆိုင်ရာ သင်ခန်းစာများကို စနစ်တကျ ပြင်ဆင်ခြင်း၊
                      လုံခြုံစိတ်ချရသော platform architecture များအား လေ့လာဆန်းစစ်ခြင်းနှင့်
                      ခေတ်မီနည်းပညာများ အသုံးပြု၍ interactive ဖြစ်သော website များအား တည်ဆောက်ခဲ့ပါသည်။
                    </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={14} className="text-gray-500" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Technologies</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 self-start">
                <div className="w-4 h-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-400 tracking-wide">2023 — 2026</span>
              </div>
            </div>
          </div>



        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <Code className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Point of Sale System",
                description: "A customized POS system for local businesses to manage operations, inventory, and sales in a single platform.",
                tech: ["React", "Redux Toolkit", "Shadcn UI"],
                image: "/pos-project.png", // သင့်ပုံလမ်းကြောင်းထည့်ပါ
              },
              {
                title: "Hotel Booking Management",
                description: "Open source community project to build a complete hotel reservation and management dashboard.",
                tech: ["React", "Tanstack Query", "Shadcn UI", "AWS S3"],
                image: "/hotel-project.png",
              },
              {
                title: "AI-Powered Chatbot",
                description: "Fullstack AI chatbot integrated with Azure AI to handle personal queries and life data analysis.",
                tech: ["NextJS", "Tailwind CSS", "Azure AI", "AWS Lambda"],
                image: "/ai-project.png",
              }
            ].map((project, index) => (
              <div key={index} className="flex flex-col bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 opacity-50">
                        <Terminal size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-gray-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                        Demo
                      </a>
                      <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Section (Updated Icons) --- */}
        <section id="contact" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-xl mx-auto">

            <div className="bg-white rounded-3xl p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center text-center transition-all">

              <h2 className="text-4xl font-extrabold text-[#0d0d0d] mb-5 tracking-tighter">
                Contact
              </h2>

              <p className="text-lg text-gray-600 mb-12 max-w-sm font-medium leading-relaxed">
                Feel free to connect with me through any of the platforms below!
              </p>

              {/* Social Icons (Facebook & Telegram) */}
              <div className="flex gap-12 mb-12">
                {[
                  {
                    name: "Facebook",
                    // Facebook Icon color: #1877F2
                    icon: <Mail size={50} className="text-[#1877F2]" />,
                    href: "https://facebook.com/your-profile"
                  },
                  // { 
                  //   name: "Telegram", 
                  //   // Telegram Icon color: #24A1DE (Send icon as a placeholder)
                  //   icon: <Telegram size={50} className="text-[#24A1DE]" />, 
                  //   href: "https://t.me/your-username" 
                  // }
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 hover:opacity-80 active:scale-95"
                  >
                    {platform.icon}
                    <span className="text-sm font-semibold text-gray-700">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Email Section */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href="mailto:heinzeyarkyaw2017@gmail.com"
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-6 py-3.5 rounded-full transition-all hover:bg-gray-100 active:scale-95 shadow-sm"
                >
                  <Mail size={22} className="text-[#d93025]" />
                  <span className="text-[17px] font-semibold text-gray-800 tracking-tight">
                    heinzeyarkyaw2017@gmail.com
                  </span>
                </a>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  Email
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer id="contact" className="border-t border-white/5 py-12 text-center text-[12px] text-gray-600">
        © {new Date().getFullYear()} HEIN. All Rights Reserved.
      </footer>
    </div>
  );
}
