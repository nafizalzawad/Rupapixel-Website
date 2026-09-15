import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, designStrengths, workExperience, education } from '../data/portfolioData';
import rupaPortrait from '../assets/rupa-portrait.jpg';
import { Briefcase, GraduationCap, CheckCircle, MapPin, Award, ArrowUpRight, Sparkles } from 'lucide-react';

/* --- 3D Interactive Floating Glass Discs / Lenses Component (Scale AI Aesthetic) --- */
function ProfileInteractiveDiscs({ mousePos, sectionScroll }) {
  const { x: mouseX, y: mouseY } = mousePos;

  // Parallax offsets for each disc
  const disc1Y = sectionScroll * 0.18 + mouseY * 15;
  const disc1X = mouseX * 18;
  const disc1Rotate = sectionScroll * 0.08 + mouseX * 6;

  const disc2Y = sectionScroll * 0.32 + mouseY * 22;
  const disc2X = mouseX * -20;
  const disc2Rotate = -sectionScroll * 0.1 + mouseY * -8;

  const disc3Y = -sectionScroll * 0.22 + mouseY * 16;
  const disc3X = mouseX * 22;
  const disc3Rotate = sectionScroll * 0.12 + mouseX * 8;

  const disc4Y = sectionScroll * 0.25 + mouseY * -12;
  const disc4X = mouseX * -14;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0"
      style={{
        perspective: '1400px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Background Central Violet Ambient Aurora Glow (Scale AI Lighting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#7c3aed]/25 via-[#6b21a8]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[450px] bg-gradient-to-tr from-[#06b6d4]/15 via-[#8b5cf6]/20 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[400px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* SVG Container for Precision 3D Discs & Iridescent Caustics */}
      <svg
        className="w-full h-full absolute inset-0 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Iridescent Rim Gradient (Cyan -> Electric Violet -> Magenta -> Deep Obsidian) */}
          <linearGradient id="discRimIridescent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#6b21a8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1e083c" stopOpacity="0.9" />
          </linearGradient>

          {/* Secondary Violet-Cyan Edge Gradient */}
          <linearGradient id="discRimCyanViolet" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0.9" />
          </linearGradient>

          {/* Dark Translucent Glass Face Gradient (Disc 1) */}
          <radialGradient id="disc1FaceGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#241044" stopOpacity="0.7" />
            <stop offset="45%" stopColor="#15082a" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#0b0416" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#06020c" stopOpacity="0.98" />
          </radialGradient>

          {/* Frosted Background Disc Face (Disc 2) */}
          <radialGradient id="disc2FaceGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#3b1d6b" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#1b0c34" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0a0316" stopOpacity="0.9" />
          </radialGradient>

          {/* Specular Rim Light Gradient */}
          <linearGradient id="specularRimArc" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="40%" stopColor="#e0e7ff" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="discCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="discVioletGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="26" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* DISC 1: Large Tilted Foreground Lens (Lower-Left / Bio Area) */}
        {/* Exact Scale AI Motif: Tilted elliptical coin with glowing rim */}
        {/* ======================================================== */}
        <g
          style={{
            transform: `translate3d(${disc1X}px, ${disc1Y}px, 0)`,
            transition: 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Ambient Shadow & Diffuse Colored Glow */}
          <ellipse
            cx="280"
            cy="390"
            rx="195"
            ry="115"
            transform={`rotate(-24 280 390) rotate(${disc1Rotate * 0.3} 280 390)`}
            fill="#05010b"
            opacity="0.8"
            filter="url(#discVioletGlow)"
          />

          {/* Extruded 3D Rim Base (Bottom Layer) */}
          <ellipse
            cx="280"
            cy="396"
            rx="185"
            ry="105"
            transform={`rotate(-24 280 396) rotate(${disc1Rotate * 0.3} 280 396)`}
            stroke="url(#discRimIridescent)"
            strokeWidth="16"
            filter="url(#discCyanGlow)"
            opacity="0.75"
          />

          {/* 3D Extrusion Side Wall (Cylindrical Hull) */}
          <ellipse
            cx="280"
            cy="388"
            rx="185"
            ry="105"
            transform={`rotate(-24 280 388) rotate(${disc1Rotate * 0.3} 280 388)`}
            stroke="url(#discRimIridescent)"
            strokeWidth="10"
          />

          {/* Front Glass Face of Disc 1 */}
          <ellipse
            cx="280"
            cy="380"
            rx="185"
            ry="105"
            transform={`rotate(-24 280 380) rotate(${disc1Rotate * 0.3} 280 380)`}
            fill="url(#disc1FaceGrad)"
            stroke="url(#discRimIridescent)"
            strokeWidth="4"
          />

          {/* Internal Caustic Reflection Ring */}
          <ellipse
            cx="280"
            cy="380"
            rx="160"
            ry="88"
            transform={`rotate(-24 280 380) rotate(${disc1Rotate * 0.3} 280 380)`}
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1.5"
          />

          {/* Razor-Sharp Specular Top Rim Reflection Arc */}
          <path
            d="M 140 330 C 200 280, 370 290, 440 370"
            stroke="url(#specularRimArc)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#discCyanGlow)"
          />
          <path
            d="M 160 326 C 220 285, 360 294, 420 365"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Secondary Iridescent Glint (Bottom Cyan Highlight) */}
          <path
            d="M 150 420 C 230 480, 380 470, 430 410"
            stroke="#38bdf8"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>

        {/* ======================================================== */}
        {/* DISC 2: Upper Background Frosted Disc (Center-Top Area) */}
        {/* Adds deep multi-plane perspective behind the title/subhead */}
        {/* ======================================================== */}
        <g
          style={{
            transform: `translate3d(${disc2X}px, ${disc2Y}px, 0)`,
            transition: 'transform 0.18s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Ambient Glow */}
          <ellipse
            cx="780"
            cy="150"
            rx="145"
            ry="75"
            transform={`rotate(28 780 150) rotate(${disc2Rotate * 0.4} 780 150)`}
            stroke="#a855f7"
            strokeWidth="12"
            strokeOpacity="0.4"
            filter="url(#discVioletGlow)"
          />

          {/* Extruded Rim */}
          <ellipse
            cx="780"
            cy="156"
            rx="135"
            ry="68"
            transform={`rotate(28 780 156) rotate(${disc2Rotate * 0.4} 780 156)`}
            stroke="url(#discRimCyanViolet)"
            strokeWidth="8"
            opacity="0.8"
          />

          {/* Disc 2 Face */}
          <ellipse
            cx="780"
            cy="150"
            rx="135"
            ry="68"
            transform={`rotate(28 780 150) rotate(${disc2Rotate * 0.4} 780 150)`}
            fill="url(#disc2FaceGrad)"
            stroke="url(#discRimCyanViolet)"
            strokeWidth="3"
          />

          {/* Top Specular Edge */}
          <path
            d="M 680 120 C 740 90, 840 110, 890 170"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>

        {/* ======================================================== */}
        {/* DISC 3: Right Midground Tilted Disc (Behind Experience) */}
        {/* Angled metallic/glass coin motif from reference right-side */}
        {/* ======================================================== */}
        <g
          style={{
            transform: `translate3d(${disc3X}px, ${disc3Y}px, 0)`,
            transition: 'transform 0.14s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Ambient Rim Glow */}
          <ellipse
            cx="1320"
            cy="780"
            rx="170"
            ry="92"
            transform={`rotate(-32 1320 780) rotate(${disc3Rotate * 0.3} 1320 780)`}
            stroke="#38bdf8"
            strokeWidth="14"
            strokeOpacity="0.35"
            filter="url(#discCyanGlow)"
          />

          {/* Extruded 3D Rim Wall */}
          <ellipse
            cx="1320"
            cy="788"
            rx="160"
            ry="85"
            transform={`rotate(-32 1320 788) rotate(${disc3Rotate * 0.3} 1320 788)`}
            stroke="url(#discRimIridescent)"
            strokeWidth="12"
            opacity="0.85"
          />

          {/* Face */}
          <ellipse
            cx="1320"
            cy="780"
            rx="160"
            ry="85"
            transform={`rotate(-32 1320 780) rotate(${disc3Rotate * 0.3} 1320 780)`}
            fill="url(#disc1FaceGrad)"
            stroke="url(#discRimIridescent)"
            strokeWidth="3.5"
          />

          {/* Specular Rim */}
          <path
            d="M 1200 730 C 1270 680, 1400 710, 1450 790"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
            filter="url(#discCyanGlow)"
          />
        </g>

        {/* ======================================================== */}
        {/* DISC 4: Floating Satellite Coin (Near Core Strengths Grid) */}
        {/* ======================================================== */}
        <g
          style={{
            transform: `translate3d(${disc4X}px, ${disc4Y}px, 0)`,
            transition: 'transform 0.16s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <ellipse
            cx="160"
            cy="880"
            rx="90"
            ry="48"
            transform="rotate(35 160 880)"
            stroke="url(#discRimCyanViolet)"
            strokeWidth="8"
            filter="url(#discCyanGlow)"
            opacity="0.75"
          />
          <ellipse
            cx="160"
            cy="876"
            rx="90"
            ry="48"
            transform="rotate(35 160 876)"
            fill="url(#disc2FaceGrad)"
            stroke="#c084fc"
            strokeWidth="2"
          />
          <circle cx="130" cy="855" r="4" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

/* --- Main Profile & Experience Section --- */
export default function ProfileSection() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sectionScroll, setSectionScroll] = useState(0);

  // Mouse tracking over the profile section for 3D tilt
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Scroll listener tracking position relative to section
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking && sectionRef.current) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current.getBoundingClientRect();
          // Distance from viewport top to section top
          setSectionScroll(-rect.top);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="profile"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 px-4 sm:px-6 lg:px-10 xl:px-12 w-full max-w-[1560px] mx-auto border-t border-[#261542]/80 overflow-hidden"
    >
      {/* 3D Interactive Floating Lenses & Discs Background Layer */}
      <ProfileInteractiveDiscs mousePos={mousePos} sectionScroll={sectionScroll} />

      {/* --- FOREGROUND CONTENT (z-10 with Frosted Glass Cards) --- */}
      <div className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c0d38]/80 border border-[#58269e] text-purple-200 text-xs uppercase tracking-wider font-bold mb-3 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>About The Designer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight uppercase">
              Profile & Philosophy
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-300 bg-[#120826]/70 px-4 py-2 rounded-full border border-[#3b1d6b] backdrop-blur-md">
            <MapPin className="w-4 h-4 text-brand-400" />
            <span>Based in Bangladesh • Working Internationally</span>
          </div>
        </div>

        {/* Main Bio Card & Portrait (Frosted Glass so 3D Discs Shine Behind) */}
        <div className="bg-[#0c0618]/70 rounded-[36px] p-7 sm:p-12 border border-[#2e1852] hover:border-brand-500/50 shadow-2xl mb-16 backdrop-blur-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Portrait Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-2 border-[#3b1d6b] bg-[#120a22] group">
                <img
                  src={rupaPortrait}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0e081c]/90 backdrop-blur-md px-4 py-2.5 rounded-xl text-center shadow-lg border border-[#3b1d6b]">
                  <p className="text-sm font-bold text-white">{personalInfo.name}</p>
                  <p className="text-[11px] text-brand-400 uppercase tracking-wider font-semibold">@{personalInfo.brand}</p>
                </div>
              </div>
            </div>

            {/* Narrative Text */}
            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-snug">
                Turning complex brand ideas into clear, captivating visual realities.
              </h3>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Hi, I’m <strong className="text-white font-semibold">Rupa Akter</strong>, a passionate Graphic Designer and Visual Content Designer from Bangladesh with <strong className="text-brand-300 font-semibold">5+ years of experience</strong> creating impactful visual content for businesses, brands, and international clients.
                </p>
                <p>
                  I specialize in <strong className="text-white font-semibold">Social Media Design, Packaging Design, Branding, Printing Label Packaging Design</strong>, and other commercial visual content.
                </p>
                <p>
                  My design approach focuses on creating visuals that are not only beautiful but also communicate the brand’s message clearly. I believe great design is more than just making something look good. It is about understanding the idea, audience, and purpose behind the design and turning them into a strong visual experience.
                </p>
              </div>

              {/* Specialization Tags */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-[#190d34]/90 text-brand-300 text-xs font-bold uppercase tracking-wider border border-[#3b1d6b] hover:border-brand-400 transition-colors shadow-sm">
                  Social Media Specialist
                </div>
                <div className="px-4 py-2 rounded-full bg-[#190d34]/90 text-brand-300 text-xs font-bold uppercase tracking-wider border border-[#3b1d6b] hover:border-brand-400 transition-colors shadow-sm">
                  Packaging & Print Expert
                </div>
                <div className="px-4 py-2 rounded-full bg-[#190d34]/90 text-brand-300 text-xs font-bold uppercase tracking-wider border border-[#3b1d6b] hover:border-brand-400 transition-colors shadow-sm">
                  Brand Identity Strategist
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Design Strengths Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white uppercase tracking-wide">
              Core Design Strengths
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Proven competencies developed over 5+ years of commercial client design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {designStrengths.map((strength, idx) => (
              <div
                key={idx}
                className="bg-[#0c0618]/70 rounded-2xl p-5 border border-[#261542] hover:border-[#8b5cf6]/70 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1b0e35] text-brand-300 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors border border-[#3b1d6b]/50 shadow-sm">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                  {strength.label}
                </h4>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Columns */}
        <div id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
          
          {/* Work Experience (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-glow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-wide">
                  Work Experience
                </h3>
                <p className="text-xs text-gray-400 font-medium">Professional positions & studios</p>
              </div>
            </div>

            <div className="space-y-4">
              {workExperience.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-[#0c0618]/70 rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${
                    exp.current
                      ? 'border-brand-500/70 shadow-glow-sm ring-1 ring-brand-500/30'
                      : 'border-[#261542] hover:border-[#3b1d6b]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-lg font-bold font-heading text-white">
                      {exp.company}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                        exp.current
                          ? 'bg-brand-600 text-white shadow-glow-sm'
                          : 'bg-[#1a0e36] text-gray-300 border border-[#2d1750]'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-brand-300 font-semibold mb-3">
                    <span>{exp.role}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">{exp.type}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1e1533] border border-[#3b1d6b] text-brand-300 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-wide">
                  Education
                </h3>
                <p className="text-xs text-gray-400 font-medium">Academic achievements</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#0c0618]/70 rounded-2xl p-6 border border-[#261542] hover:border-[#3b1d6b] backdrop-blur-xl transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#1a0e36] text-brand-300 border border-[#3b1d6b] font-semibold uppercase tracking-wider">
                      {edu.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {edu.degree}
                  </h4>

                  <div className="text-xs text-gray-300 space-y-0.5">
                    <p className="font-semibold text-gray-200">{edu.college}</p>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                </div>
              ))}

              {/* Teaching & Mentorship Highlight Card */}
              <div className="bg-gradient-to-br from-[#1b0d38]/90 to-[#120826]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#3b1d6b] hover:border-brand-400 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2 text-brand-300 font-bold text-sm">
                  <Award className="w-4 h-4 text-brand-400" />
                  <span>Instructor & Trainer</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Taught practical graphic design skills, Photoshop, Illustrator, and supervised project portfolios at <strong className="text-white">BD Career Point</strong>, empowering aspiring designers.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
