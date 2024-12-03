import React from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';

const Profile= () => {
    const navigate=useNavigate();
    const handleAddress=()=>{
      navigate('/Address')
    }
  return (
    <div className="profile-screen">
      
      <div className="profile-header">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <div className="profile-avatar-section">
          <div className="avatar-container">
            <img src="/assets/profilepic.png" alt="Profile" className="avatar" />
            <button className="edit-avatar">
              <img src="/assets/edit.png" alt="Edit" />
            </button>
          </div>
          <h2 className="profile-name">Eljad Eendaz</h2>
          <p className="edit-profile">Edit Profile</p>
        </div>
      </div>

     
      <div className="profile-input-section">
        <label className="input-label" htmlFor="fullName">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          className="profile-input"
          defaultValue="Eljad Eendaz"
        />

        <label className="input-label" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="profile-input"
          defaultValue="prelookstudio@gmail.com"
        />

        <label className="input-label" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="profile-input"
          defaultValue="+1 (783) 0986 8786"
        />
      </div>
      <div className='pro'>
      <button className='button' onClick={handleAddress}>Next</button>
      </div>
    </div>
  );
};

export default Profile;
