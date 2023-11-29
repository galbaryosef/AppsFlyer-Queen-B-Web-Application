import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mentorService from '../../Services/api';
import HorizontalOptionsIcon from '../../components/ContactIcons/ContactIcons';
import BlueLinkedinIcon from '../../components/LinkedInIcon/LinkedInIcon';
import './mentorInfo.css';

const MentorInfo = () => {
    const { mentorId } = useParams();
    const [mentorInfo, setMentorInfo] = useState({});
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
            <div className="photo-container">
                <img src={mentorInfo.photo} alt="Mentor" className="photo" />
            </div>
            {Object.keys(mentorInfo).length > 0 ? (
                <div className="mentor-info">
                    <h3>Mentor Details:</h3>
                    <div className="name-container">
                        <span className="name-text"><strong>{mentorInfo.firstname} {mentorInfo.lastname}</strong></span>
                        <span className="linkedin-icon-container">
                            <BlueLinkedinIcon linkedinProfile={mentorInfo.linkedin} />
                        </span>
                    </div>
                    {mentorInfo.skills && Array.isArray(mentorInfo.skills) && (
                        <div className="skills-container">
                            {mentorInfo.skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    )}
                    <p className="about-section"><strong>About {mentorInfo.firstname}</strong></p>
                    <p>{mentorInfo.biography}</p>
                    <p><strong>Contact information</strong></p>
                </div>
            ) : (
                <p className="registration-message">{message}</p>
            )}
            <HorizontalOptionsIcon mentorPhone={mentorInfo.phone} mentorEmail={mentorInfo.email} />
        </div>
    );
};

export default MentorInfo;