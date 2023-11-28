import React from 'react';
import { IoChevronBackCircleSharp } from 'react-icons/io5';

const MyComponent = () => {
  const handleClick = () => {
    console.log('Icon clicked!');
  };

  return (
    <div>
      <IoChevronBackCircleSharp onClick={handleClick} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default MyComponent;
