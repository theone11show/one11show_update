import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <img
        src="/theone11.png"
        alt="The One11 Show"
        className="about-logo"
      />

      <p>
        Welcome! to The One11 Show, an artist launchpad where Talent meets opportunity. Powered by The Chordifiers Studio, this platform is designed to discover, guide, and spotlight emerging artists in music and the performing arts.
      </p>

      <p>
        Whether you're a member of a band, a singer-songwriter, an electrifying DJ, a skilled musician, or a rapper, we exist to fulfill your unfulfilled dreams.
      </p>

      <p>
        We aim to uplift the cultural landscape of India and the world by creating a unique platform for artists through mentorship, exposure, and experience.
      </p>

      <p>
        The One11 Show is not just any other show or music event. We are an umbrella of ‘HOPE’ in a field where there is too much uncertainty.
      </p>
    </div>
  );
};

export default AboutSection;
