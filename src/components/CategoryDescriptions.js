import React from 'react';
import './CategoryDescriptions.css';

const categories = [
  {
    title: 'Battle of Bands',
    description:
      'Bands are asked to show their collective power and synchronization among them, where they would go head to head with other talented groups.',
  },
  {
    title: 'Singer-Songwriters',
    description:
      'This is your moment to bare your soul through melody and lyrics. This category will allow you showcase your authentic voices and the creativity of songwriting.',
  },
  {
    title: 'DJs',
    description:
      "DJ’s are asked to ignite the crowds by their and skills and talents, by performing songs or even better their own originally composed tracks and remixes.",
  },
  {
    title: 'Musicians',
    description:
      'Instrumentalists of all kinds, Guitarists, Drummers, Pianists, Violinists, and more. Let’s have your instrument do the talking.',
  },
  {
    title: 'Rappers',
    description:
      'Step up to the mic and drop Bangers. Combine rhythm, rhyme, and powerful storytelling to captivate the listeners, this category will judge your lyrical finesse, stage presence, and originality.',
  },
  {
    title: '48 hour music challenge',
    description:
      'Participants will be judged according their ability to create, compose and write originals on any given topic by us.',
  },
];

const CategoryDescriptions = () => {
  return (
    <div className="category-description-container">
      {categories.map((cat, index) => (
        <div key={index} className="category-block">
          <h3>{cat.title}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryDescriptions;
