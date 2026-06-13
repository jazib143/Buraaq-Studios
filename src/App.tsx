import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import YouTubeEditingPage from './pages/services/YouTubeEditingPage';
import CinematicTrailersPage from './pages/services/CinematicTrailersPage';
import InstagramReelsPage from './pages/services/InstagramReelsPage';
import BusinessPromosPage from './pages/services/BusinessPromosPage';
import GreenScreenEditingPage from './pages/services/GreenScreenEditingPage';
import MotionGraphicsPage from './pages/services/MotionGraphicsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-inter">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/services/youtube-editing" element={<YouTubeEditingPage />} />
          <Route path="/services/cinematic-trailers" element={<CinematicTrailersPage />} />
          <Route path="/services/instagram-reels" element={<InstagramReelsPage />} />
          <Route path="/services/business-promos" element={<BusinessPromosPage />} />
          <Route path="/services/green-screen-editing" element={<GreenScreenEditingPage />} />
          <Route path="/services/motion-graphics" element={<MotionGraphicsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;