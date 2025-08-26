"use client"

import { useState, useEffect } from "react"

const CountdownSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T23:59:59")
    const now = new Date()
    const difference = targetDate - now

    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full flex justify-center items-center p-0">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
        {/* Countdown Timer Card */}
        <div className="w-full h-full flex items-center justify-center p-0">
          <div className="w-full h-full bg-[#F4F3F1] shadow-lg  flex flex-col items-center justify-center text-center p-0">
            {/* Heading */}
            <h2 className="text-lg font-semibold mb-8 text-gray-800">
              See you there in
            </h2>

            {/* Timer Rows */}
            <div className="flex flex-col gap-6 w-full max-w-md">
              {/* First Row */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold text-red-600 leading-none">
                    {String(timeLeft.days || "12").padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-800 mt-2">Days</span>
                </div>
                <span className="text-6xl font-bold text-red-600">-</span>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold text-red-600 leading-none">
                    {String(timeLeft.hours || "02").padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-800 mt-2">Hours</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold text-red-600 leading-none">
                    {String(timeLeft.minutes || "12").padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-800 mt-2">Minutes</span>
                </div>
                <span className="text-6xl font-bold text-red-600">-</span>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold text-red-600 leading-none">
                    {String(timeLeft.seconds || "02").padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-800 mt-2">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Description Card */}
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full h-full bg-gradient-to-r from-[#C90D16] to-[#520505] text-white flex flex-col items-center justify-center p-8  shadow-lg text-center">
            <div className="space-y-4 max-w-md mb-6">
              <p className="text-base font-medium">
                An artist launchpad dedicated to discovering, mentoring, and launching authentic musical and artistic talent.
              </p>
              <p className="text-sm leading-relaxed">
                Powered by The Chordifiers Studio, we unite passionate artists and skilled industry professionals committed to nurturing raw talent with vibrant music battles, live sessions, and engaging podcasts and more.
              </p>
            </div>
            <button className="mt-4 bg-[#FFC0CB] hover:bg-pink-300 text-black font-semibold px-8 py-2 rounded-full transition text-sm">
              know more
            </button>
          </div>
        </div>

        {/* Background Image Card with 11.11 */}
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src="/background3.webp" 
            alt="concert" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="relative z-20 text-white text-6xl font-bold">
            11.11
          </div>
        </div>

        {/* Team Description Card with Acti */}
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-center p-8 rounded-lg shadow-lg">
          <div className="max-w-md mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              We are a unified group of industry music professionals, including producers, directors, artists, performers, and experienced event managers.
              Our shared mission is to provide an unbiased platform for raw talents.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
              connect
            </button>
            <div className="flex items-center">
              <span className="text-sm font-semibold mr-2">Acti</span>
              <button className="bg-gray-300 hover:bg-gray-400 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownSection
