
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WorkoutDayItem from "./WorkoutDayItem";
import { WorkoutPlanData, ExerciseDemo } from "./types";

type WorkoutPlanSectionProps = {
  planData: WorkoutPlanData;
  expandedDay: number | null;
  toggleDay: (index: number) => void;
  exerciseDemos: {[key: string]: ExerciseDemo[]};
};

const WorkoutPlanSection: React.FC<WorkoutPlanSectionProps> = ({
  planData,
  expandedDay,
  toggleDay,
  exerciseDemos
}) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neon-text-red">Weekly</span> Training Plan
        </h2>
        
        <div className="mb-12">
          {planData.plan.exercises.map((exercise, index) => (
            <WorkoutDayItem 
              key={index}
              day={exercise}
              index={index}
              expandedDay={expandedDay}
              toggleDay={toggleDay}
              exerciseDemos={exerciseDemos[exercise.focus] || []}
            />
          ))}
        </div>
        
        <div className="text-center mb-8">
          <Link to="/workouts" className="btn-primary inline-flex items-center">
            <span>Explore More Workouts</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlanSection;
