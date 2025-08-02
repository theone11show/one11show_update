import React, { useState } from 'react';
import './UpdatesSection.css';

const UpdatesSection = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        setShowMore(prev => !prev);
    };

    return (
        <div className="updates-wrapper">
            {/* Left News Card */}
            <div className="news-card">
                <h2>News & Updates</h2>

                <div className="news-item">
                    <p className="news-title">The 1A Shortlisted Candidates are out</p>
                    <p className="news-date">17 JUNE 2025</p>
                </div>

                <div className="news-item">
                    <p className="news-title">Our 1A online battles</p>
                    <p className="news-date">25 JUNE 2025</p>
                </div>
                <div className="news-item">
                    <p className="news-title">Re-Opening of registration’s of round 1B</p>
                    <p className="news-date">30 JUNE 2025</p>
                </div>

                <div className="news-item">
                    <p className="news-title">The Round Will Be Sortlisted </p>
                    <p className="news-date">01 Aug 2025</p>
                </div>

                {/* Conditionally shown items */}
                {showMore && (
                    <>
                        
                        
                    </>
                )}

                <p className="more-link" onClick={toggleMore}>
                    {showMore ? 'SHOW LESS' : 'MORE'}
                </p>
            </div>

            {/* Right Image Card */}
            <div className="image_border">
                <div className="image-card">
                    <img
                        src="/call_images.png"
                        alt="1A round"
                        className="image-grid"
                    />
                    <div className="image-caption">
                        <p className="caption-date">25 JUNE 2025</p>
                        <p className="caption-text">
                            Successful commencement of our online 1A round
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatesSection;
