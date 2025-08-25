import React from "react";

const EventHeading = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#C90D16] to-[#520505] text-gray pl-6 sm:pl-16 md:pl-28 pr-6 sm:pr-12 md:pr-20 min-h-[1000px]">
      {/* Main Heading */}
      <h2
        className="
          absolute  
          top-[30%] sm:top-[45%] md:top-[50%] lg:top-[55%] 
          text-3xl sm:text-5xl md:text-7xl lg:text-8xl  
          font-extrabold uppercase tracking-wider drop-shadow-lg
          text-left
        "
      >
        UPCOMING ARTISTS
      </h2>

      {/* Sub Heading */}
      <p
        className="
          absolute 
          top-[42%] sm:top-[60%] md:top-[65%] lg:top-[70%] 
          text-lg sm:text-2xl md:text-4xl lg:text-5xl 
          text-gray-300 drop-shadow
          text-left
        "
      >
        LIVE IN SILIGURI
      </p>
    </div>
  );
};

export default EventHeading;
