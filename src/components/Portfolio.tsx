import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'cloudyml-revenue',
    title: 'CloudyML Revenue Growth Campaign',
    category: 'Digital Marketing',
    description: 'Led a comprehensive digital marketing campaign that resulted in 150% revenue growth through strategic social media marketing, SEO optimization, and targeted ad campaigns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 'ecommerce-optimization',
    title: 'E-commerce Sales Optimization',
    category: 'Digital Marketing',
    description: 'Implemented data-driven marketing strategies for an e-commerce platform, increasing monthly sales by 200% through email marketing and conversion rate optimization.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 'cloudyml-platform',
    title: 'CloudyML Learning Platform',
    category: 'Web Development',
    description: 'Developed a full-stack e-learning platform using React and Node.js, featuring video courses, interactive assessments, and real-time progress tracking.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    id: 'tech-career-app',
    title: 'Tech Career Mobile App',
    category: 'App Development',
    description: 'Created a React Native mobile app connecting tech professionals with job opportunities, featuring real-time chat and AI-powered job matching.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    id: 'portfolio-analytics',
    title: 'Portfolio Analytics Dashboard',
    category: 'Web Development',
    description: 'Built a real-time analytics dashboard using React, D3.js, and WebSocket for tracking portfolio performance and user engagement metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex gap-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Project</span>
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;