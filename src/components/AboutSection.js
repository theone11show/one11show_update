import { Link } from "react-router-dom";
import Logo from "../assets/HeroSectionlogo.jpeg";

const AboutSection = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("events");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-28">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://xwbiqeigjdpuzfqw.public.blob.vercel-storage.com/Website%20faktus.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-[3] p-4 sm:p-6 md:p-8 flex flex-col items-center">
       
      

        {/* Logo with circular background */}
        <div className="bg-white/10 rounded-full p-3 mb-3 shadow-lg">
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="w-20 sm:w-28 md:w-32 rounded-full"
          />
        </div>

        {/* Season text */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-fredoka-one)] text-cream-white mb-4 drop-shadow-lg">
          Season 1
        </h3>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream-white font-[var(--font-antonio)] mb-2 max-w-2xl mx-auto drop-shadow-md">
          North Bengal's Biggest Music Festival Will Be Live Soon
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl text-cream-white font-[var(--font-antonio)] mb-6 max-w-2xl mx-auto drop-shadow-md">
          Join us for this exciting event
        </h3>

        {/* Buttons */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to="/join"
            className="btn-primary text-base sm:text-lg px-5 py-2"
          >
            Join Our Waitlist
          </Link>
          <button
            onClick={handleScroll}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                       hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 
                       text-white px-3 py-1.5 rounded-md text-sm sm:text-base 
                       transition duration-300 shadow-md"
          >
            Click Here To Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
