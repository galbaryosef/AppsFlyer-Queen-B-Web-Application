import React, { useState, useEffect } from 'react';
import mentorService from '../../Services/mentorServices';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    mentorService.getMentors()
      .then(mentorsData => {
        setMentors(mentorsData);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  return (
    <div>
      <h2>Mentor List</h2>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>
            <strong>{mentor.firstname} {mentor.lastname}</strong> - {mentor.skills}<br />
            Phone: {mentor.phone}<br />
            Biography: {mentor.biography}<br />
            LinkedIn: <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">{mentor.linkedin}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
