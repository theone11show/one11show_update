import React from 'react';
import './SubmissionBanner.css';

const SubmissionBanner = () => {
  return (
    <div className="submission-banner">
      <h2>SUBMISSIONS ARE CURRENTLY OPEN FOR ROUND 1B</h2>
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
