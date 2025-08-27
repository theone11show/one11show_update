import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
  { id: 1, title: "FAKIRA", img: "FakiraImage.webp", linkInfo: "/event/1/info", linkTickets: "/event/1/tickets" },
  { id: 2, title: "CACTUS", img: "CactusImage.webp", linkInfo: "/event/2/info", linkTickets: "/event/2/tickets" },
  { id: 3, title: "DJ TASIA", img: "dj.webp", linkInfo: "/event/3/info", linkTickets: "/event/3/tickets" },
  { id: 4, title: "SAIRAM NIL", img: "sairam-nil.webp", linkInfo: "/event/4/info", linkTickets: "/event/4/tickets" },
  { id: 5, title: "RJ PRAVEEN", img: "rj-praveen.webp", linkInfo: "/event/5/info", linkTickets: "/event/5/tickets" },
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
      const cardWidth = 320; // Card width (300px) + gap (~20px)
      const scrollAmount = cardWidth;
      scrollRef.current.scrollTo({
        left: direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el && el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="py-12 px-6 bg-[#1c0000] relative">
      {/* Left Button */}
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
  className="flex gap-8 overflow-x-auto scrollbar-hide max-w-[960px] mx-auto px-4 scroll-smooth justify-start"
>
  {events.map((event) => (
    <div
      key={event.id}
      className="min-w-[280px] h-[360px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
    >
      {/* Event Image */}
      <div className="h-2/3">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover rounded-lg" // smaller radius
        />
      </div>

      {/* Info Section */}
      <div className="bg-[#281316] px-4 pt-4 pb-8 md:p-4 h-1/3 flex flex-col justify-between">
        <h3 className="text-[21px] text-white uppercase mb-2 tracking-wide font-montserrat">
          {event.title}
        </h3>
        <div className="flex flex-col gap-1 text-white">
          <a href={event.linkInfo} className="hover:text-white hover:underline transition text-[14px] font-sackers">
            Info &gt;
          </a>
          <a href={event.linkTickets} className="hover:text-white hover:underline transition text-[14px] font-sackers">
            Tickets &gt;
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Right Button */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition z-10"
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Hide Scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
