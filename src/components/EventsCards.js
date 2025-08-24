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
    img: "FakiraImage.webp",
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
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Events
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            className="relative bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-64 object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

            {/* Event Details */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-2 uppercase">{event.title}</h3>
              <div className="flex flex-col gap-1 text-sm">
                <a href={event.linkInfo} className="hover:underline">
                  Info &gt;
                </a>
                <a href={event.linkTickets} className="hover:underline">
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
