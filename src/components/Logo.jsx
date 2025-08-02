import React, { useRef, useState } from "react";
import "./Logo.css";

const Logo = () => {
  const vinylRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    const vinyl = vinylRef.current;
    if (!vinyl) return;

    // Toggle 'paused' class
    if (isPaused) {
      vinyl.classList.remove("paused");
    } else {
      vinyl.classList.add("paused");
    }

    setIsPaused(!isPaused);
  };

  return (
    <div className="logo-wrapper" onClick={togglePause}>
      <div className="vinyl-container">
        <div className="clogo">
          <img
            ref={vinylRef}
            src="/rvenyl1.png"
            alt="Vinyl"
            className="vinyl rotating"
          />
        </div>
        <div className="venyl_img">
          <img src="/one11w1.png" alt="Overlay" className="vinyl-overlay" />
        </div>
        <div className="venyl_stick">
          <img src="/stick.png" alt="Tonearm" className="vinyl-stick" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
