import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CompetitionCards.css';

const cardData = [
  {
    title: 'Battle of Bands',
    description:
      'A thrilling face-off between top bands showcasing their musical synergy, energy, and performance skills.',
    link: '/Results/bands.jpg',
  },
  {
    title: 'Battle of Singers Songwriters',
    description:
      'Original voices and lyrical stories come alive as singer-songwriters.',
    link: '/Results/signer_songwriters.png',
  },
  {
    title: 'Battle of Musicians',
    description:
      'An epic competition where instrumentalists and solo artists push musical boundaries to win.',
    link: '/Results/musicians.png',
  },
  {
    title: 'Battle of Rappers',
    description:
      'A soulful showcase of vocal talent, range, and expression from upcoming vocal powerhouses.',
    link: '/Results/rappers.jpg',
  },
  {
    title:'Battle of DJs' ,
 description:'Spin your beats and show your DJ skills in a battle of sound, style, and energy',
  link: '/Results/dj.jpg'
  }
];

const CompetitionCards = () => {
  const navigate = useNavigate();

  const handleProceed = (title) => {
    const isMobile = window.innerWidth <= 768;
    const scrollTop = isMobile ? 700 : 100;
    window.scrollTo({ top: scrollTop });

    setTimeout(() => {
      navigate('/payment-instructions', {
        state: { category: title },
      });
    }, 200);
  };

  return (
    <div className="card-section">
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <button className="card-button" onClick={() => handleProceed(card.title)}>
              Proceed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionCards;
