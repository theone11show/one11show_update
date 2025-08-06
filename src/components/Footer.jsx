import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#171616] py-10 px-6">
      <div className="container mx-auto text-center text-white">
        {/* Top Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <a
            href="https://www.creatouscollective.media"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-white hover:text-primary-red transition duration-300 text-lg"
          >
            Creatous Collective Media
          </a>
          <a
            href="mailto:info@theone11.show"
            className="text-primary-red hover:text-primary-red transition duration-300 text-lg"
          >
            info@theone11.show
          </a>
          <a
            href="tel:+917477785294"
            className="text-cream-white hover:text-primary-red transition duration-300 text-lg"
          >
            +91 7477785294
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-2xl mb-6">
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-base mb-4">
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-cream-white hover:text-primary-red transition duration-300">
            Brand Guidelines
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; 2025 The One11 Show. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
