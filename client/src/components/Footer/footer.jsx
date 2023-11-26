
import React from 'react';
import QueenBImage from '../../images/QueenB-.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={QueenBImage} alt="Footer Image" className="footer-image" />
    </footer>
  );
};

export default Footer;
