import React from "react";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-300 to-gray-100 py-10 px-6 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Title */}
        <h2 className="text-[56px] font-anton text-white tracking-wide drop-shadow-lg">
          NEWSLETTER
        </h2>

        {/* Center + Right */}
        <div className="flex flex-1 items-center justify-between relative">
          {/* Center - Static Text */}
          <p className="ml-4 text-gray-600 text-[18px] font-montserrat tracking-wide leading-none flex items-center">
            email address here
          </p>

          {/* Right - Subscribe Button */}
         {/* Right - Subscribe Button */}
<button className="flex items-center gap-2 text-black 
  text-[16px] md:text-[21px] font-montserrat 
  px-4 md:px-6 py-2 
  hover:text-[#d0021a] transition 
  mr-4 md:mr-20">
  <FiMail className="text-2xl md:text-4xl text-gray-500" />
  Subscribe
</button>


          {/* Divider (only under center + right, with margin-left) */}
          <div className="absolute -bottom-2 left-4 right-0 h-[2px] bg-gradient-to-r from-[#d0021a] to-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
