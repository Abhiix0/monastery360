import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Events from "./pages/Events";
import Archives from "./pages/Archives";
import VirtualTours from "./pages/VirtualTours";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ChatbotWidget from "./components/ChatbotWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/events" element={<Events />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/tours" element={<VirtualTours />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Global Chatbot Widget - appears on all pages */}
        <ChatbotWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
