import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../../data/feedData';
import './AddRequestModal.css';

const CATEGORY_OPTIONS = CATEGORIES.filter((c) => c.id !== 'all');
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=240&fit=crop';

function AddRequestModal({ onClose, onAdd }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('moving-help');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = CATEGORY_OPTIONS.find((c) => c.id === categoryId);
    const newRequest = {
      id: String(Date.now()),
      category: category?.label || 'Other',
      categoryId,
      title: title.trim() || 'New Request',
      description: description.trim() || 'No description provided.',
      location: location.trim() || 'Location not specified',
      timeAgo: 'Just now',
      status: urgent ? 'urgent' : 'open',
      image: photoFile ? URL.createObjectURL(photoFile) : PLACEHOLDER_IMAGE,
    };
    onAdd(newRequest);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="add-modal-title">
      <div className="modal add-modal" onClick={(e) => e.stopPropagation()}>
        <div className="add-modal__header">
          <h2 id="add-modal-title" className="add-modal__title">Add Help Request</h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="add-modal__form" onSubmit={handleSubmit}>
          <label className="add-modal__label">
            Title
            <input
              type="text"
              className="add-modal__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Need help moving a couch"
            />
          </label>
          <label className="add-modal__label">
            Category
            <select
              className="add-modal__select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {CATEGORY_OPTIONS.map(({ id, label }) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </label>
          <label className="add-modal__label">
            Description
            <textarea
              className="add-modal__textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you need help with..."
              rows={3}
            />
          </label>
          <label className="add-modal__label">
            Location
            <input
              type="text"
              className="add-modal__input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. 0.2 mi • 3rd Street"
            />
          </label>
          <label className="add-modal__label">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="add-modal__input"
              onChange={handlePhotoChange}
            />
          </label>
          {photoFile && (
            <div className="add-modal__preview">
              <img src={URL.createObjectURL(photoFile)} alt="Preview" className="add-modal__preview-img" />
            </div>
          )}
          <label className="add-modal__checkbox">
            <input
              type="checkbox"
              checked={urgent}
              onChange={(e) => setUrgent(e.target.checked)}
            />
            <span>Urgent</span>
          </label>
          <div className="add-modal__actions">
            <button type="button" className="add-modal__cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="add-modal__submit">
              Add Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRequestModal;
