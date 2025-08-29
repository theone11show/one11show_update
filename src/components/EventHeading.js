import React from "react";

const EventHeading = () => {
  return (
    <div className="w-full px-6 sm:px-16 md:px-28 py-16 sm:py-24 md:py-32 text-left">
      {/* Main Heading */}
      <h2
        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider drop-shadow-lg text-gray-100"
      >
        UPCOMING ARTISTS
      </h2>

      {/* Sub Heading */}
      <p
        className="mt-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl text-gray-300 drop-shadow"
      >
        LIVE IN SILIGURI
      </p>
    </div>
  );
};

export default EventHeading;
