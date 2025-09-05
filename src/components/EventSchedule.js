import React from "react";
import { Link } from "react-router-dom"; // Import Link

const EventSchedule = () => {
  const events = [
    {
      date: "20",
      month: "sept",
      title: "Music Battle series S1 & Dj night with Dj Tasia",
      day: "Day 1",
      link: "/day1-events",
      tickets: "https://in.bookmyshow.com/events/the-one11-show/ET00460471?webview=true",
    },
    {
      date: "21",
      month: "sept",
      title: "Cactuss x Fakira & Cultural event",
      day: "Day 2",
      link: "/day2-events",
      tickets: "https://in.bookmyshow.com/events/the-one11-show/ET00460471?webview=true",
    },
    {
      date: "??",
      month: "",
      title: "Exclusive Event",
      day: "Day 3",
      link: "/day3-events",
      tickets: null, // No tickets for Day 3
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
            className="grid grid-cols-1 md:grid-cols-[110px_auto_160px] gap-6 items-center border-b border-white py-6 text-center md:text-left"
          >
            {/* Date Section */}
            <div className="flex items-center justify-center md:justify-center">
              <div className="flex items-center border-none md:border-r border-gray-300 pr-0 md:pr-4 lg:pr-5">
                <Link
                  to={event.link}
                  className="font-bold cursor-pointer text-[#e4e2dd] hover:text-[#FFD8B2]"
                  style={{
                    fontSize: "clamp(40px, 8vw, 54px)",
                   
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {event.date}
                </Link>
                <Link
                  to={event.link}
                  className="cursor-pointer text-[#e4e2dd] hover:text-[#FFD8B2]"
                  style={{
                    fontSize: "clamp(20px, 5vw, 24px)",
                   
                    fontFamily: "'Montserrat', sans-serif",
                    marginLeft: "6px",
                  }}
                >
                  {event.month}
                </Link>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-baseline gap-2 min-w-0">
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
                className="break-words cursor-pointer text-[#e4e2dd] hover:text-[#FFD8B2]"
                style={{
                  fontSize: "clamp(18px, 5vw, 26px)",
                
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {event.title}
              </Link>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-end">
              {event.tickets ? (
                <a
           href={event.tickets}
           target="_blank"
          rel="noopener noreferrer"
         className="flex items-center justify-center border rounded-full px-6 py-3 font-semibold font-[Poppins] whitespace-nowrap transition hover:bg-white hover:text-black hover:border-black active:bg-white active:text-black active:border-black"
         style={{
        fontSize: "clamp(14px, 4vw, 18px)",
         
         minWidth: "140px",
  }}
>
  BUY TICKETS
</a>
              ) : (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
