import React from "react";

const EventHeading = () => {
  return (
    <div className="bg-[#1c1c1e] text-gray pl-28 pr-20 pt-16 pb-5 text-left">
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
        UPCOMING ARTISTS
      </h2>

      {/* Sub Heading */}
      <p className="text-lg sm:text-xl text-gray-300 mt-6">
        LIVE IN SILIGURI
      </p>
    </div>
  );
};

export default EventHeading;
