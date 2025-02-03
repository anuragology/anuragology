import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const Courses = () => {
  const benefits = [
    'Get Structured & Interactive Tutorial Videos',
    'Practice Assignments & Quizzes',
    'Real-World Industrial Projects',
    'Different Marketing Case Studies',
    '1 Month Industrial Internship',
    '1-1 Doubt Support Support Daily',
    'Peer-To-Peer Learning Opportunity',
    'Job Hunting & Freelancing Hacks',
    'Industry-recognized certification',
    'Lifetime access to course materials',
  ];

  return (
    <section id="courses" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-blue-500">Course</span>
        </h2>

        <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative">
              <img
                src="\assets\Digital Marketing.png"
                alt="Digital Marketing Course"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/20" />
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-blue-500 h-6 w-6" />
                <h3 className="text-2xl font-bold text-white">
                  Digital Marketing Mastery Program
                </h3>
              </div>

              <p className="text-gray-300 mb-6">
                Master the art of Digital Marketing with our comprehensive Hands-on Program.
                Work on real-world projects, gain practical learning experience and become Industry-Ready.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="https://dm.cloudyml.com/">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105 duration-300">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;