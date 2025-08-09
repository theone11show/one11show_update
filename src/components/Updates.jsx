import React from 'react';
import UpdatesSection from './UpdatesSection';
import CompetitionCards from './CompetitionCards';
import UpcomingEvents from './UpcomingEvents'
 
function updates() {
  return (
    <div>
      <UpdatesSection/>
      <UpcomingEvents/>
      <CompetitionCards/>
    </div>
  );
}

export default updates;
