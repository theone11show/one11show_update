import React from "react";

const MissionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 text-center p-10">
      <div className="max-w-3xl"> 
        <p className="mb-6 text-small text-gray-700 leading-relaxed">
          We are a unified group of industry music professionals,
          <br /> {/* forced line break after this sentence */}
          including producers, directors, artists, performers, and
          experienced event managers. Our shared mission is to provide
          an unbiased platform for raw <br/> talents.
        </p>
      </div>
      <button
  className="px-6 py-2 rounded-full font-semibold transition"
  style={{ backgroundColor: "#fecd98", color: "black" }}
>
  Connect
</button>
    </div>
  );
};

export default MissionSection;
