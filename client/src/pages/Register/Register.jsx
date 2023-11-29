import React, { useState } from 'react';
import userService from '../../Services/api';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [biography, setBiography] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        firstname,
        lastname,
        email,
        password,
        skills: skills.split(',').map((skill) => skill.trim()),
        linkedin,
        phone,
        photo,
        biography,
      };

      const response = await userService.registerMentor(userData);
      console.log('Registration successful:', response);
      setRegistrationMessage(
        <>
          <p>Registration successful!</p>
          <p>Your ID is: {response.id}</p>
          <p>Keep this ID safe; you might need it in the future.</p>
          <p>Meanwhile, go ahead and check your name in the mentor list.</p>
        </>
      );
    } catch (error) {
      console.error('Error registering user:', error.message);
      setRegistrationMessage(`Error: The Email Already in use`);
    }
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div>
      <div className="auth-form-container">
        <h2>🌸 Register 🌸</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />

          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="text"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="biography">Biography:</label>
          <input
            type='text'
            id="biography"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />

          <label htmlFor="photo">Upload Photo:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
          />

          <button type="submit">Join Us and Be the Change!🌸</button>
          {registrationMessage && (
            <p className="registration-message">{registrationMessage}</p>)}
        </form>
      </div>
    </div>
  );
};

export default Register;