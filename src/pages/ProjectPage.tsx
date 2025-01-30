import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Calendar, Tag, User } from 'lucide-react';

const projects = {
  'cloudyml-revenue': {
    title: 'CloudyML Revenue Growth Campaign',
    category: 'Digital Marketing',
    date: 'January 2024',
    client: 'CloudyML',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Analytics'],
    description: `
      Led a comprehensive digital marketing campaign that resulted in 150% revenue growth 
      through strategic social media marketing, SEO optimization, and targeted ad campaigns.
      The project involved multiple phases of implementation and optimization.
    `,
    challenge: `
      The main challenge was to increase revenue while maintaining a sustainable 
      cost per acquisition. We needed to identify the most effective marketing 
      channels and optimize our spending accordingly.
    `,
    solution: `
      We implemented a multi-channel marketing strategy that included:
      - Comprehensive SEO optimization
      - Targeted social media campaigns
      - Email marketing automation
      - Content marketing strategy
      - Analytics and tracking implementation
    `,
    results: [
      '150% increase in revenue',
      '200% increase in organic traffic',
      '45% reduction in customer acquisition cost',
      '80% improvement in conversion rate',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    liveUrl: '#',
    github: '#',
  },
  'ecommerce-optimization': {
    title: 'E-commerce Sales Optimization',
    category: 'Digital Marketing',
    date: 'December 2023',
    client: 'E-commerce Client',
    tags: ['E-commerce', 'CRO', 'Email Marketing', 'Analytics'],
    description: `
      Implemented data-driven marketing strategies for an e-commerce platform, 
      increasing monthly sales by 200% through email marketing and conversion rate optimization.
    `,
    challenge: `
      The client was struggling with low conversion rates and abandoned carts. 
      We needed to optimize the entire customer journey and implement effective 
      re-engagement strategies.
    `,
    solution: `
      Our solution included:
      - Customer journey optimization
      - Abandoned cart recovery campaigns
      - Personalized email marketing
      - A/B testing of product pages
      - Enhanced analytics implementation
    `,
    results: [
      '200% increase in monthly sales',
      '35% reduction in cart abandonment',
      '150% improvement in email open rates',
      '300% increase in repeat customers',
    ],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    liveUrl: '#',
    github: '#',
  },
  'cloudyml-platform': {
    title: 'CloudyML Learning Platform',
    category: 'Web Development',
    date: 'November 2023',
    client: 'CloudyML',
    tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    description: `
      Developed a full-stack e-learning platform using React and Node.js, featuring 
      video courses, interactive assessments, and real-time progress tracking.
    `,
    challenge: `
      Creating a scalable and interactive learning platform that could handle 
      video streaming, real-time assessments, and user progress tracking while 
      maintaining high performance.
    `,
    solution: `
      We built a robust platform using:
      - React for the frontend
      - Node.js and Express for the backend
      - MongoDB for data storage
      - WebRTC for video streaming
      - Redis for caching
    `,
    results: [
      'Successfully launched with 100+ courses',
      '10,000+ active students',
      '99.9% platform uptime',
      '95% positive user feedback',
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    liveUrl: '#',
    github: '#',
  },
  'tech-career-app': {
    title: 'Tech Career Mobile App',
    category: 'App Development',
    date: 'October 2023',
    client: 'Tech Recruitment Agency',
    tags: ['React Native', 'Firebase', 'AI/ML', 'Node.js'],
    description: `
      Created a React Native mobile app connecting tech professionals with job opportunities, 
      featuring real-time chat and AI-powered job matching.
    `,
    challenge: `
      Building a mobile app that could effectively match job seekers with opportunities 
      while providing a seamless communication platform between candidates and recruiters.
    `,
    solution: `
      We developed a comprehensive solution using:
      - React Native for cross-platform development
      - Firebase for real-time features
      - Custom AI algorithms for job matching
      - Node.js backend for API services
    `,
    results: [
      '50,000+ app downloads',
      '80% user retention rate',
      '90% job match accuracy',
      '10,000+ successful placements',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    liveUrl: '#',
    github: '#',
  },
  'portfolio-analytics': {
    title: 'Portfolio Analytics Dashboard',
    category: 'Web Development',
    date: 'September 2023',
    client: 'Investment Firm',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    description: `
      Built a real-time analytics dashboard using React, D3.js, and WebSocket for 
      tracking portfolio performance and user engagement metrics.
    `,
    challenge: `
      Creating a high-performance dashboard that could handle real-time data updates 
      and complex visualizations while maintaining responsive performance.
    `,
    solution: `
      We implemented a solution using:
      - React for UI components
      - D3.js for data visualization
      - WebSocket for real-time updates
      - Node.js for backend services
    `,
    results: [
      'Real-time updates with <100ms latency',
      '50+ interactive chart types',
      '99.9% system availability',
      '40% reduction in data processing time',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    liveUrl: '#',
    github: '#',
  },
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <Link to="/" className="text-blue-500 hover:text-blue-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link 
              to="/#portfolio" 
              className="inline-flex items-center text-white mb-8 hover:text-blue-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-2" />
                {project.date}
              </div>
              <div className="flex items-center text-gray-300">
                <User className="h-5 w-5 mr-2" />
                {project.client}
              </div>
              <div className="flex items-center text-gray-300">
                <Tag className="h-5 w-5 mr-2" />
                {project.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.description}</p>
              </section>

              {/* Challenge */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.challenge}</p>
              </section>

              {/* Solution */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">The Solution</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.solution}</p>
              </section>

              {/* Results */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Results</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <li 
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg text-gray-300"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project screenshot ${index + 1}`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
              </section>

              {/* Video Overview */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Video Overview</h2>
                <div className="aspect-video bg-gray-800 rounded-lg">
                  <iframe
                    src={project.videoUrl}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    title="Project Overview"
                  />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tags */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;