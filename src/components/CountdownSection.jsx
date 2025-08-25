import CountdownTimer from "./CountdownTimer";
import AboutSection from "./DescriptionSection";
import EventBanner from "./EventBanner";
import MissionSection from "./MissionSection";

const CountdownPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* 2x2 Grid with wider right-side cards and equal heights */}
        <div 
          className="grid grid-rows-2 grid-cols-12 w-full h-[90vh]" 
          style={{ gap: "0" }} // No gap
        >
          {/* Top Left - Countdown Timer */}
          <div className="col-span-5 row-span-1 h-full">
            <CountdownTimer />
          </div>

          {/* Top Right - About Section */}
          <div className="col-span-7 row-span-1 h-full">
            <AboutSection />
          </div>

          {/* Bottom Left - Event Banner */}
          <div className="col-span-5 row-span-1 h-full">
            <EventBanner />
          </div>

          {/* Bottom Right - Mission Section */}
          <div className="col-span-7 row-span-1 h-full">
            <MissionSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownPage;
