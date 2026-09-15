import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ChevronDown, ArrowUpRight, MessageCircle, Sparkles, Award, Layers, Heart, Zap } from 'lucide-react';

/* --- Animated Counter Component (Smooth Ease-Out Deceleration from 0) --- */
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Exponential ease-out curve for natural deceleration
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

/* --- Giant Interactive 3D Glass Circles, Torus & Spheres with Dynamic Scroll Parallax & Mouse Tilt --- */
function HeroGlassCircles({ mouseX = 0, mouseY = 0 }) {
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

  // Multi-axis high-dynamic scroll parallax calculations
  const torusOffsetY = scrollY * 0.38;
  const torusRotateZ = scrollY * 0.28;
  const torusTiltX = mouseY * -14 + scrollY * 0.14;
  const torusTiltY = mouseX * 16 + scrollY * 0.18;
  const torusScale = 1 + Math.min(scrollY * 0.0003, 0.15);

  // Foreground crystal sphere moves on an active outward diagonal trajectory with 3D projection
  const sphereOffsetX = mouseX * -24 - scrollY * 0.38;
  const sphereOffsetY = mouseY * -24 - scrollY * 0.52;
  const sphereScale = Math.min(1.22, Math.max(0.85, 1 + scrollY * 0.0006));

  // Inner orbital ring counter-rotates dynamically
  const innerRingRotateZ = mouseX * 12 - scrollY * 0.45;
  const innerRingOffsetY = scrollY * 0.26;
  const innerRingTiltX = mouseY * -8 + scrollY * 0.12;

  // Floating satellite spheres & orbital pearls
  const sat1OffsetX = mouseX * 32 + scrollY * 0.48;
  const sat1OffsetY = mouseY * 32 - scrollY * 0.42;
  const sat2OffsetX = mouseX * -20 - scrollY * 0.35;
  const sat2OffsetY = mouseY * -20 + scrollY * 0.45;
  const sat3OffsetX = mouseX * 18 + scrollY * 0.32;
  const sat3OffsetY = mouseY * 18 - scrollY * 0.3;

  // Floating glass badges
  const badgeOffsetY = mouseY * -10 + scrollY * 0.52;
  const badgeRotate = scrollY * 0.05;
  const statusOffsetY = mouseY * 10 - scrollY * 0.28;

  return (
    <div
      className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] max-h-[44vh] aspect-[1.18/1] mx-auto flex items-center justify-center select-none"
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 1. Deep Atmospheric Purple Caustic Auras (Spreads across right & center) */}
      <div
        className="absolute -inset-12 bg-gradient-to-tr from-[#7c3aed]/40 via-[#9333ea]/30 to-[#c084fc]/20 rounded-full blur-[110px] transform scale-125 pointer-events-none -z-10 transition-transform duration-300"
        style={{
          transform: `scale(${1 + Math.min(scrollY * 0.0005, 0.2)})`,
          opacity: Math.min(1, 0.85 + scrollY * 0.0006),
        }}
      />
      <div className="absolute w-[440px] h-[440px] rounded-full bg-[#a855f7]/30 blur-[95px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-8 w-80 h-80 rounded-full bg-[#6b21a8]/45 blur-[85px] pointer-events-none -z-10" />

      {/* 2. Main Giant 3D Glass SVG Composition */}
      <svg
        viewBox="0 0 850 750"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Giant Torus Body Gradient (Deep Obsidian & Radiant Violet) */}
          <linearGradient id="torusGradLarge" x1="160" y1="180" x2="680" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f5edff" stopOpacity="0.95" />
            <stop offset="18%" stopColor="#d8b4fe" stopOpacity="0.8" />
            <stop offset="42%" stopColor="#9333ea" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#581c87" stopOpacity="0.75" />
            <stop offset="90%" stopColor="#2e1065" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#120424" stopOpacity="0.98" />
          </linearGradient>

          {/* Torus Specular Rim Highlight Light */}
          <linearGradient id="torusRimSpecular" x1="280" y1="160" x2="680" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="30%" stopColor="#f3e8ff" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#c084fc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Inner Counter Ring Gradient */}
          <linearGradient id="innerRingGradLarge" x1="620" y1="240" x2="280" y2="540" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#4c1d95" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.9" />
          </linearGradient>

          {/* Massive 3D Crystal Glass Sphere Body Shader */}
          <radialGradient id="giantSphereBodyGrad" cx="34%" cy="30%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="16%" stopColor="#f3e8ff" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#a855f7" stopOpacity="0.65" />
            <stop offset="72%" stopColor="#6b21a8" stopOpacity="0.92" />
            <stop offset="92%" stopColor="#2a084e" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#130324" stopOpacity="1" />
          </radialGradient>

          {/* Sphere Specular Glint Reflection */}
          <radialGradient id="giantSphereSpecular" cx="30%" cy="24%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="32%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#f3e8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Sphere Bottom Caustic Rim Light */}
          <radialGradient id="giantSphereRimBounce" cx="72%" cy="80%" r="42%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#a855f7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          {/* Satellite Spheres Gradient */}
          <radialGradient id="satOrbGrad" cx="34%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="28%" stopColor="#e9d5ff" stopOpacity="0.75" />
            <stop offset="68%" stopColor="#8b5cf6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2e1065" stopOpacity="0.98" />
          </radialGradient>

          {/* Glow Filters */}
          <filter id="purpleGlowLarge" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="softGlowLarge" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="34" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- GROUP 1: GIANT OUTER 3D GLASS TORUS (Rotates, Tilts & Translates with Scroll & Mouse) --- */}
        <g
          style={{
            transform: `translate3d(0, ${torusOffsetY}px, 0) rotateX(${torusTiltX}deg) rotateY(${torusTiltY}deg) rotateZ(${torusRotateZ}deg) scale(${torusScale})`,
            transformOrigin: '460px 360px',
            transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Ambient Glow Silhouette */}
          <ellipse
            cx="460"
            cy="360"
            rx="275"
            ry="195"
            transform="rotate(-28 460 360)"
            stroke="#a855f7"
            strokeWidth="75"
            strokeOpacity="0.25"
            filter="url(#softGlowLarge)"
          />

          {/* Main Thick Glass Torus Tube */}
          <ellipse
            cx="460"
            cy="360"
            rx="275"
            ry="195"
            transform="rotate(-28 460 360)"
            stroke="url(#torusGradLarge)"
            strokeWidth="68"
            strokeLinecap="round"
          />

          {/* Internal Glass Core Refraction Ring */}
          <ellipse
            cx="460"
            cy="360"
            rx="275"
            ry="195"
            transform="rotate(-28 460 360)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="3"
          />

          {/* Top Specular Rim Reflection Arc */}
          <path
            d="M 310 180 C 460 130, 660 190, 710 350"
            stroke="url(#torusRimSpecular)"
            strokeWidth="14"
            strokeLinecap="round"
            filter="url(#purpleGlowLarge)"
          />
          <path
            d="M 330 178 C 470 132, 650 192, 695 335"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Secondary Bottom Caustic Glow Arc */}
          <path
            d="M 230 420 C 270 540, 480 580, 610 520"
            stroke="url(#innerRingGradLarge)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* --- GROUP 2: INNER NESTED FROSTED GLASS ORBIT RING (Counter-Rotates) --- */}
        <g
          style={{
            transform: `translate3d(0, ${innerRingOffsetY}px, 0) rotateX(${innerRingTiltX}deg) rotateZ(${innerRingRotateZ}deg)`,
            transformOrigin: '465px 365px',
            transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <ellipse
            cx="465"
            cy="365"
            rx="175"
            ry="115"
            transform="rotate(36 465 365)"
            stroke="url(#innerRingGradLarge)"
            strokeWidth="32"
            strokeOpacity="0.8"
          />

          {/* Slender Specular Edge */}
          <path
            d="M 520 270 C 600 320, 610 400, 550 460"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Concentric Slender Orbital Filament */}
          <ellipse
            cx="465"
            cy="365"
            rx="130"
            ry="85"
            transform="rotate(-15 465 365)"
            stroke="rgba(192, 132, 252, 0.35)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
        </g>

        {/* --- GROUP 3: MASSIVE FOREGROUND 3D CRYSTAL GLASS SPHERE (Outward Parallax) --- */}
        <g
          style={{
            transform: `translate3d(${sphereOffsetX}px, ${sphereOffsetY}px, 0) scale(${sphereScale})`,
            transformOrigin: '300px 500px',
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          {/* Ground Contact Shadow & Diffuse Glow */}
          <ellipse
            cx="300"
            cy="630"
            rx="120"
            ry="36"
            fill="#05010b"
            opacity="0.85"
            filter="url(#purpleGlowLarge)"
          />
          <ellipse
            cx="300"
            cy="630"
            rx="90"
            ry="24"
            fill="#7c3aed"
            opacity="0.35"
            filter="url(#purpleGlowLarge)"
          />

          {/* Sphere Body */}
          <circle
            cx="300"
            cy="500"
            r="115"
            fill="url(#giantSphereBodyGrad)"
          />

          {/* Internal Caustic Transparency / Volume */}
          <circle
            cx="300"
            cy="500"
            r="114"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2.5"
          />

          {/* Bottom Ambient Bounce Light */}
          <circle
            cx="300"
            cy="500"
            r="115"
            fill="url(#giantSphereRimBounce)"
          />

          {/* Primary High-Gloss Specular Highlight */}
          <ellipse
            cx="250"
            cy="445"
            rx="52"
            ry="34"
            transform="rotate(-30 250 445)"
            fill="url(#giantSphereSpecular)"
          />

          {/* Secondary Razor Specular Glint */}
          <circle
            cx="240"
            cy="435"
            r="12"
            fill="#ffffff"
            opacity="0.9"
          />
          <circle
            cx="248"
            cy="442"
            r="5"
            fill="#ffffff"
            opacity="0.75"
          />
        </g>

        {/* --- GROUP 4: FLOATING SATELLITE SPHERES & ORBITAL BEADS --- */}
        {/* Satellite 1 (Top-Right Floating Orb) */}
        <g
          style={{
            transform: `translate3d(${sat1OffsetX}px, ${sat1OffsetY}px, 0)`,
            transition: 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <circle
            cx="670"
            cy="230"
            r="38"
            fill="url(#satOrbGrad)"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="1.5"
            filter="url(#purpleGlowLarge)"
          />
          <circle cx="658" cy="218" r="8" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Satellite 2 (Bottom-Right Satellite Orb) */}
        <g
          style={{
            transform: `translate3d(${sat2OffsetX}px, ${sat2OffsetY}px, 0)`,
            transition: 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <circle
            cx="660"
            cy="560"
            r="24"
            fill="url(#satOrbGrad)"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1"
          />
          <circle cx="652" cy="552" r="5" fill="#ffffff" opacity="0.85" />
        </g>

        {/* Satellite 3 (Top-Left Micro Pearl) */}
        <g
          style={{
            transform: `translate3d(${sat3OffsetX}px, ${sat3OffsetY}px, 0)`,
            transition: 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <circle cx="210" cy="260" r="12" fill="url(#satOrbGrad)" stroke="#ffffff" strokeWidth="0.8" opacity="0.85" />
          <circle cx="206" cy="256" r="3" fill="#ffffff" />
        </g>
      </svg>

      {/* 3. Floating Frosted Glass Badge (Top Right Overlap) */}
      <div
        className="absolute top-4 sm:top-8 right-0 sm:-right-4 pointer-events-auto"
        style={{
          transform: `translate3d(0, ${badgeOffsetY}px, 0) rotate(${badgeRotate}deg)`,
          transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      >
        <div className="bg-[#120826]/90 backdrop-blur-2xl p-3.5 sm:p-4.5 rounded-2xl border border-[#4c1d95]/70 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex items-center gap-3 hover:border-brand-400 hover:scale-105 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-400/50 flex items-center justify-center text-brand-300 shadow-[0_0_15px_rgba(168,85,247,0.35)] flex-shrink-0 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-brand-300" />
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

      {/* 4. Bottom Floating Availability Pill */}
      <div
        className="absolute bottom-6 left-2 sm:left-4 pointer-events-auto"
        style={{
          transform: `translate3d(0, ${statusOffsetY}px, 0)`,
          transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e071e]/90 backdrop-blur-xl border border-[#3b1d6b] shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-emerald-500/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-xs font-semibold text-gray-200">
            Available for Projects
          </span>
        </div>
      </div>

    </div>
  );
}

/* --- Main Hero Section (Full Bleed, High-Impact Cinematic Composition) --- */
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Smooth mouse move tracking over the hero section for 3D tilt
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100dvh] max-h-[100dvh] min-h-[560px] w-full overflow-hidden pt-16 sm:pt-18 lg:pt-20 pb-2 px-4 sm:px-6 lg:px-10 xl:px-14 flex flex-col justify-between bg-gradient-to-b from-[#110526] via-[#090217] to-[#05020a]"
    >
      {/* --- Full-Bleed Ambient Lighting Nebulae (Reaches all edges) --- */}
      <div className="absolute top-0 right-0 w-[85vw] max-w-[1300px] h-[750px] bg-gradient-to-b from-[#7c3aed]/25 via-[#6b21a8]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#581c87]/20 via-[#4c1d95]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[350px] bg-brand-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Matrix Ambient Mesh Glow across the hero */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* --- ROW 1: SPLIT HERO (Text & CTAs Left, Giant 3D Glass Rings Right) --- */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center flex-1 my-auto min-h-0">
        
        {/* Left Column: Typographic & Profile Showcase */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 w-full z-10">
          
          {/* Profession Pill / Tag - Glowing Purple Accent from Reference Image */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0d38] border border-[#58269e] text-purple-200 text-[11px] uppercase tracking-wider font-bold w-fit shadow-[0_0_15px_rgba(147,51,234,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
            <span>Graphic & Visual Content Designer</span>
          </div>

          {/* Large Hero Title - Pure White Typography */}
          <div className="space-y-0.5 sm:space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[1.04]">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-brand-300 font-heading">
              {personalInfo.brand} <span className="text-gray-500 font-light mx-2">•</span> Design Profile & Portfolio
            </p>
          </div>

          {/* Philosophy Statement */}
          <blockquote className="border-l-4 border-brand-500 pl-3 py-0.5 text-xs sm:text-sm italic text-gray-300 font-light leading-snug">
            "{personalInfo.tagline}"
          </blockquote>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-3">
            Specializing in high-engagement social media campaigns, shelf-ready label & packaging designs, and distinct brand visual identities that communicate purpose and captivate audiences.
          </p>

          {/* Action CTAs - Matching Hero Buttons in Image */}
          <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
            {/* Explore Works Button (Solid White Button like "Get started" in image) */}
            <a
              href="#works"
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.35)] flex items-center gap-2"
            >
              <span>Explore Works</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>

            {/* Direct WhatsApp Consultation (Glowing Purple Pill Button) */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-brand-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.45)] flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Let's Discuss</span>
            </a>

            {/* Behance Link (Dark Obsidian Outline Button) */}
            <a
              href={personalInfo.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#130b24] border border-[#2e1852] text-gray-200 text-xs font-semibold uppercase tracking-wider hover:bg-[#20123b] hover:text-white hover:border-brand-500 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Right Column: Giant 3D Glass Rings & Spheres (Visually Fills the Right Side) */}
        <div className="lg:col-span-6 xl:col-span-7 flex justify-center items-center w-full max-h-[46vh]">
          <HeroGlassCircles mouseX={mousePos.x} mouseY={mousePos.y} />
        </div>

      </div>

      {/* --- ROW 2: FULL-WIDTH HORIZONTAL STAT CARDS BAR (Anchoring the Entire Bottom) --- */}
      <div className="w-full max-w-[1600px] mx-auto pt-2 pb-1">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          
          {/* Stat 1: 600+ Commercial Projects with Animated Counter */}
          <div className="bg-[#0e071e]/75 border border-[#261542] hover:border-brand-500/70 p-2.5 sm:p-3 rounded-xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-0.5 shadow-lg">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1c0d38] border border-[#3b1d6b] flex items-center justify-center text-brand-400 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] uppercase font-bold text-brand-400/80 tracking-wider px-2 py-0.5 rounded-full bg-brand-950/60 border border-brand-800/40">
                Delivered
              </span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-black font-heading text-white tracking-tight">
              <AnimatedCounter end={600} duration={2000} suffix="+" />
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
              Projects Completed
            </p>
          </div>

          {/* Stat 2: 5+ Years Experience */}
          <div className="bg-[#0e071e]/75 border border-[#261542] hover:border-brand-500/70 p-2.5 sm:p-3 rounded-xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-0.5 shadow-lg">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1c0d38] border border-[#3b1d6b] flex items-center justify-center text-brand-400 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] uppercase font-bold text-brand-400/80 tracking-wider px-2 py-0.5 rounded-full bg-brand-950/60 border border-brand-800/40">
                Industry
              </span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-black font-heading text-white tracking-tight">
              <AnimatedCounter end={5} duration={1500} suffix="+" />
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
              Years Experience
            </p>
          </div>

          {/* Stat 3: 100% Satisfaction Rate */}
          <div className="bg-[#0e071e]/75 border border-[#261542] hover:border-brand-500/70 p-2.5 sm:p-3 rounded-xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-0.5 shadow-lg">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1c0d38] border border-[#3b1d6b] flex items-center justify-center text-brand-400 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] uppercase font-bold text-brand-400/80 tracking-wider px-2 py-0.5 rounded-full bg-brand-950/60 border border-brand-800/40">
                Rating 5.0
              </span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-black font-heading text-white tracking-tight">
              <AnimatedCounter end={100} duration={1800} suffix="%" />
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
              Client Satisfaction
            </p>
          </div>

          {/* Stat 4: Fast Turnaround Time */}
          <div className="bg-[#0e071e]/75 border border-[#261542] hover:border-brand-500/70 p-2.5 sm:p-3 rounded-xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-0.5 shadow-lg">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1c0d38] border border-[#3b1d6b] flex items-center justify-center text-brand-400 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] uppercase font-bold text-brand-400/80 tracking-wider px-2 py-0.5 rounded-full bg-brand-950/60 border border-brand-800/40">
                Fast Pace
              </span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-black font-heading text-white tracking-tight">
              24-48h
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
              Turnaround Delivery
            </p>
          </div>

        </div>
      </div>

      {/* --- ROW 3: SCROLL DOWN INDICATOR --- */}
      <div className="pt-1 pb-1 flex flex-col items-center justify-center text-center flex-shrink-0">
        <a
          href="#services"
          className="group flex flex-col items-center gap-1 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gray-400 hover:text-brand-400 transition-colors"
        >
          <span className="tracking-[0.25em]">Scroll Down</span>
          <div className="w-4 h-7 rounded-full border border-[#3b1d6b] flex items-start justify-center p-0.5 group-hover:border-brand-500 transition-colors">
            <span className="w-1 h-1.5 rounded-full bg-brand-400 animate-bounce-slow" />
          </div>
        </a>
      </div>

    </section>
  );
}
