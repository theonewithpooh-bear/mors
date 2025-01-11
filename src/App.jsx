import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';

const ForSchools = React.lazy(() => import('./pages/ForSchools'));
const BecomePartner = React.lazy(() => import('./pages/ForSchools/BecomePartner'));
const Inquire = React.lazy(() => import('./pages/ForSchools/Inquire'));
const PartnerSchools = React.lazy(() => import('./pages/ForSchools/PartnerSchools'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/for-schools" element={<ForSchools />} />
              <Route path="/for-schools/become-partner" element={<BecomePartner />} />
              <Route path="/for-schools/inquire" element={<Inquire />} />
              <Route path="/for-schools/partner-schools" element={<PartnerSchools />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;