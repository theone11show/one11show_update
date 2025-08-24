import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const events = [
  { id: 1, title: "Band One", img: "FakiraImage.webp", link: "/event/1" },
  { id: 2, title: "Band Two", img: "CactusImage.webp", link: "/event/2" },
  { id: 3, title: "Coming Soon", img: "FakiraImage.webp", link: "/event/3" },
  { id: 4, title: "Band Four", img: "sairam-nil.webp", link: "/event/4" }, 
  { id: 5, title: "Band Five", img: "rj-praveen.webp", link: "/event/5" }    
];

const EventsSection = () => {
  const [showMore, setShowMore] = useState(false);

  // Show only first 3, then reveal all on click
  const visibleEvents = showMore ? events : events.slice(0, 3);

  return (
    <section className="py-12 px-6 text-white bg-[#1c1c1e]">
      <h2 className="text-3xl font-bold text-center mb-10">Events</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Image covers full card width (edge-to-edge) */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-60 object-cover block"
            />

            {/* Card Footer */}
            <div className="p-4 flex justify-between items-center bg-black">
              <a
                href={event.link}
                className="text-white font-bold hover:underline"
              >
                Info &gt;
              </a>
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
