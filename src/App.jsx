import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WorksSection from './components/WorksSection';
import ProfileSection from './components/ProfileSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8fd] text-[#1c152b] selection:bg-brand-500 selection:text-white relative overflow-x-hidden w-full">
      {/* Sticky / Fixed Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Split Hero matching reference design */}
        <Hero />

        {/* Services & Capabilities */}
        <ServicesSection />

        {/* Portfolio Showcase / Real Behance Projects */}
        <WorksSection />

        {/* About Me & Experience */}
        <ProfileSection />

        {/* Contact Section & Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs uppercase tracking-wider font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
