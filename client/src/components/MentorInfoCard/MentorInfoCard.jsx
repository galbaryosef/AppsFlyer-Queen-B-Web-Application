import React from 'react';
import './MentorInfoCard.css';

const MentorInfoCard = ({ mentor }) => {
  return (
    <div className="card">
      <div className="photo-container">
        <img src={mentor.photo} alt="Mentor" className="photo" />
      </div>
      <div className="text-container">
        <strong>{mentor.firstname} {mentor.lastname}</strong><br />
        {mentor.mainSkills && Array.isArray(mentor.mainSkills) && (
          <div className="skills-container">
            {mentor.mainSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        )}
        <p className="about-section"><strong>About {mentor.firstname}:</strong></p>
        <p>{mentor.biography}</p>
        <p>Contact information</p>
      </div>
    </div>
  );
};

export default MentorInfoCard;