import React from "react";

const Address = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-16"
      style={{
        background: "linear-gradient(to right, #982c1c, #141414)",
      }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 md:gap-12 px-4 md:px-6">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2
            className="mb-5"
            style={{
              fontSize: "34px",
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
              fontSize: "20px",
              marginBottom: "8px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            VENUE
          </div>
          <p
            style={{
              fontSize: "18px",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              marginBottom: "20px",
            }}
          >
            INDRAGANDHI MAIDAN, SILIGURI <br />
            WEST BENGAL
          </p>

          <div
            style={{
              color: "#ffffff",
              fontSize: "20px",
              marginBottom: "8px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            DATE
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            20 & 21<sup>st</sup> September 2025
          </p>
        </div>

        {/* Divider → Vertical on desktop, horizontal on mobile */}
        <div
          className="w-full h-[2px] md:w-[2px] md:h-auto bg-[#964835]"
        ></div>

        {/* Right Side: Map */}
        <div className="flex-1 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28526.89114111925!2d88.4310612!3d26.7445403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441b3b2a74fcd%3A0xb2d6a635af6d3792!2sIndira%20Gandhi%20Maidan!5e0!3m2!1sen!2sin!4v1693402400000!5m2!1sen!2sin"
            className="w-[280px] h-[200px] md:w-[400px] md:h-[300px]"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: 28px !important; }
          div[style*='font-size: 20px'] { font-size: 18px !important; }
          p[style*='font-size: 18px'] { font-size: 16px !important; }
          p[style*='font-size: 20px'] { font-size: 18px !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 24px !important; }
          div[style*='font-size: 20px'] { font-size: 16px !important; }
          p[style*='font-size: 18px'], p[style*='font-size: 20px'] { font-size: 14px !important; }
        }
      `}</style>
    </section>
  );
};

export default Address;
