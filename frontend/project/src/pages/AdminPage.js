import React from 'react';
import './AdminPage.css';

function AdminPage() {
  return (
    <div className="admin-page app-page">
      <div className="app-page__inner">
        <h1 className="app-page__title">Admin</h1>
        <p className="app-page__subtitle">
          Manage neighborhoods, users, and moderation. (Optional – admin only.)
        </p>
        <div className="app-page__placeholder">
          <p>Admin tools go here.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
