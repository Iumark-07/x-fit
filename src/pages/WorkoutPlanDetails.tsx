
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { WorkoutPlanData, DietPlanType, ExerciseDemo } from "@/components/workoutPlan/types";
import { extractMuscleGroups, getExerciseDemos } from "@/components/workoutPlan/util/exerciseUtils";
import { generateDietPlan } from "@/components/workoutPlan/util/dietUtils";
import WorkoutPlanHero from "@/components/workoutPlan/WorkoutPlanHero";
import WorkoutPlanSection from "@/components/workoutPlan/WorkoutPlanSection";
import DietPlanSection from "@/components/workoutPlan/DietPlanSection";
import CtaSection from "@/components/workoutPlan/CtaSection";

const WorkoutPlanDetails = () => {
  const navigate = useNavigate();
  const [planData, setPlanData] = useState<WorkoutPlanData | null>(null);
  const [dietPlan, setDietPlan] = useState<DietPlanType | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [exerciseDemos, setExerciseDemos] = useState<{[key: string]: ExerciseDemo[]}>({});
  
  useEffect(() => {
    const storedPlan = localStorage.getItem('workoutPlan');
    
    if (!storedPlan) {
      navigate('/');
      return;
    }
    
    try {
      const parsedPlan = JSON.parse(storedPlan);
      setPlanData(parsedPlan);
      
      // Generate a diet plan based on the workout goal
      setDietPlan(generateDietPlan(parsedPlan.goal));
      
      // Get exercise demos for each day's focus
      if (parsedPlan.plan && parsedPlan.plan.exercises) {
        const demos: {[key: string]: ExerciseDemo[]} = {};
        parsedPlan.plan.exercises.forEach((dayExercise: any) => {
          const focus = dayExercise.focus;
          if (focus !== "Rest/Cardio" && focus !== "Recovery" && focus !== "Active Recovery") {
            const muscleGroups = extractMuscleGroups(focus);
            muscleGroups.forEach(group => {
              demos[focus] = getExerciseDemos(group);
            });
          }
        });
        setExerciseDemos(demos);
      }
    } catch (error) {
      console.error("Error parsing stored workout plan:", error);
      navigate('/');
    }
  }, [navigate]);
  
  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };
  
  if (!planData || !planData.plan || !dietPlan) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading your personalized plan...</h2>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-xfit-black">
        <WorkoutPlanHero planData={planData} />
        <WorkoutPlanSection 
          planData={planData}
          expandedDay={expandedDay}
          toggleDay={toggleDay}
          exerciseDemos={exerciseDemos}
        />
        <DietPlanSection dietPlan={dietPlan} />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default WorkoutPlanDetails;
