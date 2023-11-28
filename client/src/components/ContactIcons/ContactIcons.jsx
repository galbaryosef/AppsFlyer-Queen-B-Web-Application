import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { MdOutlineMailOutline, MdOutlineMessage } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

const HorizontalOptionsIcon = () => {
  const iconStyle = {
    cursor: 'pointer',
    backgroundColor:  'black',
    color: 'white',
    padding: '8px',
    borderRadius: '8px',
  };

  const handleWhatsappClick = () => {
    // Handle WhatsApp click logic
    console.log('WhatsApp clicked!');
  };

  const handleMailClick = () => {
    // Handle Mail click logic
    console.log('Mail clicked!');
  };

  const handlePhoneClick = () => {
    // Handle Phone click logic
    console.log('Phone clicked!');
  };

  const handleMessageClick = () => {
    // Handle Message click logic
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
