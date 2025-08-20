"use client";
import React, { useEffect, useRef } from "react";
import updateImage from "../assets/UpdateImage.png";

const updates = [
  {
    date: "June, 2025",
    title: "Round 1A",
    description: "Online round for new participants",
  },
  {
    date: "July, 2025",
    title: "60 Hr Challenge",
    description: "Intense creative competition",
  },
  {
    date: "Aug, 2025",
    title: "Round 1B",
    description: "Online round for new participants",
  },
  {
    date: "Aug, 2025",
    title: "60 Hr Challenge",
    description: "Push your creativity further",
  },
];

const LatestUpdates = () => {
  const wrapperRef = useRef(null);

  // Scroll reveal fade animation
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
    <section className="min-h-screen bg-[#1c1c1e] pt-[160px] pb-12 px-4 font-[Antonio] flex justify-center">
      <div
        ref={wrapperRef}
        className="w-full max-w-5xl bg-[#2c2c2e] text-white rounded-2xl p-10 
        transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_4px_rgba(0,255,255,0.4)]"
      >
        {/* Title */}
        <h2 className="text-4xl font-[Anton] text-center text-white mb-12">
          Latest Updates
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <img
            src={updateImage}
            alt="Announcements"
            className="w-[400px] h-[160px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center glowing line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-300 shadow-[0_0_20px_2px_rgba(0,255,255,0.5)]"></div>

          <div className="space-y-12">
            {updates.map((item, index) => (
              <div
                key={index}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`,
                }}
                className={`relative flex items-center w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline dot */}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_15px_5px_rgba(0,255,255,0.6)]"></span>

                {/* Card */}
                <div
                  className={`w-[280px] md:w-[320px] bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-md hover:shadow-[0_0_25px_#00ffff] transition 
                    ${index % 2 === 0 ? "mr-10 text-right" : "ml-10 text-left"}`}
                >
                  <p className="text-sm text-gray-300">{item.date}</p>
                  <h4 className="text-xl font-bold text-white mt-1">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-2 bg-cyan-300 text-black font-bold rounded-full text-sm shadow-lg hover:bg-cyan-200 transition">
            New Info!
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
