import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import UpdateNotification from './components/UpdateNotification';
import AuthGuard from './components/AuthGuard';
import { Toaster } from './components/ui/toaster';

// Import all pages
import Index from './pages/Index';
import LearnMore from './pages/LearnMore';
import GetInvolved from './pages/GetInvolved';
import Communications from './pages/Communications';
import Manifesto from './pages/Manifesto';
import PressOffice from './pages/Newsroom';
import Positions from './pages/Positions2';
import PositionsToBeReleased from './pages/Positions';
import SubjectReforms from './pages/SubjectReforms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AIUsage from './pages/AIUsage';
import AI from './pages/AI';
import Ethics from './pages/Ethics';
import CookiesPolicy from './pages/CookiesPolicy';
import NotFound from './pages/NotFound';
import ShorehamCollege from './pages/ShorehamCollege';
import TypeformVolunteer from './pages/TypeformVolunteer';
import FileStore from './pages/FileStore';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import AccountSettings from './pages/AccountSettings';
import InitialSetup from './pages/InitialSetup';

import OpenLetterDfE from './pages/OpenLetterDfE';

/**
 * Main App component
 * Contains the global layout with Header and Footer that wrap all routes
 */
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public login routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/setup" element={<InitialSetup />} />
            
            {/* Protected routes with AuthGuard */}
            <Route path="/*" element={
              <AuthGuard>
                <>
                  {/* Global Header - included once for all pages */}
                  <Header />
                  <UpdateNotification />
                  <main>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/learn-more" element={<LearnMore />} />
                        <Route path="/get-involved" element={<GetInvolved />} />
                        <Route path="/communications" element={<Communications />} />
                        <Route path="/manifesto" element={<Manifesto />} />
                        <Route path="/press-office" element={<PressOffice />} />
                        <Route path="/positions" element={<Positions />} />
                        <Route path="/positions_to_be_released" element={<PositionsToBeReleased />} />
                        <Route path="/subject-reforms" element={<SubjectReforms />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/ai-usage" element={<AIUsage />} />
                        <Route path="/ai" element={<AI />} />
                        <Route path="/ethics" element={<Ethics />} />
                        <Route path="/cookies-policy" element={<CookiesPolicy />} />
                        <Route path="/shoreham-college" element={<ShorehamCollege />} />
                         <Route path="/typeform-volunteer" element={<TypeformVolunteer />} />
                         <Route path="/file-store" element={<FileStore />} />
                         <Route path="/account-settings" element={<AccountSettings />} />
                         <Route path="/open-letter-dfe" element={<OpenLetterDfE />} />
                         <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </>
              </AuthGuard>
            } />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </AuthProvider>
  );
};

export default App;
