import React from "react";
import EventHeading from "./EventHeading";
import EventsCards from "./EventsCards";

const UpcomingArtists = () => {
  return (
    <section className="bg-gradient-to-r from-[#C90D16] to-[#1c0000] text-white px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading Section */}
        <EventHeading />

        {/* Events Cards */}
        <EventsCards />
      </div>
    </section>
  );
};

export default UpcomingArtists;
