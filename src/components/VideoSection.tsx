import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Watch My <span className="text-blue-500">Introduction</span>
          </h2>
          <p className="text-gray-300">
            Learn more about my journey, vision, and how I can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900">
            {/* Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full 
                               transition-all transform hover:scale-110 duration-300">
                <Play className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;