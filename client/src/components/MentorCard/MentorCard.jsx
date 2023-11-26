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
        {mentor.skills && Array.isArray(mentor.skills) && (
          <div className="skills-container">
            {mentor.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorCard;
