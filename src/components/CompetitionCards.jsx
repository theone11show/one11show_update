import React from 'react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 'bands-section',
    title: 'Battle of Bands',
    subtitle: 'A thrilling face-off between top bands showcasing their musical synergy, energy, and performance skills.',
    image: 'https://placehold.co/600x400/333333/00ffff?text=Battle+of+Bands',
    alt: 'Battle of Bands Poster',
    color: 'text-primary-red',
  },
  {
    id: 'singer-songwriter-section',
    title: 'Singer/Songwriter Battle',
    subtitle: 'Original voices and lyrical stories come alive as singer-songwriters.',
    image: 'https://placehold.co/600x400/333333/ff00ff?text=Singer-Songwriters',
    alt: 'Singer-Songwriters Poster',
  },
  {
    id: 'musicians-section',
    title: 'Musicians (Instrumental)',
    subtitle: 'An epic competition where instrumentalists and solo artists push musical boundaries to win.',
    image: 'https://placehold.co/600x400/333333/ffff00?text=Musicians',
    alt: 'Musicians Poster',
  },
  {
    id: 'rappers-section',
    title: 'Battle of Rappers',
    subtitle: 'A soulful showcase of vocal talent, range, and expression from upcoming vocal powerhouses.',
    image: 'https://placehold.co/600x400/333333/a020f0?text=Rappers',
    alt: 'Rappers Poster',
  },
  {
    id: 'djs-section',
    title: 'Battle of DJs',
    subtitle: 'Spin your beats and show your DJ skills in a battle of sound, style, and energy',
    image: 'https://placehold.co/600x400/333333/ffa500?text=DJs',
    alt: 'DJs Poster',
  },
  {
    id: 'challenge-section',
    title: '48-Hours Music Making Challenge',
    subtitle: 'For Producers: Create a Track in 2 Days!',
    image: 'https://placehold.co/600x400/333333/00ccff?text=48H+Music+Challenge',
    alt: '48 Hours Music Making Challenge Poster',
  },
  {
    id: 'upcoming-events',
    title: 'Upcoming Events',
    subtitle: 'Stay Tuned for New Announcements!',
    image: 'https://placehold.co/600x400/333333/00f0c0?text=More+Events',
    alt: 'More Events Poster',
  },
];

const CompletionCards = () => {
  const navigate = useNavigate();

  const handleRegister = (eventTitle) => {
    const scrollTop = window.innerWidth <= 768 ? 700 : 100;
    window.scrollTo({ top: scrollTop });

    setTimeout(() => {
      navigate('/payment-instructions', {
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
              className="bg-[var(--color-dark-charcoal)] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img src={event.image} alt={event.alt} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-[var(--font-anton)] text-[var(--color-primary-red)] mb-2">
                  {event.title}
                </h3>
                <p className="text-[var(--color-cream-white)] text-lg font-[var(--font-antonio)] mb-4">
                  {event.subtitle}
                </p>
                <button
                  onClick={() => handleRegister(event.title)}
                  className="bg-[var(--color-primary-red)] text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 transition"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletionCards;
