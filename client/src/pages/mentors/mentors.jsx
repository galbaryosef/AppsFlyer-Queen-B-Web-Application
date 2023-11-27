import React, { useEffect, useState } from 'react';
import mentorService from '../../Services/api';
import MentorCard from '../../components/MentorCard/MentorCard';
import SearchIcon from '../../components/SearchIcon/SearchIcon';
import './mentors.css';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load all mentors by default
    loadAllMentors();
  }, []);

  const loadAllMentors = async () => {
    try {
      const allMentors = await mentorService.getMentors();
      setMentors(allMentors);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const handleSearch = async (term) => {
    try {
      setSearchTerm(term);
      // Load all mentors if search term is empty
      if (term === '') {
        loadAllMentors();
      } else {
        //Otherwise, search mentors by skill
        const filteredMentors = await mentorService.searchMentorsBySkill(term);
        setMentors(filteredMentors);
      }
    } catch (error) {
      console.error('Error searching mentors:', error);
    }
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
