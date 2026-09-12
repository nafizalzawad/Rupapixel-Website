import React, { useEffect } from 'react';
import { X, ExternalLink, MessageCircle, Tag, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0f091a]/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative z-10 bg-white rounded-[32px] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-brand-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 bg-[#faf8fd]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold hidden sm:inline-block">
              {project.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-brand-500 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 border border-brand-100 max-h-[500px] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#1c152b]">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* Tools / Tags */}
            {project.tools && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 mr-2 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  Skills & Tools:
                </span>
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#f4eff9] text-[#2c1a4d] text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 border-t border-gray-100 bg-[#faf8fd]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-600 transition-colors shadow-sm"
          >
            <span>View Full Project on Behance</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={`${personalInfo.whatsappUrl}?text=${encodeURIComponent(`Hi Rupa, I saw your project "${project.title}" and would like to discuss similar work.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e1533] text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss this Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}
