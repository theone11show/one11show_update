import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import twitter from '../assets/Twitterlogo.png';

function Footer() {
  return (
    <footer
      className="relative bg-[#171616] py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('FooterBackground.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto text-center text-white">
        
        {/* 1.11 Title */}
        <div className="text-8xl font-extrabold text-black mb-8 relative z-10">
          1.11
        </div>

        {/* Divider - Increased Width */}
        <div className="w-11/12 md:w-3/4 border-t border-white/90 mx-auto mb-10"></div>

        {/* Contact and Social Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          
          {/* Left - Email */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-center mb-6 md:mb-0">
            <a
              href="mailto:info@theone11.show"
              className="text-sm md:text-base text-white hover:text-red-500 transition duration-300"
            >
              info@theone11.show
            </a>
          </div>

          {/* Center - Social Media */}
          <div className="w-full md:w-1/3 flex justify-center space-x-8 text-3xl mb-6 md:mb-0">
            <div
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61576672565861', '_blank')}
              className="hover:text-red-500 transition duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </div>

            <div
              onClick={() => window.open('https://x.com/theone11show', '_blank')}
              className="hover:bg-red-500 transition duration-300 cursor-pointer bg-black rounded-full p-2 inline-flex items-center justify-center"
            >
             <RiTwitterXFill className="text-white text-xl" /> 
            </div>

            <div
              onClick={() => window.open('https://www.instagram.com/theone11.show/', '_blank')}
              className="hover:text-red-500 transition duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            <div
              onClick={() => window.open('https://www.linkedin.com/showcase/108123123/admin/dashboard/', '_blank')}
              className="hover:text-red-500 transition duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>

          {/* Right - Phone */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-center">
            <a
              href="tel:+917477785294"
              className="text-sm md:text-base text-white hover:text-red-500 transition duration-300"
            >
              +91 7477785294
            </a>
          </div>
        </div>

        {/* Policy Links with margin from top */}
        <div className="mt-6 mb-2 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs md:text-sm">
          <Link
            to="/Policy"
            className="hover:text-red-500 transition duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/TermsandCondition"
            className="hover:text-red-500 transition duration-300"
          >
            Terms of Service
          </Link>
        </div>

        {/* Copyright without extra bottom space */}
        <p className="text-xs text-gray-400">
          &copy; 2025 The One11 Show. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
