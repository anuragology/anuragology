import React from 'react';

const Music = () => {
  const videos = [
    {
      title: 'Mera Naam',
      url: 'https://www.youtube.com/embed/-kEd2XSs4Ik',
    },
    {
      title: 'Lakeere',
      url: 'https://www.youtube.com/embed/ipx0OtJ9YeY',
    },
    {
      title: 'Happy Birthday',
      url: 'https://www.youtube.com/embed/pcTk7jYssao',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          My <span className="text-blue-500">Music</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center">
          I am passionate about songwriting, composition, and rapping. Through my music, I share my thoughts and experiences with the world, hoping to inspire and connect with others.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;