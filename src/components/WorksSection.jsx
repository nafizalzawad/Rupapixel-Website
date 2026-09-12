import React, { useState } from 'react';
import { portfolioProjects, projectCategories, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, Eye, ArrowUpRight, Sparkles } from 'lucide-react';

export default function WorksSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-100">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-600 mb-3">
            <span className="w-8 h-[2px] bg-brand-500"></span>
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#1c152b] tracking-tight uppercase">
            Selected Works
          </h2>
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
          Curated selection of commercial projects, brand identities, high-engagement social media campaigns, and packaging labels.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5 mb-12">
        {projectCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                isActive
                  ? 'bg-brand-500 text-white shadow-glow'
                  : 'bg-white text-gray-600 hover:bg-[#f0eaf7] hover:text-[#1c152b] border border-brand-100/80'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white rounded-[28px] overflow-hidden border border-brand-100/80 hover:border-brand-300 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col cursor-pointer"
            onClick={() => setActiveModalProject(project)}
          >
            {/* Image Container with Zoom & Overlay */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f091a]/80 via-[#0f091a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(project);
                  }}
                  className="p-3 rounded-full bg-white/90 text-[#1c152b] hover:bg-brand-500 hover:text-white transition-colors shadow-lg"
                  title="Quick Preview"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-full bg-white/90 text-[#1c152b] hover:bg-brand-500 hover:text-white transition-colors shadow-lg"
                  title="View on Behance"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#1e1533] shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-semibold text-brand-600 uppercase tracking-widest block">
                  {project.tag}
                </span>
                <h3 className="text-lg font-bold font-heading text-[#1c152b] group-hover:text-brand-700 transition-colors line-clamp-1 mt-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-1.5">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-brand-50 flex items-center justify-between text-xs font-semibold text-brand-600">
                <span className="group-hover:translate-x-1 transition-transform">
                  View Project Details
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Behance Profile Showcase Banner */}
      <div className="mt-16 bg-gradient-to-r from-[#1f1538] to-[#2d1b4e] rounded-[32px] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behance Network</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Looking for more portfolio case studies?
          </h3>
          <p className="text-brand-200 text-xs sm:text-sm max-w-xl">
            Explore my complete Behance profile with in-depth branding breakdowns, mockups, packaging mechanicals, and client case studies.
          </p>
        </div>

        <a
          href={personalInfo.behanceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-8 py-4 rounded-full bg-brand-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-600 transition-all duration-300 shadow-glow flex items-center gap-2"
        >
          <span>Visit Behance Profile</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Modal Lightbox */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
