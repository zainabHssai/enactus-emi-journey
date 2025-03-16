
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import OurProjects from "./pages/OurProjects";
import OurMission from "./pages/OurMission";
import Palmares from "./pages/Palmares";
import News from "./pages/Actuality"; // Renamed but keeping the same file
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/our-projects" element={<OurProjects />} />
              <Route path="/our-mission" element={<OurMission />} />
              <Route path="/palmares" element={<Palmares />} />
              <Route path="/actuality" element={<News />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
