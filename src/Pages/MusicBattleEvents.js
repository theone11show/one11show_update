import React from 'react'
import MusicBattleDescripstion from "../components/MusicBattleDescripstion";
import EventSchedule from "../components/EventSchedule";
import ExcitingActivitie from "../components/ExictingActivite";
import Address from "../components/Address";
const MusicBattleEvents = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <MusicBattleDescripstion />
      <EventSchedule />
      <ExcitingActivitie />
      <Address />
    </div>
  );
};


export default MusicBattleEvents