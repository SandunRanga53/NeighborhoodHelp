import React from 'react';
import './AuthTabs.css';

function AuthTabs({ activeTab, onTabChange }) {
  return (
    <div className="auth-tabs" role="tablist">
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'login'}
        className={`auth-tabs__tab ${activeTab === 'login' ? 'auth-tabs__tab--active' : 'auth-tabs__tab--inactive'}`}
        onClick={() => onTabChange('login')}
      >
        Log In
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'register'}
        className={`auth-tabs__tab ${activeTab === 'register' ? 'auth-tabs__tab--active' : 'auth-tabs__tab--inactive'}`}
        onClick={() => onTabChange('register')}
      >
        Register
      </button>
    </div>
  );
}

export default AuthTabs;
