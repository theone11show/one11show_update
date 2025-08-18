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
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20">
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
      <div className="relative z-[3] p-4 sm:p-8 md:p-12 flex flex-col items-center">
        {/* Logo */}
        <div className="p-3 bg-white/10 rounded-full shadow-lg mb-6">
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="mx-auto h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 object-cover rounded-full"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-fredoka-one)] text-cream-white leading-tight mb-4 drop-shadow-lg">
          North Bengal's Biggest Music Festival Will Be Live Soon
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-cream-white font-[var(--font-antonio)] mb-8 max-w-2xl mx-auto drop-shadow-md">
          Join us for this exciting event
        </p>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Link
            to="/join"
            className="btn-primary text-lg sm:text-xl inline-block"
          >
            Join Our Waitlist
          </Link>
          <button
            onClick={handleScroll}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg sm:text-xl transition duration-300 shadow-md"
          >
            Click Here To Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
