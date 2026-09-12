import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf8fd]/95 backdrop-blur-md py-3 shadow-sm border-b border-brand-100'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl font-bold font-heading tracking-wider text-[#1e1533] transition-colors"
        >
          <span className="inline-block w-3 h-3 rounded-full bg-brand-500 group-hover:scale-125 transition-transform duration-300"></span>
          <span>rupapixel</span>
        </a>

        {/* Desktop Nav - Reference Site Pill Buttons */}
        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-[#1e1533] bg-[#f0eaf7] hover:bg-[#1e1533] hover:text-white transition-all duration-300 shadow-sm"
            >
              {link.label}
            </a>
          ))}

          {/* WhatsApp Direct CTA Pill */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-1.5 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-brand-500 hover:bg-brand-600 transition-all duration-300 shadow-sm hover:shadow-glow"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-[#f0eaf7] text-[#1e1533] hover:bg-brand-500 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8fd] border-b border-brand-200 px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-3 rounded-xl text-sm uppercase tracking-wider font-semibold text-[#1e1533] bg-[#f0eaf7] hover:bg-brand-500 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm uppercase tracking-wider font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors shadow-glow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
