import React, { useState, useMemo } from 'react';
import IntroHeader from '../components/layout/IntroHeader';
import CategoryFilters from '../components/layout/CategoryFilters';
import HelpRequestCard from '../components/layout/HelpRequestCard';
import ViewDetailsModal from '../components/common/ViewDetailsModal';
import AddRequestModal from '../components/common/AddRequestModal';
import { CATEGORIES, HELP_REQUESTS, DEFAULT_DISTRICT } from '../data/feedData';
import './IntroductionPage.css';

function IntroductionPage() {
  const [requests, setRequests] = useState(HELP_REQUESTS);
  const [categoryId, setCategoryId] = useState('all');
  const [district] = useState(DEFAULT_DISTRICT);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredRequests = useMemo(() => {
    if (categoryId === 'all') return requests;
    return requests.filter((r) => r.categoryId === categoryId);
  }, [requests, categoryId]);

  const handleViewDetails = (item) => setSelectedItem(item);
  const handleCloseDetails = () => setSelectedItem(null);

  const handleAddRequest = () => setShowAddModal(true);
  const handleCloseAdd = () => setShowAddModal(false);
  const handleAdd = (newRequest) => setRequests((prev) => [newRequest, ...prev]);
  const handleMapClick = () => alert('Map view coming soon.');

  return (
    <div className="intro-page">
      <IntroHeader district={district} onMapClick={handleMapClick} />

      <CategoryFilters
        categories={CATEGORIES}
        activeId={categoryId}
        onSelect={setCategoryId}
      />

      <main className="intro-page__feed">
        <div className="intro-page__list">
          {filteredRequests.map((item) => (
            <HelpRequestCard
              key={item.id}
              item={item}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </main>

      <button
        type="button"
        className="intro-page__fab"
        onClick={handleAddRequest}
        aria-label="Add new request"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      {selectedItem && (
        <ViewDetailsModal item={selectedItem} onClose={handleCloseDetails} />
      )}

      {showAddModal && (
        <AddRequestModal onClose={handleCloseAdd} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default IntroductionPage;
