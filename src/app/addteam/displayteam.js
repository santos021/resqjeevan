// displayteam.js
import React from 'react';
import DisplayTeam from '../components/DisplayTeam';

const DisplayTeamPage = ({ query }) => {
  const teamDetails = JSON.parse(query.teamDetails || '[]');

  return <DisplayTeam teamDetails={teamDetails} />;
};

export default DisplayTeamPage;
