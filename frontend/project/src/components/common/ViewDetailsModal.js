import React, { useEffect } from 'react';
import './ViewDetailsModal.css';

function ViewDetailsModal({ item, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!item) return null;
  const isUrgent = item.status === 'urgent';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="modal__image-wrap">
          <img src={item.image} alt="" className="modal__image" />
          <span className="modal__category">{item.category}</span>
          <span className={`modal__status ${isUrgent ? 'modal__status--urgent' : ''}`}>
            {isUrgent ? '! Urgent' : '• Open'}
          </span>
        </div>
        <div className="modal__body">
          <h2 id="modal-title" className="modal__title">{item.title}</h2>
          <p className="modal__time">{item.timeAgo}</p>
          <p className="modal__description">{item.description}</p>
          <div className="modal__location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {item.location}
          </div>
          <button type="button" className="modal__cta" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetailsModal;
