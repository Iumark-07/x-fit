
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Mindset from "./pages/Mindset";
import Nutrition from "./pages/Nutrition";
import TransformationStory from "./pages/TransformationStory";
import MealPlanDetails from "./pages/MealPlanDetails";
import About from "./pages/About";
import Workouts from "./pages/Workouts";
import WorkoutsByGroup from "./pages/WorkoutsByGroup";
import WorkoutDetail from "./pages/WorkoutDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mindset" element={<Mindset />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/about" element={<About />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:group" element={<WorkoutsByGroup />} />
          <Route path="/workouts/:group/:id" element={<WorkoutDetail />} />
          <Route path="/mindset/transformation/:id" element={<TransformationStory />} />
          <Route path="/nutrition/meal-plan/:id" element={<MealPlanDetails />} />
          <Route path="/mindset/article/:id" element={<TransformationStory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
