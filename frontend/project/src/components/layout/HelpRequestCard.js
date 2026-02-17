import React from 'react';
import './HelpRequestCard.css';

function HelpRequestCard({ item, onViewDetails }) {
  const isUrgent = item.status === 'urgent';

  return (
    <article className="help-card">
      <div className="help-card__image-wrap">
        <img src={item.image} alt="" className="help-card__image" />
        <span className="help-card__category">{item.category}</span>
        <span className={`help-card__status ${isUrgent ? 'help-card__status--urgent' : ''}`}>
          {isUrgent ? '! Urgent' : '• Open'}
        </span>
      </div>
      <div className="help-card__body">
        <div className="help-card__row">
          <h2 className="help-card__title">{item.title}</h2>
          <span className="help-card__time">{item.timeAgo}</span>
        </div>
        <p className="help-card__description">{item.description}</p>
        <div className="help-card__footer">
          <span className="help-card__location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {item.location}
          </span>
          <button type="button" className="help-card__cta" onClick={() => onViewDetails?.(item)}>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default HelpRequestCard;
