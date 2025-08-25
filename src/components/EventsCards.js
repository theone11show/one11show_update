import React from "react";

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
  return (
    <section className="py-12 px-6 bg-[#1c0000]">
      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="min-w-[280px] md:min-w-[320px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-64 object-cover rounded-[20px]"
            />

            {/* Info Section */}
            <div className="bg-[#281316] p-5">
              <h3 className="text-xl text-white uppercase mb-3 tracking-wide">
                {event.title}
              </h3>
              <div className="flex flex-col gap-1 text-white text-sm font-light">
                <a
                  href={event.linkInfo}
                  className="hover:text-white hover:underline transition"
                >
                  Info &gt;
                </a>
                <a
                  href={event.linkTickets}
                  className="hover:text-white hover:underline transition"
                >
                  Tickets &gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
