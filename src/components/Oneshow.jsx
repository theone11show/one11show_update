import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Layout from "./Animations/Layout";
import AboutSection from "./AboutSection";
import CountdownSection from "./CountdownSection";
import EventHeading from "./EventHeading";
import EventsCards from"./EventsCards";
import MusicBattle from "./MusicBattle";
import NewsLetter from "./NewsLetter";

const Oneshow = () => {
  const location = useLocation();

  // Auto-scroll
  useEffect(() => {
    if (location.state?.scrollToUpdates) {
      setTimeout(() => {
        scroller.scrollTo("updates-section", { smooth: true, duration: 500, offset: -70 });
      }, 200);
    }
    if (location.state?.scrollToUpcoming) {
      setTimeout(() => {
        scroller.scrollTo("upcomingevent-section", { smooth: true, duration: 500, offset: -70 });
      }, 200);
    }
  }, [location]);

  // Parallax side images
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const leftImage = document.querySelector(".side-image.left");
      const rightImage = document.querySelector(".side-image.right");
      if (leftImage) leftImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
      if (rightImage) rightImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Main Wrapper with hidden horizontal overflow */}
      <div className="w-full overflow-x-hidden">
        {/* Background Section */}
        <AboutSection />

        {/* Countdown Overlay → on top of AboutSection and EventHeading */}
        <div className="absolute w-full z-[10] -mt-32 sm:-mt-40 md:-mt-48">
          <div className="scroll-container">
            <CountdownSection />
          </div>
        </div>

        {/* Event Heading */}
        <EventHeading />
        <EventsCards/>
        <MusicBattle/>
        <NewsLetter/>

      </div>

      {/* Inline CSS for responsive scroll behavior */}
      <style>
        {`
          .scroll-container {
            display: flex;
            overflow-x: auto;
            gap: 20px;
            scroll-behavior: smooth;
          }
          /* Mobile: switch to vertical stacking */
          @media (max-width: 768px) {
            .scroll-container {
              flex-direction: column;
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Oneshow;
