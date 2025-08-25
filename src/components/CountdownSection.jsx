import CountdownTimer from "./CountdownTimer";
import AboutSection from "./DescriptionSection";
import EventBanner from "./EventBanner";
import MissionSection from "./MissionSection";

const CountdownPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* 2x2 Grid with equal row heights */}
        <div className="grid grid-rows-2 grid-cols-12 w-full h-[90vh] gap-0">
          
          {/* Top Left - Countdown Timer */}
          <div className="col-span-5 row-span-1 h-full">
            <div className="h-full">
              <CountdownTimer />
            </div>
          </div>

          {/* Top Right - About Section */}
          <div className="col-span-7 row-span-1 h-full">
            <div className="h-full">
              <AboutSection />
            </div>
          </div>

          {/* Bottom Left - Event Banner */}
          <div className="col-span-5 row-span-1 h-full">
            <div className="h-full">
              <EventBanner />
            </div>
          </div>

          {/* Bottom Right - Mission Section */}
          <div className="col-span-7 row-span-1 h-full">
            <div className="h-full">
              <MissionSection />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CountdownPage;
