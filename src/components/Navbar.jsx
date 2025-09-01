import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Logo from "./Logo";
import "./Navbar.css";
import "./Logo.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);


  // Navbar hide/show on scroll
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const hideThreshold = 50;
    const delta = 5;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) <= delta) {
        ticking = false;
        return;
      }
      if (currentY > lastY && currentY > hideThreshold) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Events", to :"/eventSchedule"},
    { label: "Updates", to: "/updates" },
    { label: "FAQs", to: "/Support" },
    { label: "Privacy Policy", to: "/Policy" },
    { label: "Terms of Service", to: "/TermsandCondition" },
    { label: "Join Waitlist", to: "/join" },
  ];

  return (
    <header
      className={`fixed w-full z-50 py-1 px-6 shadow-lg transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        bg-gradient-to-r from-[#1f1f1f] to-[#000000] md:bg-charcoal-black
      `}
    >
      <nav className="container flex justify-between items-center">
        <Logo />

        {/* Menu toggle */}
        <button
          onClick={toggleMenu}
          className="text-cream-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <i
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
          ></i>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-[#171616] py-5 z-50 flex flex-col items-center justify-start space-y-8 text-2xl font-bold transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-cream-white"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-3xl"></i>
        </button>

        {menuItems.map((item, idx) =>
          item.action ? (
            <span
              key={idx}
              onClick={item.action}
              className="text-cream-white hover:text-primary-red transition duration-300 text-xl cursor-pointer"
            >
              {item.label}
            </span>
          ) : (
            <Link
              key={idx}
              to={item.to}
              onClick={closeMenu}
              className="text-cream-white hover:text-primary-red transition duration-300 text-xl"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
