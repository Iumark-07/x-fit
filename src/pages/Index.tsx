
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrainNowSection from "@/components/home/TrainNowSection";
import FounderSection from "@/components/home/FounderSection";
import WorkoutHub from "@/components/home/WorkoutHub";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FounderSection />
      <WorkoutHub />
      <TrainNowSection />
    </Layout>
  );
};

export default Index;
