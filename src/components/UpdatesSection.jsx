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
            <p>• Finalist Dates For All Battles Will Be Announced On July 30, 2025.</p>
            <p>• New Celebrity Judges To Be Revealed Next Week!</p>
            <p>• All Initial Audition Rounds Have Been Successfully Completed.</p>
            <p>• Details For The Next Phase Of Competitions Will Be Released Soon.</p>
            <p>• Exciting New Partnership Opportunities Are Now Open.</p>
            <p>• Volunteer Applications For Event Support Are Currently Being Accepted.</p>
            <p>• Check Back Regularly For The Latest News And Updates!</p>
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
