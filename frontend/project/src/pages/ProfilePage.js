import React from 'react';
import './ProfilePage.css';

function ProfilePage({ onLogout }) {
  return (
    <div className="profile-page app-page">
      <div className="app-page__inner">
        <h1 className="app-page__title">Profile</h1>
        <p className="app-page__subtitle">
          Manage your account, neighborhood, and preferences.
        </p>
        <div className="app-page__placeholder">
          <p>Profile settings and info go here.</p>
          {onLogout && (
            <button type="button" className="profile-page__logout" onClick={onLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
