import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "./styles.css";
import Layout from "./Animations/Layout";
import AboutSection from "./AboutSection"; 
import SubmissionBanner from "./SubmissionBanner";
import RoadmapSection from "./RoadmapSection";
import UpcomingEvents from "./UpcomingEvents";
import UpdatesSection from "./UpdatesSection";
import OurTeamComponents from "./OurTeamComponents";
import EventTimeline from "./EventTimeline";
import AboutUs from "./AboutUs";
import CountdownPage from "./CountdownSection";
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
      <div>
        <AboutSection />
    
  {/* About Us and Our Team Cards */}
<div className="bg-[#1c1c1e] px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
  <div className="flex flex-col lg:flex-row gap-6 items-stretch">
    {/* About Us (60%) */}
    <div className="lg:w-3/5 flex">
      <div className="w-full h-full">
        <AboutUs />
      </div>
    </div>

    {/* Our Team (40%) */}
    <div className="lg:w-2/5 flex">
      <div className="w-full h-full">
        <OurTeamComponents />
      </div>
    </div>
  </div>
</div>



        {/* Upcoming Events with scroll target */}
        <section id="upcomingevent-section" name="upcomingevent-section">
          <UpcomingEvents />
        </section>
        {/*Event Timelines*/}
         <CountdownPage/>

        {/* Updates with scroll target */}
        <section id="updates-section" name="updates-section">
          <UpdatesSection />
        </section>
      </div>
    </Layout>
  );
};

export default Oneshow;
