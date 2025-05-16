import React from 'react';

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Beautiful Places</h1>
        <p className="text-lg md:text-xl mb-6">Make your vacation unforgettable with our exclusive tour packages.</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
