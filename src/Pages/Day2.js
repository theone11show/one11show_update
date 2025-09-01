import React from "react";
import DayHeader from "../components/Day2Header";
import ExclusivePresence2 from "../components/ExclusivePresence2";
import GuestCards2 from "../components/GuestCards2";

const DesktopLayout = () => {
  return (
    <div
      className="hidden md:grid md:grid-cols-2 gap-12"
      style={{
        backgroundImage: "url('/day2bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* GuestCard on the left */}
      <div className="order-1">
        <GuestCards2 />
      </div>

      {/* Header + ExclusivePresence on the right */}
      <div className="order-2">
        <DayHeader />
        <ExclusivePresence2 />
      </div>
    </div>
  );
};

const MobileLayout = () => {
  return (
    <div
      className="block md:hidden space-y-8 px-4 overflow-x-hidden"
      style={{
        backgroundImage: "url('/day2bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <DayHeader />

      {/* Guest 1 */}
      <div>
        <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px] mt-16">
          PUJA-THEMED CULTURAL PERFORMANCE
        </h2>
        <div className="flex justify-center mt-8">
          <img
            src="/day2.webp"
            alt="day2"
            loading="lazy"
            className="rounded-xl w-full h-auto max-h-80 object-contain"
          />
        </div>
        <div className="mb-20 font-extrabold text-left">
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Day 2 brings a touch of tradition and celebration through specially
            curated cultural theme setting the mood for Durga Puja, offering a
            HeadStart for the puja festival.
          </p>
        </div>
        <hr className="border-t border-gray-300/50" />
      </div>

      {/* Guest 2 */}
      <div>
        <div className="flex justify-center">
          <img
            src="/cactussday2.webp"
            alt="cactussday2"
            loading="lazy"
            className="rounded-xl w-full h-auto max-h-80 object-contain"
          />
        </div>
        <div className="mb-20 font-extrabold text-left">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px] mt-16">
            CACTUSS
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Cactus is a Rock band from Kolkata, formed in 1992. The name was
            derived from the fact that the music scene was then devoid of life
            as in a desert and despite the odds, like a cactus, they survived.
          </p>
        </div>
        <hr className="border-t border-gray-300/50" />
      </div>

      {/* Guest 3 */}
      <div>
        <div className="flex justify-center">
          <img
            src="/fakiraday2.webp"
            loading="lazy"
            alt="Fakira"
            className="rounded-xl w-full h-auto max-h-80 object-contain"
          />
        </div>
        <div className="mt-16 mb-20 font-extrabold text-left">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px]">
            FAKIRA
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed mt-4">
            Fakira is a renowned Bengali music band, known for blending soulful
            folk traditions with contemporary sounds. They are now coming to
            Siliguri to light up the evening with their mesmerizing live
            performance at The One11 Show.
          </p>
        </div>
        <hr className="border-t border-gray-300/50" />
      </div>

      {/* Guest 4 */}
      <div>
        <div className="flex justify-center">
          <img
            src="/suprised.webp"
            loading="lazy"
            alt="suprised"
            className="rounded-xl w-full h-auto max-h-80 object-contain mt-4"
          />
        </div>
        <div className="mt-16 mb-20 text-left">
          <h2 className="font-['Montserrat'] text-[#e4e2dd] text-[27px] font-extrabold mt-16">
            SURPRISE PERFORMANCES
          </h2>
          <p className="font-['Montserrat'] text-white text-[14px] leading-relaxed pb-5">
            To keep the excitement alive, we've lined up surprise performances
            that will be revealed only on the day of event.
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








