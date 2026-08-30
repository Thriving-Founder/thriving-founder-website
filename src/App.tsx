import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollDepth, useRouteTracking } from "@/hooks/useGATracking";
import Index from "./pages/Index.tsx";

const FounderON = lazy(() => import("./pages/FounderON.tsx"));
const FounderOnLive = lazy(() => import("./pages/FounderOnLive.tsx"));
const FounderOnLiveRegistered = lazy(() => import("./pages/FounderOnLiveRegistered.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const FounderFreedomScore = lazy(() => import("./pages/FounderFreedomScore.tsx"));
const Results = lazy(() => import("./pages/Results.tsx"));
const Book = lazy(() => import("./pages/Book.tsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.tsx"));
const FFSReport = lazy(() => import("./pages/FFSReport.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

function GATracker() {
  useScrollDepth();
  useRouteTracking();
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GATracker />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/founder-on" element={<FounderON />} />
            <Route path="/founder-on-live" element={<FounderOnLive />} />
            <Route path="/founder-on-live/registered" element={<FounderOnLiveRegistered />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/program" element={<FounderON />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder-freedom-score" element={<FounderFreedomScore />} />
            <Route path="/results" element={<Results />} />
            <Route path="/book" element={<Book />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/ffs-report/:resultId" element={<FFSReport />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
