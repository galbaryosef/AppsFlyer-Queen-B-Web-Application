// MentorInfoPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorInfoCard from '../../components/MentorInfoCard/MentorInfoCard';
import './mentorInfo.css'; // Add your styles

const MentorInfoPage = ({ match }) => {
    const [mentor, setMentor] = useState(null);

    useEffect(() => {
        const fetchMentor = async () => {
            try {
                const response = await axios.get(`/api/mentors/${match.params.id}`);
                setMentor(response.data);
            } catch (error) {
                console.error('Error fetching mentor:', error);
            }
        };

        fetchMentor();
    }, [match.params.id]);

    if (!mentor) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mentor-info-page-container">
            <MentorInfoCard mentor={mentor} />
        </div>
    );
};

export default MentorInfoPage;
