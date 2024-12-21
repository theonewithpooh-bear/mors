import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import LearnMore from "./pages/LearnMore";
import GetInvolved from "./pages/GetInvolved";
import Communications from "./pages/Communications";
import SubjectReforms from "./pages/SubjectReforms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Articles from "./pages/Articles";
import Ethics from "./pages/Ethics";
import Legal from "./pages/Legal";
import CookiesPolicy from "./pages/CookiesPolicy";
import FileStore from "./pages/FileStore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster richColors />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/subject-reforms" element={<SubjectReforms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/manifesto" element={<FileStore />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;