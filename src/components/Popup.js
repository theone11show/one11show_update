import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // ✅ React Icon

const Popup = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Show popup on page load with animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      setAnimate(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-500 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-xl max-w-lg mx-4 p-8 relative shadow-xl transform transition-all duration-500 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
          onClick={() => setShow(false)}
          style={{ fontSize: "1.8rem" }} // ✅ Larger X icon
        >
          <AiOutlineClose />
        </button>

        {/* Popup content */}
        <h1
          className="text-3xl mb-4 text-[#d0021a] text-center uppercase font-['Anton'] "
         
        >
          Updates
        </h1>
         <div className="space-y-4 text-gray-800 text-[16px] md:text-[18px] leading-relaxed font-['Montserrat']">
          <p>
            With deep regret, we must announce that The One11 Show Music Battle
            Series Season 1, originally scheduled for 20th & 21st September 2025,
            has been postponed until further notice.
          </p>
          <p>
            The recent tragic events in Nepal have deeply impacted some of our
            performers, who have lost their loved ones. Out of compassion and
            respect, we believed in this decision.
          </p>
          <p>
            All tickets purchased will remain valid for the rescheduled dates,
            which will be announced soon.
          </p>
          <p>
            We sincerely thank you for your patience, empathy, and support during
            this time.
          </p>
        </div>

        {/* User Acknowledge Button */}
        <div className="flex justify-center">
          <button
            className="bg-[#d0021a] hover:bg-[#b00117] text-white font-bold px-8 py-3 rounded-full transition text-lg font-[Montserrat']"
           
            onClick={() => setShow(false)}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
