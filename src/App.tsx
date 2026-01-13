import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Design1 from "./pages/designs/Design1";
import Design4 from "./pages/designs/Design4";
import Design5 from "./pages/designs/Design5";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design/1" element={<Design1 />} />
          <Route path="/design/4" element={<Design4 />} />
          <Route path="/design/5" element={<Design5 />} />
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
  </QueryClientProvider>
);

export default App;
