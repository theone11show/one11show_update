import React from "react";
import EventHeading from "./EventHeading";
import EventsSection from "./EventsSection";

const UpcomingArtists = () => {
  return (
    <section className="bg-gradient-to-r from-[#C90D16] to-[#1c0000] relative">
      {/* Heading Section */}
      <EventHeading />

      {/* Events Section */}
      <EventsSection />
    </section>
  );
};

export default UpcomingArtists;
