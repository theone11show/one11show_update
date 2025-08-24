import { Link } from "react-router-dom";
import Logo from "../assets/one11showlogo.png";


const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
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
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content Wrapper */}
      <div className="relative z-[2] flex flex-col text-white">
        {/* 🔹 About Content (Join Waitlist tak) */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-40">
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56 mb-4"
          />
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-[var(--font-fredoka-one)] drop-shadow-lg">
            Season 1
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 max-w-2xl drop-shadow-md font-[var(--font-antonio)]">
            North Bengal's Biggest Music Festival Will Be Live Soon
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md font-[var(--font-antonio)]">
            Join us for this exciting event
          </h3>
      <Link
  to="/join"
  className="mt-8 bg-[#d0021a] hover:bg-[#b00117] text-black font-semibold px-8 py-3 rounded-full transition"
>
  Book Now
</Link>
</Link>
        </div>

     
      </div>
    </section>
  );
};

export default HeroSection;
