// import React, { useEffect, useRef } from 'react';
// import { FaUserTie } from 'react-icons/fa';

// const OurTeamComponents = () => {
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = 'translateY(0)';
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     wrapperRef.current
//       ?.querySelectorAll('[data-reveal]')
//       .forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const team = [
//     { name: 'John Doe', role: 'Founder & CEO', img: 'https://via.placeholder.com/150' },
//     { name: 'Jane Smith', role: 'Creative Director', img: 'https://via.placeholder.com/150' },
//     { name: 'Mike Johnson', role: 'Music Producer', img: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <div
//       ref={wrapperRef}
//       className="min-h-screen bg-[#1c1c1e] pt-20 sm:pt-28 pb-10 px-4 sm:px-6 flex items-center justify-center"
//     >
//       <div className="w-full max-w-7xl bg-white/10 backdrop-blur-md text-[#E2E2E2] rounded-2xl border border-white/20 shadow-lg hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300 p-5 sm:p-8">
//         {/* Header */}
//         <div
//           data-reveal
//           style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
//           className="text-center"
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">Our Team</h1>
//           <p className="text-gray-300 mb-6 sm:mb-10 text-sm sm:text-base md:text-lg">
//             Meet the talented minds behind The One11 Show
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
//           {team.map((member, idx) => (
//             <div
//               key={idx}
//               data-reveal
//               style={{
//                 opacity: 0,
//                 transform: 'translateY(40px)',
//                 transition: `opacity 0.7s ease ${idx * 0.1}s, transform 0.7s ease ${idx * 0.1}s`,
//               }}
//               className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 flex flex-col items-center text-center border border-white/10 shadow-md hover:shadow-[0_0_20px_#ff6495] transition-transform hover:scale-105 duration-300"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-pink-500 mb-4 object-cover"
//               />
//               <h2 className="text-base sm:text-lg md:text-xl font-bold text-white">{member.name}</h2>
//               <p className="text-pink-400 text-sm sm:text-base">{member.role}</p>
//               <FaUserTie className="text-gray-400 mt-3 text-lg sm:text-xl md:text-2xl" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeamComponents;



// import React, { useEffect, useRef } from 'react';

// const OurTeamComponents = () => {
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = 'translateY(0)';
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     wrapperRef.current
//       ?.querySelectorAll('[data-reveal]')
//       .forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={wrapperRef}
//       className="min-h-screen bg-[#1c1c1e] pt-20 sm:pt-28 pb-10 px-4 sm:px-6 flex items-center justify-center"
//     >
//       <div className="w-full max-w-7xl bg-white/10 backdrop-blur-md text-[#E2E2E2] rounded-2xl border border-white/20 shadow-lg hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300 p-5 sm:p-8">
//         {/* Header */}
//         <div
//           data-reveal
//           style={{
//             opacity: 0,
//             transform: 'translateY(40px)',
//             transition: 'opacity 0.7s ease, transform 0.7s ease',
//           }}
//           className="text-center"
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
//             Our Team
//           </h1>
//           <p className="text-gray-300 mb-6 sm:mb-10 text-sm sm:text-base md:text-lg">
//             Meet the talented minds behind The One11 Show
//           </p>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeamComponents;



// import React, { useEffect, useRef, useState } from "react";

// const OurTeamComponents = () => {
//   const wrapperRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);

// //   Scroll reveal animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = "translateY(0)";
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     wrapperRef.current
//       ?.querySelectorAll("[data-reveal]")
//       .forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const fullContent = (
//     <>
//       <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mt-6 mb-2">
//         The One11 Show Team
//       </h2>
//       <p className="mb-4">
//         The One11 Show is a dynamic platform dedicated to discovering,
//         mentoring, and launching authentic musical and artistic talent. Based in
//         Siliguri and powered by The Chordifiers Studio, our team is made up of
//         passionate professionals ranging from young and talented artists to
//         skilled industry professionals, all unified by a single purpose: to
//         create a true artist launchpad that supports raw talent with structure,
//         mentorship, and opportunity.
//       </p>

