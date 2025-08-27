import React from 'react'
import ContdownSection from "./CountdownSection";
import EventsCards from "./EventsCards";
import EventHeading from "./EventHeading";

const CardsSection = () => {
  return (
    <div>
      <section
  className="relative w-full bg-cover bg-center"
  style={{ backgroundImage: "url('/BackgroundSection.png')" }}
>
  <CountdownSection/>
  <EventsCards/>
  <EventHeading/>

</section>
    </div>
  )
}

export default CardsSection
