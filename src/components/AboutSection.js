import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-[#0d0d0d] bg-opacity-90 text-white rounded-xl p-10 transition-all duration-300 hover:shadow-[0_0_25px_4px_rgba(0,255,255,0.5)]">
        <h2 className="text-4xl font-extrabold text-cyan-300 text-center mb-8">
          About Us
        </h2>

        <p className="mb-6 text-gray-300 text-lg leading-relaxed">
          Welcome! to <span className="text-cyan-300 font-semibold hover:underline">The One11 Show</span>, an artist launchpad where <span className="italic">Talent meets opportunity</span>. Powered by <span className="text-cyan-300">The Chordifiers Studio</span>, this platform is designed to discover, guide, and spotlight emerging artists in music and the performing arts.
        </p>

        <p className="mb-6 text-gray-300 text-lg leading-relaxed">
          Whether you're a member of a band, a singer-songwriter, an electrifying DJ, a skilled musician, or a rapper, we exist to fulfill your unfulfilled dreams.
        </p>

        <p className="mb-6 text-gray-300 text-lg leading-relaxed">
          We aim to uplift the cultural landscape of India and the world by creating a unique platform for artists through mentorship, exposure, and experience.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="text-cyan-300 font-medium">The One11 Show</span> is not just any other show or music event. We are an umbrella of <span className="italic">‘HOPE’</span> in a field where there is too much uncertainty.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
