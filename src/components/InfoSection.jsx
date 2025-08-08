import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSection() {
  const [isSending, setIsSending] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-spam check (honeypot)
    if (e.target['bot-field'].value !== '') {
      return; // It's a bot! Abort!
    }

    setIsSending(true);

    emailjs
      .sendForm(
        'service_22a450b',
        'template_6rqrhrz',
        e.target,
        'rkXuILdNRebGGp2nV'
      )
      .then(
        () => {
          toast.success('Your message has been sent!');
          e.target.reset();
          setIsSending(false);
        },
        (error) => {
          toast.error('Failed to send message. Try again later.');
          console.error(error.text);
          setIsSending(false);
        }
      );
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@theone11.show';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917477785294';
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-charcoal-black ">
      <ToastContainer />
      <div className="container mx-auto px-6 text-center pt-24 pb-16 sm:py-10">
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
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            +91 7477785294
          </div>
        </div>

        <div className="mt-12">
          <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot Anti-Spam Field */}
            <input
              type="text"
              name="bot-field"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="text-left">
              <label htmlFor="name" className="block text-cream-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Enter your name"
                className="w-full p-4 rounded-lg bg-white border border-primary-red text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-red"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="email" className="block text-cream-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-lg bg-white border border-primary-red text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-red"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="message" className="block text-cream-white mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full p-4 rounded-lg bg-white border border-primary-red text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-red"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-xl py-3 !rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
