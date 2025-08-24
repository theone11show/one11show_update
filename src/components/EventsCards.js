import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "FAKIRA",
    img: "FakiraImage.webp",
    linkInfo: "/event/1/info",
    linkTickets: "/event/1/tickets",
  },
  {
    id: 2,
    title: "CACTUS",
    img: "CactusImage.webp",
    linkInfo: "/event/2/info",
    linkTickets: "/event/2/tickets",
  },
  {
    id: 3,
    title: "DJ TASIA",
    img: "dj-tasia.webp",
    linkInfo: "/event/3/info",
    linkTickets: "/event/3/tickets",
  },
  {
    id: 4,
    title: "SAIRAM NIL",
    img: "sairam-nil.webp",
    linkInfo: "/event/4/info",
    linkTickets: "/event/4/tickets",
  },
  {
    id: 5,
    title: "RJ PRAVEEN",
    img: "rj-praveen.webp",
    linkInfo: "/event/5/info",
    linkTickets: "/event/5/tickets",
  },
];

const EventsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleEvents = showMore ? events : events.slice(0, 3);

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#7a0000] to-[#1c0000]">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Events</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Event Image (80% Height) */}
            <div className="h-[80%]">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="h-[20%] bg-gradient-to-b from-[#111] to-black p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-white uppercase mb-1">
                {event.title}
              </h3>
              <div className="text-sm text-gray-300 space-y-1">
                <a href={event.linkInfo} className="hover:text-[#d0021a] transition">
                  Info &gt;
                </a>
                <a href={event.linkTickets} className="hover:text-[#d0021a] transition">
                  Tickets &gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 text-lg font-semibold text-white hover:text-gray-300 transition"
        >
          {showMore ? (
            <>
              Show Less <FaChevronUp size={18} />
            </>
          ) : (
            <>
              Show More <FaChevronDown size={18} />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default EventsSection;
