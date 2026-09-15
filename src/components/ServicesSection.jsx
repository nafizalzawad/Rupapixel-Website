import React from 'react';
import { mainServices, personalInfo } from '../data/portfolioData';
import { Share2, Package, Palette, Printer, CheckCircle2, ArrowRight } from 'lucide-react';

const icons = [Share2, Package, Palette, Printer];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#261542]/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-400 mb-3">
            <span className="w-8 h-[2px] bg-brand-500"></span>
            <span>Services & Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            Main Design Services
          </h2>
        </div>
        <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
          Full-spectrum graphic design and visual content creation tailored for growing businesses, international brands, and agencies.
        </p>
      </div>

      {/* Services Grid (01, 02, 03, 04) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mainServices.map((service, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div
              key={service.number}
              className="relative group bg-[#0e081c]/90 rounded-[32px] p-8 sm:p-10 border border-[#261542] hover:border-[#8b5cf6]/50 shadow-lg hover:shadow-glow transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-sm"
            >
              {/* Background Large Number Accent */}
              <span className="absolute top-4 right-8 text-7xl sm:text-8xl font-black font-heading text-[#170d2e] select-none group-hover:text-[#25144a] transition-colors pointer-events-none -z-0">
                {service.number}
              </span>

              {/* Top Details */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1b0e35] border border-[#3b1d6b] flex items-center justify-center text-brand-300 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed pt-1">
                  {service.description}
                </p>

                {/* Sub-services list */}
                <div className="pt-4 border-t border-[#1f103b] space-y-2.5">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="relative z-10 pt-8 mt-6 border-t border-[#1f103b] flex items-center justify-between">
                <a
                  href={`${personalInfo.whatsappUrl}?text=${encodeURIComponent(`Hi Rupa, I am interested in your ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Custom Quote
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
