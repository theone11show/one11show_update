import React from "react";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-300 to-gray-100 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
      {/* Left - Title */}
      <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
        NEWSLETTER
      </h2>

      {/* Middle - Static Text with Divider */}
      <div className="flex-1 max-w-xl w-full relative">
        <p className="text-gray-600 text-lg tracking-wide">email address here</p>
        <div className="absolute bottom-[-6px] left-0 w-[120%] h-[2px] bg-gradient-to-r from-[#d0021a] to-gray-700"></div>
      </div>

      {/* Right - Subscribe Button */}
      <button className="flex items-center gap-2 text-gray-600 font-semibold px-6 py-2 bg-transparent border-none rounded-none hover:text-[#d0021a] transition">
        <FiMail className="text-xl" />
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;
