import React from 'react';
import '../components/ProfileCard';
function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.imageUrl} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <a href={profile.mapUrl} target="_blank" rel="noopener noreferrer">View Map</a>
    </div>
  );
}

function ProfilePage({ profiles }) {
  return (
    <div className="profile-page">
      <h2>Profiles</h2>
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
