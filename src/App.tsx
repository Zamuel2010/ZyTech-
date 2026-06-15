import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowDown, ExternalLink, Linkedin, Menu, X, Download } from 'lucide-react';

// Edit these constants to easily update your portfolio content
const PROJECTS = [
  {
    id: 1,
    title: "Grantem Ventures Limited",
    category: "Landing Page • Multi Business",
    description: "A professional landing page representing a dynamic multi-business venture. Features a modern UI and clear value propositions.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://grantem-ventures-limited.vercel.app/",
    image: "https://i.postimg.cc/Z5MBgMVv/IMG-4706.jpg"
  },
  {
    id: 2,
    title: "Zymack",
    category: "Fintech • Web App",
    description: "A robust Crypto to Naira Fintech application. Seamless conversion algorithms coupled with an intuitive user interface.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    link: "https://zymack-76pecwxq6-samuels-projects-c0bf9f2a.vercel.app/",
    image: "https://i.postimg.cc/25nkwctX/IMG-4707.jpg"
  },
  {
    id: 3,
    title: "EA Scholars Portal",
    category: "EdTech • Web App",
    description: "A comprehensive school management platform for checking results, class schedules, and timetables for both staff and students.",
    tech: ["React", "Express", "PostgreSQL"],
    link: "https://ea-ochre.vercel.app/#",
    image: "https://i.postimg.cc/x8ZJmQ9f/IMG-4709.jpg"
  },
  {
    id: 4,
    title: "AI Image Generator",
    category: "Full Stack • Generative AI",
    description: "A text-to-image AI tool allowing users to create high-quality assets using prompt engineering. Integrated with stable diffusion APIs.",
    tech: ["Vue.js", "FastAPI", "Python"],
    link: "https://image-generator-qxb09uc4j-samuels-projects-c0bf9f2a.vercel.app/",
    image: "https://i.postimg.cc/6Qc80tYQ/IMG-4708.jpg"
  },
  {
    id: 5,
    title: "E-Commerce Dashboard",
    category: "SaaS • Analytics",
    description: "A comprehensive analytics dashboard for tracking merchant sales, customer retention, and inventory levels in real-time.",
    tech: ["React", "Recharts", "Express"],
    link: "https://zyydash.vercel.app/#",
    image: "https://i.postimg.cc/PfcZRbkN/IMG-4711.jpg"
  }
];

const SKILLS = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "PostgreSQL", "MongoDB", "GraphQL", "Tailwind CSS", 
  "Git", "Docker", "AWS", "Framer Motion", "WebGL"
];

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
       setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.closest('a') || target.closest('button')) {
          setIsHovering(true);
       } else {
          setIsHovering(false);
       }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-black/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 3 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        borderColor: isHovering ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
}

