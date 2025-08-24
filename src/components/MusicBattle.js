import React from "react";

const MusicBattle = () => {
  return (
    <div className="relative w-full h-[140vh] flex items-center justify-center text-center font-[Poppins]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://xwbiqeigjdpuzfqw.public.blob.vercel-storage.com/concert.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-white">
        {/* Subtitle */}
        <p className="text-sm md:text-base tracking-[6px] mb-3 uppercase text-gray-300">
          SEASON 1
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-green-500 mb-8">
          MUSIC BATTLE SERIES
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8 uppercase tracking-wide">
          The One11 Music Battle Season 1, begins its journey on 20 <br />
          <span className="font-bold text-white">September 2025</span>, bringing together artists, audiences,<br />
          and creative communities for an exciting opening day.
          <br /><br />
          From the largest artist gathering in North Bengal to engaging
          performances and cultural showcases.
        </p>

        {/* Button */}
        <button className="bg-[#d0021a] hover:bg-[#b00117] text-black font-bold px-8 py-3 rounded-full text-lg transition-all duration-300">
          Know More
        </button>
      </div>

      {/* Diagonal Bottom Shape */}
<div
  className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-r from-transparent to-transparent"
  style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%, 0% 100%)" }}
></div>

    </div>
  );
};

export default MusicBattle;
