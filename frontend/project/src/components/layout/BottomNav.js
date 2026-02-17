import React from 'react';
import './BottomNav.css';

const BOTTOM_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'explore', label: 'Explore', icon: 'explore' },
  { id: 'messages', label: 'Messages', icon: 'messages', badge: true },
  { id: 'profile', label: 'Profile', icon: 'profile' },
];

function BottomNav({ activeId, onNavigate }) {
  return (
    <nav className="bottom-nav" role="navigation">
      <ul className="bottom-nav__list">
        {BOTTOM_ITEMS.map(({ id, label, icon, badge }) => (
          <li key={id} className="bottom-nav__item">
            <button
              type="button"
              className={`bottom-nav__link ${activeId === id ? 'bottom-nav__link--active' : ''}`}
              onClick={() => onNavigate(id)}
              aria-current={activeId === id ? 'page' : undefined}
            >
              <span className="bottom-nav__icon" aria-hidden="true">
                {icon === 'home' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                {icon === 'explore' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                )}
                {icon === 'messages' && (
                  <span className="bottom-nav__icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {badge && <span className="bottom-nav__badge" />}
                  </span>
                )}
                {icon === 'profile' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
              </span>
              <span className="bottom-nav__label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNav;
