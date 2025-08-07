import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your message has been sent! ');
    e.target.reset();
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@theone11.show';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917477785294';
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-charcoal-black">
      <ToastContainer />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-[var(--font-null-feel)] text-cream-white mb-8">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-cream-white max-w-3xl mx-auto font-[var(--font-antonio)] mb-8">
          Have questions, partnership inquiries, or want to apply to be featured? Reach out to us!
        </p>

        <div className="flex flex-col items-center space-y-6">
          <div
            onClick={handleEmailClick}
            className="hover:underline text-xl md:text-2xl font-semibold flex items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
            info@theone11.show
          </div>

          <div
            onClick={handlePhoneClick}
            className="text-primary-red hover:underline text-xl md:text-2xl font-semibold flex items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-3 cursor-pointer" />
            +91 7477785294
          </div>
        </div>

        <div className="mt-12">
          <form
            className="max-w-xl mx-auto space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-white border border-primary-red text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-red"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-white border border-primary-red text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-red"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-lg bg-white border border-primary-red text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-red"
              required
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full text-xl py-3 !rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;