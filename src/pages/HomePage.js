import React from 'react';
import ProfileList from '../components/ProfileList';
import '../css/HomePage.css'; // Import CSS file

function HomePage() {
  return (
    <div className="home-page">
      <h2>Profiles</h2>
      <ProfileList />
    </div>
  );
}

export default HomePage;
