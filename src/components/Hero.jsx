import React from 'react';
import { personalInfo } from '../data/portfolioData';
import rupaPortrait from '../assets/rupa-portrait.jpg';
import { ChevronDown, ArrowUpRight, MessageCircle, Sparkles, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Background ambient glow in brand #996bd8 */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto w-full min-w-0">
        
        {/* Left Column: Portrait Card (Matching reference site rounded visual card) */}
        <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1 flex justify-center w-full min-w-0">
          <div className="relative w-full max-w-[320px] sm:max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white group">
            {/* Image */}
            <img
              src={rupaPortrait}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b132c]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

            {/* Floating Pill Badge 1 - Experience */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-brand-100">
              <Award className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-semibold tracking-wider text-[#1e1533] uppercase">
                5+ Years Experience
              </span>
            </div>

            {/* Floating Pill Badge 2 - Status */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between gap-2 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-lg border border-brand-100">
              <div className="min-w-0 flex-1">
                <p className="text-[9px] sm:text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Specialization</p>
                <p className="text-[10px] sm:text-xs font-bold text-[#1e1533] truncate">Social Media • Packaging • Branding</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-[11px] font-semibold border border-emerald-200 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Typographic & Profile Showcase */}
        <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 flex flex-col justify-center space-y-6 lg:pl-4 w-full min-w-0">
          
          {/* Profession Pill / Tag */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-[10px] sm:text-xs uppercase tracking-wider font-bold w-fit max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
            <span>Graphic & Visual Content Designer</span>
          </div>

          {/* Large Hero Title - Montserrat Geometric Typography */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-heading text-[#1c152b] tracking-tight uppercase leading-[1.08] break-words">
              {personalInfo.name}
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-xl font-medium tracking-wide text-brand-700 font-heading">
              {personalInfo.brand} <span className="text-gray-400 font-light mx-1 sm:mx-2">•</span> Design Profile & Portfolio
            </p>
          </div>

          {/* Philosophy Statement */}
          <blockquote className="border-l-4 border-brand-500 pl-4 py-1 text-base sm:text-lg italic text-gray-700 font-light leading-relaxed">
            "{personalInfo.tagline}"
          </blockquote>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
            Specializing in high-engagement social media campaigns, shelf-ready label & packaging designs, and distinct brand visual identities that communicate purpose and captivate audiences.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Explore Works Button */}
            <a
              href="#works"
              className="px-7 py-3.5 rounded-full bg-[#1e1533] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-brand-600 transition-all duration-300 shadow-md hover:shadow-glow flex items-center gap-2"
            >
              <span>Explore Works</span>
              <ChevronDown className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Consultation */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-brand-500 text-white text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-brand-600 transition-all duration-300 shadow-md hover:shadow-glow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Let's Discuss</span>
            </a>

            {/* Behance Link */}
            <a
              href={personalInfo.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#f0eaf7] text-[#1e1533] text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-[#1e1533] hover:text-white transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mini Stats Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-brand-100 max-w-lg">
            <div>
              <p className="text-xl sm:text-3xl font-bold font-heading text-brand-700">5+</p>
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-medium mt-0.5 leading-tight">Years Exp</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold font-heading text-brand-700">100+</p>
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-medium mt-0.5 leading-tight">Projects</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold font-heading text-brand-700">100%</p>
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-medium mt-0.5 leading-tight">Satisfaction</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Down Indicator (Direct reference to Tomoro Sugawara's 'Scroll down' element) */}
      <div className="pt-8 flex flex-col items-center justify-center text-center">
        <a
          href="#services"
          className="group flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-gray-500 hover:text-brand-600 transition-colors"
        >
          <span className="tracking-[0.25em]">Scroll Down</span>
          <div className="w-7 h-10 rounded-full border-2 border-brand-300 flex items-start justify-center p-1.5 group-hover:border-brand-500 transition-colors">
            <span className="w-1.5 h-2.5 rounded-full bg-brand-500 animate-bounce-slow" />
          </div>
        </a>
      </div>
    </section>
  );
}
