import React from 'react';
import './SubmissionBanner.css';

const SubmissionBanner = () => {
  return (
    <div className="submission-banner">
      <span className='submission'>SUBMISSIONS ARE CURRENTLY OPEN FOR ROUND 1B</span>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="register-btn"
      >
        Register Now
      </a>
    </div>
  );
};

export default SubmissionBanner;
