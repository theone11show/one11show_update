import React from 'react'
import CountdownSection from "./CountdownSection";
import EventHeading from "./EventHeading";
import EventsCards from "./EventsCards";

const CardsSection = () => {
  return (
    <div>
      <section
  className="relative w-full bg-cover bg-center"
  style={{ backgroundImage: "url('/BackgroundSection.png')" }}
>
  <CountdownSection />
  <EventHeading />
   <EventsCards/>
</section>
    </div>
  )
}

export default CardsSection
