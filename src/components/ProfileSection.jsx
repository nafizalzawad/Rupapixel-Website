import React from 'react';
import { personalInfo, designStrengths, workExperience, education } from '../data/portfolioData';
import rupaPortrait from '../assets/rupa-portrait.jpg';
import { Briefcase, GraduationCap, CheckCircle, MapPin, Award, ArrowUpRight } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section id="profile" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#261542]/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-400 mb-3">
            <span className="w-8 h-[2px] bg-brand-500"></span>
            <span>About The Designer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            Profile & Philosophy
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-400">
          <MapPin className="w-4 h-4 text-brand-400" />
          <span>Based in Bangladesh • Working Internationally</span>
        </div>
      </div>

      {/* Main Bio Card & Portrait */}
      <div className="bg-[#0e081c]/90 rounded-[36px] p-8 sm:p-12 border border-[#261542] shadow-xl shadow-purple-950/20 mb-16 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Portrait Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-2 border-[#3b1d6b] bg-[#120a22]">
              <img
                src={rupaPortrait}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0e081c]/90 backdrop-blur-md px-4 py-2 rounded-xl text-center shadow-lg border border-[#3b1d6b]">
                <p className="text-xs font-bold text-white">{personalInfo.name}</p>
                <p className="text-[10px] text-brand-400 uppercase tracking-wider font-semibold">@{personalInfo.brand}</p>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-8 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Turning complex brand ideas into clear, captivating visual realities.
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I’m <strong className="text-white font-semibold">Rupa Akter</strong>, a passionate Graphic Designer and Visual Content Designer from Bangladesh with <strong className="text-brand-300 font-semibold">5+ years of experience</strong> creating impactful visual content for businesses, brands, and international clients.
              </p>
              <p>
                I specialize in <strong className="text-white font-semibold">Social Media Design, Packaging Design, Branding, Printing Label Packaging Design</strong>, and other commercial visual content.
              </p>
              <p>
                My design approach focuses on creating visuals that are not only beautiful but also communicate the brand’s message clearly. I believe great design is more than just making something look good. It is about understanding the idea, audience, and purpose behind the design and turning them into a strong visual experience.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-[#190d34] text-brand-300 text-xs font-bold uppercase tracking-wider border border-[#3b1d6b]">
                Social Media Specialist
              </div>
              <div className="px-4 py-2 rounded-full bg-[#190d34] text-brand-300 text-xs font-bold uppercase tracking-wider border border-[#3b1d6b]">
                Packaging & Print Expert
              </div>
              <div className="px-4 py-2 rounded-full bg-[#190d34] text-brand-300 text-xs font-bold uppercase tracking-wider border border-[#3b1d6b]">
                Brand Identity Strategist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Strengths Grid */}
      <div className="mb-20">
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white uppercase tracking-wide">
            Core Design Strengths
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Proven competencies developed over 5+ years of commercial client design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {designStrengths.map((strength, idx) => (
            <div
              key={idx}
              className="bg-[#0e081c]/90 rounded-2xl p-5 border border-[#261542] hover:border-[#8b5cf6]/60 hover:shadow-glow transition-all group backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-xl bg-[#1b0e35] text-brand-300 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors border border-[#3b1d6b]/50">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                {strength.label}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                {strength.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education Columns */}
      <div id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Work Experience (Left Column) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-glow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-wide">
                Work Experience
              </h3>
              <p className="text-xs text-gray-400 font-medium">Professional positions & studios</p>
            </div>
          </div>

          <div className="space-y-4">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className={`bg-[#0e081c]/90 rounded-2xl p-6 border transition-all ${
                  exp.current
                    ? 'border-brand-500/60 shadow-glow-sm ring-1 ring-brand-500/20'
                    : 'border-[#261542] hover:border-[#3b1d6b]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-lg font-bold font-heading text-white">
                    {exp.company}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                      exp.current
                        ? 'bg-brand-600 text-white shadow-glow-sm'
                        : 'bg-[#1a0e36] text-gray-300 border border-[#2d1750]'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-brand-300 font-semibold mb-3">
                  <span>{exp.role}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{exp.type}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education (Right Column) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#1e1533] border border-[#3b1d6b] text-brand-300 flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-wide">
                Education
              </h3>
              <p className="text-xs text-gray-400 font-medium">Academic achievements</p>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#0e081c]/90 rounded-2xl p-6 border border-[#261542] hover:border-[#3b1d6b] transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#1a0e36] text-brand-300 border border-[#3b1d6b] font-semibold uppercase tracking-wider">
                    {edu.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {edu.degree}
                </h4>

                <div className="text-xs text-gray-300 space-y-0.5">
                  <p className="font-semibold text-gray-200">{edu.college}</p>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              </div>
            ))}

            {/* Teaching & Mentorship Highlight Card */}
            <div className="bg-gradient-to-br from-[#1b0d38] to-[#120826] rounded-2xl p-6 border border-[#3b1d6b] space-y-2">
              <div className="flex items-center gap-2 text-brand-300 font-bold text-sm">
                <Award className="w-4 h-4 text-brand-400" />
                <span>Instructor & Trainer</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Taught practical graphic design skills, Photoshop, Illustrator, and supervised project portfolios at <strong className="text-white">BD Career Point</strong>, empowering aspiring designers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
