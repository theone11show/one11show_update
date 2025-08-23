import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-16">
      <h2 className="text-xl font-semibold mb-6">See you there in</h2>
      <div className="text-red-600 text-5xl font-bold leading-snug space-y-2">
        <div>{timeLeft.days || "00"} <span className="text-black text-xl">Days</span></div>
        <div>{timeLeft.hours || "00"} <span className="text-black text-xl">Hours</span></div>
        <div>{timeLeft.minutes || "00"} <span className="text-black text-xl">Minutes</span></div>
        <div>{timeLeft.seconds || "00"} <span className="text-black text-xl">Seconds</span></div>
      </div>
    </div>
  );
};

export default CountdownTimer;
