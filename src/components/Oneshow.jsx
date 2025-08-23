import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "./styles.css";
import Layout from "./Animations/Layout";
import AboutSection from "./AboutSection"; 
import AboutUs from "./AboutUs";
import CountdownPage from "./CountdownSection";
import MusicBattle from "./MusicBattle";
import EventHeading from "./EventHeading";
import EventsSection from "./EventsCards"
const Oneshow = () => {
  const location = useLocation();

  // Handle auto-scroll from navigation
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

  // Handle parallax side images
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const leftImage = document.querySelector(".side-image.left");
      const rightImage = document.querySelector(".side-image.right");
      if (leftImage)
        leftImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
      if (rightImage)
        rightImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div style={{ position:"relative" }}> >
        <AboutSection />
    
  <div style={{ postion: "absolute",top: "50px", left: 0, right: 0, zIndex: 20 }}>
  <CountdownPage />
</div>
      
         {/*Heading*/}
         <EventHeading/>
         {/*Events Cars*/}
         <EventsSection/>
         {/*Music Battle*/}
         <MusicBattle/>

       
      </div>
    </Layout>
  );
};

export default Oneshow;
