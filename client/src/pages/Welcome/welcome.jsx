import React from 'react';

const WelcomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '20px' }}>
      💜🌟🌸 Welcome to QueenB! 🌸🌟💜
      </h1>
      <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' , lineHeight: '-10px'}}>
        where women lead in tech.
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#555',
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
    Join us to discover the creative side of programming. As Frida Kahlo said, "Feet, what do I need you for when I have wings to fly?"</p>
    </div>
  );
};

export default WelcomePage;
