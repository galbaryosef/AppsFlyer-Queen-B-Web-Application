import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Register from './pages/Register/Register';
import Delete from './pages/Delete/delete';
import MentorList from './pages/mentors/mentors';
import Footer from './components/Footer/footer';
import MentorInfo from './pages/mentorInfo/mentorInfo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/MentorList" element={<MentorList />} />
        <Route path="/MentorInfo/2" element={<MentorInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
