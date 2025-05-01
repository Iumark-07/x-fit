
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { WorkoutPlanData } from "./types";

type WorkoutPlanHeroProps = {
  planData: WorkoutPlanData;
};

const WorkoutPlanHero: React.FC<WorkoutPlanHeroProps> = ({ planData }) => {
  return (
    <section className="relative py-16 px-4">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center text-xfit-cyan mb-8">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text-cyan">{planData.plan.title}</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            Your personalized workout and nutrition plan based on your profile.
          </p>
          
          <div className="bg-gray-900/50 rounded-lg p-4 inline-block">
            <p>
              <span className="text-gray-400">Body Type:</span>{" "}
              <span className="font-semibold">{planData.bodyType}</span> | 
              <span className="text-gray-400"> Age:</span>{" "}
              <span className="font-semibold">{planData.ageRange}</span> | 
              <span className="text-gray-400"> Goal:</span>{" "}
              <span className="font-semibold">{planData.goal.replace("-", " ")}</span> | 
              <span className="text-gray-400"> Frequency:</span>{" "}
              <span className="font-semibold">{planData.frequency} days/week</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkoutPlanHero;
