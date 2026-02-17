import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import IntroductionPage from './pages/IntroductionPage';
import ExplorePage from './pages/ExplorePage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/layout/NavBar';
import BottomNav from './components/layout/BottomNav';
import './App.css';

const APP_PAGES = ['intro', 'explore', 'messages', 'profile'];
const SHOW_TOP_NAV = ['home', 'auth'];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleAuthClick = () => setCurrentPage('auth');
  const handleBackHome = () => setCurrentPage('home');
  const handleLoginSuccess = () => setCurrentPage('intro');
  const handleGoToApp = () => setCurrentPage('intro');

  const handleAppNavigate = (page) => {
    const target = page === 'home' ? 'intro' : page;
    if (APP_PAGES.includes(target)) setCurrentPage(target);
  };

  const handleLogout = () => setCurrentPage('home');

  const handleBack = () => {
    if (currentPage === 'auth') setCurrentPage('home');
    else if (currentPage === 'intro') setCurrentPage('home');
    else if (APP_PAGES.includes(currentPage)) setCurrentPage('intro');
    else if (currentPage === 'home') setCurrentPage('intro');
  };

  const showTopNav = SHOW_TOP_NAV.includes(currentPage);
  const showBottomNav = APP_PAGES.includes(currentPage);

  return (
    <div className="App">
      {showTopNav && (
        <NavBar
          currentPage={null}
          onNavigate={handleAppNavigate}
          onBack={handleBack}
          onLogout={handleLogout}
          showAdmin={false}
          minimal
        />
      )}

      {currentPage === 'home' && (
        <HomePage onAuthClick={handleAuthClick} onGoToDashboard={handleGoToApp} />
      )}

      {currentPage === 'auth' && (
        <AuthPage
          onBackClick={handleBackHome}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentPage === 'intro' && (
        <>
          <IntroductionPage />
          {showBottomNav && <BottomNav activeId="home" onNavigate={handleAppNavigate} />}
        </>
      )}

      {currentPage === 'explore' && (
        <>
          <ExplorePage />
          {showBottomNav && <BottomNav activeId="explore" onNavigate={handleAppNavigate} />}
        </>
      )}

      {currentPage === 'messages' && (
        <>
          <MessagesPage />
          {showBottomNav && <BottomNav activeId="messages" onNavigate={handleAppNavigate} />}
        </>
      )}

      {currentPage === 'profile' && (
        <>
          <ProfilePage onLogout={handleLogout} />
          {showBottomNav && <BottomNav activeId="profile" onNavigate={handleAppNavigate} />}
        </>
      )}
    </div>
  );
}

export default App;
