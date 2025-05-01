
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ExerciseDemo from "./ExerciseDemo";
import { ExerciseDemo as ExerciseDemoType } from "./types";

type WorkoutDayItemProps = {
  day: {
    day: string;
    focus: string;
    movements: string;
  };
  index: number;
  expandedDay: number | null;
  toggleDay: (index: number) => void;
  exerciseDemos: ExerciseDemoType[];
};

const WorkoutDayItem: React.FC<WorkoutDayItemProps> = ({
  day,
  index,
  expandedDay,
  toggleDay,
  exerciseDemos
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="mb-4"
    >
      <div 
        className={`bg-xfit-black rounded-lg overflow-hidden border ${expandedDay === index ? 'border-xfit-cyan' : 'border-gray-800'}`}
      >
        <div 
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleDay(index)}
        >
          <div>
            <h3 className="text-xl font-bold">{day.day}: <span className="text-xfit-cyan">{day.focus}</span></h3>
          </div>
          <div>
            {expandedDay === index ? (
              <ChevronUp size={20} className="text-xfit-cyan" />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>
        </div>
        
        {expandedDay === index && (
          <div className="p-4 pt-0 border-t border-gray-800">
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Session Overview:</h4>
              <p className="text-gray-300">{day.movements}</p>
            </div>
            
            {exerciseDemos && exerciseDemos.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-3">Exercise Demonstrations:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {exerciseDemos.map((demo, demoIndex) => (
                    <ExerciseDemo key={demoIndex} demo={demo} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WorkoutDayItem;
