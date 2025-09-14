import React from 'react';

const Day1Header = () => {
  return (
    <div className="flex flex-col justify-center items-start text-left px-6 sm:px-10 py-16 w-full md:w-1/2">
      {/* Title */}
      <h1
  className="font-['Anton'] text-red-600 font-extrabold leading-none pt-40
  text-[96px] sm:text-[120px] md:text-[168px] lg:text-[180px] whitespace-nowrap"
>
  DAY 1
</h1>

      {/* Date */}
      <p
  className="mt-4 font-['Montserrat'] text-[#e4e2d2] 
  whitespace-nowrap
  text-sm sm:text-base md:text-[22px]"
>
 COMING SOON
</p>
      {/* Buttons */}
      <div className="flex flex-nowrap gap-4 mt-8">
      <button
   
    className="font-['Poppins'] bg-white text-black rounded-full font-bold
      px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5
      min-w-[140px] md:min-w-[180px] lg:min-w-[200px]
      text-xs sm:text-sm md:text-lg lg:text-xl
      whitespace-nowrap
      flex items-center justify-center
      hover:bg-gray-200 transition"
      
  >
    BOOK TICKETS
  </button>
        <button
          className="font-['Poppins'] bg-white text-black rounded-full font-bold
          px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5
          min-w-[140px] md:min-w-[160px] lg:min-w-[180px]
          text-xs sm:text-sm md:text-lg lg:text-xl
          whitespace-nowrap
          hover:bg-gray-200 transition"
        >
          SEE LINEUP
        </button>
      </div>
    </div>
  );
};

export default Day1Header;

