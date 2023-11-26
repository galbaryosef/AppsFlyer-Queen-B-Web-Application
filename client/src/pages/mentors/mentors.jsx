import React, { useState, useEffect } from 'react';
import mentorService from '../../Services/api';
import SearchIcon from '../../components/SearchIcon/SearchIcon';
import MentorCard from '../../components/MentorCard/MentorCard';
import './mentors.css';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    mentorService.getMentors()
      .then(mentorsData => {
        setMentors(mentorsData);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredMentors = mentors.filter(mentor =>
      mentor.firstname.toLowerCase().includes(term.toLowerCase()) ||
      mentor.lastname.toLowerCase().includes(term.toLowerCase()) ||
      mentor.skills.toLowerCase().includes(term.toLowerCase())
    );

    setMentors(filteredMentors);
  };

  return (
    <div>
      <h1></h1>
      <SearchIcon onSearch={handleSearch} />
      <div className="mentor-list-container">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorList;
