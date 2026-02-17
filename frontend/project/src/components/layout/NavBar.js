import React, { useState } from 'react';
import './NavBar.css';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'request-help', label: 'Request Help' },
  { id: 'profile', label: 'Profile' },
];

function NavBar({ currentPage, onNavigate, onBack, onLogout, showAdmin = false, minimal = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate?.(id);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    onLogout?.();
    setMobileOpen(false);
  };

  const handleBack = () => {
    onBack?.();
    setMobileOpen(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (minimal) return;
    handleNav('intro');
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar__container">
        <div className="navbar__left">
          <button
            type="button"
            className="navbar__back"
            onClick={handleBack}
            aria-label="Go back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
          </button>
          <a
            href="#"
            className="navbar__brand"
            onClick={handleBrandClick}
          >
            <span className="navbar__logo">🤝</span>
            <span className="navbar__title">Neighborhood Help</span>
          </a>
        </div>

        {!minimal && (
          <>
            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <span className="navbar__toggle-bar" />
              <span className="navbar__toggle-bar" />
              <span className="navbar__toggle-bar" />
            </button>

            <div className={`navbar__menu ${mobileOpen ? 'navbar__menu--open' : ''}`}>
              <ul className="navbar__list">
                {NAV_ITEMS.map(({ id, label }) => (
                  <li key={id} className="navbar__item">
                    <button
                      type="button"
                      className={`navbar__link ${currentPage === id ? 'navbar__link--active' : ''}`}
                      onClick={() => handleNav(id)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                {showAdmin && (
                  <li className="navbar__item">
                    <button
                      type="button"
                      className={`navbar__link ${currentPage === 'admin' ? 'navbar__link--active' : ''}`}
                      onClick={() => handleNav('admin')}
                    >
                      Admin
                    </button>
                  </li>
                )}
                <li className="navbar__item navbar__item--logout">
                  <button
                    type="button"
                    className="navbar__link navbar__link--logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
