import React from "react";

const EventSchedule = () => {
  const events = [
    {
      date: "20",
      month: "sept",
      title: "Music Battle series S1 & Dj night with Dj Tasia",
      day: "Day 1",
      link: "/day1-events",
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
                <span
                  className="font-bold"
                  style={{
                    fontSize: "clamp(40px, 8vw, 54px)", // bigger on mobile
                    color: "#e4e2dd",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {event.date}
                </span>
                <span
                  style={{
                    fontSize: "clamp(20px, 5vw, 24px)", // bigger on mobile
                    color: "#e4e2dd",
                    fontFamily: "'Montserrat', sans-serif",
                    marginLeft: "6px",
                  }}
                >
                  {event.month}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-baseline gap-2 min-w-0">
              <span
                className="italic font-bold shrink-0"
                style={{
                  fontSize: "clamp(20px, 5vw, 28px)", // bigger on mobile
                  color: "#e4e2dd",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {event.day}
              </span>
              <span
                className="break-words"
                style={{
                  fontSize: "clamp(18px, 5vw, 26px)", // bigger on mobile
                  color: "#e4e2dd",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {event.title}
              </span>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-end">
  <button
    className="flex items-center justify-center border rounded-full px-6 py-3 font-semibold opacity-50 cursor-not-allowed font-[Poppins] whitespace-nowrap"
    style={{
      fontSize: "clamp(14px, 4vw, 18px)", // bigger on mobile, capped for desktop
      borderColor: "#fff",
      color: "white",
      minWidth: "140px", // ensures enough space for the text
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
