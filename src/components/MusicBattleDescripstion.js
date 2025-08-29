import React from "react";
import Logo from "../assets/one11showlogo.png";

const MusicBattleDescription = () => {
  return (
    <div
      className="bg-black w-full flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage: "url('/MusicBattle1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "12rem",
        paddingBottom:"4rem"
       
      }}
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="One11 Show Logo"
        className="mb-4"
        style={{
          width: "150px",
          height: "auto",
        }}
      />

      {/* Main Heading */}
      <h1
        className="text-center uppercase mt-5"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "#e4e2dd",
          fontSize: "30px",
        }}
      >
        Music Battle Series
      </h1>

      {/* Sub Heading */}
      <h3
        className="uppercase mb-4 mt-0"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "#e4e2dd",
          fontSize: "30px",
        }}
      >
        Season 1
      </h3>

      {/* Description - shifted slightly left */}
      <div
        className="max-w-3xl text-white mt-5"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "22px", // increased font size
          textAlign: "center",
          
        
        }}
      >
        <p>
          The One11 Music Battle Season 1 begins its journey on 20 September 2025 <br />
          bringing together artists, audiences, and creative communities for an exciting <br />
          opening day.
        </p>
        <p className="mt-4">
          From the largest artists gathering in North Bengal to engaging performances <br />
          and cultural showcases.
        </p>
      </div>

      {/* 2025 Text */}
      <h4
        className="mt-8"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "30px",
          color: "#e4e2dd",
        }}
      >
        2025
      </h4>
    </div>
  );
};

export default MusicBattleDescription;
