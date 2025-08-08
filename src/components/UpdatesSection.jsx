import React from "react";
import updateImage from '../assets/UpdateImage.png';
import upcomingEventImage from '../assets/UpComming.png'; // Use your actual image

const LatestUpdates = () => {
  return (
    <section className="min-h-screen bg-[#1c1c1e] pt-[180px] pb-12 px-4 font-[Antonio] flex flex-col items-center justify-center gap-10">
      {/* Original Updates Card */}
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

      {/* New Upcoming Event Card */}
      <div className="w-full max-w-5xl bg-[#2c2c2e] text-white rounded-xl p-8 md:flex items-center gap-8 transition-all duration-300 hover:shadow-[0_0_25px_4px_rgba(255,100,100,0.4)]">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={upcomingEventImage}
            alt="Upcoming Event"
            className="rounded-lg object-cover w-full h-[200px] sm:h-[250px]"
          />
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-[Anton] text-red-500 mb-2">
            Cactus X Fakira
          </h3>
          <p className="text-base sm:text-lg text-[var(--color-cream-white)] font-[Antonio] mb-4">
            Don't miss the biggest upcoming event of the season! Be the first to get updates and secure your spot.
          </p>
          <button
            onClick={() => window.location.href = "/join"}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg transition"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
