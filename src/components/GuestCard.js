import React from "react";

const GuestCard = () => {
  return (
<div className="bg-[#1e1e1e]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg 
      w-full md:w-4/5 lg:w-3/4 mx-auto grid grid-cols-1 gap-8 mt-12 pt-80">

      
      {/* RJ Praveen Card */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/Rj-day1.webp"
          alt="RJ Praveen"
          loading="lazy"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>

      {/* DJ Guest Card */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/SaiRam.webp"
          alt="DJ Guest"
          loading="lazy"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>

      {/* Duplicate RJ Card */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/Theone11.webp"
           loading="lazy"
          alt="RJ Praveen Duplicate"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>

      {/* Duplicate RJ Card */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/Dj-day1.webp"
          alt="RJ Praveen Duplicate"
          loading="lazy"
          className="w-3/4 h-80 object-cover rounded-xl"
        />
      </div>

      {/* Duplicate DJ Card */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/crowd.webp"
          alt="DJ Guest Duplicate"
          loading="lazy"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default GuestCard;
