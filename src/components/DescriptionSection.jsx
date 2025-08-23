import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-start justify-center text-white p-10 bg-gradient-to-r from-[#C90D16] to-[#520505]">
      <div className="space-y-4 max-w-2xl">
        <p className="text-lg font-medium">
          An artist launchpad dedicated to discovering, mentoring, and launching
          authentic musical and artistic talent.
        </p>
        <p className="text-base leading-relaxed">
          Powered by The Chordifiers Studio, we unite passionate artists and
          skilled industry professionals committed to nurturing raw talent with
          vibrant music battles, live sessions, and engaging podcasts and more.
        </p>
      </div>

      <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full">
        know more
      </button>
    </div>
  );
};

export default AboutSection;
