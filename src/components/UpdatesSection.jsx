import React from "react";

const LatestUpdates = () => {
  return (
    <section className="min-h-screen bg-[#1c1c1e] flex items-center justify-center py-12 font-[Antonio]">
      <div className="w-full max-w-xl bg-[#2c2c2e] text-white rounded-xl shadow-lg p-6 relative ring-4 ring-cyan-400">
        <h2 className="text-4xl font-[Anton] text-center text-white mb-8">
          Latest Updates
        </h2>

        <div className="flex flex-col items-center">
          <img
            src="https://placehold.co/120x120/9932cc/faffff?text=Announcements"
            alt="Announcements"
            className="w-28 h-28 rounded-full border-4 border-red-500 mb-4"
          />

          <h3 className="text-xl text-red-500 font-bold uppercase tracking-wide text-center mb-4">
            Important Announcements
          </h3>

          <div className="max-h-40 overflow-y-auto w-full text-sm space-y-3 pr-2 custom-scrollbar">
            <p>• The payment portal is open for round 1B participants 24 JULY 2025</p>
            <p>• The Round 1B has Started01 Aug 2025 </p>
            
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
