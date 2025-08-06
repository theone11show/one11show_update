import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <>
      <section
        
        className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16"
      >
        <div className="hero-abstract-background">
          <div className="floating-orbs">
            <div className="orb"></div>
            <div className="orb"></div>
            <div className="orb"></div>
            <div className="orb"></div>
            <div className="orb"></div>
          </div>
        </div>

        <div className="relative z-10 p-4 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-fredoka-one)] text-cream-white leading-tight mb-4 drop-shadow-lg ">
            Where genres and language won't be your first thought.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-cream-white font-[var(--font-antonio)] mb-8 max-w-3xl mx-auto drop-shadow-md ">
            Join Us in this exciting Music Battle
          </p>
          <a href="#events" className="btn-primary text-xl sm:text-2xl ">
            Join Now
          </a>
        </div>
      </section>
    </>
    // <div className="about-container">
    //   <img
    //     src="/theone11.png"
    //     alt="The One11 Show"
    //     className="about-logo"
    //   />

    //   <p>
    //     Welcome! to The One11 Show, an artist launchpad where Talent meets opportunity. Powered by The Chordifiers Studio, this platform is designed to discover, guide, and spotlight emerging artists in music and the performing arts.
    //   </p>

    //   <p>
    //     Whether you're a member of a band, a singer-songwriter, an electrifying DJ, a skilled musician, or a rapper, we exist to fulfill your unfulfilled dreams.
    //   </p>

    //   <p>
    //     We aim to uplift the cultural landscape of India and the world by creating a unique platform for artists through mentorship, exposure, and experience.
    //   </p>

    //   <p>
    //     The One11 Show is not just any other show or music event. We are an umbrella of ‘HOPE’ in a field where there is too much uncertainty.
    //   </p>
    // </div>
  );
};

export default AboutSection;
