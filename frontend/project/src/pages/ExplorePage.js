import React from 'react';
import './ExplorePage.css';

function ExplorePage() {
  return (
    <div className="explore-page intro-page">
      <header className="explore-page__header">
        <h1 className="explore-page__title">Explore</h1>
        <p className="explore-page__subtitle">Discover help requests and neighbors near you.</p>
      </header>
      <main className="explore-page__main">
        <div className="explore-page__placeholder">
          <p>Explore content goes here.</p>
        </div>
      </main>
    </div>
  );
}

export default ExplorePage;
