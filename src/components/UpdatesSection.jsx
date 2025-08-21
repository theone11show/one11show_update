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
    <section className="min-h-screen bg-[#1c1c1e] pt-[120px] pb-16 px-4 font-[Antonio] flex justify-center">
      <div ref={wrapperRef} className="w-full max-w-5xl text-white p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-[Anton] text-center mb-12">Latest Updates</h2>

        <div className="flex justify-center mb-14">
          <img src={updateImage} alt="Announcements" className="w-full max-w-md h-[180px] object-cover rounded-lg" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center beam */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-cyan-400 shadow-[0_0_22px_3px_rgba(0,255,255,0.6)]"></div>

          <div className="space-y-20">
            {updates.map((item, i) => {
              const isLeft = i % 2 === 0; // md+ par left/right alternate
              return (
                <div
                  key={i}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateY(40px)",
                    transition: `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`,
                  }}
                  className={`relative flex w-full md:${isLeft ? "justify-start" : "justify-end"} justify-center`}
                >
                  {/* DOT perfectly centered + connector in correct direction */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  >
                    {/* the dot */}
                    <div className="relative w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_6px_rgba(0,255,255,0.8)]">
                      {/* horizontal line to card (desktop/tablet) */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-cyan-300 shadow-[0_0_6px_2px_rgba(0,255,255,0.6)] 
                        ${isLeft ? "right-full w-12" : "left-full w-12"}`}
                      />
                      {/* small vertical line under dot (mobile) */}
                      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-full w-[2px] h-8 bg-cyan-300 shadow-[0_0_6px_2px_rgba(0,255,255,0.5)]" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full max-w-sm md:w-[360px] bg-[#3a3a3c] p-6 rounded-lg border border-[#565656]
                    ${isLeft ? "md:mr-12 md:text-right" : "md:ml-12 md:text-left"} text-center md:text-inherit`}
                  >
                    <p className="text-xs sm:text-sm text-gray-300">{item.date}</p>
                    <h4 className="text-lg sm:text-xl font-bold text-white mt-2">{item.title}</h4>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">{item.description}</p>
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
