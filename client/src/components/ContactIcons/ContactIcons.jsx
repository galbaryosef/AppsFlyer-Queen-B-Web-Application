import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { MdOutlineMailOutline, MdOutlineMessage } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

const HorizontalOptionsIcon = ({ mentorPhone, mentorEmail }) => {
  const iconStyle = {
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    padding: '8px',
    borderRadius: '8px',
  };

  const handleWhatsappClick = () => {
    console.log('WhatsApp clicked!');
    window.open(`https://web.whatsapp.com/send?phone=${mentorPhone}`, '_blank');
  };

  const handleMailClick = () => {
    console.log('Mail clicked!');
    window.location.href = `mailto:${mentorEmail}?subject=Hello&body=`;

  };

  const handlePhoneClick = () => {
    console.log('Phone clicked!');
    alert(`Call ${mentorPhone}`);
  };

  const handleMessageClick = () => {
    console.log('Message clicked!');
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <ImWhatsapp onClick={handleWhatsappClick} style={{ ...iconStyle, fontSize: '24px' }} />
      <MdOutlineMailOutline onClick={handleMailClick} style={{ ...iconStyle, fontSize: '24px' }} />
      <FaPhone onClick={handlePhoneClick} style={{ ...iconStyle, fontSize: '24px' }} />
      <MdOutlineMessage onClick={handleMessageClick} style={{ ...iconStyle, fontSize: '24px' }} />
    </div>
  );
};

export default HorizontalOptionsIcon;
