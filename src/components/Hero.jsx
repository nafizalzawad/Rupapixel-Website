import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ChevronDown, ArrowUpRight, MessageCircle, Sparkles, Award, Layers, Heart, Zap } from 'lucide-react';

/* --- Animated Counter Component (Counts from 0 up to target) --- */
function AnimatedCounter({ end, duration = 2200, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Exponential ease-out for smooth decelerating count
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

/* --- Interactive 3D Glass Circles, Torus & Sphere with Scroll-Driven Parallax --- */
function HeroGlassCircles() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax translation factors based on scroll
  const torusOffsetY = scrollY * 0.22;
  const torusRotate = scrollY * 0.09;
  const sphereOffsetX = scrollY * -0.15;
  const sphereOffsetY = scrollY * -0.28;
  const sphereScale = Math.max(0.82, 1 - scrollY * 0.0004);
  const innerRingRotate = scrollY * -0.12;
  const innerRingOffsetY = scrollY * 0.16;
  const badgeOffsetY = scrollY * 0.32;
  const sat1OffsetX = scrollY * 0.18;
  const sat1OffsetY = scrollY * -0.2;

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none">
      
      {/* 1. Ambient Background Violet Aurora Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/30 via-[#9333ea]/20 to-[#c084fc]/15 rounded-full blur-[90px] transform scale-110 pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-[#8b5cf6]/30 blur-[70px] pointer-events-none" />

      {/* 2. Main 3D Glass Composition (SVG + Layered Glass Shader) */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Torus Body Gradient (Luminous Purple Glass Tones) */}
          <linearGradient id="torusBodyGrad" x1="120" y1="140" x2="480" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#9333ea" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#581c87" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e0a3c" stopOpacity="0.95" />
          </linearGradient>

          {/* Torus Specular Rim Highlight */}
          <linearGradient id="torusRimLight" x1="200" y1="120" x2="480" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#f3e8ff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Inner Torus Gradient */}
          <linearGradient id="innerRingGrad" x1="450" y1="180" x2="200" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#7c3aed" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#3b0764" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
          </linearGradient>

          {/* 3D Glass Sphere Body Gradient */}
          <radialGradient id="sphereBodyGrad" cx="35%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="18%" stopColor="#e9d5ff" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#6b21a8" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#1c0738" stopOpacity="0.98" />
          </radialGradient>

          {/* Sphere Specular Glint Highlight */}
          <radialGradient id="sphereSpecular" cx="30%" cy="26%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#f3e8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Sphere Bottom Rim Light */}
          <radialGradient id="sphereRimLight" cx="68%" cy="78%" r="40%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          {/* Satellite Sphere Gradient */}
          <radialGradient id="satelliteGrad1" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#d8b4fe" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#7e22ce" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#240747" stopOpacity="0.95" />
          </radialGradient>

          {/* Glow Filters */}
          <filter id="purpleGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="softGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="24" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- GROUP 1: Outer Glass Torus (Rotates & Translates with scroll) --- */}
        <g
          style={{
            transform: `translate3d(0, ${torusOffsetY}px, 0) rotate(${torusRotate}deg)`,
            transformOrigin: '330px 270px',
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Back Torus Drop Glow */}
          <ellipse
            cx="330"
            cy="270"
            rx="195"
            ry="145"
            transform="rotate(-28 330 270)"
            stroke="#a855f7"
            strokeWidth="50"
            strokeOpacity="0.25"
            filter="url(#softGlowFilter)"
          />

          {/* Outer Glass Torus Tube (Thick glass ring with refraction) */}
          <ellipse
            cx="330"
            cy="270"
            rx="195"
            ry="145"
            transform="rotate(-28 330 270)"
            stroke="url(#torusBodyGrad)"
            strokeWidth="48"
            strokeLinecap="round"
          />

          {/* Internal Refraction Line */}
          <ellipse
            cx="330"
            cy="270"
            rx="195"
            ry="145"
            transform="rotate(-28 330 270)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
          />

          {/* Specular Edge Highlight (Bright caustic rim light on top-right) */}
          <path
            d="M 230 150 C 330 110, 460 160, 490 270"
            stroke="url(#torusRimLight)"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#purpleGlowFilter)"
          />
          <path
            d="M 240 148 C 330 112, 450 162, 480 260"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* --- GROUP 2: Inner Nested Glass Ring (Counter-rotating parallax) --- */}
        <g
          style={{
            transform: `translate3d(0, ${innerRingOffsetY}px, 0) rotate(${innerRingRotate}deg)`,
            transformOrigin: '335px 275px',
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <ellipse
            cx="335"
            cy="275"
            rx="125"
            ry="85"
            transform="rotate(38 335 275)"
            stroke="url(#innerRingGrad)"
            strokeWidth="24"
            strokeOpacity="0.85"
          />

          <path
            d="M 370 210 C 420 240, 430 300, 390 340"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* --- GROUP 3: Foreground 3D Crystal Glass Sphere (Drifts smoothly on scroll) --- */}
        <g
          style={{
            transform: `translate3d(${sphereOffsetX}px, ${sphereOffsetY}px, 0) scale(${sphereScale})`,
            transformOrigin: '220px 370px',
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Sphere Ground Glow & Ambient Shadow */}
          <ellipse
            cx="220"
            cy="470"
            rx="80"
            ry="25"
            fill="#581c87"
            fillOpacity="0.5"
            filter="url(#softGlowFilter)"
          />

          {/* Sphere Base Body */}
          <circle
            cx="220"
            cy="370"
            r="88"
            fill="url(#sphereBodyGrad)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1.5"
          />

          {/* Internal Caustic Depth Glow */}
          <circle
            cx="220"
            cy="370"
            r="86"
            fill="url(#sphereRimLight)"
          />

          {/* Specular White Hotspot Glint */}
          <circle
            cx="220"
            cy="370"
            r="84"
            fill="url(#sphereSpecular)"
          />

          {/* Top Crisp White Reflection Arc */}
          <ellipse
            cx="195"
            cy="325"
            rx="24"
            ry="12"
            transform="rotate(-30 195 325)"
            fill="rgba(255, 255, 255, 0.85)"
            filter="blur(1px)"
          />
        </g>

        {/* --- GROUP 4: Satellite Floating Glass Beads --- */}
        {/* Satellite 1 (Top-right floating sphere) */}
        <g
          style={{
            transform: `translate3d(${sat1OffsetX}px, ${sat1OffsetY}px, 0)`,
            transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <circle
            cx="470"
            cy="180"
            r="24"
            fill="url(#satelliteGrad1)"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
            filter="url(#purpleGlowFilter)"
          />
          <circle cx="462" cy="172" r="5" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Satellite 2 (Bottom-right small sphere) */}
        <g
          style={{
            transform: `translate3d(${-scrollY * 0.08}px, ${scrollY * 0.15}px, 0)`,
            transition: 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <circle
            cx="440"
            cy="420"
            r="16"
            fill="url(#satelliteGrad1)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1"
          />
          <circle cx="435" cy="415" r="3.5" fill="#ffffff" opacity="0.85" />
        </g>
      </svg>

      {/* 3. Floating Glass Info Card (Matching the floating card from reference image) */}
      <div
        className="absolute top-8 sm:top-12 right-2 sm:-right-4 pointer-events-auto"
        style={{
          transform: `translate3d(0, ${badgeOffsetY}px, 0)`,
          transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      >
        <div className="bg-[#120826]/85 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-[#3b1d6b] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3.5 hover:border-brand-400 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-400/50 flex items-center justify-center text-brand-300 shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-brand-400" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
              Visual Excellence
            </p>
            <p className="text-[10px] sm:text-xs text-brand-300/90 font-medium mt-0.5">
              600+ Delivered Works
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom floating status pill */}
      <div
        className="absolute bottom-6 left-4 sm:left-6 pointer-events-auto"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.18}px, 0)`,
          transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e071e]/90 backdrop-blur-md border border-[#3b1d6b] shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-gray-200">
            Available for Projects
          </span>
        </div>
      </div>

    </div>
  );
}

/* --- Main Hero Section --- */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Background ambient purple aurora glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[400px] sm:h-[500px] bg-gradient-to-b from-[#8b5cf6]/25 via-[#6b21a8]/15 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Split Grid: Left Copy & Right 3D Glass Rings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center flex-1 my-auto w-full min-w-0">
        
        {/* Left Column: Typographic & Profile Showcase */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 w-full min-w-0">
          
          {/* Profession Pill / Tag - Glowing Purple Accent from Reference Image */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1c0d38] border border-[#58269e] text-purple-200 text-[10px] sm:text-xs uppercase tracking-wider font-bold w-fit max-w-full shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
            <span>Graphic & Visual Content Designer</span>
          </div>

          {/* Large Hero Title - Pure White Typography */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-heading text-white tracking-tight uppercase leading-[1.08] break-words">
              {personalInfo.name}
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-xl font-medium tracking-wide text-brand-300 font-heading">
              {personalInfo.brand} <span className="text-gray-500 font-light mx-1 sm:mx-2">•</span> Design Profile & Portfolio
            </p>
          </div>

          {/* Philosophy Statement */}
          <blockquote className="border-l-4 border-brand-500 pl-4 py-1 text-base sm:text-lg italic text-gray-300 font-light leading-relaxed">
            "{personalInfo.tagline}"
          </blockquote>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
            Specializing in high-engagement social media campaigns, shelf-ready label & packaging designs, and distinct brand visual identities that communicate purpose and captivate audiences.
          </p>

          {/* Action CTAs - Matching Hero Buttons in Image */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Explore Works Button (Solid White Button like "Get started" in image) */}
            <a
              href="#works"
              className="px-7 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 shadow-glow-white flex items-center gap-2"
            >
              <span>Explore Works</span>
              <ChevronDown className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Consultation (Glowing Purple Pill Button) */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-brand-600 text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-brand-500 transition-all duration-300 shadow-glow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Let's Discuss</span>
            </a>

            {/* Behance Link (Dark Obsidian Outline Button) */}
            <a
              href={personalInfo.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#130b24] border border-[#2e1852] text-gray-200 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-[#20123b] hover:text-white hover:border-brand-500 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Sleek Stat Cards with Animated Counter (from 0 to 600+) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#261442]">
            {/* Stat 1: 600+ Projects with Animated Counter */}
            <div className="bg-[#0e081e]/80 border border-[#261542] hover:border-brand-500/50 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md transition-all group">
              <div className="w-8 h-8 rounded-lg bg-[#1b0e35] border border-[#3b1d6b] flex items-center justify-center text-brand-400 mb-2 group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                <AnimatedCounter end={600} duration={2200} suffix="+" />
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                Projects Done
              </p>
            </div>

            {/* Stat 2: 5+ Years Experience */}
            <div className="bg-[#0e081e]/80 border border-[#261542] hover:border-brand-500/50 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md transition-all group">
              <div className="w-8 h-8 rounded-lg bg-[#1b0e35] border border-[#3b1d6b] flex items-center justify-center text-brand-400 mb-2 group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                <AnimatedCounter end={5} duration={1600} suffix="+" />
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                Years Exp
              </p>
            </div>

            {/* Stat 3: 100% Satisfaction Rate */}
            <div className="bg-[#0e081e]/80 border border-[#261542] hover:border-brand-500/50 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md transition-all group">
              <div className="w-8 h-8 rounded-lg bg-[#1b0e35] border border-[#3b1d6b] flex items-center justify-center text-brand-400 mb-2 group-hover:scale-110 transition-transform">
                <Heart className="w-4 h-4" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                <AnimatedCounter end={100} duration={2000} suffix="%" />
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                Satisfaction
              </p>
            </div>

            {/* Stat 4: Fast Turnaround */}
            <div className="bg-[#0e081e]/80 border border-[#261542] hover:border-brand-500/50 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md transition-all group">
              <div className="w-8 h-8 rounded-lg bg-[#1b0e35] border border-[#3b1d6b] flex items-center justify-center text-brand-400 mb-2 group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                24-48h
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                Fast Delivery
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Glass Torus, Rings & Spheres with Scroll Parallax (Replacing Portrait Photo) */}
        <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center w-full min-w-0">
          <HeroGlassCircles />
        </div>

      </div>

      {/* Bottom Scroll Down Indicator */}
      <div className="pt-10 flex flex-col items-center justify-center text-center">
        <a
          href="#services"
          className="group flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-gray-400 hover:text-brand-400 transition-colors"
        >
          <span className="tracking-[0.25em]">Scroll Down</span>
          <div className="w-7 h-10 rounded-full border-2 border-[#3b1d6b] flex items-start justify-center p-1.5 group-hover:border-brand-500 transition-colors">
            <span className="w-1.5 h-2.5 rounded-full bg-brand-400 animate-bounce-slow" />
          </div>
        </a>
      </div>
    </section>
  );
}
