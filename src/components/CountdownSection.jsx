"use client"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountdownSection = () => {
  const navigate = useNavigate();
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-20T00:00:00")
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
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[30%_50%] gap-0 justify-center min-h-screen">
        {/* Countdown Timer Card - Taller */}
        <div className="flex items-center justify-center h-[50vh] lg:h-[60vh]">
          <div className="w-full h-full bg-[#F4F3F1] shadow-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-lg font-semibold mb-8 text-gray-800">
              See you there in
            </h2>

            <div className="flex flex-col gap-6 w-full max-w-md">
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

        
        {/* Company Description Card - Taller */}
<div className="flex items-center justify-center h-[50vh] lg:h-[60vh]">
  <div className="w-full h-full bg-gradient-to-r from-[#C90D16] to-[#520505] text-white flex flex-col items-center justify-center p-8 shadow-lg text-center">
    <div className="space-y-4 max-w-md mb-6">
      <p
        className="text-base font-medium"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        An artist launchpad dedicated to discovering, mentoring, and launching authentic musical and artistic talent.
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        Powered by The Chordifiers Studio, we unite passionate artists and skilled industry professionals committed to nurturing raw talent with vibrant music battles, live sessions, and engaging podcasts and more.
      </p>
    </div>
    <button
      className="mt-4   text-black font-semibold px-8 py-2 rounded-full transition text-sm"
      style={{ fontFamily: "'Anton', sans-serif",backgroundColor: "#d0021a " }}
      onClick={() => navigate("/about")} 
    >
      know more
    </button>
  </div>
</div>


        {/* Background Image Card - Shorter */}
        <div className="relative flex items-center justify-center h-[35vh] lg:h-[40vh] overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src="/background3.webp"
            alt="concert"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
        </div>

        {/* Team Description Card */}
<div className="flex flex-col items-center justify-center h-[35vh] lg:h-[40vh] bg-gray-200 text-center p-8 shadow-lg">
  <div className="max-w-md mb-6">
    <p
      className="leading-relaxed text-black"
      style={{
        fontFamily: "'Anton', sans-serif",
        fontSize: '16px'
      }}
    >
      We are a unified group of industry music professionals,<br/> including producers, directors, artists, performers, and experienced event managers. <br/>
      Our shared mission is to provide an unbiased platform for raw talents.
    </p>
  </div>
  <div className="flex items-center gap-4">
  <button
  className="px-4 py-2 rounded-full text-black font-semibold"
  style={{ backgroundColor: "#fecd98" }} 
     onClick={() => navigate("/OurMission")} 

 
>
  Connect
</button>
  </div>
</div>
 </div>
    </div>
  )
}

export default CountdownSection
