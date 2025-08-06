import React, { useEffect } from "react";
import "./styles.css";
import Layout from "./Animations/Layout";
import AboutSection from "./AboutSection";
import SubmissionBanner from "./SubmissionBanner";
import CategoryHeading from "./CategoryHeading";
import CategoryDescriptions from "./CategoryDescriptions";
import RoadmapSection from "./RoadmapSection";
import UpdatesSection from "./UpdatesSection";
import CompetitionCards from "./CompetitionCards";

const Oneshow = () => {
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
        {/* Side Images */}
        <div className="side-images">
          <img
            src="gallery1.jpg"
            alt="Left Visual"
            className="side-image left"
          />
          <img
            src="gallery1.jpg"
            alt="Right Visual"
            className="side-image right"
          />
        </div>

        {/* Hero Section */}
        {/* <section className="hero">
        <p>AN ARTIST LAUNCHPAD</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header"
          className="bn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </section> */}

        <AboutSection />
        <SubmissionBanner />
        <CategoryHeading />
        <CategoryDescriptions />
        <RoadmapSection />
        <UpdatesSection />
        <CompetitionCards />
      </div>
    </Layout>
  );
};

export default Oneshow;
