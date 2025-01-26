import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import LearnMore from './pages/LearnMore';
import GetInvolved from './pages/GetInvolved';
import Communications from './pages/Communications';
import Manifesto from './pages/Manifesto';
import Newsroom from './pages/Newsroom';
import Positions from './pages/Positions';
import SubjectReforms from './pages/SubjectReforms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AIUsage from './pages/AIUsage';
import Ethics from './pages/Ethics';
import CookiesPolicy from './pages/CookiesPolicy';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/communications" element={<Communications />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/newsroom" element={<Newsroom />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/subject-reforms" element={<SubjectReforms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ai-usage" element={<AIUsage />} />
              <Route path="/ethics" element={<Ethics />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;