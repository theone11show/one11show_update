"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 2,
    minutes: 12,
    seconds: 2,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) seconds--
        else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-full h-full bg-[#F4F3F1] shadow-lg rounded flex flex-col items-center justify-center text-center 
                   pt-2 pb-2 sm:pt-4 sm:pb-4 md:pt-8 md:pb-8 px-2 sm:px-4 md:px-8"
      >
        {/* Heading */}
        <h2 className="text-[11px] sm:text-sm md:text-lg font-semibold mb-1 sm:mb-3 md:mb-6 text-gray-800">
          See you there in
        </h2>

        {/* First Row */}
        <div className="flex items-center justify-center gap-1 sm:gap-4 md:gap-6 mb-1 sm:mb-3 md:mb-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-red-600 leading-none">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-xs md:text-sm text-gray-800 mt-1">
              Days
            </span>
          </div>
          <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-red-600">
            -
          </span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-red-600 leading-none">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-xs md:text-sm text-gray-800 mt-1">
              Hours
            </span>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-center gap-1 sm:gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-red-600 leading-none">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-xs md:text-sm text-gray-800 mt-1">
              Minutes
            </span>
          </div>
          <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-red-600">
            -
          </span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-red-600 leading-none">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-xs md:text-sm text-gray-800 mt-1">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
