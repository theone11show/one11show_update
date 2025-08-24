import React from "react";
import CountdownTimer from "./CountdownTimer";
import AboutSection from "./DescriptionSection";
import EventBanner from "./EventBanner";
import MissionSection from "./MissionSection";

const CountdownPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <CountdownTimer targetDate="2025-09-05T00:00:00" />
          <AboutSection />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0">
          <EventBanner />
          <MissionSection />
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
