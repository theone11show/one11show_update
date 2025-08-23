import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white p-10 bg-gradient-to-r from-[#C90D16] to-[#520505]">
      <div className="space-y-4 max-w-2xl text-center">
        <p className="text-medium font-medium">
          An artist launchpad dedicated to discovering, mentoring, and <br /> 
          launching authentic musical and artistic talent.
        </p>
        <p className="text-base leading-relaxed">
          Powered by The Chordifiers Studio, we unite passionate artists and
          skilled industry professionals committed to nurturing raw talent with
          vibrant music battles, live sessions, engaging podcasts, and more.
        </p>
      </div>

      {/* Centered Button */}
      <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-black font-semibold px-8 py-3 rounded-full transition">
        Know More
      </button>
    </div>
  );
};

export default AboutSection;
