import React from "react";

const Address = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-16"
      style={{
        background: "linear-gradient(to right, #982c1c, #141414)",
      }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center md:items-stretch gap-10 md:gap-16 px-6 md:px-10">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2
            className="mb-6"
            style={{
              fontSize: "40px", // Increased from 34px
              fontFamily: "'Anton', sans-serif",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            MEET US HERE
          </h2>

          <div
            style={{
              color: "#ffffff",
              fontSize: "24px", // Increased from 20px
              marginBottom: "10px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            VENUE
          </div>
          <p
            style={{
              fontSize: "22px", // Increased from 18px
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              marginBottom: "24px",
            }}
          >
            INDRAGANDHI MAIDAN, SILIGURI <br />
            WEST BENGAL
          </p>

          <div
            style={{
              color: "#ffffff",
              fontSize: "24px", // Increased from 20px
              marginBottom: "10px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            DATE
          </div>
          <p
            style={{
              fontSize: "24px", // Increased from 20px
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Coming soon
          </p>
        </div>

        {/* Divider → Vertical on desktop, horizontal on mobile */}
        <div className="w-full h-[3px] md:w-[3px] md:h-auto bg-[#964835]"></div>

        {/* Right Side: Map */}
        <div className="flex-1 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28526.89114111925!2d88.4310612!3d26.7445403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441b3b2a74fcd%3A0xb2d6a635af6d3792!2sIndira%20Gandhi%20Maidan!5e0!3m2!1sen!2sin!4v1693402400000!5m2!1sen!2sin"
            className="w-[300px] h-[220px] md:w-[550px] md:h-[420px]"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: 36px !important; }
          div[style*='font-size: 24px'] { font-size: 26px !important; }
          p[style*='font-size: 22px'] { font-size: 24px !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 30px !important; }
          div[style*='font-size: 24px'] { font-size: 22px !important; }
          p[style*='font-size: 22px'], p[style*='font-size: 24px'] { font-size: 18px !important; }
        }
      `}</style>
    </section>
  );
};

export default Address;
