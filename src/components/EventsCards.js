import React, { useRef, useState, useEffect } from "react";

const events = [
  { id: 1, title: "DJ TASIA", img: "dj.webp", linkInfo: "/day1-events", tickets: false },
  { id: 2, title: "SAIRAM IYER", img: "SaiRam.webp", linkInfo: "/day1-events", tickets: false },
  { id: 3, title: "RJ PRAVEEN", img: "rj.webp", linkInfo: "/day1-events", tickets: false },
  { id: 4, title: "FAKIRA", img: "FakiraImage.webp", linkInfo: "/day2-events", tickets: false },
  { id: 5, title: "CACTUSS", img: "CactusImage.webp", linkInfo: "/day2-events", tickets: false },
];

const ticketLinks = {
  district: "https://www.district.in/events/the-one11-show-sep20-2025-buy-tickets#",
  bookmyshow: "https://in.bookmyshow.com/events/the-one11-show/ET00460471?webview=true",
};

const EventsSection = () => {
  const scrollRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-wrapper")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-12 px-6 relative">
      {/* Navigation Controls */}
      <div className="flex justify-end items-center gap-6 mb-8 pr-8">
        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="flex items-center gap-2 text-white text-xl font-bold font-[Montserrat] uppercase tracking-wide transition transform hover:scale-110 hover:text-gray-300"
        >
          <span className="text-2xl">←</span>
          <span>Prev</span>
        </button>
        <span className="text-white text-2xl">|</span>
        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          className="flex items-center gap-2 text-white text-xl font-bold font-[Montserrat] uppercase tracking-wide transition transform hover:scale-110 hover:text-gray-300"
        >
          <span>Next</span>
          <span className="text-2xl">→</span>
        </button>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide max-w-[960px] mx-auto px-4 scroll-smooth justify-start relative z-10"
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className="min-w-[280px] h-[360px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-[#281316]/80 will-change-transform relative"
          >
            {/* Event Image */}
            <div className="h-2/3 overflow-hidden rounded-t-xl">
              {event.linkInfo ? (
                <a href={event.linkInfo}>
                  <img
                    src={event.img}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Info Section */}
            <div className="px-4 pt-4 pb-6 md:p-4 h-1/3 flex flex-col justify-between relative">
              <h3 className="text-[21px] text-white uppercase mb-2 tracking-wide font-[Montserrat] font-bold">
                <a
                  href={event.linkInfo}
                  className="hover:underline hover:text-white transition"
                >
                  {event.title}
                </a>
              </h3>

              <div className="flex flex-col gap-2 text-white">
                <a
                  href={event.linkInfo}
                  className="hover:text-white hover:underline transition text-[14px] font-[Montserrat]"
                >
                  Info &gt;
                </a>

                {/* Dropdown for Tickets */}
                {event.tickets ? (
                  <div className="dropdown-wrapper relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="text-[14px] font-[Montserrat] hover:underline transition"
                    >
                      Tickets &gt;
                    </button>

                    {openDropdown === index && (
                      <div className="absolute left-0 mt-2 w-40 border border-white rounded-lg shadow-lg z-50 bg-black/90">
                        <a
                          href={ticketLinks.district}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-center font-semibold font-[Poppins] text-white hover:bg-white hover:text-black"
                        >
                          District
                        </a>
                        <a
                          href={ticketLinks.bookmyshow}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-center font-semibold font-[Poppins] text-white hover:bg-white hover:text-black"
                        >
                          BookMyShow
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-[14px] font-[Montserrat] opacity-50">
                    Tickets Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
