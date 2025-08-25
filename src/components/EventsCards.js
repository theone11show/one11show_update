import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth - 150;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <section className="py-12 px-6 bg-[#1c0000] relative">
      {/* Left Button (hide on small screens) */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition z-10"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide max-w-6xl mx-auto px-4 scroll-smooth justify-start md:justify-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="min-w-[220px] h-[300px] sm:min-w-[260px] sm:h-[340px] md:min-w-[300px] md:h-[380px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-2/3 object-cover rounded-[20px]"
            />

            {/* Info Section */}
            <div className="bg-[#281316] p-4 h-1/3 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl text-white uppercase mb-2 tracking-wide">
                {event.title}
              </h3>
              <div className="flex flex-col gap-1 text-white text-xs sm:text-sm font-light">
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

      {/* Right Button (hide on small screens) */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition z-10"
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Extra scrollbar hide for Chrome/Safari */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
