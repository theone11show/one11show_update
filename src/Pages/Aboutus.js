import React from "react";
import TeamDescription from "../components/TeamDescription";
import NewsLetter from "../components/NewsLetter";

const Aboutus = () => {
  return (
    <div>
    <section
   className="relative bg-conver bg-center bg-no-repeat min-h-screen flex flex-col justify-center pb-[60px]  overflow-x-hidden"
  style={{ backgroundImage: "url('/aboutus.webp')" }}
>
  {/* Title */}
  <h2 className="   text-[40px] md:text-[56px] font-anton text-white text-center mt-[550px]">
  About Us
</h2>

 {/* About description */}
<div className="md:- mt-20  text-[14px] sm:text-[16px] md:text-[24px] text-[#ffffff] leading-relaxed text-center font-[Montserrat] relative z-10">
  <span>
    The One11 Show is an artist’s launchpad dedicated to discovering, mentoring, and launching authentic
  </span>
  <br />
  <span>
    musical and artistic talent. Powered by The Chordifiers Studio, we unite passionate artists and skilled
  </span>
  <br />
  <span>
    industry professionals committed to nurturing raw talent.
  </span>
  <br />
  <span>
    Through vibrant music battles, live sessions, and engaging podcasts, we provide artists with the
  </span>
  <br />
  <span>
    structure, mentorship, and opportunities they need to shine. We celebrate and uplift the vibrant creative
  </span>
  <br />
  <span>
    community around the world.
  </span>
</div>


    </section>
    <TeamDescription/>
    <NewsLetter/>
  </div>


  );
};

export default Aboutus;
