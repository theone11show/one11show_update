import React from "react";
import CountdownTimer from "./CountdownTimer";
import AboutSection from "./DescriptionSection";
import EventBanner from "./EventBanner";
import MissionSection from "./MissionSection";

const CountdownPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <CountdownTimer targetDate="2025-09-05T00:00:00" /> 
        <AboutSection />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <EventBanner />
        <MissionSection />
      </div>
    </div>
  );
};

export default CountdownPage;
