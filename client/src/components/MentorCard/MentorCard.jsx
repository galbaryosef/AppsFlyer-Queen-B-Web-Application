import React from 'react';
import './MentorCard.css';

const MentorCard = ({ mentor }) => {
  return (
    <div className="card">
      <div className="photo-container">
        <img src={mentor.photo} alt="Mentor" className="photo" />
      </div>
      <div className="text-container">
        <strong>{mentor.firstname} {mentor.lastname}</strong><br />
        <span style={{ fontWeight:'initial' }}>{mentor.skills}</span><br />
      </div>
    </div>
  );
};

export default MentorCard;
