import React from "react";

const EventSchedule = () => {
  const events = [
    {
      date: "20",
      month: "sept",
      title: "Music Battle series S1 & Dj night with Dj Tasia",
      day: "Day 1",
    },
    {
      date: "21",
      month: "sept",
      title: "Cactuss x Fakira & Cultural event",
      day: "Day 2",
    },
    {
      date: "22",
      month: "sept",
      title: "Exclusive Event",
      day: "Day 3",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat text-white px-6 py-12"
      style={{
        backgroundImage: "url('/MusicBattle2.webp')",
      }}
    >
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          className="text-left mb-10"
          style={{
            fontSize: "clamp(32px, 6vw, 60px)", // responsive heading
            color: "#e4e2dd",
            paddingTop: "5rem",
          }}
        >
          Event Schedules
        </h2>

        {events.map((event, index) => (
          <div
            key={index}
            className="grid grid-cols-[100px_auto_150px] items-center border-b border-white py-4"
          >
            {/* Date Section */}
            <div className="flex items-center border-r border-gray-300 pr-4">
              <span
                className="font-bold"
                style={{
                  fontSize: "clamp(28px, 5vw, 40px)", // date responsive
                  color: "#e4e2dd",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {event.date}
              </span>
              <span
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)", // month responsive
                  color: "#e4e2dd",
                  fontFamily: "'Montserrat', sans-serif",
                  marginLeft: "4px",
                }}
              >
                {event.month}
              </span>
            </div>

            {/* Event Details */}
            <div className="pl-4 flex flex-wrap items-baseline gap-2 min-w-0">
              <span
                className="font-bold shrink-0"
                style={{
                  fontSize: "22px", // fixed for small screens
                  color: "#e4e2dd",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {event.day}
              </span>
              <span
                className="break-words"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 22px)", // responsive: 22px small, scales up
                  color: "#e4e2dd",
                }}
              >
                {event.title}
              </span>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                className="border rounded-full px-4 py-2 font-semibold opacity-50 hover:opacity-100 hover:bg-white hover:text-black transition"
                style={{
                  fontSize: "clamp(12px, 2vw, 14px)",
                  borderColor: "#fff",
                }}
              >
                BUY TICKETS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
