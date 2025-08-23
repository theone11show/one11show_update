import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import twitter from '../assets/Twitterlogo.png';

function Footer() {
  return (
    <footer
      className="relative bg-[#171616] py-28 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('FooterBackground.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto text-center text-white">
        
        {/* Top Section with Centered Divider */}
        <div className="pt-24 pb-12">
          {/* Custom Divider */}
          <div className="w-5/5 md:w-2/3 border-t border-white/90 mx-auto mb-14"></div>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            
            {/* Left - Email */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-center mb-6 md:mb-0">
              <a
                href="mailto:info@theone11.show"
                className="text-sm md:text-base text-cream-white hover:text-primary-red transition duration-300"
              >
                info@theone11.show
              </a>
            </div>

            {/* Center - Social Media */}
            <div className="w-full md:w-1/3 flex justify-center space-x-8 text-3xl mb-6 md:mb-0">
              <div
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61576672565861', '_blank')}
                className="text-cream-white hover:text-primary-red transition duration-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </div>

              <div
                onClick={() => window.open('https://x.com/theone11show', '_blank')}
                className="text-cream-white hover:text-primary-red transition duration-300 cursor-pointer"
              >
                <img src={twitter} alt="X (Twitter)" className="h-7 w-7 inline rounded-md" />
              </div>

              <div
                onClick={() => window.open('https://www.instagram.com/theone11.show/', '_blank')}
                className="text-cream-white hover:text-primary-red transition duration-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </div>

              <div
                onClick={() => window.open('https://www.linkedin.com/showcase/108123123/admin/dashboard/', '_blank')}
                className="text-cream-white hover:text-primary-red transition duration-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>

            {/* Right - Phone */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-center">
              <a
                href="tel:+917477785294"
                className="text-sm md:text-base text-cream-white hover:text-primary-red transition duration-300"
              >
                +91 7477785294
              </a>
            </div>
          </div>
        </div>

        {/* Policy Links with Extra Margin */}
       <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs md:text-sm">

          <Link
            to="/Policy"
            className="text-cream-white hover:text-primary-red transition duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/TermsandCondition"
            className="text-cream-white hover:text-primary-red transition duration-300"
          >
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs text-gray-400">
          &copy; 2025 The One11 Show. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
