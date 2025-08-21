"use client"
import { useEffect, useRef } from "react"
import img1 from "../assets/60hrmc.webp"
import img2 from "../assets/60HRCHALLENGE1.webp"
import img3 from "../assets/Round1.webp"
import img4 from "../assets/round2.webp"

const updates = [
  {
    date: "Aug, 2025",
    title: "60 Hours Music Making Challenge",
    description: "Push your creativity further",
    image: img1,
    details:
      "The 60-Hour Music Making Challenge pushed contestants to craft an original song within a limited timeframe of 60 hours. This format tested composition, arrangement, and production under pressure, highlighting creativity and innovation.",
  },
  {
    date: "Aug, 2025",
    title: "Round 1B",
    description: "Online round for new participants",
    image: img3,
    details:
      "Round 1B of The Music Battle Series Season 1 took place in an online format, offering aspiring artists the opportunity to showcase their skills and originality. This advanced the series’ mission to discover and nurture rising talent.",
  },
  {
    date: "July, 2025",
    title: "60 Hours Music Making Challenge",
    description: "Intense creative competition",
    image: img2,
    details:
      "The 60-Hour Music Making Challenge tested participants on composition, production, and creativity within a strict timeframe. Contestants produced complete tracks, showcasing artistic vision and technical skill.",
  },
  {
    date: "June, 2025",
    title: "Round 1A",
    description: "Online round for new participants",
    image: img4,
    details:
      "Round 1A of The Music Battle Series Season 1 was conducted online, giving singers, rappers, and musicians a stage to present their abilities. This round marked the beginning of the platform’s mission to elevate emerging talent.",
  },
]

const LatestUpdates = () => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = 1
            e.target.style.transform = "translateY(0)"
          }
        }),
      { threshold: 0.15 },
    )
    wrapperRef.current?.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="min-h-screen bg-[#1c1c1e] pt-[120px] pb-16 px-2 sm:px-6 font-[Antonio] flex justify-center">
      <div ref={wrapperRef} className="w-full max-w-6xl text-white p-4 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-[Anton] text-center mb-12">Latest Updates</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center beam */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-cyan-400 shadow-[0_0_22px_3px_rgba(0,255,255,0.6)]"></div>

          {/* Cards */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {updates.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateY(40px)",
                    transition: `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`,
                  }}
                  className={`relative flex w-full justify-end md:${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* DOT + Connector */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                    <div className="relative w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_6px_rgba(0,255,255,0.8)]">
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-cyan-300 shadow-[0_0_6px_2px_rgba(0,255,255,0.6)] 
                        right-full md:${isLeft ? "right-full" : "left-full"} w-[16vw] sm:w-20 md:w-28`}
                      />
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className={`group relative w-[80vw] sm:w-[300px] md:w-[360px] bg-[#3a3a3c] p-4 sm:p-6 rounded-lg border border-[#565656]
                    ml-[18vw] sm:ml-24 text-left md:${
                      isLeft
                        ? "mr-[18vw] sm:mr-24 md:mr-36 md:text-right md:ml-0"
                        : "ml-[18vw] sm:ml-24 md:ml-36 md:text-left"
                    }
                    cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]`}
                  >
                    {/* Image */}
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-[140px] sm:h-[160px] object-cover rounded-md"
                      />
                    </div>

                    {/* Date & Title */}
                    <p className="text-xs sm:text-sm text-gray-300 mt-3">{item.date}</p>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 sm:mt-2">{item.title}</h4>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">{item.description}</p>
                    )}

                    {/* Dropdown Details (only on hover) */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-3 text-sm text-gray-300 leading-relaxed">
                      {item.details}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestUpdates
