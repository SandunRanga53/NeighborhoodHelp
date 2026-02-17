import React from 'react';
import './RequestHelpPage.css';

function RequestHelpPage() {
  return (
    <div className="request-help-page app-page">
      <div className="app-page__inner">
        <h1 className="app-page__title">Request Help</h1>
        <p className="app-page__subtitle">
          Ask your neighbors for assistance or offer to help others.
        </p>
        <div className="app-page__placeholder">
          <p>Request Help form and listings go here.</p>
        </div>
      </div>
    </div>
  );
}

export default RequestHelpPage;
