"use client";
import React, { useEffect, useRef } from "react";
import updateImage from "../assets/UpdateImage.png";

const updates = [
  { date: "Aug, 2025", title: "60 Hours Music Making Challenge", description: "Push your creativity further" },
  { date: "Aug, 2025", title: "Round 1B", description: "Online round for new participants" },
  { date: "July, 2025", title: "60 Hours Music Making Challenge", description: "Intense creative competition" },
  { date: "June, 2025", title: "Round 1A", description: "Online round for new participants" },
];

const LatestUpdates = () => {
  const wrapperRef = useRef(null);

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
    <section className="min-h-screen bg-[#1c1c1e] pt-[120px] pb-16 px-4 font-[Antonio] flex justify-center">
      <div ref={wrapperRef} className="w-full max-w-5xl text-white p-6 sm:p-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-[Anton] text-center mb-12">
          Latest Updates
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-14">
          <img
            src={updateImage}
            alt="Announcements"
            className="w-full max-w-md h-[180px] object-cover rounded-lg"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center beam */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-cyan-400 shadow-[0_0_20px_3px_rgba(0,255,255,0.6)]"></div>

          <div className="space-y-20">
            {updates.map((item, index) => (
              <div
                key={index}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`,
                }}
                className={`relative flex w-full 
                  md:${index % 2 === 0 ? "justify-start" : "justify-end"} 
                  justify-center`}
              >
                {/* Dot + Connector as ONE */}
                <div
                  className={`absolute top-1/2 flex items-center 
                    ${index % 2 === 0 ? "left-1/2" : "right-1/2 flex-row-reverse"}`}
                  style={{ transform: "translateY(-50%)" }}
                >
                  {/* Dot */}
                  <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_6px_rgba(0,255,255,0.8)]"></div>
                  {/* Line to card */}
                  <div className="h-[2px] bg-cyan-300 shadow-[0_0_6px_2px_rgba(0,255,255,0.6)] w-12 md:w-20"></div>
                </div>

                {/* Card */}
                <div
                  className={`w-full max-w-sm md:w-[320px] bg-[#3a3a3c] p-6 rounded-lg border border-[#555] 
                    md:${index % 2 === 0 ? "mr-12 text-right" : "ml-12 text-left"} 
                    text-center md:text-inherit`}
                >
                  <p className="text-xs sm:text-sm text-gray-300">{item.date}</p>
                  <h4 className="text-lg sm:text-xl font-bold text-white mt-2">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-400 mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
