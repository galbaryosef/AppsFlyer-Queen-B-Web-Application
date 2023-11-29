import React, { useState } from 'react';
import mentorService from '../../Services/api';
import './delete.css';

const DeleteMentor = () => {
  const [mentorId, setMentorId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await mentorService.deleteMentorById(mentorId);
      setMessage('Mentor deleted successfully. It was a pleasure having you as part of our mentor community.');
    } catch (error) {
      setMessage(`Error deleting mentor: ${error}`);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>🌸 Delete Account 🌸</h2>
      <p>
        Enter your Mentor ID below to delete your account. Are you sure you want to leave our mentor community?
      </p>
      <label htmlFor="mentorId">Mentor ID:</label>
      <input
        type="text"
        id="mentorId"
        value={mentorId}
        onChange={(e) => setMentorId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Account</button>
      {message && <p className="registration-message">{message}</p>}
    </div>
  );
};

export default DeleteMentor;
