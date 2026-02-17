import React, { useState } from 'react';
import Header from '../components/layout/Header';
import AuthTabs from '../components/auth/AuthTabs';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import './AuthPage.css';

function AuthPage({ onBackClick, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('register');

  return (
    <div className="auth-page">
      <Header onBack={onBackClick} />
      <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'login' ? (
        <LoginForm onLoginSuccess={onLoginSuccess} />
      ) : (
        <RegisterForm onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
}

export default AuthPage;
