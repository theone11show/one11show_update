import React from "react";
import DayHeader from "../components/Day1Header";
import GuestCard from "../components/GuestCard";
import ExclusivePresence from "../components/ExclusivePresence"

const Day1 = () => {
  return (
    <div className=" text-white min-h-screen flex items-center"
 style={{
    backgroundImage: "url('/Day1-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-5 md:px-2">
        {/* Left Side - Header */}
        <div className="flex flex-col">
          <DayHeader />
          <ExclusivePresence />
        </div>

        {/* Right Side - Guest Cards */}
        <div>
          <GuestCard />
        </div>
      </div>
    </div>
  );
};

export default Day1;
