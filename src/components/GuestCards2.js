import React from "react";

const GuestCard2 = () => {
  return (
<div className="bg-[#1e1e1e]/70 backdrop-blur-md p-6  shadow-lg 
      w-full md:w-4/5 lg:w-3/4 mx-auto grid grid-cols-1 gap-8 mt-12 pt-80">

      
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/day2.webp"
          alt="day2"
          loading="lazy"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/cactussday2.webp"
           loading="lazy"
          alt="cactuss"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/fakiraday2.webp"
          alt="fakira"
          loading="lazy"
          className="w-3/4 h-80 object-cover rounded-xl"
        />
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center text-center py-4 hover:scale-105 transition transform duration-300">
        <img
          src="/suprised.webp"
          alt="suprised"
          loading="lazy"
          className="w-3/4 h-72 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default GuestCard2;


