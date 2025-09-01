import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
  { id: 1, title: "DJ TASIA", img: "dj.webp", linkInfo: "/day1-events", linkTickets: "" },
  { id: 2, title: "SAIRAM IYER", img: "SaiRam.webp", linkInfo: "/day1-events", linkTickets: "" },
   { id:3, title: "RJ PRAVEEN", img: "rj.webp", linkInfo: "/day1-events", linkTickets: "" },
  { id: 4, title: "FAKIRA", img: "FakiraImage.webp", linkInfo: "/day2-events", linkTickets: "" },
  { id: 5, title: "CACTUSS", img: "CactusImage.webp", linkInfo: "/day2-events", linkTickets: "" },
  
  
 
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
    <section
      className="py-12 px-6 relative"
      
    >
      {/* Overlay for better text & content contrast */}
      <div className="absolute inset-0 "></div>

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
        className="flex gap-8 overflow-x-auto scrollbar-hide max-w-[960px] mx-auto px-4 scroll-smooth justify-start relative z-10"
      >
        
       {events.map((event, index) => (
  <div
    key={event.id}
    className="min-w-[280px] h-[360px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-[#281316]/80"
  >
    {/* Event Image */}
    <div className="h-2/3">
      {(index < 3 && event.linkInfo) ? (
        <a href={event.linkInfo}>
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </a>
      ) : (
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>

    {/* Info Section */}
    <div className="px-4 pt-4 pb-8 md:p-4 h-1/3 flex flex-col justify-between">
      <h3 className="text-[21px] text-white uppercase mb-2 tracking-wide font-[Montserrat] font-bold">
    <a
      href={event.linkInfo}
      className="hover:underline hover:text-white transition"
    >
      {event.title}
    </a>
  </h3>
       
      <div className="flex flex-col gap-1 text-white">
        <a
          href={event.linkInfo}
          className="hover:text-white hover:underline transition text-[14px] font-[Montserrat]"
        >
          Info &gt;
        </a>
        <a
          href={event.linkTickets}
          className="hover:text-white hover:underline transition text-[14px] font-[Montserrat]"
        >
          Tickets &gt;
        </a>
      </div>
    </div>
  </div>
))}
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
