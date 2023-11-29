import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa6';

const BlueLinkedinIcon = ({ linkedinProfile }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleLinkedInClick = () => {
        // Open the LinkedIn profile in a new tab
        window.open(linkedinProfile, '_blank');
        setIsClicked(!isClicked);
    };

    const iconStyle = {
        backgroundColor: isClicked ? '#87CEFA' : '#ADD8E6',
        color: 'white',
        padding: '8px',
        borderRadius: '30%',
        cursor: 'pointer',
    };

    return (
        <div style={iconStyle} onClick={handleLinkedInClick}>
            <FaLinkedin style={{ fontSize: '24px' }} />
        </div>
    );
};

export default BlueLinkedinIcon;