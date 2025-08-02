import React from 'react';
import './RoadmapSection.css';

const RoadmapSection = () => {
  return (
    <div
  className="roadmap-section"
  style={{
    backgroundImage: "url('/drum-bg.png')",
    backgroundSize: '1400px auto', // ✅ Scales down the background image
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>

      <div className="heading-line-wrapper">
        <hr className="line" />
        <h2 className="section-headings">ROADMAP</h2>
        <hr className="line" />
      </div>

      <img src="/roadmap.png" alt="Roadmap" className="center-image" />

      <div className="heading-line-wrapper">
       
        <h2 className="section-headings">SUBMISSION GUIDELINES</h2>
        
      </div>

      <img src="/submission.png" alt="Submission Guidelines" className="center-image second-image" />
    </div>
  );
};

export default RoadmapSection;
