import React from 'react';
import { personalInfo, designStrengths, workExperience, education } from '../data/portfolioData';
import rupaPortrait from '../assets/rupa-portrait.jpg';
import { Briefcase, GraduationCap, CheckCircle, MapPin, Award, ArrowUpRight } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section id="profile" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-100">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-600 mb-3">
            <span className="w-8 h-[2px] bg-brand-500"></span>
            <span>About The Designer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#1c152b] tracking-tight uppercase">
            Profile & Philosophy
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-500">
          <MapPin className="w-4 h-4 text-brand-500" />
          <span>Based in Bangladesh • Working Internationally</span>
        </div>
      </div>

      {/* Main Bio Card & Portrait */}
      <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-brand-100 shadow-sm mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Portrait Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-[28px] overflow-hidden shadow-lg border-2 border-brand-100">
              <img
                src={rupaPortrait}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-center shadow-md">
                <p className="text-xs font-bold text-[#1c152b]">{personalInfo.name}</p>
                <p className="text-[10px] text-brand-600 uppercase tracking-wider font-semibold">@{personalInfo.brand}</p>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-8 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#1c152b]">
              Turning complex brand ideas into clear, captivating visual realities.
            </h3>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I’m <strong>Rupa Akter</strong>, a passionate Graphic Designer and Visual Content Designer from Bangladesh with <strong>5+ years of experience</strong> creating impactful visual content for businesses, brands, and international clients.
              </p>
              <p>
                I specialize in <strong>Social Media Design, Packaging Design, Branding, Printing Label Packaging Design</strong>, and other commercial visual content.
              </p>
              <p>
                My design approach focuses on creating visuals that are not only beautiful but also communicate the brand’s message clearly. I believe great design is more than just making something look good. It is about understanding the idea, audience, and purpose behind the design and turning them into a strong visual experience.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200">
                Social Media Specialist
              </div>
              <div className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200">
                Packaging & Print Expert
              </div>
              <div className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200">
                Brand Identity Strategist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Strengths Grid */}
      <div className="mb-20">
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#1c152b] uppercase tracking-wide">
            Core Design Strengths
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Proven competencies developed over 5+ years of commercial client design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {designStrengths.map((strength, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-brand-100/80 hover:border-brand-400 hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#1c152b] group-hover:text-brand-700 transition-colors">
                {strength.label}
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
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
            <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-[#1c152b] uppercase tracking-wide">
                Work Experience
              </h3>
              <p className="text-xs text-gray-500 font-medium">Professional positions & studios</p>
            </div>
          </div>

          <div className="space-y-4">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border transition-all ${
                  exp.current
                    ? 'border-brand-300 shadow-md ring-1 ring-brand-200'
                    : 'border-brand-100/80 hover:border-brand-200'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-lg font-bold font-heading text-[#1c152b]">
                    {exp.company}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                      exp.current
                        ? 'bg-brand-500 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-brand-700 font-semibold mb-3">
                  <span>{exp.role}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{exp.type}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education (Right Column) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#1e1533] text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-[#1c152b] uppercase tracking-wide">
                Education
              </h3>
              <p className="text-xs text-gray-500 font-medium">Academic achievements</p>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-brand-100/80 hover:border-brand-200 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-50 text-brand-700 font-semibold uppercase tracking-wider">
                    {edu.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#1c152b]">
                  {edu.degree}
                </h4>

                <div className="text-xs text-gray-600 space-y-0.5">
                  <p className="font-semibold text-gray-800">{edu.college}</p>
                  <p className="text-gray-500">{edu.institution}</p>
                </div>
              </div>
            ))}

            {/* Teaching & Mentorship Highlight Card */}
            <div className="bg-gradient-to-br from-brand-50 to-[#f5eefc] rounded-2xl p-6 border border-brand-200/60 space-y-2">
              <div className="flex items-center gap-2 text-brand-800 font-bold text-sm">
                <Award className="w-4 h-4 text-brand-600" />
                <span>Instructor & Trainer</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Taught practical graphic design skills, Photoshop, Illustrator, and supervised project portfolios at <strong>BD Career Point</strong>, empowering aspiring designers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
