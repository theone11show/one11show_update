import React from "react";
import Logo from "../assets/logo.png"; // apne path ke hisaab se adjust karna

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16 pb-8">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-[3] p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-1">
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-contain bg-white/10 p-2"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream-white drop-shadow-lg mb-2">
          Season 1
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-cream-white font-[var(--font-antonio)] mb-4 max-w-2xl mx-auto drop-shadow-md">
          North Bengal's Biggest Music Festival Will Be Live Soon
        </p>

        {/* Line Below */}
        <p className="text-md sm:text-lg text-gray-200 drop-shadow">
          Join us for this exciting event
        </p>

        {/* Button Removed ✅ */}
      </div>
    </section>
  );
};

export default AboutSection;
