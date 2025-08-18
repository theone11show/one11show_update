import { Link } from "react-router-dom";
import Logo from "../assets/HeroSectionlogo.jpeg;

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
        <div className="p-4 bg-white/10 rounded-full shadow-lg mb-6">
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="mx-auto h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 object-cover rounded-full"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-fredoka-one)] text-cream-white leading-tight mb-4 drop-shadow-lg">
          North Bengal's Biggest Music Festival Will Be Live Soon
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-cream-white font-[var(--font-antonio)] mb-8 max-w-3xl mx-auto drop-shadow-md">
          Join us for this exciting event
        </p>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Link
            to="/join"
            className="btn-primary text-xl sm:text-2xl inline-block"
          >
            Join Our Waitlist
          </Link>
          <button
            onClick={handleScroll}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl text-xl sm:text-2xl transition duration-300 shadow-md"
          >
            Click Here To Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
