import React from "react";

const EventBanner = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {/* Background image covers parent */}
      <img
        src="/background3.webp"
        alt="concert"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h2 className="text-sm sm:text-lg md:text-2xl font-bold mb-2">
            Live Concert Event
          </h2>
          <p className="text-[10px] sm:text-sm md:text-base">
            Join us for an unforgettable experience
          </p>
        </div>
      </div>
    </div>
  )
}
export default EventBanner;
