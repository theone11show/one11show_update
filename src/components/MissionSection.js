import React from "react";

const MissionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 text-center px-4 sm:px-6 md:px-10 py-10">
      <div className="max-w-3xl"> 
        <p className="mb-6 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
          We are a unified group of industry music professionals,
          <br />
          including producers, directors, artists, performers, and
          experienced event managers. Our shared mission is to provide
          an unbiased platform for raw <br/> talents.
        </p>
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full font-semibold text-[11px] sm:text-sm md:text-base">
        Connect
      </button>
    </div>
  );
};

export default MissionSection;
