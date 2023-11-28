import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/NavBar";
import Delete from "./pages/Delete/delete";
import Register from "./pages/Register/Register";
import MentorInfo from "./pages/mentorInfo/mentorInfo";
import MentorList from "./pages/mentors/mentors";
import WelcomePage from "./pages/Welcome/welcome";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Welcome" element={<WelcomePage />} />
        <Route path="/" element={<Register />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/MentorList" element={<MentorList />} />
        <Route path="/MentorInfo" element={<MentorInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
