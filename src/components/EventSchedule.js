import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventSchedule = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const events = [
    {
      title: "Music Battle series S1 & Dj night with Dj Tasia",
      day: "Day 1",
      link: "/day1-events",
      tickets: false,
    },
    {
      title: "Cactuss x Fakira & Cultural event",
      day: "Day 2",
      link: "/day2-events",
      tickets: false,
    },
    {
      title: "Exclusive Event",
      day: "Day 3",
      link: "/day3-events",
      tickets: false,
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat text-white px-6 py-12"
      style={{
        backgroundImage: "url('/MusicBattle2.webp')",
        paddingBottom: "12rem",
      }}
    >
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-center md:text-left mb-12"
          style={{
            fontSize: "clamp(38px, 6vw, 68px)",
            color: "#e4e2dd",
            paddingTop: "5rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Event Schedules
        </h2>

        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center border-b border-white py-6 px-4 md:px-6"
          >
            {/* Event Details */}
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 text-center md:text-left">
              <Link
                to={event.link}
                className="italic font-bold shrink-0 cursor-pointer text-[#e4e2dd] hover:text-[#FFD8B2]"
                style={{
                  fontSize: "clamp(20px, 5vw, 28px)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {event.day}
              </Link>

              <Link
                to={event.link}
                className="break-words cursor-pointer text-[#ffff] hover:text-[#FFD8B2]"
                style={{
                  fontSize: "clamp(18px, 5vw, 26px)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {event.title}
              </Link>
            </div>

            {/* Button */}
            <div className="mt-4 md:mt-0">
              <button
                className="flex items-center justify-center border rounded-full px-6 py-3 font-semibold opacity-50 cursor-not-allowed font-[Poppins] whitespace-nowrap"
                style={{
                  fontSize: "clamp(14px, 4vw, 18px)",
                  borderColor: "#fff",
                  color: "white",
                  minWidth: "140px",
                }}
                disabled
              >
                COMING SOON
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
