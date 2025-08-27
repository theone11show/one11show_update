import React from "react";
import EventHeading from "./EventHeading";
import EventsCards from "./EventsCards";
const UpcomingArtists = () => 
  { return 
    ( <section className="bg-gradient-to-r from-[#C90D16] to-[#1c0000]  relative"> 
{/* Heading Section */}
  <EventHeading /> 
{/* Events Cards */}
  <EventsCards />
  </section> ); 
    };
export default UpcomingArtists;
                               
