import React from "react";

export default function ExcitingActivities() {
  return (
    <div
      className="relative bg-black text-white py-16 px-6"
      style={{
        paddingBottom: "12rem",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/MusicBattle3.webp')] bg-cover bg-center opacity-40"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1
          className="text-center mb-6"
          style={{
           fontSize: "clamp(28px, 6vw, 72px)",
            color: "#e4e2dd",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          EXCITING ACTIVITIES
        </h1>

        {/* Paragraph under heading */}
        <p
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            fontSize: "18.5px",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "1.8",
          }}
        >
          Go beyond performances, offering audiences and artists an experience
          that combines culture, creativity, and celebration, with interactive
          opportunities at the event.
        </p>

        {/* Static Activity Sections */}
        <div className="flex flex-col gap-16">
          {/* 1. Taste (Right aligned text) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-right">
              <h2
                style={{
                  fontSize: "18.5px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                Taste
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.7",
                  paddingTop:"1rem"
                }}
              >
                Taste carefully crafted dishes that bring variety and flavor,  to the  event, making food a memorable part of the celebration.
    
              </p>
            </div> 
          </div>

          {/* 2. Interactive Music Scenes (Left aligned text) */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-left">
              <h2
                style={{
                  fontSize: "18.5px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                Interactive Music Scenes
              </h2>
              <p
                style={{
                  fontSize: "18.5px",
                  color: "#fffff",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.7",
                  paddingTop:"1rem",
                }}
              >
               Audiences are invited to step into the music itself, take part in <br/> engaging performances and even winning opportunities and <br/> prizes through live activities.
    
              </p>
            </div>
          </div>

          {/* 3. Dedication (Right aligned text) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-right">
              <h2
                style={{
                  fontSize: "18.5px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                Dedication
              </h2>
              <p
                style={{
                  fontSize: "18.5px",
                  color: "#fffff",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.7",
                  paddingTop:"1rem"
                }}
              >
                Share music with someone special this festive season. Songs <br/> and flowers can be dedicated to loved ones, adding a personal <br/> touch to the celebrations.
    
              </p>
            </div>
          </div>
          {/* 2. Interactive Music Scenes (Left aligned text) */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-left">
              <h2
                style={{
                  fontSize: "18.5px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                Retro Rewind
              </h2>
              <p
                style={{
                  fontSize: "18.5px",
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.7",
                  paddingTop:"1rem",
                }}
              >
              Experience music and visuals in their rawest form—without <br/>filters or digital edits. Relive the charm of an era where sound <br/> and sight carried pure meaning.
              </p>
            </div>
          </div>
          {/* 3. Dedication (Right aligned text) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-right">
              <h2
                style={{
                  fontSize: "18.5px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                stage Opportunities
              </h2>
              <p
                style={{
                  fontSize: "18.5px",
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.7",
                  paddingTop:"1rem"
                }}
              >
              Selected participants will get the chance to perform live, <br/>turning aspiration into reality with their first step and getting <br/> chance to get stage opportunities.

               
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
