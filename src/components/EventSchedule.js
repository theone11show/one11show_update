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
        paddingBottom: "12rem",
      }}
    >
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-left mb-12"
          style={{
            fontSize: "clamp(38px, 6vw, 68px)", // bigger heading
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
            className="grid grid-cols-[110px_auto_160px] items-center border-b border-white py-6"
          >
            {/* Date Section */}
           {/* Date Section */}
<div className="flex items-center">
  <div className="flex items-center border-r border-gray-300 pr-3 md:pr-4 lg:pr-5">
    <span
      className="font-bold"
      style={{
        fontSize: "clamp(34px, 6vw, 54px)", // bigger date
        color: "#e4e2dd",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {event.date}
    </span>
    <span
      style={{
        fontSize: "clamp(20px, 3vw, 24px)", // bigger month
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
<div className="pl-4 sm:pl-6 md:pl-10 flex flex-wrap items-baseline gap-3 min-w-0">
  <span
    className="italic font-bold shrink-0"
    style={{
      fontSize: "clamp(24px, 3vw, 28px)", // bigger day
      color: "#e4e2dd",
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    {event.day}
  </span>
  <span
    className="break-words"
    style={{
      fontSize: "clamp(22px, 2.5vw, 28px)", // bigger title
      color: "#e4e2dd",
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    {event.title}
  </span>
</div>

{/* Button */}
<div className="flex justify-end mt-4 sm:mt-6 md:mt-0">
  <button
    className="border rounded-full px-6 py-3 font-semibold opacity-50 cursor-not-allowed font-[Poppins] whitespace-nowrap w-[160px] md:w-[180px] lg:w-[200px]"
    style={{
      fontSize: "clamp(12px, 2.2vw, 16px)",
      borderColor: "#fff",
      color: "white",
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
