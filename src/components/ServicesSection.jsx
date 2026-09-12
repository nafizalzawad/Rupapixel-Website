import React from 'react';
import { mainServices, personalInfo } from '../data/portfolioData';
import { Share2, Package, Palette, Printer, CheckCircle2, ArrowRight } from 'lucide-react';

const icons = [Share2, Package, Palette, Printer];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-100">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-600 mb-3">
            <span className="w-8 h-[2px] bg-brand-500"></span>
            <span>Services & Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#1c152b] tracking-tight uppercase">
            Main Design Services
          </h2>
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
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
              className="relative group bg-white rounded-[32px] p-8 sm:p-10 border border-brand-100/80 hover:border-brand-300 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Large Number Accent */}
              <span className="absolute top-4 right-8 text-7xl sm:text-8xl font-black font-heading text-brand-50 select-none group-hover:text-brand-100/80 transition-colors pointer-events-none -z-0">
                {service.number}
              </span>

              {/* Top Details */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1c152b] group-hover:text-brand-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed pt-1">
                  {service.description}
                </p>

                {/* Sub-services list */}
                <div className="pt-4 border-t border-brand-50 space-y-2.5">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="relative z-10 pt-8 mt-6 border-t border-brand-100 flex items-center justify-between">
                <a
                  href={`${personalInfo.whatsappUrl}?text=${encodeURIComponent(`Hi Rupa, I am interested in your ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1e1533] group-hover:text-brand-600 transition-colors"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
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
