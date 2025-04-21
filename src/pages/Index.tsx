
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FounderStory from "@/components/home/FounderStory";
import TrainNowSection from "@/components/home/TrainNowSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FounderStory />
      <TrainNowSection />
    </Layout>
  );
};

export default Index;
