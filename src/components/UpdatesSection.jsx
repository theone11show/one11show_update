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
    description: "",
  },
  {
    date: "Aug, 2025",
    title: "Round 1B",
    description: "Online round for new participants",
  },
  {
    date: "Aug, 2025",
    title: "60 Hr Challenge",
    description: "",
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
            entry.target.style.scale = 1;
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
    <div>
      <section className="min-h-screen bg-[#1c1c1e] pt-[180px] pb-12 px-4 font-[Antonio] flex items-start justify-center">
        <div
          ref={wrapperRef}
          className="w-full max-w-xl bg-[#2c2c2e] text-white rounded-xl p-6 
          transition-all duration-300 hover:shadow-[0_0_25px_4px_rgba(0,255,255,0.5)]"
        >
          {/* Title */}
          <h2 className="text-4xl font-[Anton] text-center text-white mb-8">
            Latest Updates
          </h2>

          <div className="flex flex-col items-center">
            {/* Image */}
            <img
              src={updateImage}
              alt="Announcements"
              className="w-[370px] h-[140px] object-cover rounded mb-6"
            />

            {/* Sub Heading */}
            <h3 className="text-xl text-red-500 font-bold uppercase tracking-wide text-center mb-8">
              Important Announcements
            </h3>

            {/* Timeline */}
            <div className="relative border-l-2 border-cyan-300 pl-6 space-y-8 w-full">
              {updates.map((item, index) => (
                <div
                  key={index}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateY(40px)",
                    scale: 0.8,
                    transition: `opacity 0.8s ease ${index * 0.2}s, 
                                transform 0.8s ease ${index * 0.2}s,
                                scale 0.6s ease ${index * 0.2 + 0.1}s`,
                  }}
                  className="relative"
                >
                  {/* Dot with cyan glow */}
                  <span
                    className="absolute -left-[10px] top-1 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(0,255,255,0.6)]"
                    style={{
                      transform: "scale(0.8)",
                      transition: `transform 0.5s ease ${index * 0.2 + 0.15}s`,
                    }}
                  ></span>

                  {/* Content */}
                  <div>
                    <p className="text-sm text-gray-300">{item.date}</p>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    {item.description && (
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-10 px-5 py-2 bg-cyan-300 text-black font-bold rounded-full text-sm shadow-lg hover:bg-cyan-200 transition">
              New Info!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestUpdates;
