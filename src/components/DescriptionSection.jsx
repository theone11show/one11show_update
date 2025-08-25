const AboutSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-r from-[#C90D16] to-[#520505] text-white flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 rounded shadow-lg text-center">
        {/* Content */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-[85%]">
          <p className="text-[10px] sm:text-sm md:text-base font-medium">
            An artist launchpad dedicated to discovering, mentoring, and <br />
            launching authentic musical and artistic talent.
          </p>
          <p className="text-[8px] sm:text-xs md:text-base leading-relaxed">
            Powered by The Chordifiers Studio, we unite passionate artists and skilled industry professionals committed
            to nurturing raw talent with vibrant music battles, live sessions, engaging podcasts, and more.
          </p>
        </div>

        {/* Button */}
        <button className="mt-3 sm:mt-6 md:mt-8 bg-pink-500 hover:bg-pink-600 text-black font-semibold px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-full transition text-[10px] sm:text-sm md:text-base">
          Know More
        </button>
      </div>
    </div>
  )
}

export default AboutSection
