import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white p-10 bg-gradient-to-r from-[#C90D16] to-[#520505]">
      <p className="text-center mb-6 max-w-2xl">
        An artist launchpad dedicated to discovering, mentoring, and launching
        authentic musical and artistic talent.
        <br /><br />
        Powered by The Chordifiers Studio, we unite passionate artists and
        skilled industry professionals committed to nurturing raw talent with
        vibrant music battles, live sessions, and engaging podcasts and more.
      </p>
      <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full">
        know more
      </button>
    </div>
  );
};

export default AboutSection;
