import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaRegCalendarAlt, FaStar, FaTicketAlt, FaUtensils, FaMusic, FaHeart, FaHistory, FaUsers, FaHeadphones } from "react-icons/fa";

const days = [
  {
    day: "Day 1",
    date: "20 September 2025",
    details: "An exciting opening day with music, food, and performances.",
    highlights: [
      {
        icon: <FaUtensils className="text-yellow-400" />,
        title: "Food to your palate",
        description: "Taste carefully crafted dishes that bring variety and flavor to the event."
      },
      {
        icon: <FaMusic className="text-pink-400" />,
        title: "Interactive Music Scenes",
        description: "Participate in live music and engaging activities."
      },
      {
        icon: <FaHeart className="text-red-400" />,
        title: "Dedication",
        description: "Share music with loved ones by dedicating songs and flowers."
      },
      {
        icon: <FaHistory className="text-blue-400" />,
        title: "Retro Rewind",
        description: "Relive an era where sound and sight carried pure meaning."
      },
      {
        icon: <FaUsers className="text-green-400" />,
        title: "Biggest Artist Meetup",
        description: "The first day features the biggest artist meetup in North Bengal."
      },
      {
        icon: <FaHeadphones className="text-purple-400" />,
        title: "DJ Night",
        description: "Electrifying DJ Night to end the day with international DJs and dynamic beats."
      }
    ],
    ticketUrl: "https://bookmyshow.com/day1-ticket"
  },
  {
    day: "Day 2",
    date: "21 September 2025",
    details: "A day filled with cultural vibes and live concerts.",
    highlights: [
      {
        icon: <FaMusic className="text-pink-400" />,
        title: "Puja-Themed Cultural Performance",
        description: "A traditional and festive start to Durga Puja celebrations."
      },
      {
        icon: <FaUsers className="text-green-400" />,
        title: "Live Performance: Fakira x Cactus",
        description: "An electrifying show blending nostalgia with energy."
      }
    ],
    ticketUrl: "https://bookmyshow.com/day2-ticket"
  },
  {
    day: "Day 3",
    date: "14 Aug 2025",
    details: "Grand finale with closing speech and gala dinner.",
    highlights: [
      {
        icon: <FaStar className="text-yellow-400" />,
        title: "Award Ceremony",
        description: "Celebrating the best performances of the season."
      },
      {
        icon: <FaUtensils className="text-orange-400" />,
        title: "Gala Dinner",
        description: "A grand feast with an exclusive dining experience."
      }
    ],
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
                  className="mt-4 bg-gray-800 p-4 rounded-lg text-sm text-gray-200 shadow-inner text-left"
                >
                  <div className="grid gap-4">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {highlight.icon}
                        <div>
                          <p className="font-semibold text-white text-base">{highlight.title}</p>
                          <p className="text-gray-400 text-sm">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
