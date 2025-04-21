import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
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
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Challenges from "./pages/Challenges";
import Tools from "./pages/Tools";
import Trackers from "./pages/Trackers";

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
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/about" element={<About />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/:group" element={<WorkoutsByGroup />} />
            <Route path="/workouts/:group/:id" element={<WorkoutDetail />} />
            <Route path="/mindset/transformation/:id" element={<TransformationStory />} />
            <Route path="/nutrition/meal-plan/:id" element={<MealPlanDetails />} />
            <Route path="/mindset/article/:id" element={<TransformationStory />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/trackers" element={<Trackers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
