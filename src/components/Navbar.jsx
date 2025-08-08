import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./Logo.css";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

   useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { // mobile only
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`shadow-lg fixed w-full z-50 py-1 px-6 bg-charcoal-black transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container flex justify-between items-center">
        <div>
          <Logo />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-cream-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          {/* Home Dropdown */}
          <li className="relative group dropdown-container">
            <span className="text-cream-white hover:text-primary-red transition nav-link flex items-center cursor-pointer">
              Home <i className="fas fa-chevron-down ml-2 text-sm"></i>
            </span>
            <ul className="absolute hidden group-hover:block bg-charcoal-black text-cream-white p-4 rounded-md shadow-lg dropdown-menu">
              <li><Link to="/about" className="block py-1 nav-link">About Us</Link></li>
              <li><Link to="/OurMission" className="block py-1 nav-link">Our Mission</Link></li>
              <hr className="border-t border-gray-700 my-2 nav-link" />
              <li><Link to="/contact" className="block py-1 nav-link">FAQs</Link></li>
              <li><Link to="/contact" className="block py-1 nav-link">Support</Link></li>
              <li><Link to="/Policy" className="block py-1 nav-link">Privacy Policy</Link></li>
              <li><Link to="/TermsandCondition" className="block py-1 nav-link">Terms of Service</Link></li>
            </ul>
          </li>

          {/* Events Dropdown */}
          <li className="relative group dropdown-container">
            <Link to="/events"
            className="text-cream-white hover:text-primary-red transition nav-link flex items-center cursor-pointer">
              Events <i className="fas fa-chevron-down ml-2 text-sm"></i>
            </Link>
            <ul className="absolute hidden group-hover:block bg-charcoal-black text-cream-white p-4 rounded-md shadow-lg dropdown-menu">
              <li><Link to="/events" className="block py-1 nav-link">Battle of Bands</Link></li>
              <li><Link to="/events" className="block py-1 nav-link">Singer/Songwriter Battle</Link></li>
              <li><Link to="/events" className="block py-1 nav-link">Musicians (Instrumental)</Link></li>
              <li><Link to="/events" className="block py-1 nav-link">Battle of Rappers</Link></li>
              <li><Link to="/events" className="block py-1 nav-link">Music Battle Series</Link></li>
              <li><Link to="/events" className="block py-1 nav-link">Battle of DJs</Link></li>
              {/* <li><Link to="/challenge-section" className="block py-1 nav-link">48-Hours Music Making Challenge</Link></li> */}
            </ul>
          </li>

          {/* Static Links */}
          <li><Link to="/updates" className="text-cream-white hover:text-primary-red transition nav-link">Updates</Link></li>
          <li><Link to="/join" className="text-cream-white hover:text-primary-red transition nav-link">Join Our Waitlist</Link></li>
          <li><Link to="/contact" className="text-cream-white hover:text-primary-red transition nav-link">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#171616] opacity-[0.95] py-5 z-50 h-screen overflow-y-auto flex flex-col items-center justify-start space-y-8 text-2xl font-bold transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 text-cream-white"
          aria-label="Close mobile menu"
        >
          <i className="fas fa-times text-3xl"></i>
        </button>

        {/* Mobile Links */}
        {[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Our Mission', to: '/OurMission' },
          { label: 'FAQs', to: '/contact' },
          { label: 'Support', to: '/contact' },
          { label: 'Privacy Policy', to: '/Policy' },
          { label: 'Terms of Service', to: '/TermsandCondition' },
          { label: 'Battle of Bands', to: '/Events' },
          { label: 'Singer/Songwriter Battle', to: '/Evnets' },
          { label: 'Musicians', to: '/Events' },
          { label: 'Rappers', to: '/Events' },
          { label: 'DJs', to: '/Events' },
          { label: '48-Hour Challenge', to: '/Events' },

          { label: 'Updates', to: '/updates' },
          { label: 'Join Waitlist', to: '/join' },
          { label: 'Contact', to: '/contact' }
        ].map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            onClick={closeMobileMenu}
            className="text-cream-white hover:text-primary-red transition duration-300 text-xl"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
