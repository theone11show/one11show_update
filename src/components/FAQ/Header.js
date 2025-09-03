import React from "react";

const Header = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center pt-40 pb-56 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/faqHeaderbg.avif')", // put your background image in public folder
      }}
    >
      <h1
        className="font-[Anton] font-bold text-white leading-tight"
        style={{
          fontFamily: "'Anton', sans-serif",
        }}
      >
        {/* First line */}
        <span
          className="block"
          style={{
            fontSize: "clamp(32px, 6vw, 68px)", // responsive
            color: "#ffffff",
          }}
        >
          Frequently Asked
        </span>

        {/* Second line */}
        <span
          className="block"
          style={{
            fontSize: "clamp(32px, 6vw, 68px)",
            color: "#ffffff",
          }}
        >
          Questions
        </span>
      </h1>
    </div>
  );
};

export default Header;
