import React from "react";

export default function ExcitingActivities() {
  return (
    <div className="relative bg-black text-white py-16 px-4 sm:px-6 md:px-10">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/MusicBattle3.webp')] bg-cover bg-center opacity-40"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-center mb-6 text-3xl sm:text-4xl md:text-6xl font-bold text-[#e4e2dd] font-montserrat">
          EXCITING ACTIVITIES
        </h1>

        {/* Paragraph under heading */}
        <p className="text-center max-w-3xl mx-auto mb-12 text-base sm:text-lg md:text-xl font-poppins leading-relaxed">
          Go beyond performances, offering audiences and artists an experience
          that combines culture, creativity, and celebration, with interactive
          opportunities at the event.
        </p>

        {/* Activity Sections */}
        <div className="flex flex-col gap-12">
          {/* 1. Taste */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-lg sm:text-xl md:text-2xl font-montserrat mb-2">
                Taste
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-poppins leading-relaxed">
                Taste carefully crafted dishes that bring variety and flavor to
                the event, making food a memorable part of the celebration.
              </p>
            </div>
          </div>

          {/* 2. Interactive Music Scenes */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-montserrat mb-2">
                Interactive Music Scenes
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-poppins leading-relaxed">
                Audiences are invited to step into the music itself take part in engaging performances and even winning opportunities and prizes through live activities.
              </p>
            </div>
          </div>

          {/* 3. Dedication */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-lg sm:text-xl md:text-2xl font-montserrat mb-2">
                Dedication
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-poppins leading-relaxed">
              Share music with someone specials this festive season.
              Songs and flowers can be dedicated to loved ones, adding 
              a personal touch to the celebrations.
              </p>
            </div>
          </div>

          {/* 4. Retro Rewind */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-montserrat mb-2">
                Retro Rewind
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-poppins leading-relaxed">
                Experience music and visuals in their rawest form—without filters or digital edits.
                 Relive the charm of an era where sound and sight carried pure meaning.
              </p>
            </div>
          </div>

          {/* 5. Stage Opportunities */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-lg sm:text-xl md:text-2xl font-montserrat mb-2">
                Stage Opportunities
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-poppins leading-relaxed">
                
               Selected participants will get the chance to perform live, 
               turning aspiration into reality with their first step and getting 
               chance to get stage opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
