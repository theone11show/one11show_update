import { Link } from "react-router-dom;
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
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
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

      {/* Dark Overlay for better text visibility */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[1]"></div> */}

      {/* Floating Orbs */}
      {/* <div className="hero-abstract-background relative z-[2]">
        <div className="floating-orbs">
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
        </div>
      </div> */}

      {/* Text Content */}
      <div className="relative z-[3] p-4 sm:p-8 md:p-12">
        {/* <h3 className="text-lg sm:text-xl md:text-2xl text-cream-white font-[var(--font-antonio)] mb-2 drop-shadow-md">
          The one11 Show First Season live
        </h3> */}

        <img
          src={Logo}
          alt="One11 Show Logo"
           className="mx-auto h-32 w-auto sm:h-40 md:h-48 drop-shadow-lg"
        />

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
          <button className="btn-secondary text-xl sm:text-2xl inline-block">
            Click Here To Know More
          </button>

          {/* <button className="bg-gray-200 text-black px-6 py-3 rounded-2xl text-xl sm:text-2xl inline-block transition duration-300 shadow-md hover:shadow-lg hover:bg-gray-300">
  Read more
</button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
