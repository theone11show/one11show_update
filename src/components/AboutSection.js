import { Link } from "react-router-dom"
import logo from "../assets/HeroSectionlogo.jpeg" 

const AboutSection = () => {
  const handleScroll = (e) => {
    e.preventDefault()
    const section = document.getElementById("events")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-between text-center overflow-hidden pt-24">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="https://xwbiqeigjdpuzfqw.public.blob.vercel-storage.com/Website%20faktus.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Top Logo */}
      <div className="relative z-[3] mt-12">
        <div className="mx-auto w-36 sm:w-44 md:w-52 lg:w-60 p-4 bg-white rounded-full shadow-lg">
          <img
            src={logo}
            alt="Festival Logo"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-[3] p-4 sm:p-8 md:p-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-fredoka-one)] text-cream-white leading-tight mb-4 drop-shadow-lg">
          North Bengal's Biggest Music Festival Will Be Live Soon
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-cream-white font-[var(--font-antonio)] mb-8 max-w-3xl mx-auto drop-shadow-md">
          Join us for this exciting event
        </p>

        <Link to="/join" className="btn-primary text-xl sm:text-2xl inline-block">
          Join Our Waitlist
        </Link>
      </div>

      {/* Bottom Button */}
      <div className="relative z-[3] mb-10">
        <button
          onClick={handleScroll}
          className="px-6 py-3 text-xl sm:text-2xl font-semibold text-white rounded-full shadow-md transition duration-300 hover:opacity-90"
          style={{ backgroundColor: "#FF5733" }} 
        >
          Click here to know more
        </button>
      </div>
    </section>
  )
}

export default AboutSection
