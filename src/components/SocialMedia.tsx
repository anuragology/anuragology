import React from 'react';
import { Instagram, Linkedin, Github, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#',
    color: 'bg-[#0077B5]',
    followers: '10K+',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: '#',
    color: 'bg-[#333]',
    followers: '500+',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#',
    color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
    followers: '25K+',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: '#',
    color: 'bg-[#FF0000]',
    followers: '15K+',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: '#',
    color: 'bg-[#1877F2]',
    followers: '8K+',
  },
];

const SocialMedia = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Connect on <span className="text-blue-500">Social Media</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`${social.color} rounded-2xl p-6 text-center transform transition-all duration-300 
                            hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}>
                <social.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">{social.name}</h3>
                <p className="text-white/80 text-sm">{social.followers} Followers</p>
                
                <div className="mt-4 inline-flex items-center gap-2 text-white/90 text-sm">
                  <span>Follow</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia