import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';
import { BehanceIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06030c] text-white pt-16 pb-12 border-t border-[#261542]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#261542]/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-2 text-2xl font-extrabold font-heading tracking-wider text-white">
              <span className="w-3 h-3 rounded-full bg-brand-500 shadow-glow-sm"></span>
              <span>rupapixel</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Graphic Designer & Visual Content Designer turning brand ideas into powerful visual experiences. Specializing in Social Media, Packaging, and Brand Identity.
            </p>
            <div className="flex items-center gap-3 text-xs text-brand-300">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.experience} Commercial Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#works" className="text-gray-300 hover:text-brand-400 transition-colors">Selected Works</a>
              </li>
              <li>
                <a href="#profile" className="text-gray-300 hover:text-brand-400 transition-colors">Profile & Bio</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-brand-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-brand-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Socials & Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">
              Connect & Portfolios
            </h4>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#130b24] border border-[#2c174d] hover:border-brand-500 hover:bg-brand-600 text-xs font-semibold tracking-wider text-gray-200 hover:text-white transition-all flex items-center gap-1.5"
              >
                <BehanceIcon className="w-3.5 h-3.5" />
                <span>Behance</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#130b24] border border-[#2c174d] hover:border-[#38bdf8] hover:bg-[#0077b5] text-xs font-semibold tracking-wider text-gray-200 hover:text-white transition-all flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#130b24] border border-[#2c174d] hover:border-[#60a5fa] hover:bg-[#1877f2] text-xs font-semibold tracking-wider text-gray-200 hover:text-white transition-all flex items-center gap-1.5"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs text-gray-400">Direct Inquiries:</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-semibold text-brand-300 hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-white">rupapixel</span> (Rupa Akter). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#130b24] border border-[#2c174d] hover:border-brand-500 hover:bg-brand-600 hover:text-white transition-all text-gray-300 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