//       <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
//         Creatives & Visionaries
//       </h3>
//       <p className="mb-4">
//         With diverse expertise in music, art, and production, our team nurtures
//         creativity and originality. We believe in bringing the unseen and
//         unheard talent to the forefront through thoughtfully curated music
//         battles, live sessions, and engaging podcasts.
//       </p>

//       <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
//         Organizers & Strategists
//       </h3>
//       <p className="mb-4">
//         From event conceptualization to flawless execution, our team meticulously
//         plans and coordinates each element of The One11 Show experience,
//         ensuring every event is a professional and memorable platform for
//         artists and audiences alike.
//       </p>

//       <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
//         Community Enthusiasts
//       </h3>
//       <p className="mb-4">
//         Deeply rooted in Siliguri and Northeast India, we foster strong
//         connections with local artists and audiences, empowering grassroots
//         culture and inspiring a new generation of creators.
//       </p>

//       <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
//         Technical Experts
//       </h3>
//       <p className="mb-4">
//         Our state-of-the-art production team handles everything from sound
//         engineering to creative stage design, delivering superior quality that
//         amplifies every artist's expression.
//       </p>

//       <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mt-6 mb-2">
//         Our Valued Partners
//       </h2>
//       <p className="mb-4">
//         The One11 Show is proud to collaborate with{" "}
//         <span className="font-semibold">Merrycraft Entertainment</span>, our
//         dedicated event management partner, who ensures seamless organization
//         and execution of every live event. Additionally,{" "}
//         <span className="font-semibold">The Corporate Pot</span> serves as our
//         media partner, expanding our reach and providing dynamic media support
//         to keep our community connected and informed.
//       </p>

//       <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mt-6 mb-2">
//         Our Mission
//       </h2>
//       <p>
//         We are committed to providing a professional, authentic, and inclusive
//         platform that highlights true talent, nurtures creative growth, and
//         connects artists with opportunities and audiences. Join us as we
//         celebrate the vibrant culture and emerging music scene of Siliguri and
//         beyond.
//       </p>
//     </>
//   );

//   const shortContent = (
//     <p>
//       The One11 Show is a dynamic platform dedicated to discovering, mentoring,
//       and launching authentic musical and artistic talent. Based in Siliguri and
//       powered by The Chordifiers Studio, our team is made up of passionate
//       professionals unified by a single purpose: to create a true artist
//       launchpad that supports raw talent with mentorship and opportunity...
//     </p>
//   );

//   return (
//     <div
//       ref={wrapperRef}
//       className="min-h-screen bg-[#1c1c1e] pt-20 sm:pt-28 pb-10 px-4 sm:px-6 flex items-center justify-center"
//     >
//       <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md text-[#E2E2E2] rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300">
//         {/* Header */}
//         <div
//           data-reveal
//           style={{
//             opacity: 0,
//             transform: "translateY(40px)",
//             transition: "opacity 0.7s ease, transform 0.7s ease",
//           }}
//           className="bg-gradient-to-r from-pink-500 to-red-500 p-6 sm:p-8 text-center"
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
//             Our Team
//           </h1>
//           <p className="mt-2 text-sm sm:text-base md:text-lg opacity-90">
//             Meet the talented minds behind The One11 Show
//           </p>
//         </div>

//         {/* Content */}
//         <div className="p-5 sm:p-8 space-y-4 leading-relaxed text-sm sm:text-base md:text-lg">
//           <div
//             data-reveal
//             style={{
//               opacity: 0,
//               transform: "translateY(40px)",
//               transition: "opacity 0.7s ease, transform 0.7s ease",
//             }}
//           >
//             {expanded ? fullContent : shortContent}

