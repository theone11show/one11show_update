import React, { useState } from 'react';
import './PopupModal.css';

const PopupModal = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2 className="popup-title">🎉 Registration Open!</h2>
            <p className="popup-subtext">
              Round 1B registrations are now live. <br />
              Don't miss out on your chance to participate!
            </p>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-button"
            >
              Register Now
            </a>

            <p className="popup-footer">Limited slots available. Register before deadline!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
