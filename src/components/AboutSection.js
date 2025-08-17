import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("events");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[1]"></div>

      {/* Floating Orbs */}
      <div className="hero-abstract-background relative z-[2]">
        <div className="floating-orbs">
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-[3] p-4 sm:p-8 md:p-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-fredoka-one)] text-cream-white leading-tight mb-4 drop-shadow-lg">
          Where genres and language won't be your first thought.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-cream-white font-[var(--font-antonio)] mb-8 max-w-3xl mx-auto drop-shadow-md">
          Join Us in this exciting Music Battle
        </p>

        {/* Smooth scroll button */}
        <Link
          to="/join"
          className="btn-primary text-xl sm:text-2xl inline-block"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
