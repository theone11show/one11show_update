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
      <div className="relative w-full overflow-x-hidden">  {/* ✅ Prevent sideways scroll */}
        {/* Hero Section */}
        <AboutSection />

        {/* Countdown Overlay */}
        <div className="absolute top-[29%] left-1/2 -translate-x-1/2 z-20 w-full max-w-5xl px-2 sm:px-4">
          <CountdownPage />
        </div>

        {/* Event Heading */}
        <EventHeading />

        <EventsSection />
        <MusicBattle />
        <NewsLetter />
      </div>
    </Layout>
  );
};
export default Oneshow;
