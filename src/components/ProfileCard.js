import React, { useState } from 'react';
import GoogleMapsEmbed from './GoogleMapsEmbed'; // Import the GoogleMapsEmbed component
import '../css/ProfileCard.css';

function ProfileCard({ profile }) {
  const [showMap, setShowMap] = useState(false);

  const handleSummaryClick = () => {
    setShowMap(!showMap);
  };

  console.log('Profile Card - mapUrl:', profile.mapUrl); // Add this console log

  return (
    <div className="profile-card-horizontal">
      <img src={profile.photo} alt={profile.name} className="profile-photo-horizontal" />
      <div className="profile-details-horizontal">
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <button onClick={handleSummaryClick}>Summary</button>
        {showMap && <GoogleMapsEmbed mapUrl={profile.mapUrl} />} {/* Pass the mapUrl prop */}
      </div>
    </div>
  );
}

export default ProfileCard;
