import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "./styles.css";
import Layout from "./Animations/Layout";
import AboutSection from "./AboutSection" ;
import CountdownPage from "./CountdownSection"; 
import EventHeading from "./EventHeading";
import EventsSection from "./EventsCards";
import MusicBattle from "./MusicBattle";
import NewsLetter from "./NewsLetter";
const Oneshow = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToUpdates) {
      setTimeout(() => {
        scroller.scrollTo("updates-section", {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 200);
    }

    if (location.state?.scrollToUpcoming) {
      setTimeout(() => {
        scroller.scrollTo("upcomingevent-section", {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 200);
    }
  }, [location]);

  return (
    <Layout>
      <div className="relative w-full">
  <AboutSection />
  <div className="absolute inset-0 flex justify-center items-center">
    <CountdownPage />
  </div>
</div>

</div>


        {/* EventHeading (Countdown overlaps top area of this) */}
        <EventHeading />

        <EventsSection />
        <MusicBattle />
        <NewsLetter/>
      </div>
    </Layout>
  );
};

export default Oneshow;
