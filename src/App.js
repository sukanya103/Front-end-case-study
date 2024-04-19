// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Retrieve profiles data from Local Storage when component mounts
    const storedProfiles = JSON.parse(localStorage.getItem('profiles'));
    if (storedProfiles) {
      setProfiles(storedProfiles);
    }
  }, []);

  const addProfile = (newProfile) => {
    // Update profiles state and save in Local Storage
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage profiles={profiles} />} />
          <Route path="/dashboard" element={<DashboardPage addProfile={addProfile} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
