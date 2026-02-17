import React, { useState } from 'react';
import './IntroHeader.css';

function IntroHeader({ district = 'Maplewood District', onMapClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="intro-header">
      <div className="intro-header__left">
        <div className="intro-header__avatar" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="3" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>
        </div>
        <div className="intro-header__greeting">
          <span className="intro-header__welcome">WELCOME BACK</span>
          <button
            type="button"
            className="intro-header__location"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
          >
            <svg className="intro-header__pin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{district}</span>
            <svg className="intro-header__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      <button type="button" className="intro-header__map" aria-label="Open map" onClick={() => onMapClick?.()}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
          <path d="M9 3v15M15 6v15" />
        </svg>
      </button>
    </header>
  );
}

export default IntroHeader;
