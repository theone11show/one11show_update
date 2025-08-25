import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#C90D16] to-[#520505]">
      <div className="space-y-3 sm:space-y-4 max-w-2xl text-center">
        <p className="text-[10px] sm:text-sm md:text-base font-medium">
          An artist launchpad dedicated to discovering, mentoring, and <br />
          launching authentic musical and artistic talent.
        </p>
        <p className="text-[10px] sm:text-sm md:text-base leading-relaxed">
          Powered by The Chordifiers Studio, we unite passionate artists and
          skilled industry professionals committed to nurturing raw talent with
          vibrant music battles, live sessions, engaging podcasts, and more.
        </p>
      </div>

      {/* Centered Button */}
      <button
        className="mt-6 sm:mt-8 hover:opacity-90 text-black font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition text-[10px] sm:text-sm md:text-base"
        style={{ backgroundColor: "#d0021a" }}
      >
        Know More
      </button>
    </div>
  );
};

export default AboutSection;
