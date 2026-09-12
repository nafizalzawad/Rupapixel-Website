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
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-100">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs uppercase tracking-widest font-bold">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Start A Project</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#1c152b] tracking-tight uppercase">
          Let's Work Together
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Have an upcoming project, brand identity revamp, or need ongoing social media & packaging visuals? Get in touch directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Direct Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-[28px] p-6 sm:p-8 text-white shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs uppercase font-bold tracking-wider">
                Fastest Response
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-100 font-semibold">Instant Chat</p>
              <h3 className="text-xl font-bold font-heading">WhatsApp Direct</h3>
              <p className="text-xs text-emerald-100 mt-1">Available for quick queries and project briefings</p>
            </div>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-emerald-800 text-xs uppercase tracking-widest font-bold hover:bg-emerald-50 transition-colors shadow-sm"
            >
              <span>Message on WhatsApp ({personalInfo.whatsapp})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-[28px] p-6 border border-brand-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[11px] font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Address'}</span>
              </button>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Email Address</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base font-bold text-[#1c152b] hover:text-brand-600 transition-colors block mt-0.5 break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-[28px] p-6 border border-brand-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1 text-[11px] font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied!' : 'Copy Number'}</span>
              </button>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Phone Contact</p>
              <a
                href={personalInfo.phoneTel}
                className="text-base font-bold text-[#1c152b] hover:text-brand-600 transition-colors block mt-0.5"
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
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-brand-100 hover:border-brand-400 text-xs font-bold text-[#1c152b] hover:text-brand-600 transition-all shadow-sm group"
              >
                <BehanceIcon className="w-4 h-4 text-brand-600" />
                <span>Behance</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-brand-100 hover:border-brand-400 text-xs font-bold text-[#1c152b] hover:text-brand-600 transition-all shadow-sm group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-brand-100 hover:border-brand-400 text-xs font-bold text-[#1c152b] hover:text-brand-600 transition-all shadow-sm group"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877f2]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Message Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-brand-100 shadow-md">
            <h3 className="text-2xl font-bold font-heading text-[#1c152b] mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-8">
              Fill out the details below and I will get back to you with timeline and quotation details.
            </p>

            {formSubmitted ? (
              <div className="py-12 px-6 text-center space-y-4 bg-brand-50/50 rounded-2xl border border-brand-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#1c152b]">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will review your project requirements and respond promptly to <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', service: 'Social Media Design', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-brand-500 text-white text-xs uppercase tracking-wider font-bold hover:bg-brand-600 transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all bg-white"
                  >
                    <option value="Social Media Design">Social Media Design & Campaigns</option>
                    <option value="Packaging & Label Design">Packaging & Label Design</option>
                    <option value="Branding & Visual Identity">Branding & Visual Identity</option>
                    <option value="Print & Marketing Elements">Print & Marketing Elements</option>
                    <option value="YouTube Thumbnails">High-CTR YouTube Thumbnails</option>
                    <option value="Other Commercial Visuals">Other Commercial Visuals</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Project Brief / Details *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about your brand, requirements, deadlines, or design goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1e1533] text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-600 transition-all duration-300 shadow-md hover:shadow-glow flex items-center justify-center gap-2"
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
