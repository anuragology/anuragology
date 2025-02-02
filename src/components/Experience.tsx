import React from 'react';
import { Briefcase, MapPin, GraduationCap, School } from 'lucide-react';

const experiences = [
  {
    title: 'CEO',
    company: 'CloudyML',
    period: 'Sep 2024 - Present',
    location: 'Kolkata, West Bengal, India',
    description: 'Leading the company\'s vision and strategy.',
    type: 'work'
  },
  {
    title: 'Chief Business Officer',
    company: 'CloudyML',
    period: 'Nov 2022 - Oct 2024',
    location: 'Kolkata, West Bengal, India',
    description: 'Operations Management, Marketing Strategy, and business development.',
    type: 'work'
  },
  {
    title: 'Chief Marketing Officer',
    company: 'CloudyML',
    period: 'Jun 2021 - Nov 2022',
    location: 'Kolkata, West Bengal, India',
    description: 'CMO management, Online Advertising, and marketing strategy.',
    type: 'work'
  },
  {
    title: 'Freelancer',
    company: 'Marketing & Graphics Designing',
    period: 'Jun 2020 - Jun 2021',
    location: 'Remote',
    description: 'Developed websites, created content, managed social media accounts.',
    type: 'work'
  },
  {
    title: 'B.Tech in Electrical Engineering',
    company: 'Institute of Engineering & Management (IEM)',
    period: '2016 - 2020',
    location: 'Kolkata, West Bengal, India',
    description: 'Bachelor of Technology in Electrical Engineering.',
    type: 'education'
  },
  {
    title: 'Higher Secondary Education (Class 11-12)',
    company: 'Scottish Public School',
    period: '2013 - 2015',
    location: 'Katihar, Bihar, India',
    description: 'Completed Class 11-12 in CBSE board.',
    type: 'education'
  },
  {
    title: 'Secondary Education (Class 10)',
    company: 'Kanki Shree Jain Vidya Mandir',
    period: '2013',
    location: 'Kanki, West Bengal, India',
    description: 'Completed Class 10 from WBBSE Board.',
    type: 'education'
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
                <div className={`absolute left-[11px] top-[30px] bottom-0 w-[2px] ${
                  exp.type === 'education' ? 'bg-purple-500/30' : 'bg-blue-500/30'
                }`} />
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-[6px] w-6 h-6 rounded-full ${
                exp.type === 'education' ? 'bg-purple-500' : 'bg-blue-500'
              } border-4 border-black`} />

              {/* Content */}
              <div className={`bg-gray-900 rounded-lg p-6 ml-6 ${
                exp.type === 'education' ? 'border-l-4 border-purple-500' : ''
              }`}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className={exp.type === 'education' ? 'text-purple-500' : 'text-blue-500'}>•</span>
                  <span className="text-gray-400">{exp.company}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    {exp.type === 'education' ? (
                      <GraduationCap className="h-4 w-4" />
                    ) : (
                      <Briefcase className="h-4 w-4" />
                    )}
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