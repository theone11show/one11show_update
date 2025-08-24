import React from "react";

const EventHeading = () => {
  return (
    <div className="relative  bg-gradient-to-b from-[#7a0000] to-[#1c0000] text-gray pl-28 pr-20 min-h-[1000px]">
      {/* Main Heading */}
      <h2 className="absolute top-[65%] text-6xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-wider drop-shadow-lg">
        UPCOMING ARTISTS
      </h2>

      {/* Sub Heading */}
      <p className="absolute top-[78%] text-3xl sm:text-4xl md:text-5xl text-gray-300 drop-shadow">
        LIVE IN SILIGURI
      </p>
    </div>
  );
};

export default EventHeading;
