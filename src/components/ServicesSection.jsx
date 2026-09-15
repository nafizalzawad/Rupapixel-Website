import React, { useState } from 'react';
import { mainServices, personalInfo } from '../data/portfolioData';
import { Share2, Package, Palette, Printer, Check, ArrowRight, Star, Sparkles } from 'lucide-react';

const icons = [Share2, Package, Palette, Printer];

const serviceHighlights = [
  {
    project: { headline: "High-Impact", subline: "Tailored for engagement & viral reach" },
    retainer: { headline: "Dedicated Queue", subline: "Ongoing social posts & ad campaigns" },
    badge: "Social Media Specialist"
  },
  {
    project: { headline: "Shelf-Ready", subline: "3D packaging mockups & print files" },
    retainer: { headline: "Product Pipeline", subline: "Continuous label & packaging line" },
    badge: "Most Requested"
  },
  {
    project: { headline: "Full Identity", subline: "Vector logos, palettes & guidelines" },
    retainer: { headline: "Brand Advisory", subline: "Design system expansion & assets" },
    badge: "Complete System"
  },
  {
    project: { headline: "Commercial Print", subline: "Brochures, menus & digital assets" },
    retainer: { headline: "Marketing Retainer", subline: "Weekly print collateral & banners" },
    badge: "High-Conversion"
  }
];

export default function ServicesSection() {
  const [model, setModel] = useState('project');

  return (
    <section id="services" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#261542]/80 overflow-hidden">
      {/* Background Top Ambient Purple Aura */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-gradient-to-b from-[#8b5cf6]/25 via-[#6b21a8]/15 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Section Header Matching Reference Image */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
        {/* Top Trust / Quality Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0d36]/90 border border-[#58269e] text-purple-200 text-xs font-semibold shadow-[0_0_20px_rgba(147,51,234,0.35)] backdrop-blur-md">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Rated 5.0 • 600+ Commercial Projects Completed</span>
        </div>

        {/* Large Centered Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight uppercase">
          Main Design Services
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Full-spectrum graphic design and visual content creation tailored for growing businesses, international brands, and agencies.
        </p>

        {/* Interactive Mode Toggle Pill (Matching Month / Year in Image) */}
        <div className="flex items-center justify-center pt-2">
          <div className="inline-flex p-1.5 rounded-full bg-[#110722] border border-[#2e1750] shadow-inner">
            <button
              type="button"
              onClick={() => setModel('project')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                model === 'project'
                  ? 'bg-brand-600 text-white shadow-glow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Project-Based
            </button>
            <button
              type="button"
              onClick={() => setModel('retainer')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                model === 'retainer'
                  ? 'bg-brand-600 text-white shadow-glow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>
      </div>

      {/* Services Tiles Grid (Matching the 3D Assets Instantly Cards & Texture) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
        {mainServices.map((service, index) => {
          const IconComponent = icons[index % icons.length];
          const highlight = serviceHighlights[index % serviceHighlights.length];
          // Card 02 (Packaging & Label) is the featured card with the vibrant purple glow matching "Studio" in the image
          const isFeatured = index === 1;

          return (
            <div
              key={service.number}
              className={`group relative rounded-[32px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:z-10 ${
                isFeatured
                  ? 'tile-glass-purple'
                  : 'tile-glass-dark'
              }`}
            >
              {/* Dot Matrix Texture Overlay at Top of Card (Directly from Image) */}
              <div
                className={`absolute inset-x-0 top-0 h-64 pointer-events-none z-0 transition-opacity duration-500 ${
                  isFeatured
                    ? 'dot-texture-purple opacity-100'
                    : 'dot-texture-light opacity-80 group-hover:opacity-100'
                }`}
              />

              {/* Watermark Number in Background */}
              <span className="absolute top-4 right-6 text-7xl font-black font-heading text-white/[0.04] select-none pointer-events-none z-0">
                {service.number}
              </span>

              {/* Top Section: Title & Subtitle */}
              <div className="relative z-10 space-y-4">
                {/* Header Row: Icon & Tag Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      isFeatured
                        ? 'bg-[#2b1452] text-brand-300 border border-[#8b5cf6]/50 shadow-sm'
                        : 'bg-[#180e30] text-brand-300 border border-[#3b1d6b]/70 group-hover:bg-brand-600 group-hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      isFeatured
                        ? 'bg-brand-600/30 text-purple-200 border-brand-400/50'
                        : 'bg-[#150a2b] text-gray-400 border-[#2d1850]'
                    }`}
                  >
                    {highlight.badge}
                  </span>
                </div>

                {/* Service Heading & Tagline with aligned min-heights */}
                <div className="space-y-1.5">
                  <div className="min-h-[58px] flex items-start">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-brand-300 transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed min-h-[34px] line-clamp-2">
                    {service.subtitle}
                  </p>
                </div>

                {/* Metric / Scope Callout (Matching $29/month in Reference Image) */}
                <div className="pt-2 pb-2 border-b border-white/[0.08] min-h-[78px] flex flex-col justify-end">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                    {model === 'project' ? highlight.project.headline : highlight.retainer.headline}
                  </div>
                  <div className="text-[11px] font-medium text-brand-300/90 mt-0.5">
                    {model === 'project' ? highlight.project.subline : highlight.retainer.subline}
                  </div>
                </div>

                {/* Glossy White Button (Matching 'Get started for free' in Reference Image) */}
                <div className="pt-2">
                  <a
                    href={`${personalInfo.whatsappUrl}?text=${encodeURIComponent(
                      `Hi Rupa, I am interested in your ${service.title} service (${model === 'project' ? 'Project' : 'Retainer'} scope).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-3 rounded-2xl bg-gradient-to-b from-white via-white to-[#d4d4d8] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.4)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Inquire for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </div>

                {/* Sub-services Checklist (Matching the Bullet Items in Reference Image) */}
                <div className="pt-4 space-y-2.5">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isFeatured
                            ? 'bg-purple-500/25 border border-purple-400/50 text-purple-200'
                            : 'bg-white/10 border border-white/15 text-gray-200'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footnote (Matching '14 days free trial' in Reference Image) */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span>{model === 'project' ? 'Custom Quote' : 'Dedicated Support'}</span>
                <span className="text-gray-500">•</span>
                <span>Revisions Included</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floor Dot Matrix Mesh & Ambient Bottom Purple Aura from Reference Image */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[280px] dot-texture-floor pointer-events-none z-0" />
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[700px] h-[160px] bg-gradient-to-t from-[#8b5cf6]/30 via-[#6b21a8]/20 to-transparent blur-[90px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
