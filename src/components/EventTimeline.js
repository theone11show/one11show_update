import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaRegCalendarAlt, FaStar, FaTicketAlt } from "react-icons/fa";

const days = [
  {
    day: "Day 1",
    date: "20 September 2025",
    details: "",
    highlights: `📅 DATE: 20 September 2025  
📍 Location:  

Go beyond performances, offering audiences and artists an experience that combines culture, creativity, and celebration:  

- **Food to your palate**  
  Taste carefully crafted dishes that bring variety and flavor to the event.  

- **Interactive Music Scenes**  
  Participate in live music and engaging activities.  

- **Dedication**  
  Share music with loved ones by dedicating songs and flowers.  

- **Retro Rewind**  
  Relive an era where sound and sight carried pure meaning.  

### Music Battle Semi-Finals  
Semi-finalists from across India—bands, rappers, musicians.  

### The Biggest Artist Meetup  
The first day features the biggest artist meetup in North Bengal.  

### DJ Night  
Electrifying DJ Night to end the day with international DJs and dynamic beats.
    `,
    ticketUrl: "https://bookmyshow.com/day1-ticket"
  },
  {
    day: "Day 2",
    date: "21 September 2025",
    details: "",
    highlights: `
📅 DATE: 21 September 2025  

### Puja-Themed Cultural Performance  
Day 2 brings a touch of tradition and celebration through a specially curated cultural theme, setting the mood for Durga Puja and offering a head start for the puja festival.  

### Live Performance: Fakira x Cactus  
**Fakira** and **Cactus** take the stage together for a powerful live performance.  
With their signature sounds and crowd-favorite tracks, the bands promise an evening filled with energy, nostalgia, and unforgettable music.
  `,
    ticketUrl: "https://bookmyshow.com/day2-ticket"
  },
  {
    day: "Day 3",
    date: "14 Aug 2025",
    details: "Grand finale with closing speech and gala dinner.",
    highlights: "Award ceremony, gala dinner, and closing party.",
    ticketUrl: "https://bookmyshow.com/day3-ticket"
  }
];

export default function Timeline() {
  const [selected, setSelected] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ width: "100%" });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto rounded-2xl shadow-md my-20">
      <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight text-white">
        Music Battle Series
      </h1>
      <h2 className="text-xl font-semibold mb-12 text-center tracking-tight text-gray-300">
        Season 1
      </h2>

      {/* Timeline container */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
        {/* Progress Line */}
        <div
          className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-700"
          ref={ref}
        >
          <motion.div
            className="h-1 bg-[#f81a26] shadow-[0_0_15px_rgba(248,26,38,0.8)]"
            initial={{ width: "0%" }}
            animate={controls}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {days.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative pt-6 md:pt-0"
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex group relative flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-10 h-10 font-bold flex items-center justify-center rounded-full z-10 cursor-pointer border-2 border-gray-900 ${
                  index === 0
                    ? "bg-[#f81a26] text-white shadow-[0_0_20px_rgba(248,26,38,0.9)]"
                    : "bg-[#2563eb] text-white shadow-[0_0_20px_rgba(37,99,235,0.9)]"
                }`}
                onClick={() =>
                  setSelected(
                    selected === `details-${index}` ? null : `details-${index}`
                  )
                }
              >
                {index + 1}
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-14 bg-gray-100 text-gray-900 text-xs rounded-md px-3 py-1 shadow-lg whitespace-nowrap pointer-events-none border border-gray-300"
              >
                {item.day}
              </motion.div>
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mt-4 bg-[#1f1f2e] rounded-2xl p-6 w-full text-center border border-gray-700 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2 text-white">
                <FaRegCalendarAlt /> {item.day}
              </h2>
              <p className="text-sm text-gray-400 mb-6 font-medium">
                {item.date}
              </p>

              <div className="flex flex-col gap-3">
                <button
                  className="px-3 py-1.5 rounded-lg bg-[#374151] text-white hover:bg-[#4b5563] transition text-sm font-medium"
                  onClick={() =>
                    setSelected(
                      selected === `details-${index}`
                        ? null
                        : `details-${index}`
                    )
                  }
                >
                  Details
                </button>

                <button
                  className="px-3 py-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d] transition text-sm font-medium"
                  onClick={() =>
                    setSelected(
                      selected === `highlights-${index}`
                        ? null
                        : `highlights-${index}`
                    )
                  }
                >
                  Highlights
                </button>

                <button
                  className="px-3 py-1.5 rounded-lg bg-[#f81a26] text-white flex items-center gap-2 justify-center hover:bg-[#e11d2d] transition text-sm font-semibold shadow-[0_0_12px_rgba(248,26,38,0.8)]"
                  onClick={() => window.open(item.ticketUrl, "_blank")}
                >
                  <FaTicketAlt /> Tickets
                </button>
              </div>

              {/* Expandable Content */}
              {selected === `details-${index}` && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-gray-800 p-4 rounded-lg text-sm text-gray-200 shadow-inner text-left"
                >
                  {item.details}
                </motion.div>
              )}

              {selected === `highlights-${index}` && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-gray-800 p-4 rounded-lg text-sm text-gray-200 flex gap-2 items-start shadow-inner text-left"
                >
                  <FaStar className="text-green-400 mt-0.5" /> {item.highlights}
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
