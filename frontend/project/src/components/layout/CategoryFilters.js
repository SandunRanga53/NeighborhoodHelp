import React from 'react';
import './CategoryFilters.css';

function CategoryFilters({ categories, activeId, onSelect }) {
  return (
    <div className="category-filters">
      <div className="category-filters__scroll">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`category-filters__chip ${activeId === id ? 'category-filters__chip--active' : ''}`}
            onClick={() => onSelect(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilters;
