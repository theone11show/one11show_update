import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { FaRegCalendarAlt, FaStar, FaTicketAlt } from "react-icons/fa";

const days = [
  {
day: "Day 1",
date: "12 Aug 2025",
details: "Opening ceremony with performances and keynote sessions.",
highlights: "Live music, celebrity guest appearance, and networking.",
ticketUrl: "https://bookmyshow.com/day1-ticket"
},
{
day: "Day 2",
date: "13 Aug 2025",
details: "Workshops, panel discussions, and interactive sessions.",
highlights: "Exclusive workshops with industry leaders.",
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
      ([entry]) => entry.isIntersecting && controls.start({ width: "100%" }),
      { threshold: 0.5 }
    );
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-10 text-center tracking-tight text-purple-700">
        🎉 Event Timeline
      </h1>

      <div className="relative flex justify-between items-start">
        {/* Progress Line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-purple-200" ref={ref}>
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-700 via-magenta-500 to-cyan-400"
            initial={{ width: "0%" }}
            animate={controls}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {days.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-1/3 relative">
            {/* Dot with Tooltip */}
            <div className="group relative flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 bg-gradient-to-br from-purple-700 to-magenta-500 text-white flex items-center justify-center rounded-full z-10 shadow-lg cursor-pointer"
                onClick={() => setSelected(selected === `details-${index}` ? null : `details-${index}`)}
              >
                {index + 1}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-12 bg-gray-900 text-white text-xs rounded-md px-3 py-1 shadow-lg whitespace-nowrap pointer-events-none"
              >
                {item.day} – {item.details.split(" ").slice(0, 4).join(" ")}...
              </motion.div>
            </div>

            {/* Floating Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mt-6 bg-gradient-to-r from-purple-100 via-magenta-100 to-cyan-100 rounded-xl p-5 w-64 text-center border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              <h2 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2 text-purple-800">
                <FaRegCalendarAlt /> {item.day}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{item.date}</p>

              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" onClick={() => setSelected(selected === `details-${index}` ? null : `details-${index}`)}>
                  Details
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelected(selected === `highlights-${index}` ? null : `highlights-${index}`)}>
                  Highlights
                </Button>
                <Button variant="default" size="sm" className="flex items-center gap-1" onClick={() => window.open(item.ticketUrl, "_blank")}>
                  <FaTicketAlt /> Tickets
                </Button>
              </div>

              {selected === `details-${index}` && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 bg-purple-50 p-3 rounded-lg text-sm text-gray-700 shadow-inner">
                  {item.details}
                </motion.div>
              )}

              {selected === `highlights-${index}` && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 bg-yellow-50 p-3 rounded-lg text-sm text-gray-700 flex gap-2 items-start shadow-inner">
                  <FaStar className="text-yellow-500 mt-0.5" /> {item.highlights}
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
