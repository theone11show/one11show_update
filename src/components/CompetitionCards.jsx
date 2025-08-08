import React from 'react';
import { useNavigate } from 'react-router-dom';
import music from '../assets/BattleofMusic.jpg';
import Dj from '../assets/BattleofDj.jpg';
import Bands from '../assets/BattleofBands.jpg';
import Rappers from '../assets/BattleofRappers.jpg';
import songs from '../assets/Songs.jpg';
import Upcomming from '../assets/UpComming.png'


const events = [
    {
    id: 'upcoming-events',
    title: 'Cactus X Fakira',
    subtitle: 'Join the waitlist now!!',
    image: Upcomming,
    alt: 'Upcoming Events Poster',
  },
  {
    id: 'bands-section',
    title: 'Battle of Bands',
    subtitle:
      'A thrilling face-off between top bands showcasing their musical synergy, energy, and performance skills.',
    image: Bands,
    alt: 'Battle of Bands Poster',
    color: 'text-primary-red',
  },
  {
    id: 'singer-songwriter-section',
    title: 'Singer/Songwriter Battle',
    subtitle:
      'Original voices and lyrical stories come alive as singer-songwriters.',
    image: songs,
    alt: 'Singer-Songwriters Poster',
  },
  {
    id: 'musicians-section',
    title: 'Musicians (Instrumental)',
    subtitle:
      'An epic competition where instrumentalists and solo artists push musical boundaries to win.',
    image: music,
    alt: 'Musicians Poster',
  },
  {
    id: 'rappers-section',
    title: 'Battle of Rappers',
    subtitle:
      'A soulful showcase of vocal talent, range, and expression from upcoming vocal powerhouses.',
    image: Rappers,
    alt: 'Rappers Poster',
  },
  {
    id: 'djs-section',
    title: 'Battle of DJs',
    subtitle:
      'Spin your beats and show your DJ skills in a battle of sound, style, and energy',
    image: Dj,
    alt: 'DJs Poster',
  },
 

];

const CompetitionCards = () => {
  const navigate = useNavigate();

  const handleRegister = (eventTitle) => {
    const scrollTop = window.innerWidth <= 768 ? 700 : 100;
    window.scrollTo({ top: scrollTop });

    setTimeout(() => {
      navigate('/register', {
        state: { category: eventTitle },
      });
    }, 200);
  };

  return (
    <section
      id="events"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-charcoal-black)' }}
    >
      <img
        src="https://placehold.co/600x600/171616/f81a26/png?text=Vinyl+Disc"
        alt="Animated Vinyl Disc"
        className="absolute opacity-20 w-[400px] md:w-[600px] left-1/2 -translate-x-1/2 top-10 z-0 animate-spin-slow"
      />

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-[var(--font-null-feel)] text-center text-[var(--color-cream-white)] mb-12">
          Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              id={event.id}
            className="bg-[var(--color-dark-charcoal)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_4px_rgba(0,255,255,0.5)]"

            >
              <img
                src={event.image}
                alt={event.alt}
                className="w-full h-100 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[var(--font-anton)] text-[var(--color-primary-red)] mb-2">
                  {event.title}
                </h3>
                <p className="text-[var(--color-cream-white)] text-lg font-[var(--font-antonio)] mb-4">
                  {event.subtitle}
                </p>

                {event.id === 'upcoming-events' ? (
                  <button
                    onClick={() => navigate('/join')}
                    className="bg-[var(--color-primary-red)] text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 transition"
                  >
                    Join Waitlist
                  </button>
                ) : (
                  <button
                    onClick={() => handleRegister(event.title)}
                    className="bg-[var(--color-primary-red)] text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 transition"
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionCards;
