import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/DashboardPage.css'; // Import the CSS file

const ADMIN_PASSWORD = 'Sukanya@123'; // Replace with your admin password

function DashboardPage({ addProfile, profiles, deleteProfile }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setError('');
      alert('Login successful! You can now access the dashboard.');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleAddProfile = (formData) => {
    addProfile(formData);
    alert('Profile added successfully!');
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
      alert('Profile deleted successfully!');
    }
  };

  return (
    <div className="dashboard-page"> {/* Apply the "dashboard-page" class */}
      {!loggedIn && (
        <div className="admin-login"> {/* Apply the "admin-login" class */}
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      )}

      {loggedIn && (
        <div className="dashboard"> {/* Apply the "dashboard" class */}
          <h2>Dashboard</h2>
          <button onClick={() => navigate('/profile')}>View Profiles</button>
          <hr />
          <h3>Add Profile</h3>
          <div className="profile-form"> {/* Apply the "profile-form" class */}
            <ProfileForm onSubmit={handleAddProfile} />
          </div>
          <hr />
          <h3>Manage Profiles</h3>
          <div className="profile-list"> {/* Apply the "profile-list" class */}
            <ProfileList profiles={profiles} onDelete={handleDeleteProfile} />
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    imageUrl: '',
    name: '',
    description: '',
    mapUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      imageUrl: '',
      name: '',
      description: '',
      mapUrl: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Map URL:</label>
        <input type="text" name="mapUrl" value={formData.mapUrl} onChange={handleChange} required />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

function ProfileList({ profiles, onDelete }) {
  return (
    <ul className="profile-list"> {/* Apply the "profile-list" class */}
      {profiles && profiles.map(profile => (
        <li key={profile.id} className="profile-card"> {/* Apply the "profile-card" class */}
          <div>
            <h4>{profile.name}</h4>
            <p>{profile.description}</p>
            <button onClick={() => onDelete(profile.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DashboardPage;
