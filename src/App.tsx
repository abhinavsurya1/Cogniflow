
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Import dashboard sub-pages
import Schedule from "./pages/dashboard/Schedule";
import Notifications from "./pages/dashboard/Notifications";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

// Create placeholder pages for new routes
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
