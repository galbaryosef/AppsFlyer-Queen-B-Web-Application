// SearchIcon.js
import React from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

const SearchIcon = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <BsFillSearchHeartFill size="2em" />
      <input type="text" placeholder="Search..." style={{ marginLeft: '10px', fontSize: '1.2em' }} />
    </div>
  );
};

export default SearchIcon;
