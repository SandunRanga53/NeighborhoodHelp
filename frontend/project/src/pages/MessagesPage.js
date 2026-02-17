import React from 'react';
import './MessagesPage.css';

function MessagesPage() {
  return (
    <div className="messages-page intro-page">
      <header className="messages-page__header">
        <h1 className="messages-page__title">Messages</h1>
        <p className="messages-page__subtitle">Chat with your neighbors.</p>
      </header>
      <main className="messages-page__main">
        <div className="messages-page__placeholder">
          <p>Messages go here.</p>
        </div>
      </main>
    </div>
  );
}

export default MessagesPage;
