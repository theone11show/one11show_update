"use client";
import React, { useEffect, useRef } from "react";
import updateImage from "../assets/UpdateImage.png";
import img1 from "../assets/60hrmc.webp";
import img2 from "../assets/60HRCHALLENGE1.webp";
import img3 from "../assets/Round1.webp";
import img4 from "../assets/round2.webp";

const updates = [
  { date: "Aug, 2025", title: "60 Hours Music Making Challenge", description: "Push your creativity further", image: img1 },
  { date: "Aug, 2025", title: "Round 1B", description: "Online round for new participants", image: img2 },
  { date: "July, 2025", title: "60 Hours Music Making Challenge", description: "Intense creative competition", image: img3 },
  { date: "June, 2025", title: "Round 1A", description: "Online round for new participants", image: img4 },
];

const LatestUpdates = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.15 }
    );
    wrapperRef.current?.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-[#1c1c1e] pt-[120px] pb-16 px-2 sm:px-6 font-[Antonio] flex justify-center">
      <div ref={wrapperRef} className="w-full max-w-6xl text-white p-4 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-[Anton] text-center mb-12">Latest Updates</h2>

        <div className="flex justify-center mb-14">
          <img src={updateImage} alt="Announcements" className="w-full max-w-md h-[180px] object-cover rounded-lg" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center beam */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-cyan-400 shadow-[0_0_22px_3px_rgba(0,255,255,0.6)]"></div>

          <div className="space-y-10 sm:space-y-14 md:space-y-16">
            {updates.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateY(40px)",
                    transition: `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`,
                  }}
                  className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* DOT + Connector */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="relative w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_6px_rgba(0,255,255,0.8)]">
                      {/* Horizontal connector */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-cyan-300 shadow-[0_0_6px_2px_rgba(0,255,255,0.6)] 
                        ${isLeft ? "right-full" : "left-full"} w-[20vw] sm:w-24 md:w-32`}
                      />
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className={`w-[80vw] sm:w-[300px] md:w-[360px] bg-[#3a3a3c] p-4 sm:p-6 rounded-lg border border-[#565656]
                    ${isLeft ? "mr-[20vw] sm:mr-28 md:mr-40 text-right" : "ml-[20vw] sm:ml-28 md:ml-40 text-left"}
                    cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]`}
                  >
                    {/* Image with hover zoom */}
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[140px] sm:h-[160px] object-cover rounded-md transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 mt-3">{item.date}</p>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 sm:mt-2">{item.title}</h4>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">{item.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
