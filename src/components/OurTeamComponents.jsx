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
    <div
      ref={wrapperRef}
      className="bg-[#1c1c1e] pt-8 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-6"
    >
      <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md 
        text-[#E2E2E2] rounded-2xl border border-white/20 shadow-lg 
        overflow-hidden hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300">
        
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] p-4 sm:p-8 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Our Team
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg opacity-90">
            Meet the talented minds behind The One11 Show
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p>
              We are a unified group of industry music professionals, including
              producers, directors, artists, performers, and experienced event
              managers. Our shared mission is to provide an unbiased platform
              for raw talents.
            </p>

            {/* Separate Line */}
            <p className="mt-4 text-center text-xl sm:text-2xl md:text-3xl font-bold 
              bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] bg-clip-text text-transparent">
              The One11 Show
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeamComponents
