import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const wrapperRef = useRef(null);

  // Inline scroll-reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 }
    );

    wrapperRef.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full flex items-center justify-center"
    >
      <div
        className="w-full h-full 
          min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] 
          bg-white/10 backdrop-blur-md text-[#E2E2E2] 
          rounded-2xl border border-white/20 shadow-md 
          hover:shadow-lg transition-shadow duration-300 flex flex-col"
      >
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            background: "linear-gradient(135deg, #ff6b6b, #c92a2a)",
          }}
          className="p-6 sm:p-8 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            About Us
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg opacity-90">
            Where Talent Meets Opportunity
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 leading-relaxed text-sm sm:text-base md:text-lg flex-1">
          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a]">
              About The One11 Show
            </span>
            <br />
            The One11 Show is an artist’s launchpad dedicated to discovering,
            mentoring, and launching authentic musical and artistic talent.
            Powered by The Chordifiers Studio, we unite passionate artists and
            skilled industry professionals committed to nurturing raw talent.
          </p>

          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            Through vibrant music battles, live sessions, and engaging podcasts,
            we provide artists with the structure, mentorship, and opportunities
            they need to shine. We celebrate and uplift the vibrant creative
            community around the world.
          </p>

          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a]"
          >
            Join us to find your stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
