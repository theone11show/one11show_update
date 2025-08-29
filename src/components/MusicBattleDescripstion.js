import React from "react";
import Logo from "../assets/one11showlogo.png";

const MusicBattleDescription = () => {
  return (
    <div
      className="bg-black w-full flex flex-col items-center justify-center px-6 "
      style={{  backgroundImage: "url('/MusicBattle1.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "12rem",
    paddingBottom:"11rem" }} // Using rem for large padding
    >
      {/* First Text */}
      <img
  src={Logo}
  alt="One11 Show Logo"
  className="mb-4"
  style={{
    width: "150px",  // Adjust size as needed
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
        className="text-2xl md:text-3xl uppercase mb-4 mt-0"
        style={{ fontFamily: "'Montserrat', sans-serif",color: "#e4e2dd",
          fontSize: "30px"  }}
      >
        Season 1
      </h3>

      {/* Description */}
      <div className="max-w-3xl text-center space-y-4 text-white "
      style={{fontFamily:"'Poppins', sans-serif",fontSize:"22px"}}
      >
        <p className="mt-5">
          The One11 Music Battle Seaseon 1, begins its journey on 20 September 2025 <br/>
          bringing togather artists,audiences, and creative commutinues for an exciting <br/>
          opening day
        </p>
        <p className="mt-4">
       From the largest artists gathering in North Bengal to engaging performances <br/>
       and cultural showcases.
        </p>
      </div>

      {/* 2025 Text */}
      <h4
        className="text-3xl md:text-4xl mt-8"
        style={{ fontFamily: "'Montserrat', sans-serif", fontSize:"30", color:"e4e2dd" }}
      >
        2025
      </h4>
    </div>
  );
};

export default MusicBattleDescription;
