import React from 'react'

const TeamDescription = () => {
  return (
    <div className="bg-[#1c1c1c] py-10 relative">
      {/* Description */}
      <div className="relative z-10 py-16">
        <div className="mt-6 text-[14px] sm:text-[16px] md:text-[22px] text-[#cdcdcd] leading-relaxed text-center font-[Poppins] relative z-10">
          <span>
            We are a unified group of industry music professionals, including producers, directors,
          </span>
          <br />
          <span>
            artists, performers, and experienced event managers.
          </span>
          <br />
          <span>
            Our shared mission is to provide an unbiased platform for raw talents.
          </span>
        </div>

        {/* Team Background Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-end">
          <span className="ml-40 text-[140px] sm:text-[160px] text-[#cdcdcd]/20 font-['Anton'] leading-none">
            Team
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamDescription
