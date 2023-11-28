import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mentorService from '../../Services/api';
import './MentorInfo.css'; // Make sure to replace with the appropriate CSS file if needed

const MentorInfo = () => {
    const { mentorId } = useParams();
    const [mentorInfo, setMentorInfo] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMentorInfo = async () => {
            try {
                const mentorData = await mentorService.getMentorById(mentorId);
                setMentorInfo(mentorData);
                setMessage('Mentor information retrieved successfully.');
            } catch (error) {
                setMessage(`Error retrieving mentor information: ${error}`);
            }
        };

        if (mentorId) {
            fetchMentorInfo();
        }
    }, [mentorId]);

    return (
        <div className="auth-form-container">
            <h2>🌸 Mentor Information 🌸</h2>
            {mentorInfo ? (
                <div className="mentor-info">
                    <h3>Mentor Details:</h3>
                    <p>Mentor ID: {mentorInfo.id}</p>
                    <p>Name: {mentorInfo.firstname}</p>
                    {/* Add other mentor information fields as needed */}
                </div>
            ) : (
                <p className="registration-message">{message}</p>
            )}
        </div>
    );
};

export default MentorInfo;
