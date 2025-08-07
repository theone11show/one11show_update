import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./Logo.css";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="shadow-lg fixed w-full z-50  px-3  bg-charcoal-black">
      <nav className=" flex justify-between items-center">
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
              <li><Link to="home" className="block py-1 nav-link">About Us</Link></li>
              <li><Link to="home" className="block py-1  nav-link">Our Mission</Link></li>
              {/* <li><Link to="home" className="block py-1 nav-link">Team</Link></li> */}
              <hr className="border-t border-gray-700 my-2 nav-link" />
              <li><Link to="contact" className="block py-1 nav-link">FAQs</Link></li>
              <li><Link to="contact" className="block py-1 nav-link">Support</Link></li>
              <li><Link to="privacy" className="block py-1 nav-link">Privacy Policy</Link></li>
              <li><Link to="terms" className="block py-1 nav-link">Terms of Service</Link></li>
            </ul>
          </li>

          {/* Events Dropdown */}
          <li className="relative group dropdown-container">
            <span className="text-cream-white hover:text-primary-red transition nav-link flex items-center cursor-pointer nav-link">
              Events <i className="fas fa-chevron-down ml-2 text-sm"></i>
            </span>
            <ul className="absolute hidden group-hover:block bg-charcoal-black text-cream-white p-4 rounded-md shadow-lg dropdown-menu">
              <li> <Link to="bands-section" className="block py-1  nav-link">Battle of Bands</Link></li>
              <li><Link to="singer-songwriter-section" className="block py-1 nav-link">Singer/Songwriter Battle</Link></li>
              <li><Link to="musicians-section" className="block py-1 nav-link">Musicians (Instrumental)</Link></li>
              <li><Link to="rappers-section" className="block py-1 nav-link">Battle of Rappers</Link></li>
              <li><Link to="rappers-section" className="block py-1 nav-link">Music Battle Series</Link></li>
              <li><Link to="djs-section" className="block py-1 nav-link">Battle of DJs</Link></li>
              <li><Link to="challenge-section" className="block py-1 nav-link">48-Hours Music Making Challenge</Link></li>
            </ul>
          </li>

          {/* Static Links */}
          <li>
            <Link to="updates" className="text-cream-white hover:text-primary-red transition nav-link">
              Updates
            </Link>
          </li>


          <li>
            <Link to="join" className="text-cream-white hover:text-primary-red transition nav-link">
              Join Our Waitlist
            </Link>
          </li>


          <li>
            <Link to="contact" className="text-cream-white hover:text-primary-red transition nav-link">
              Contact
            </Link>
          </li>
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
          { label: 'Home', id: '#home' },
          { label: 'About Us', id: '#home' },
          { label: 'Our Mission', id: '#home' },
          { label: 'Team', id: '#home' },
          { label: 'FAQs', id: '#contact' },
          { label: 'Support', id: '#contact' },
          { label: 'Privacy Policy', id: '#privacy' },
          { label: 'Terms of Service', id: '#terms' },
          { label: 'Events', id: '#events' },
          { label: 'Battle of Bands', id: '#bands-section' },
          { label: 'Singer/Songwriter Battle', id: '#singer-songwriter-section' },
          { label: 'Musicians', id: '#musicians-section' },
          { label: 'Rappers', id: '#rappers-section' },
          { label: 'DJs', id: '#djs-section' },
          { label: '48-Hour Challenge', id: '#challenge-section' },
          { label: 'Updates', id: '#updates' },
          { label: 'Join Waitlist', id: '#join' },
          { label: 'Contact', id: '#contact' },
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.id}
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