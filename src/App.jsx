import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LearnMore from './pages/LearnMore';
import GetInvolved from './pages/GetInvolved';
import Communications from './pages/Communications';
import Manifesto from './pages/Manifesto';
import Newsroom from './pages/Newsroom';
import Positions from './pages/Positions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Ethics from './pages/Ethics';
import CookiesPolicy from './pages/CookiesPolicy';
import AIUsage from './pages/AIUsage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/ai-usage" element={<AIUsage />} />
      </Routes>
    </Router>
  );
};

export default App;