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
  <div className="mb-5 group/bar">
    <div className="flex justify-between mb-2">
      <span className="text-[13px] font-medium text-gray-300 group-hover/bar:text-blue-400 transition-colors">{name}</span>
      <span className="text-[11px] font-mono text-gray-500">{percentage}</span>
    </div>
    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
      <div
        className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out group-hover/bar:bg-cyan-400 group-hover/bar:shadow-[0_0_8px_#22d3ee]"
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-blue-500/30 font-sans">
      <nav className="fixed top-0 w-full z-[100] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tighter cursor-default">
            HEIN
          </div>
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
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden fixed top-4 right-8 z-[1000] flex flex-col-reverse items-end gap-4">
          <div
            className={`
              bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-4 min-w-[200px]
              transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right
              ${isMenuOpen ? "opacity-100 translate-y-0 scale-100 visible" : "opacity-0 translate-x-10 scale-90 invisible"}
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
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeSection === link.id ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className={activeSection === link.id ? "text-blue-600" : "text-blue-500"}>{link.icon}</span>
                  <span className="text-[15px]">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 shadow-2xl transition-all active:scale-90 z-[1001] hover:bg-blue-500"
          >
            {isMenuOpen ? <X size={30} className="text-white" /> : <Menu size={30} className="text-white" />}
          </button>
        </div>
      </nav>

      <header id="home" className="relative w-full h-screen border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 md:opacity-60" style={{ backgroundImage: 'url(/image_2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0"></div>
        <div className="max-w-5xl mx-auto h-full px-6 flex flex-col justify-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            DevOps Engineer <br />
            <span className="text-gray-500 hover:text-gray-400 transition-colors">& Full-Stack Developer</span>
          </h2>
          <div className="max-w-2xl space-y-4 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              My name is <span className="text-white font-semibold underline decoration-blue-500/30">Hein Zayar Kyaw.</span> I'm a <span className="text-blue-400 font-medium">Software Engineer</span> with over 2 years of hands-on experience building scalable, responsive, and user-focused web applications.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all shadow-[0_10px_20px_rgba(255,255,255,0.05)] group active:scale-95"
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* --- About Section --- */}
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
                <div className="space-y-6 text-[17px] leading-relaxed text-gray-400">
                  <p>
                    My name is <span className="text-white font-semibold">Hein Zayar Kyaw.</span> I am a
                    <span className="text-blue-400 font-medium"> Software Engineer</span> with a passion for building
                    scalable, secure, and user-centric web applications.
                  </p>
                  <p>
                    With over <span className="text-white">2 years of experience</span> in full-stack development,
                    I specialize in the <span className="text-blue-400">MERN stack</span> (MongoDB, Express, React, Node.js).
                    I love transforming complex logic into clean, maintainable code while ensuring a seamless user experience.
                  </p>
                  <p>
                    Coming from a background in <span className="text-white font-medium">Cybersecurity and Networking</span>,
                    I prioritize security and efficiency in everything I build. I am dedicated to bridging the gap between
                    robust engineering and elegant design to create meaningful digital solutions.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
                  <Code size={20} className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-sm mb-1">Clean & Scalable</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">I focus on maintainable code and scalable architectures.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
                  <User size={20} className="text-cyan-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-sm mb-1">User-Focused</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Delivering meaningful and impactful user experiences.</p>
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
            {[
              { title: "Frontend", icon: <Code size={14} className="text-blue-400" />, skills: [["React.js", "90%"], ["Tailwind CSS", "95%"], ["TypeScript", "80%"], ["Next.js", "85%"]] },
              { title: "Backend", icon: <Terminal size={14} className="text-cyan-400" />, skills: [["Node.js", "85%"], ["Express.js", "85%"], ["Microsoft SQL", "80%"], ["Oracle SQL", "75%"]] },
              { title: "Security", icon: <Shield size={14} className="text-red-400" />, skills: [["Network Defense", "85%"], ["Ethical Hacking", "70%"], ["Cyber Ops", "65%"]] },
              { title: "DevOps", icon: <Cpu size={14} className="text-purple-400" />, skills: [["Linux", "80%"], ["Git / GitHub", "90%"], ["Docker", "85%"], ["Kubernetes", "85%"]] }
            ].map((group, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-500 group">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2 group-hover:text-white transition-colors">
                  {group.icon} {group.title}
                </h4>
                {group.skills.map(([name, pct]) => (
                  <SkillBar key={name} name={name} percentage={pct} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <GraduationCap className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 group">
              <span className="text-blue-500 font-mono text-xs font-bold group-hover:text-blue-400">2023 — 2026</span>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition">BSc (Hons) Cybersecurity and Networking</h4>
              <p className="text-gray-500 mt-1 text-sm leading-relaxed">University of Central Lancashire (UCLan)</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 group">
              <span className="text-cyan-500 font-mono text-xs font-bold group-hover:text-cyan-400">Certification</span>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-400 transition">MERN Stack Development</h4>
              <p className="text-gray-500 mt-1 text-sm leading-relaxed">WTC Technology</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 group">
              <span className="text-cyan-500 font-mono text-xs font-bold group-hover:text-cyan-400">Certification</span>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-400 transition">DevOps</h4>
              <p className="text-gray-500 mt-1 text-sm leading-relaxed">Myanmar Tech Academy</p>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="mb-30 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Experience</h3>
          </div>

          {[1, 2].map((_, i) => (
            <div key={i} className="p-8 mb-8 rounded-[2rem] border border-white/10 bg-[#0a0a0a] hover:border-blue-500/30 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                    <div className="w-full h-full bg-[#0a0a0a] rounded-[calc(1rem-2px)] flex items-center justify-center">
                      <Cpu className="text-blue-400 group-hover:scale-110 transition-transform" size={30} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-white transition-colors">TeachLink</h4>
                    <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl mb-6">
                      Systematically developed Cybersecurity and Web Development curricula, analyzed secure platform architectures, and built highly interactive websites using modern industry technologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((tech) => (
                        <span key={tech} className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium group-hover:border-blue-500/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 self-start group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <span className="text-xs font-semibold tracking-wide">2023 — 2026</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-2 mb-12">
            <Folder className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Movie Streaming Website", tech: ["React", "Redux", "Shadcn"], image: "/image_1.png" },
              { title: "Hotel Management", tech: ["React", "Tanstack", "AWS"], image: "/image_3.png" },
              { title: "Coffee Shop Website", tech: ["NextJS", "Tailwind", "Azure"], image: "/image_4.png" }
            ].map((project, index) => (
              <div key={index} className="flex flex-col bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden group hover:border-blue-500/50 hover:-translate-y-3 transition-all duration-500 shadow-xl">
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 border border-white/10">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/20">Demo</a>
                    <a href="#" className="flex-1 text-center bg-white/5 border border-white/10 hover:bg-white/10 text-white py-2 rounded-xl text-xs font-bold transition-all">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-24 scroll-mt-20">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-blue-500/10">
              <h2 className="text-4xl font-extrabold text-[#0d0d0d] mb-5 tracking-tighter">Contact</h2>
              <p className="text-gray-600 mb-12 font-medium">Feel free to connect with me!</p>
              <div className="flex flex-col items-center gap-6 w-full">
                <a href="mailto:heinzeyarkyaw2017@gmail.com" className="w-full flex items-center justify-center gap-3 bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl transition-all hover:bg-blue-600 hover:text-white group/mail shadow-sm">
                  <Mail size={22} className="text-[#d93025] group-hover/mail:text-white transition-colors" />
                  <span className="text-[16px] font-bold tracking-tight">heinzeyarkyaw2017@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-[12px] text-gray-600">
        © {new Date().getFullYear()} HEIN. All Rights Reserved.
      </footer>
    </div>
  );
}
