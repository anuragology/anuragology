import React from 'react';
import { Quote } from 'lucide-react';
import Anuragologyimg from '../assets/Aimg.jpg';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={Anuragologyimg}
                alt="Anurag Prasad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About <span className="text-blue-500">Me</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              I am currently the CEO at CloudyML, an ed-tech platform, and a core member of the company. 
              I have extensive experience in various businesses, including e-commerce, ed-tech, SaaS, 
              drop shipping, and freelancing services. My goal is to leverage technology to solve 
              real-world problems.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-500 pl-4 my-8">
              <div className="flex items-start gap-2">
                <Quote className="text-blue-500 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white italic text-lg">
                    "Innovation distinguishes between a leader and a follower."
                  </p>
                  <footer className="text-gray-400 mt-2">- Steve Jobs</footer>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;