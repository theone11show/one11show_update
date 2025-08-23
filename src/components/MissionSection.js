import React from "react";

const MissionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 text-center p-10">
      <p className="mb-6 text-lg text-gray-700">
        We are a unified group of industry music professionals, including
        producers, directors, artists, performers, and experienced event
        managers.
        <br /><br />
        Our shared mission is to provide an unbiased platform for raw talents.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
        connect
      </button>
    </div>
  );
};

export default MissionSection;
