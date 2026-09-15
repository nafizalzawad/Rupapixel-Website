import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Send,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { BehanceIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Design',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#261542]/80">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c0d38] border border-[#58269e] text-purple-200 text-xs uppercase tracking-widest font-bold shadow-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          <span>Start A Project</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
          Let's Work Together
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Have an upcoming project, brand identity revamp, or need ongoing social media & packaging visuals? Get in touch directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Direct Card */}
          <div className="bg-gradient-to-br from-[#064e3b] to-[#022c22] rounded-[28px] p-6 sm:p-8 text-white shadow-xl border border-emerald-500/40 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 text-xs uppercase font-bold tracking-wider border border-emerald-500/40">
                Fastest Response
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Instant Chat</p>
              <h3 className="text-xl font-bold font-heading text-white">WhatsApp Direct</h3>
              <p className="text-xs text-emerald-200/80 mt-1">Available for quick queries and project briefings</p>
            </div>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-emerald-950 text-xs uppercase tracking-widest font-bold hover:bg-emerald-100 transition-colors shadow-sm"
            >
              <span>Message on WhatsApp ({personalInfo.whatsapp})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-[#0e081c]/90 rounded-[28px] p-6 border border-[#261542] shadow-lg space-y-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#1a0e36] text-brand-300 border border-[#3b1d6b] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[11px] font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Address'}</span>
              </button>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Email Address</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base font-bold text-white hover:text-brand-300 transition-colors block mt-0.5 break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-[#0e081c]/90 rounded-[28px] p-6 border border-[#261542] shadow-lg space-y-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#1a0e36] text-brand-300 border border-[#3b1d6b] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1 text-[11px] font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied!' : 'Copy Number'}</span>
              </button>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Phone Contact</p>
              <a
                href={personalInfo.phoneTel}
                className="text-base font-bold text-white hover:text-brand-300 transition-colors block mt-0.5"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Social Profiles & Portfolios
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={personalInfo.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0e081c]/90 border border-[#261542] hover:border-brand-500 text-xs font-bold text-gray-200 hover:text-white transition-all shadow-sm group"
              >
                <BehanceIcon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                <span>Behance</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0e081c]/90 border border-[#261542] hover:border-brand-500 text-xs font-bold text-gray-200 hover:text-white transition-all shadow-sm group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#38bdf8] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0e081c]/90 border border-[#261542] hover:border-brand-500 text-xs font-bold text-gray-200 hover:text-white transition-all shadow-sm group"
              >
                <FacebookIcon className="w-4 h-4 text-[#60a5fa] group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Message Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#0e081c]/90 rounded-[32px] p-8 sm:p-10 border border-[#261542] shadow-xl shadow-purple-950/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-heading text-white mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-8">
              Fill out the details below and I will get back to you with timeline and quotation details.
            </p>

            {formSubmitted ? (
              <div className="py-12 px-6 text-center space-y-4 bg-[#120824] rounded-2xl border border-brand-500/40">
                <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-300 max-w-sm mx-auto">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I will review your project requirements and respond promptly to <strong className="text-brand-300">{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', service: 'Social Media Design', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-brand-600 text-white text-xs uppercase tracking-wider font-bold hover:bg-brand-500 transition-colors shadow-glow-sm mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#130b25] border border-[#2c174d] text-white focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/30 placeholder-gray-500 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#130b25] border border-[#2c174d] text-white focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/30 placeholder-gray-500 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#130b25] border border-[#2c174d] text-white focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/30 outline-none text-sm transition-all"
                  >
                    <option value="Social Media Design" className="bg-[#130b25] text-white">Social Media Design & Campaigns</option>
                    <option value="Packaging & Label Design" className="bg-[#130b25] text-white">Packaging & Label Design</option>
                    <option value="Branding & Visual Identity" className="bg-[#130b25] text-white">Branding & Visual Identity</option>
                    <option value="Print & Marketing Elements" className="bg-[#130b25] text-white">Print & Marketing Elements</option>
                    <option value="YouTube Thumbnails" className="bg-[#130b25] text-white">High-CTR YouTube Thumbnails</option>
                    <option value="Other Commercial Visuals" className="bg-[#130b25] text-white">Other Commercial Visuals</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Project Brief / Details *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about your brand, requirements, deadlines, or design goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#130b25] border border-[#2c174d] text-white focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/30 placeholder-gray-500 outline-none text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-all duration-300 shadow-glow-white flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
