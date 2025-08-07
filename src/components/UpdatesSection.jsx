import React from "react";
import updateImage from '../assets/UpdateImage.png';

const LatestUpdates = () => {
  return (
    <section className="min-h-screen bg-[#1c1c1e] pt-[180px] pb-12 px-4 font-[Antonio] flex items-start justify-center">
      <div className="w-full max-w-xl bg-[#2c2c2e] text-white rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_4px_rgba(0,255,255,0.5)]">
        <h2 className="text-4xl font-[Anton] text-center text-white mb-8">
          Latest Updates
        </h2>

        <div className="flex flex-col items-center">
          <img
            src={updateImage}
            alt="Announcements"
            className="w-[370px] h-[140px] object-cover rounded mb-4"
          />

          <h3 className="text-xl text-red-500 font-bold uppercase tracking-wide text-center mb-4">
            Important Announcements
          </h3>

          <div className="max-h-40 overflow-y-auto w-full text-sm text-center space-y-3 pr-2 custom-scrollbar">
            <div className="border-t border-gray-600 pt-2">
              The payment portal is open for round 1B participants – 24 JULY 2025
            </div>
            <div className="border-t border-gray-600 pt-2">
              The Round 1B has Started – 01 Aug 2025
            </div>
          </div>

          <button className="mt-6 px-4 py-2 bg-cyan-300 text-black font-bold rounded-full text-sm shadow-lg hover:bg-cyan-200 transition">
            New Info!
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
