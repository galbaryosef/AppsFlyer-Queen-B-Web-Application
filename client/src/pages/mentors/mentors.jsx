import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mentorService from '../../Services/api';
import MentorCard from '../../components/MentorCard/MentorCard';
import SearchIcon from '../../components/SearchIcon/SearchIcon';
import './mentors.css';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //// Use useNavigate hook for programmatic navigation
  const navigate = useNavigate(); 

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

  // Function to navigate to the mentor info page
  const goToMentorInfo = (mentorId) => {
    navigate(`/mentorinfo/${mentorId}`);
  };

  return (
    <div>
      <h1></h1>
      <SearchIcon onSearch={handleSearch} />
      <div className="mentor-list-container">
      {mentors.map((mentor) => (
          <Link to={`/mentorinfo/${mentor.id}`} key={mentor.id} onClick={() => goToMentorInfo(mentor.id)}>
            <MentorCard mentor={mentor} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
