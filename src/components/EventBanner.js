import React from "react";

const EventBanner = () => {
  return (
    <div className="relative flex items-center justify-center bg-orange-100 overflow-hidden">
      <img
        src="/background3.webp" 
        alt="concert"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute text-black  leading-none  px-4text-[18vw]   // scales with viewport widthmd:text-[15vw]  lg:text-[12vw]">
        
        1.11
      </div>
    </div>
  );
};

export default EventBanner;
