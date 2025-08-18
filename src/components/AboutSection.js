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
      <div className="relative z-[3] p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {/* Top Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-fredoka-one)] text-cream-white mb-3 drop-shadow-lg">
          One11 Show
        </h1>

        {/* Logo in the center */}
        <img
          src={Logo} // replace with your actual logo path
          alt="One11 Show Logo"
          className="w-20 sm:w-28 md:w-32 mb-3"
        />

        {/* Season text */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-fredoka-one)] text-cream-white mb-4 drop-shadow-lg">
          Season 1
        </h3>

        {/* Subtitle */}
      <h1 className="text-lg sm:text-xl md:text-2xl text-cream-white font-[var(--font-antonio)] mb-2 max-w-2xl mx-auto drop-shadow-md">
  North Bengal's Biggest Music Festival Will Be Live Soon
</h1>
<h3 className="text-base sm:text-lg md:text-xl text-cream-white font-[var(--font-antonio)] mb-6 max-w-2xl mx-auto drop-shadow-md">
  Join us for this exciting event
</h3>

        {/* Buttons with reduced padding/spacing */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to="/join"
            className="btn-primary text-base sm:text-lg px-5 py-2"
          >
            Join Our Waitlist
          </Link>
          <button
            onClick={handleScroll}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-5 py-2 rounded-lg text-base sm:text-lg transition duration-300 shadow-md"
          >
            Click Here To Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
