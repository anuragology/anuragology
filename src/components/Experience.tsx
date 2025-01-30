import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'CEO',
    company: 'CloudyML',
    period: 'Sep 2024 - Present',
    location: 'Kolkata, West Bengal, India',
    description: 'Leading the company\'s vision and strategy.',
  },
  {
    title: 'Chief Business Officer',
    company: 'CloudyML',
    period: 'Nov 2022 - Oct 2024',
    location: 'Kolkata, West Bengal, India',
    description: 'Operations Management, Marketing Strategy, and business development.',
  },
  {
    title: 'Chief Marketing Officer',
    company: 'CloudyML',
    period: 'Jun 2021 - Nov 2022',
    location: 'Kolkata, West Bengal, India',
    description: 'CMO management, Online Advertising, and marketing strategy.',
  },
  {
    title: 'Freelancer',
    company: 'Marketing & Graphics Designing',
    period: 'Jun 2020 - Jun 2021',
    location: 'Remote',
    description: 'Developed websites, created content, managed social media accounts.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Professional <span className="text-blue-500">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[30px] bottom-0 w-[2px] bg-blue-500/30" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-blue-500 border-4 border-black" />

              {/* Content */}
              <div className="bg-gray-900 rounded-lg p-6 ml-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-blue-500">•</span>
                  <span className="text-gray-400">{exp.company}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;