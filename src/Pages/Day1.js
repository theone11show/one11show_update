import React from "react";
import DayHeader from "../components/Day1Header";
import ExclusivePresence from "../components/ExclusivePresence";
import GuestCard from "../components/GuestCard";

const DesktopLayout = () => {
  return (
    <div className="hidden md:grid md:grid-cols-2 gap-12"
     style={{
    backgroundImage: "url('/Day1-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <div>
        <DayHeader />
        <ExclusivePresence />
      </div>
      <div>
        <GuestCard />
      </div>
    </div>
  );
};

const MobileLayout = () => {
  return (
    <div className="block md:hidden space-y-8 px-4  overflow-x-hidden"
  style={{
    backgroundImage: "url('/Day1-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <DayHeader />

      {/* Guest 1 */}
      <div>
        <img src="/Rj-day1.webp" alt="RJ Praveen"  loading="lazy" className="rounded-xl" />
        <div className="mb-20 font-extrabold">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px] mt-16 " >
            EXCLUSIVE PRESENCE
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Look who gets pranked next by RJ Praveen at the show, as he hosts
            the show and takes the event next level.
          </p>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Talented dual-voice Shri Sairam Iyer will join as the judge for the
            semi-finals of the one1 music battle. See as he, along with other
            judges, selects the finalists for the music battle.
          </p>
        </div>
      </div>

      {/* Guest 2 */}
      <div>
        <img src="/SaiRam.webp" alt="Sai Ram"  loading="lazy" className="rounded-xl" />
        <div className="mb-20 font-extrabold">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px] mt-16 " >
            Music battle series
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Semi-finalists from across India will find themselves on this stage
            near you. From bands, singer-songwriters, rappers, musicians—find
            out whether they have what it takes to go to the finals.
          </p>
        </div>
      </div>
       {/* Guest 3 */}
      <div>
        <img src="/Dj-day1.webp" loading="lazy" alt="Sai Ram" className="rounded-xl" />
        <div className="mt-16 mb-20 font-extrabold">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px]">
            Dj night with TASIA
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Electrifying DJ Night to end the day. Dj Tasia will take over the
            console, spinning dynamic beats that promise to uplift the crowd
            and keep the night alive.
          </p>
        </div>
        </div>
        <div>
        <img src="/crowd.webp"  loading="lazy" alt="Sai Ram" className="rounded-xl" mt-4 />
        <div className="mt-16 mb-20">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px] font-extrabold mt-16">
            The Biggest Artist Meetup
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed">
            The first day will feature the biggest artist meetup in North Bengal,
            where artists of every genre, taste, and niche will come together
            to connect, bond, and network beyond boundaries of language and genre,
            over a single roof of music.
          </p>
        </div>
      </div>
        </div>
   
  );
};

const GuestsSection = () => {
  return (
    <div>
      <DesktopLayout />
      <MobileLayout />
    </div>
  );
};

export default GuestsSection;
