"use client"

import { useEffect, useRef } from "react"

const OurTeamComponents = () => {
  const wrapperRef = useRef(null)

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.15 },
    )

    wrapperRef.current?.querySelectorAll("[data-reveal]").forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="w-full h-full flex items-center justify-center">
      <div
        className="w-full h-full 
          min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]
          bg-white/10 backdrop-blur-md text-[#E2E2E2] 
          rounded-2xl border border-white/20 shadow-md 
          hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300 
          flex flex-col p-6 sm:p-8"
      >
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] p-4 sm:p-6 text-center rounded-xl"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Our Team
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg opacity-90">
            Meet the talented minds behind The One11 Show
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4 leading-relaxed text-sm sm:text-base md:text-lg flex-1">
          {/* Team One11 Show */}
          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="italic font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a]"
          >
            Team One11 Show
          </p>

          {/* Description */}
          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            We are a unified group of industry music professionals, including
            producers, directors, artists, performers, and experienced event
            managers.
          </p>

          {/* Mission */}
          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            Our shared mission is to provide an unbiased platform for raw talents.
          </p>

          {/* The One11 Show */}
          <p
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a]"
          >
            The One11 Show
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurTeamComponents
