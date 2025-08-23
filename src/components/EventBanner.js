import React from "react";

const EventBanner = () => {
  return (
    <div className="relative flex items-center justify-center bg-orange-100">
      <img
        src="https://i.ibb.co/2q2ZP7w/concert.jpg" // replace with your image
        alt="concert"
        className="w-full h-full object-cover"
      />
      <div className="absolute text-7xl font-bold text-black">1.11</div>
    </div>
  );
};

export default EventBanner;
