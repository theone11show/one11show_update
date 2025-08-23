import React from "react";

const MusicBattle = () => {
  return (
    <div className="bg-[#1c1c1e]  text-white text-center px-6 py-20">
      {/* Subtitle */}
      <p className="text-sm font-medium tracking-widest text-gray-300 mb-3">
        SEASON 1
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-green-500 mb-8">
        MUSIC BATTLE SERIES
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
        <span className="font-bold">
          The One11 Music Battle Season 1
        </span>
        , begins its journey on{" "}
        <span className="font-bold">20 September 2025</span>, bringing together
        artists, audiences, and creative communities for an exciting opening
        day.
        <br /><br />
        From the largest artist gathering in North Bengal to engaging
        performances and cultural showcases, Day 1 sets the foundation for three
        days of music, connection, and celebration.
      </p>
    </div>
  );
};

export default MusicBattle;
