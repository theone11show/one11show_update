import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1e] pt-[180px] pb-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-[#2c2c2e] text-[#E2E2E2] rounded-xl shadow-md hover:shadow-[0_0_25px_#ffffff] transition-shadow duration-300 p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          The One11 Show
        </h1>

        <hr className="border-t border-gray-400 mb-6" />

        <p className="mb-5 leading-relaxed text-lg">
          Welcome! to <span className="text-white font-semibold">The One11 Show</span>, an artist launchpad where <span className="italic">Talent meets opportunity</span>.
          Powered by <span className="text-white font-semibold">The Chordifiers Studio</span>, this platform is designed to discover, guide, and spotlight emerging artists in music and the performing arts.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          Whether you're a member of a band, a singer-songwriter, an electrifying DJ, a skilled musician, or a rapper, we exist to fulfill your unfulfilled dreams.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          We aim to uplift the cultural landscape of India and the world by creating a unique platform for artists through mentorship, exposure, and experience.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          <span className="text-white font-semibold">The One11 Show</span> is not just any other show or music event. We are an umbrella of <span className="italic">‘HOPE’</span> in a field where there is too much uncertainty.
        </p>

        <hr className="border-t border-gray-400 mt-6" />
      </div>
    </div>
  );
};

export default AboutUs;
