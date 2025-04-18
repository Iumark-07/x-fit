
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FounderStory from "@/components/home/FounderStory";
import WorkoutHub from "@/components/home/WorkoutHub";
import TrainNowSection from "@/components/home/TrainNowSection";
import MindsetSection from "@/components/home/MindsetSection";
import NutritionSection from "@/components/home/NutritionSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FounderStory />
      <WorkoutHub />
      <TrainNowSection />
      <MindsetSection />
      <NutritionSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
