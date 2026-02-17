import React from 'react';
import './Header.css';

function Header({ onBack }) {
  return (
    <header className="auth-header">
      <button type="button" className="auth-header__back" onClick={onBack} aria-label="Go back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="auth-header__brand">
        <div className="auth-header__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 10h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2" />
            <path d="M9 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2" />
            <path d="M8 14h8" />
            <path d="M12 6v2M10 8h4" />
          </svg>
        </div>
        <h1 className="auth-header__title">Neighborhood Help</h1>
      </div>
    </header>
  );
}

export default Header;
