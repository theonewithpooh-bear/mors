import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import LearnMore from "./pages/LearnMore";
import GetInvolved from "./pages/GetInvolved";
import Communications from "./pages/Communications";
import SubjectReforms from "./pages/SubjectReforms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import YouthIndex from "./pages/youth/Index";
import YouthLearnMore from "./pages/youth/LearnMore";
import YouthGetInvolved from "./pages/youth/GetInvolved";
import YouthCommunications from "./pages/youth/Communications";
import YouthSubjectReforms from "./pages/youth/SubjectReforms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/subject-reforms" element={<SubjectReforms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/youth" element={<YouthIndex />} />
          <Route path="/youth/learn-more" element={<YouthLearnMore />} />
          <Route path="/youth/get-involved" element={<YouthGetInvolved />} />
          <Route path="/youth/communications" element={<YouthCommunications />} />
          <Route path="/youth/subject-reforms" element={<YouthSubjectReforms />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;