//             {/* Read More / Less button */}
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="mt-4 inline-block px-4 py-2 text-sm sm:text-base font-medium text-pink-400 border border-pink-400 rounded-lg hover:bg-pink-400 hover:text-white transition-colors duration-300"
//             >
//               {expanded ? "Read Less" : "Read More"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeamComponents;




import React, { useEffect, useRef, useState } from "react";

const OurTeamComponents = () => {
  const wrapperRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 }
    );

    wrapperRef.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const fullContent = (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mt-6 mb-2">
        The One11 Show Team
      </h2>
      <p className="mb-4">
        The One11 Show is a dynamic platform dedicated to discovering,
        mentoring, and launching authentic musical and artistic talent. Based in
        Siliguri and powered by The Chordifiers Studio, our team is made up of
        passionate professionals ranging from young and talented artists to
        skilled industry professionals, all unified by a single purpose: to
        create a true artist launchpad that supports raw talent with structure,
        mentorship, and opportunity.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
        Creatives & Visionaries
      </h3>
      <p className="mb-4">
        With diverse expertise in music, art, and production, our team nurtures
        creativity and originality. We believe in bringing the unseen and
        unheard talent to the forefront through thoughtfully curated music
        battles, live sessions, and engaging podcasts.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
        Organizers & Strategists
      </h3>
      <p className="mb-4">
        From event conceptualization to flawless execution, our team meticulously
        plans and coordinates each element of The One11 Show experience,
        ensuring every event is a professional and memorable platform for
        artists and audiences alike.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
        Community Enthusiasts
      </h3>
      <p className="mb-4">
        Deeply rooted in Siliguri and Northeast India, we foster strong
        connections with local artists and audiences, empowering grassroots
        culture and inspiring a new generation of creators.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mt-4 mb-2">
        Technical Experts
      </h3>
      <p className="mb-4">
        Our state-of-the-art production team handles everything from sound
        engineering to creative stage design, delivering superior quality that
        amplifies every artist's expression.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mt-6 mb-2">
        Our Valued Partners
      </h2>
      <p className="mb-4">
        The One11 Show is proud to collaborate with{" "}
        <span className="font-semibold">Merrycraft Entertainment</span>, our
        dedicated event management partner, who ensures seamless organization
        and execution of every live event. Additionally,{" "}
        <span className="font-semibold">The Corporate Pot</span> serves as our
        media partner, expanding our reach and providing dynamic media support
        to keep our community connected and informed.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mt-6 mb-2">
        Our Mission
      </h2>
      <p>
        We are committed to providing a professional, authentic, and inclusive
        platform that highlights true talent, nurtures creative growth, and
        connects artists with opportunities and audiences. Join us as we
        celebrate the vibrant culture and emerging music scene of Siliguri and
        beyond.
      </p>
    </>
  );

  const shortContent = (
    <p>
      The One11 Show is a dynamic platform dedicated to discovering, mentoring,
      and launching authentic musical and artistic talent. Based in Siliguri and
      powered by The Chordifiers Studio, our team is made up of passionate
      professionals unified by a single purpose: to create a true artist
      launchpad that supports raw talent with mentorship and opportunity...
    </p>
  );

  return (
    <div
      ref={wrapperRef}
      className="min-h-screen bg-[#1c1c1e] pt-20 sm:pt-28 pb-10 px-4 sm:px-6 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl min-h-[500px] bg-white/10 backdrop-blur-md text-[#E2E2E2] rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-[0_0_35px_#ffffff] transition-shadow duration-300">
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="bg-gradient-to-r from-pink-500 to-red-500 p-6 sm:p-8 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Our Team
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg opacity-90">
            Meet the talented minds behind The One11 Show
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {expanded ? fullContent : shortContent}

            {/* Read More / Less button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-block px-4 py-2 text-sm sm:text-base font-medium text-pink-400 border border-pink-400 rounded-lg hover:bg-pink-400 hover:text-white transition-colors duration-300"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponents;

