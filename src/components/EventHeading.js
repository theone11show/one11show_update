import React from "react";
const EventHeading = () => {
  return (
    <div className="text-center sm:text-left px-6 sm:px-16 md:px-28 py-12 sm:py-16 md:py-24">
      {/* Main Heading */}
      <h2
        className="
          text-3xl sm:text-5xl md:text-7xl lg:text-8xl
          uppercase tracking-wider drop-shadow-lg
          font-aton text-white
        "
      >
        UPCOMING ARTISTS
      </h2>

      {/* Sub Heading */}
      <p
        className="
          mt-4
          text-lg sm:text-2xl md:text-4xl
          text-gray-300 drop-shadow
          font-montserrat
        "
      >
        LIVE IN SILIGURI
      </p>
    </div>
  );
};
export default EventHeading;