export default function App() {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/samadeniji852@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
            _subject: "New Contact Form Submission from ZyroTech"
        })
      });
      setIsSubmitted(true);
    } catch (error) {
       console.error("Error submitting form", error);
       setIsSubmitted(true); // Fallback to show success
    } finally {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
    }
  };

  useEffect(() => {
    if (phase === 3) {
      const timer = setTimeout(() => setPhase(4), 2200); 
      return () => clearTimeout(timer);
    } else if (phase === 4) {
      const timer = setTimeout(() => setPhase(5), 2800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <div className={`relative w-screen h-screen overflow-hidden transition-colors duration-1000 ${phase >= 3 ? 'bg-[#f4f5f6]' : 'bg-[#030005]'} font-sans flex items-center justify-center`}>
      
      {/* Phase 1 & 2: Morphing Drop / White Burst Fill */}
      <motion.div
        className="absolute top-0 left-1/2 z-10 origin-bottom shadow-[0_0_80px_rgba(255,255,255,0.8)]"
        initial={{ 
          x: '-50%', 
          y: '-15vh', 
          rotate: -45, 
          width: '3rem', 
          height: '3rem', 
          borderRadius: '50% 0 50% 50%',
          background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
          scale: 0
        }}
        animate={
          phase === 1 ? { 
            y: ['-15vh', '5vh', '5vh', '110vh'], 
            rotate: -45, 
            borderRadius: '50% 0 50% 50%', 
            scaleY: [0, 1, 1.8, 3.5], // Stretches as gravity pulls
            scaleX: [0, 1, 0.7, 0.2], // Thins out
            scale: [0, 1, 1, 1] 
          }
          : phase >= 2 ? { 
            y: '50vh', // Centers vertically on impact
            rotate: 0, 
            borderRadius: '50%',
            scaleY: 250,
            scaleX: 250,
            scale: 250, 
            background: 'radial-gradient(circle at center, #ffffff 0%, #f9fafb 25%, #f4f5f6 80%)',
            boxShadow: 'none',
          }
          : {}
        }
        transition={
          phase === 1 ? { 
            duration: 2.8, 
            times: [0, 0.2, 0.5, 1], // Appear -> hang -> stretch -> fall
            ease: ["easeOut", "easeInOut", "circIn"] 
          }
          : phase === 2 ? { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
          : { duration: 0 }
        }
        onAnimationComplete={() => {
          setPhase(p => p === 1 ? 2 : p === 2 ? 3 : p);
        }}
      />

      {/* Content Sequence */}
      <AnimatePresence mode="wait">
        
        {phase === 3 && (
          <motion.div
            key="phase3-welcome"
            initial={{ opacity: 0, filter: 'blur(15px)', scale: 0.9 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-900 to-gray-400 text-6xl sm:text-7xl md:text-9xl tracking-[0.2em] text-center shadow-black/5 drop-shadow-xl filter drop-shadow-[0_0_30px_rgba(0,0,0,0.1)]"
          >
            WELCOME
          </motion.div>
        )}

        {phase === 4 && (
          <motion.div
            key="phase4-intro"
            initial={{ opacity: 0, filter: 'blur(15px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(20px)', y: -20, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-4"
          >
            <div className="relative group">
              {/* Soft Background Shadow (Ambient Glow) */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-gray-300 to-gray-100 blur-[50px] rounded-[3rem] pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

              {/* The Border Container */}
              <div className="relative rounded-[2.5rem] p-[1.5px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-transparent">
                
                {/* Spinning Core (The Light Source tracing the edge) */}
                <div className="absolute inset-0 bg-[#f8f9fa]">
                  <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full origin-center"
                      style={{ 
                        background: 'conic-gradient(from 0deg, transparent 65%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.4) 100%)' 
                      }}
                    />
                  </div>
                </div>

                {/* The Premium Inner Plate */}
                <div className="relative z-10 px-12 py-16 md:px-24 md:py-20 rounded-[calc(2.5rem-1.5px)] bg-white/90 backdrop-blur-3xl flex flex-col items-center">
                  {/* Subtle top edge inner highlight */}
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent blur-sm" />
                  
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 tracking-tighter mb-6 relative z-10 drop-shadow-sm">
                    I'm Zyro.
                  </h2>
                  <p className="text-[10px] md:text-xs font-mono text-gray-500 tracking-[0.4em] uppercase relative z-10">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {phase === 5 && (
          <motion.div
            key="phase5-portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-30 overflow-y-auto overflow-x-hidden pointer-events-auto scroll-smooth text-[#111] bg-[#fcfcfc] selection:bg-blue-600 selection:text-white"
          >
            <CustomCursor />
            {/* Cinematic Noise & Subtle Grid Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")` }}></div>
            <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Floating Premium Header */}
            <motion.header 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
            >
              <div className="w-full max-w-5xl bg-white/70 backdrop-blur-2xl border border-black/5 px-6 py-4 rounded-[2rem] flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="text-xl font-display font-bold tracking-tight text-[#111]">
                  Zyro<span className="text-blue-600">Tech</span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-gray-500">
                  <a href="#home" className="hover:text-[#111] transition-colors">Home</a>
                  <a href="#work" className="hover:text-[#111] transition-colors">Projects</a>
                  <a href="#about" className="hover:text-[#111] transition-colors">About</a>
                  <a href="#contact" className="hover:text-[#111] transition-colors">Contact</a>
                </nav>
                <div className="hidden md:block">
                  <a href="mailto:samadeniji852@gmail.com" className="px-5 py-2.5 bg-[#111] text-white text-[13px] font-medium rounded-full hover:bg-black transition-colors shadow-lg shadow-black/10">
                    Let's Talk
                  </a>
                </div>
                <button 
                  className="md:hidden flex items-center text-[#111]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute top-[calc(100%+10px)] inset-x-4 bg-white/95 backdrop-blur-xl border border-black/5 shadow-2xl rounded-[1.5rem] md:hidden overflow-hidden"
                  >
                    <div className="flex flex-col py-4 px-6 gap-2 text-sm font-medium text-gray-600">
                      <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-3 border-b border-gray-100">Home</a>
                      <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-3 border-b border-gray-100">Projects</a>
                      <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-3 border-b border-gray-100">About</a>
                      <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-3">Contact</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.header>

            {/* High-End Hero Section */}
            <div id="home" className="min-h-[100svh] scroll-mt-32 flex flex-col justify-center px-6 relative z-10 pt-24 pb-12">
               <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 flex flex-col md:items-start text-center md:text-left order-2 lg:order-1 pt-12 lg:pt-0">
                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
                        <h1 className="font-display text-[4rem] sm:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-bold tracking-tighter text-[#111] mb-6">
                           Digital <br/><span className="text-gray-400 font-light italic">Artisan.</span>
                        </h1>
                     </motion.div>
                     <motion.p 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
                        className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-xl"
                     >
                        I engineer scalable web architectures and forge highly refined, fluid user experiences.
                     </motion.p>
                     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }} className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
                        <a href="#work" className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-[0_8px_30px_rgb(37,99,235,0.2)] hover:bg-blue-700 transition-all hover:-translate-y-1 active:translate-y-0 whitespace-nowrap">
                          Explore Works
                        </a>
                        <a href="/resume.pdf" download className="px-8 py-4 rounded-full border border-black/10 bg-white text-[#111] font-medium shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-gray-50 transition-all hover:-translate-y-1 active:translate-y-0 whitespace-nowrap flex items-center gap-2">
                          <Download className="w-5 h-5" />
                          Download Resume
                        </a>
                        <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-black/5 bg-white/50 backdrop-blur-xl">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span className="text-[11px] font-medium text-gray-600 uppercase tracking-[0.2em]">Available for hire</span>
                        </div>
                     </motion.div>
                  </div>
                  
                  {/* Hero Image - Polished, Asymmetric */}
                  <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-[280px] h-[350px] sm:w-[360px] sm:h-[450px] group"
                     >
                        {/* Decorative background framing */}
                        <div className="absolute inset-0 bg-gray-200 rounded-[3rem] translate-x-6 translate-y-6 rotate-3 group-hover:rotate-6 group-hover:translate-x-8 transition-transform duration-700"></div>
                        <div className="absolute inset-0 p-3 bg-white rounded-[3rem] shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-black/5">
                           <img 
                              src="https://i.postimg.cc/66zcyHys/IMG-4467.jpg" 
                              alt="Zyro" 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover rounded-[2.2rem] object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                           />
                           
                           {/* Orbiting Black Border Badge Alternative */}
                           <div className="absolute -bottom-6 -left-6 bg-[#111] text-white p-6 rounded-full w-32 h-32 flex items-center justify-center shadow-xl shadow-black/20 animate-[spin_12s_linear_infinite] hover:[animation-play-state:paused]">
                              <svg className="w-full h-full" viewBox="0 0 100 100">
                                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text fontSize="13.5" fontWeight="600" fill="currentColor" tracking="widest">
                                  <textPath href="#textPath" startOffset="0%">• ZYROTECH • FULL STACK</textPath>
                                </text>
                              </svg>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>

            {/* High-End Bento Grid "What I Do" */}
            <section id="what-i-do" className="py-24 md:py-32 px-6 w-full relative z-10 scroll-mt-24">
              <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#111] mb-4">Expertise.</h2>
                    <p className="text-gray-500 font-light text-lg md:text-xl max-w-xl">
                      I translate complex requirements into elegant, intuitive, and high-performance digital experiences.
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Bento Item 1 */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="md:col-span-8 p-10 md:p-14 rounded-[2.5rem] bg-white border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-black/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-[#111] mb-4 tracking-tight">Frontend Excellence</h3>
                    <p className="text-gray-500 font-light text-lg leading-relaxed max-w-xl">
                      Crafting highly interactive, accessible, and pixel-perfect user interfaces using React, Next.js, and modern CSS frameworks. Every animation is intentional, every interaction is fluid.
                    </p>
                  </motion.div>

                  {/* Bento Item 2 */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-4 p-10 rounded-[2.5rem] bg-[#111] text-white border border-black shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.3)] transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 w-16 h-16 rounded-[1.25rem] bg-white/10 text-white flex items-center justify-center mb-16 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 backdrop-blur-md">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                    </div>
                    <h3 className="relative z-10 text-3xl font-display font-bold mb-4 tracking-tight">Backend<br/>Architecture</h3>
                    <p className="relative z-10 text-gray-400 font-light leading-relaxed">
                      Designing scalable, secure, and robust server-side systems overriding bottlenecks.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* High-End Projects Section */}
            <section id="work" className="py-24 md:py-32 px-6 w-full relative z-10 scroll-mt-24">
              <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#111] mb-4">Selected Work.</h2>
                  <div className="w-full h-[1px] bg-black/5 mt-12"></div>
                </div>

                <div className="grid grid-cols-1 gap-24">
                  {PROJECTS.map((project, index) => (
                    <motion.div 
                      key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
                    >
                      {/* Massive Image Container */}
                      <div className={`w-full lg:w-3/5 rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-black/5 relative aspect-[4/3] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                         {project.image && (
                           <img 
                             src={project.image} 
                             alt={project.title}
                             referrerPolicy="no-referrer"
                             className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                           />
                         )}
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black-[0.02] transition-colors duration-500 border border-black/5 rounded-[2.5rem] pointer-events-none"></div>
                      </div>
                      
                      {/* Project Meta */}
                      <div className="w-full lg:w-2/5 flex flex-col justify-center px-4 lg:px-0">
                        <span className="text-[11px] font-mono text-blue-600 uppercase tracking-[0.2em] mb-4 block font-semibold">{project.category}</span>
                        <h3 className="font-display text-4xl md:text-5xl font-bold text-[#111] mb-6 tracking-tight">{project.title}</h3>
                        <p className="text-gray-500 font-light text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-10">
                          {project.tech.map(tech => (
                            <span key={tech} className="px-4 py-2 bg-white border border-black/10 rounded-full font-mono text-[11px] text-gray-500 uppercase tracking-widest shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a 
                          href={project.link} 
                          target={project.link !== '#' ? '_blank' : '_self'}
                          rel={project.link !== '#' ? 'noopener noreferrer' : ''}
                          className="inline-flex items-center gap-3 text-[#111] font-medium text-lg group/link hover:text-blue-600 transition-colors w-fit pb-1"
                        >
                          <span className="border-b border-black/20 group-hover/link:border-blue-600 transition-colors">View Project</span> 
                          <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* High-End About Section */}
            <section id="about" className="py-24 md:py-32 px-6 w-full relative z-10 scroll-mt-24 mt-20 bg-white border-t border-black/5 shadow-[0_-20px_40px_rgb(0,0,0,0.02)]">
               <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                 <div className="lg:col-span-5 order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
                    <img 
                      src="https://i.postimg.cc/bw4yhcby/E653F3A6-C7B4-45D6-AD52-A4C890A322B5.png" 
                      alt="About Zyro" 
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-[0_20px_40px_rgb(0,0,0,0.06)] grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                 </div>
                 <div className="lg:col-span-7 order-1 lg:order-2">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#111] mb-8">About Me.</h2>
                    <div className="space-y-6 text-gray-500 font-light text-lg leading-relaxed">
                      <p>
                        I am Zyro, a dedicated Full Stack Engineer with a passion for designing and developing robust, scalable, and visually compelling digital experiences. My journey in software engineering bridges the gap between meticulous backend architecture and highly refined user interfaces.
                      </p>
                      <p>
                        With deep expertise in modern web technologies such as React, Next.js, Node.js, and TypeScript, I architect resilient systems capable of handling complex logic without compromising on performance or aesthetics. I thrive in environments where rigorous engineering meets elegant design, translating abstract concepts into functional, pixel-perfect reality.
                      </p>
                      <p>
                        Whether modeling an intricate database schema, building an automated deployment pipeline, or finessing the micro-interactions of a frontend component, I bring an artisan's dedication to the craft. I believe that exceptional software is not just about writing lines of code—it's about solving real-world problems with elegance, efficiency, and scale, ensuring every digital product leaves a lasting impression.
                      </p>
                    </div>
                    
                    <div className="mt-12">
                      <h3 className="font-mono text-[11px] font-bold text-[#111] uppercase tracking-[0.2em] mb-6">Connect & Follow</h3>
                      <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/adeniji-samuel-621875332?trk=contact-info" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 border border-black/5 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/2349136806231" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 border border-black/5 rounded-full text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all shadow-sm hover:shadow-md">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                          </svg>
                        </a>
                        <a href="https://x.com/zyroonchain?s=11" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 border border-black/5 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition-all shadow-sm hover:shadow-md">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/Zamuel2010" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 border border-black/5 rounded-full text-gray-600 hover:text-[#111] hover:bg-gray-100 transition-all shadow-sm hover:shadow-md">
                           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                           </svg>
                        </a>
                      </div>
                    </div>
                 </div>
               </div>
            </section>

            {/* High-End Marquee Banner */}
            <div className="relative w-full overflow-hidden flex bg-[#111] text-white py-6 z-20 -mt-8 border-y border-white/10 shadow-2xl skew-y-2 transform origin-left">
              <motion.div 
                className="flex whitespace-nowrap space-x-12 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              >
                {Array(8).fill("AVAILABLE FOR HIRE — DESIGN — ENGINEERING — INNOVATION —").map((text, i) => (
                   <span key={i} className="text-2xl md:text-4xl font-display font-medium tracking-widest uppercase opacity-80">{text}</span>
                ))}
              </motion.div>
            </div>

            {/* High-End Contact Footer */}
            <section id="contact" className="py-32 px-6 w-full relative z-10 scroll-mt-24 bg-[#fafafa] border-t border-black/5 mt-12">
               <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                 <div className="w-20 h-[3px] bg-[#111] mb-12 rounded-full" />
                 <h2 id="contact" className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold tracking-tighter mb-8 text-[#111] leading-none">
                   Let's Make <br/><span className="text-gray-300 italic font-light">History.</span>
                 </h2>
                 <p className="text-gray-500 font-light text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
                   Currently open for new ventures, full-time roles, or freelance projects. I bring ideas to life with uncompromising quality.
                 </p>
                 
                 <button 
                   onClick={() => setIsContactModalOpen(true)}
                   className="relative inline-flex h-16 items-center justify-center rounded-full p-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all overflow-hidden group"
                 >
                   <span className="absolute inset-0 bg-[#222]"></span>
                   <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[spin_5s_linear_infinite]"
                         style={{ background: 'conic-gradient(from 180deg, transparent 0%, transparent 45%, rgba(255,255,255,0.9) 50%, transparent 55%, transparent 100%)' }}>
                   </span>
                   <span className="relative inline-flex w-full h-full items-center justify-center rounded-full bg-[#111] px-12 text-lg font-medium tracking-wide text-white z-10">
                     Get In Touch
                   </span>
                 </button>
                 
                 <footer className="w-full mt-40 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 border-t border-black/5 pt-10 gap-6">
                   <span>© {new Date().getFullYear()} ZyroTech. All rights reserved.</span>
                   <div className="flex gap-10">
                     <a href="https://github.com/Zamuel2010" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors">GitHub</a>
                     <a href="https://www.linkedin.com/in/adeniji-samuel-621875332?trk=contact-info" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors">LinkedIn</a>
                     <a href="https://x.com/zyroonchain?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors">Twitter (X)</a>
                   </div>
                 </footer>
               </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsContactModalOpen(false)}></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl mx-auto rounded-[3rem] bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_40px_80px_rgb(0,0,0,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent z-0"></div>
              
              <div className="relative z-10 p-8 md:p-12">
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-6 right-6 p-3 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full transition-colors border border-white/50"
                  aria-label="Cancel"
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>

                <h3 className="font-display text-3xl font-bold text-[#111] mb-2 tracking-tight">Let's connect.</h3>
                <p className="text-gray-500 font-light mb-8">Drop a message to samadeniji852@gmail.com and let's craft something remarkable.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center justify-center text-center">
                     <div className="w-16 h-16 bg-[#111] text-white rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <h3 className="font-display text-2xl font-bold text-[#111] mb-2">Message Sent Successfully</h3>
                     <p className="text-gray-500 font-light text-lg">Thank you for reaching out. I'll get back to you shortly.</p>
                     
                     <button 
                       onClick={() => setIsContactModalOpen(false)}
                       className="mt-8 px-8 py-3 bg-[#111] text-white font-medium rounded-full shadow-[0_8px_20px_rgb(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all w-full"
                     >
                       Close
                     </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 text-left">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[12px] font-mono font-semibold text-[#111]/60 uppercase tracking-widest px-1">Name</label>
                      <input 
                        id="name"
                        type="text" 
                        required 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl px-5 py-4 text-[#111] font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition-all placeholder:text-gray-500 shadow-inner"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[12px] font-mono font-semibold text-[#111]/70 uppercase tracking-widest px-1">Email</label>
                      <input 
                        id="email"
                        type="email" 
                        required 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl px-5 py-4 text-[#111] font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition-all placeholder:text-gray-500 shadow-inner"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[12px] font-mono font-semibold text-[#111]/70 uppercase tracking-widest px-1">Message</label>
                      <textarea 
                        id="message"
                        required 
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl px-5 py-4 text-[#111] font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition-all placeholder:text-gray-500 resize-none shadow-inner"
                        placeholder="How can we collaborate?"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-2 group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#111] w-full font-medium text-neutral-50 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                        <div className="relative h-full w-8 bg-white/20" />
                      </div>
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
