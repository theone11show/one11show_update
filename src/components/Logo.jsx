import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  const vinylRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const togglePause = () => {
    const vinyl = vinylRef.current;
    if (!vinyl) return;

    if (isPaused) {
      vinyl.classList.remove("paused");
    } else {
      vinyl.classList.add("paused");
    }

    setIsPaused(!isPaused);
    navigate("/");
  };

  return (
    <div className="logo-wrapper" onClick={togglePause}>
      <div className="vinyl-container">
        {/* Red vinyl */}
        <div className="clogo">
          <img
            ref={vinylRef}
            src="/rvenyl1.png"
            alt="Vinyl"
            className={`vinyl rotating ${isPaused ? "paused" : ""}`}
          />
        </div>

        {/* White overlay */}
        <div className="venyl_img">
          <img src="/11showlogo.png" alt="Overlay" className="vinyl-overlay" />
        </div> 

        {/* Tonearm */}
        <div className="venyl_stick">
          <img src="/stick.png" alt="Tonearm" className="vinyl-stick" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
