
import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FounderStory from "@/components/home/FounderStory";
import WorkoutHub from "@/components/home/WorkoutHub";
import TrainNowSection from "@/components/home/TrainNowSection";
import MindsetSection from "@/components/home/MindsetSection";
import NutritionSection from "@/components/home/NutritionSection";
import CTASection from "@/components/home/CTASection";
import { Events, scrollSpy } from "react-scroll";

const Index = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      // Handle scroll begin
    });
    
    Events.scrollEvent.register('end', () => {
      // Handle scroll end
    });
    
    scrollSpy.update();
    
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  
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
