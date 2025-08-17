"use client"

import { useEffect, useRef, useState } from "react"

const OurTeamComponents = () => {
  const wrapperRef = useRef(null)
  const [expanded, setExpanded] = useState(false)

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

    wrapperRef.current?.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const fullContent = (
    <>
      <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-6 mb-2">
        The One11 Show Team
      </h2>
      <p className="mb-4">
        The One11 Show is a dynamic platform dedicated to discovering, mentoring, and launching authentic musical and
        artistic talent. Based in Siliguri and powered by The Chordifiers Studio, our team is made up of passionate
        professionals ranging from young and talented artists to skilled industry professionals, all unified by a single
        purpose: to create a true artist launchpad that supports raw talent with structure, mentorship, and opportunity.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-4 mb-2">
        Creatives & Visionaries
      </h3>
      <p className="mb-4">
        With diverse expertise in music, art, and production, our team nurtures creativity and originality. We believe
        in bringing the unseen and unheard talent to the forefront through thoughtfully curated music battles, live
        sessions, and engaging podcasts.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-4 mb-2">
        Organizers & Strategists
      </h3>
      <p className="mb-4">
        From event conceptualization to flawless execution, our team meticulously plans and coordinates each element of
        The One11 Show experience, ensuring every event is a professional and memorable platform for artists and
        audiences alike.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-4 mb-2">
        Community Enthusiasts
      </h3>
      <p className="mb-4">
        Deeply rooted in Siliguri and Northeast India, we foster strong connections with local artists and audiences,
        empowering grassroots culture and inspiring a new generation of creators.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-4 mb-2">
        Technical Experts
      </h3>
      <p className="mb-4">
        Our state-of-the-art production team handles everything from sound engineering to creative stage design,
        delivering superior quality that amplifies every artist's expression.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-6 mb-2">
        Our Valued Partners
      </h2>
      <p className="mb-4">
        The One11 Show is proud to collaborate with <span className="font-semibold">Merrycraft Entertainment</span>, our
        dedicated event management partner, who ensures seamless organization and execution of every live event.
        Additionally, <span className="font-semibold">The Corporate Pot</span> serves as our media partner, expanding
        our reach and providing dynamic media support to keep our community connected and informed.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] mt-6 mb-2">
        Our Mission
      </h2>
      <p>
        We are committed to providing a professional, authentic, and inclusive platform that highlights true talent,
        nurtures creative growth, and connects artists with opportunities and audiences. Join us as we celebrate the
        vibrant culture and emerging music scene of Siliguri and beyond.
      </p>
    </>
  )

  const shortContent = (
    <p>
      The One11 Show is a dynamic platform dedicated to discovering, mentoring, and launching authentic musical and
      artistic talent. Based in Siliguri and powered by The Chordifiers Studio, our team is made up of passionate
      professionals unified by a single purpose: to create a true artist launchpad that supports raw talent with
      mentorship and opportunity...
    </p>
  )

  return (
    <div ref={wrapperRef} className="bg-[#1c1c1e] pt-8 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-md text-[#E2E2E2] rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Our Team</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg opacity-90">
            Meet the talented minds behind The One11 Show
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {expanded ? fullContent : shortContent}

            {/* Read More / Less button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-block px-4 py-2 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] rounded-lg hover:opacity-90 transition-colors duration-300"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeamComponents
