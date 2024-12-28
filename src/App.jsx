import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Newsroom from './pages/Newsroom';
import GetInvolved from './pages/GetInvolved';
import Communications from './pages/Communications';
import LearnMore from './pages/LearnMore';
import Manifesto from './pages/Manifesto';
import International from './pages/International';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/positions" element={<International />} />
      </Routes>
    </Router>
  );
};

export default App;