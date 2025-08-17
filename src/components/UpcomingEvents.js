import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpComming from "../assets/UpComming.png";
import Cactus from "../assests/CACTUS.jpg";


export default function UpcomingEvent() {
  const navigate = useNavigate();
  const [joined, setJoined] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
  }, []);

  const handleJoinClick = (e) => {
    // Ripple effect
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
    ripple.style.top = `${e.clientY - e.target.getBoundingClientRect().top}px`;
    e.target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // Change button state & navigate
    setJoined(true);
    navigate("/join");
  };

  const handleImageClick = () => {
    navigate("/join");
  };

  return (
    <div
      ref={cardRef}
      className={`flex justify-center px-4 py-10 bg-gray-900 text-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className="flex flex-col items-center w-full max-w-4xl bg-[#1f1f1f] rounded-xl shadow-lg overflow-hidden  
                   transition-all duration-300 hover:shadow-[0_0_25px_4px_rgba(0,255,255,0.5)] hover:scale-[1.02] cursor-pointer"
      >
        {/* Event Image */}
        <img
          src={Cactus}
          alt="Upcoming Event"
          onClick={handleImageClick}
          className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 "
        />

        {/* Subtitle with white color & font-anton */}
        <p
          className="mt-4 px-4 text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-bold tracking-wide"
          style={{
            color: "white",
            fontFamily: "var(--font-anton)",
          }}
        >
          Get ready for an electrifying battle of music! Be part of the ultimate showdown at The One11 Show.
        </p>

        {/* Button with ripple effect */}
        <button
          onClick={handleJoinClick}
          className={`mt-6 mb-6 px-6 py-3 rounded-full text-sm sm:text-base md:text-lg shadow-md transition-all relative overflow-hidden
            ${
              joined
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-cyan-300 hover:bg-cyan-200 text-black"
            }`}
        >
          {joined ? "Joined" : "Join the Waitlist"}
        </button>
      </div>

      {/* Ripple Effect Styles */}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background: rgba(255, 255, 255, 0.7);
          width: 100px;
          height: 100px;
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
