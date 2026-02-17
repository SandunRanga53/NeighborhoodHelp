import React from 'react';
import './HomePage.css';

function HomePage({ onAuthClick, onGoToDashboard }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Neighborhood Help</h1>
          <p className="hero__subtitle">
            Connect with your neighbors, help each other, build stronger communities
          </p>
          <button className="hero__cta" onClick={onAuthClick}>
            Get Started
          </button>
        </div>
        <div className="hero__background"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features__title">Why Join Neighborhood Help?</h2>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">👥</div>
            <h3 className="feature-card__title">Connect</h3>
            <p className="feature-card__description">
              Meet and connect with people living in your neighborhood
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">🤝</div>
            <h3 className="feature-card__title">Help & Support</h3>
            <p className="feature-card__description">
              Ask for help or offer assistance to neighbors in need
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">📢</div>
            <h3 className="feature-card__title">Share Updates</h3>
            <p className="feature-card__description">
              Stay informed about local events and community news
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">🛡️</div>
            <h3 className="feature-card__title">Safe & Secure</h3>
            <p className="feature-card__description">
              Verified profiles and secure messaging for peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="how-it-works__title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step__number">1</div>
            <h3 className="step__title">Sign Up</h3>
            <p className="step__description">Create an account and verify your neighborhood</p>
          </div>

          <div className="step__divider"></div>

          <div className="step">
            <div className="step__number">2</div>
            <h3 className="step__title">Connect</h3>
            <p className="step__description">Browse profiles and join your community</p>
          </div>

          <div className="step__divider"></div>

          <div className="step">
            <div className="step__number">3</div>
            <h3 className="step__title">Engage</h3>
            <p className="step__description">Share, help, and make your community stronger</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-section__title">Ready to Join Your Community?</h2>
        <p className="cta-section__text">
          Start making a difference in your neighborhood today
        </p>
        <button className="cta-section__button" onClick={onAuthClick}>
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer__text">&copy; 2025 Neighborhood Help. All rights reserved.</p>
        <div className="footer__links">
          <button type="button" className="footer__link footer__link--btn" onClick={onGoToDashboard}>
            Dashboard
          </button>
          <a href="#privacy" className="footer__link">Privacy Policy</a>
          <a href="#terms" className="footer__link">Terms of Service</a>
          <a href="#contact" className="footer__link">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
