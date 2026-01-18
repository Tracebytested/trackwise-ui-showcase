import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Subscribe from "./pages/Subscribe";
import Design1 from "./pages/designs/Design1";
import Design2 from "./pages/designs/Design2";
import Design3 from "./pages/designs/Design3";
import Design4 from "./pages/designs/Design4";
import Design5 from "./pages/designs/Design5";
import Design6 from "./pages/designs/Design6";
import Design7 from "./pages/designs/Design7";
import Design8 from "./pages/designs/Design8";
import Design9 from "./pages/designs/Design9";
import Design10 from "./pages/designs/Design10";
import Design11 from "./pages/designs/Design11";
import Design12 from "./pages/designs/Design12";
import Design13 from "./pages/designs/Design13";
import Design14 from "./pages/designs/Design14";
import Design15 from "./pages/designs/Design15";
import Design16 from "./pages/designs/Design16";
import Design17 from "./pages/designs/Design17";
import Design18 from "./pages/designs/Design18";
import Design19 from "./pages/designs/Design19";
import Design20 from "./pages/designs/Design20";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/design/1" element={<Design1 />} />
            <Route path="/design/2" element={<Design2 />} />
            <Route path="/design/3" element={<Design3 />} />
            <Route path="/design/4" element={<Design4 />} />
            <Route path="/design/5" element={<ProtectedRoute><Design5 /></ProtectedRoute>} />
            <Route path="/design/6" element={<Design6 />} />
            <Route path="/design/7" element={<Design7 />} />
            <Route path="/design/8" element={<Design8 />} />
            <Route path="/design/9" element={<Design9 />} />
            <Route path="/design/10" element={<Design10 />} />
            <Route path="/design/11" element={<Design11 />} />
            <Route path="/design/12" element={<Design12 />} />
            <Route path="/design/13" element={<Design13 />} />
            <Route path="/design/14" element={<Design14 />} />
            <Route path="/design/15" element={<Design15 />} />
            <Route path="/design/16" element={<Design16 />} />
            <Route path="/design/17" element={<Design17 />} />
            <Route path="/design/18" element={<Design18 />} />
            <Route path="/design/19" element={<Design19 />} />
            <Route path="/design/20" element={<Design20 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
