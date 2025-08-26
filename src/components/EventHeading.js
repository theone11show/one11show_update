import React from "react";

const EventHeading = () => {
  return (
    <div className="relative text-gray pl-6 sm:pl-16 md:pl-28 pr-6 sm:pr-12 md:pr-20 min-h-[900px]">
      {/* Main Heading */}
      <h2
        className="
          absolute  
          top-[30%] sm:top-[45%] md:top-[50%] lg:top-[55%] 
          text-4xl sm:text-6xl md:text-[80px]   
         uppercase tracking-wider drop-shadow-lg
          text-left font-aton text-white
        "
      >
        UPCOMING ARTISTS
      </h2>

      {/* Sub Heading */}
      <p
        className="
          absolute 
          top-[42%] sm:top-[60%] md:top-[65%] lg:top-[70%] 
          text-lg sm:text-xl md:text-[23px] 
          text-gray-300 drop-shadow
          text-left font-montserrat
        "
      >
        LIVE IN SILIGURI
      </p>
    </div>
  );
};

export default EventHeading;
