import React from "react";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-300 to-gray-100 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
      {/* Left - Title */}
      <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
        NEWSLETTER
      </h2>

      {/* Middle - Input */}
    <div className="flex-1 max-w-xl w-full">
  <input
    type="email"
    placeholder="email address here"
    className="w-full bg-transparent border-b border-gray-300 text-gray-700 placeholder-gray-500 outline-none text-lg px-2 py-2 focus:border-b-2 focus:border-red-500"
  />
</div>

      {/* Right - Subscribe Button */}
     <button className="flex items-center gap-2 text-black font-semibold px-6 py-2 bg-transparent border-none rounded-none hover:text-red-500 transition">
  <FiMail className="text-xl" />
  Subscribe
</button>
    </div>
  );
};

export default NewsLetter;
