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
      <div className="relative z-10 bg-[#0e081c] rounded-[32px] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#3b1d6b]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#261542] bg-[#120a22]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-brand-600/30 text-brand-300 border border-brand-500/40 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold hidden sm:inline-block">
              {project.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1b0e36] text-gray-300 hover:bg-brand-600 hover:text-white transition-colors border border-[#3b1d6b]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#0e081c]">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden bg-[#130b24] border border-[#261542] max-h-[500px] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Tools / Tags */}
            {project.tools && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 mr-2 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-brand-400" />
                  Skills & Tools:
                </span>
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#1a0e36] border border-[#3b1d6b] text-brand-300 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 border-t border-[#261542] bg-[#120a22]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-500 transition-colors shadow-glow"
          >
            <span>View Full Project on Behance</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={`${personalInfo.whatsappUrl}?text=${encodeURIComponent(`Hi Rupa, I saw your project "${project.title}" and would like to discuss similar work.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors shadow-glow-white"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss this Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}
