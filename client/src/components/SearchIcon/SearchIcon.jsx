import React, { useState } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

const SearchIcon = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <BsFillSearchHeartFill size="2em" onClick={handleSearch} style={{ cursor: 'pointer' }} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{ marginLeft: '10px', fontSize: '1.2em' }}
      />
    </div>
  );
};

export default SearchIcon;
