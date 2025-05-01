
import React from "react";
import { Check } from "lucide-react";
import { ExerciseDemo as ExerciseDemoType } from "./types";

type ExerciseDemoProps = {
  demo: ExerciseDemoType;
};

const ExerciseDemo: React.FC<ExerciseDemoProps> = ({ demo }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={demo.image} 
          alt={demo.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h5 className="text-lg font-bold mb-2">{demo.name}</h5>
        <p className="text-gray-400 mb-3">{demo.description}</p>
        
        <h6 className="font-semibold text-xfit-cyan mb-2">Proper Form:</h6>
        <ul className="space-y-1">
          {demo.instructions.map((instruction, i) => (
            <li key={i} className="flex">
              <Check size={16} className="text-xfit-cyan mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{instruction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseDemo;
