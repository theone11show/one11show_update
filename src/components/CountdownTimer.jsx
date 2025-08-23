import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 2,
    minutes: 12,
    seconds: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-100 shadow-lg">
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-medium mb-6 text-gray-700">
        See you there in
      </h2>

      {/* First Row (Days - Hours) */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="flex flex-col items-center">
          <span
            className="text-6xl font-extrabold"
            style={{ color: "#d0021a" }}
          >
            {timeLeft.days}
          </span>
          <span className="text-sm md:text-base text-gray-800">Days</span>
        </div>
        <span
          className="text-6xl font-extrabold"
          style={{ color: "#d0021a" }}
        >
          -
        </span>
        <div className="flex flex-col items-center">
          <span
            className="text-6xl font-extrabold"
            style={{ color: "#d0021a" }}
          >
            {timeLeft.hours}
          </span>
          <span className="text-sm md:text-base text-gray-800">Hours</span>
        </div>
      </div>

      {/* Second Row (Minutes - Seconds) */}
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <span
            className="text-6xl font-extrabold"
            style={{ color: "#d0021a" }}
          >
            {timeLeft.minutes}
          </span>
          <span className="text-sm md:text-base text-gray-800">Minutes</span>
        </div>
        <span
          className="text-6xl font-extrabold"
          style={{ color: "#d0021a" }}
        >
          -
        </span>
        <div className="flex flex-col items-center">
          <span
            className="text-6xl font-extrabold"
            style={{ color: "#d0021a" }}
          >
            {timeLeft.seconds}
          </span>
          <span className="text-sm md:text-base text-gray-800">Seconds</span>
        </div>
      </div>
    </div>
  );
}
