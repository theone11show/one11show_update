import React from "react";
import CountdownSection from "./CountdownSection";
import EventHeading from "./EventHeading";
import EventsCards from "./EventsCards";
import MusicBattle from "./MusicBattle";

const UpcommingArtists = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Background.png')", // <-- your public folder image
      }}
    >
      {/* Add top spacing so countdown is not stuck at top */}
      <div>
         <div className="pt-10 sm:pt-24 md:pt-10 lg:pt-40">
    <CountdownSection />
  </div>
        <EventHeading />
        <EventsCards />
        <MusicBattle />
      </div>
    </div>
  );
};

export default UpcommingArtists;
