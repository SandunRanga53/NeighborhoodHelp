import React from 'react';
import './NeighborhoodSelector.css';

const NEIGHBORHOODS = ['Downtown', 'Westside', 'Uptown', 'Suburbs'];

function NeighborhoodSelector({ value, onChange }) {
  return (
    <div className="neighborhood-selector">
      <label className="neighborhood-selector__label">Select your Neighborhood</label>
      <div className="neighborhood-selector__list" role="group">
        {NEIGHBORHOODS.map((n) => (
          <button
            key={n}
            type="button"
            className={`neighborhood-selector__chip ${value === n ? 'neighborhood-selector__chip--active' : ''}`}
            onClick={() => onChange(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NeighborhoodSelector;
