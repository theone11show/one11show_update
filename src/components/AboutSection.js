import { useState, useEffect, useRef } from "react";
import Logo from "../assets/one11showlogo.png";
import DarkVeil from "./Animations/HeroBackground"; // ✅ Correct default import

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const ticketLinks = {
    district:
      "https://www.district.in/events/the-one11-show-sep20-2025-buy-tickets#",
    bookmyshow:
      "https://in.bookmyshow.com/events/the-one11-show/ET00460471?webview=true",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Shader Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <DarkVeil
          hueShift={20}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          scanlineFrequency={3.0}
          warpAmount={0.05}
          speed={0.6}
          resolutionScale={1}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] flex flex-col text-white">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-40">
          {/* Logo */}
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56 mb-4"
          />

          {/* Titles */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-[var(--font-fredoka-one)] drop-shadow-lg">
            Season 1
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 max-w-2xl drop-shadow-md font-[var(--font-antonio)]">
            North Bengal's Biggest Music Festival Will Be
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 max-w-2xl drop-shadow-md font-[var(--font-antonio)]">
            Live Soon
          </h2>

          {/* Coming Soon Button with Dropdown */}
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="mt-8 bg-[#d0021a] hover:bg-[#b00117] text-black font-semibold px-8 py-3 rounded-full transition"
              disabled
            >
              COMING SOON
            </button>

            {open && (
              <div
                className="absolute mt-3 w-56 rounded-2xl shadow-xl overflow-hidden z-50 right-0
                    bg-white/10 backdrop-blur-md border border-white/20 animate-fade-slide"
              >
                <a
                  href={ticketLinks.bookmyshow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 text-white font-medium 
                              hover:bg-white/20 transition-all duration-200"
                >
                  🎫 BookMyShow
                </a>
                <a
                  href={ticketLinks.district}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 text-white font-medium 
                              hover:bg-white/20 transition-all duration-200"
                >
                  🎟 District
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
