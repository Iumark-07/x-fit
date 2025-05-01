
import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { DietPlanType } from "./types";

type DietPlanSectionProps = {
  dietPlan: DietPlanType;
};

const DietPlanSection: React.FC<DietPlanSectionProps> = ({ dietPlan }) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          <span className="neon-text-cyan">Nutrition</span> Plan
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          {dietPlan.description}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">{dietPlan.title}</h3>
              
              <div className="space-y-4">
                {dietPlan.meals.map((meal, index) => (
                  <div key={index} className="bg-xfit-black/60 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2 text-xfit-cyan">{meal.name}</h4>
                    <ul className="space-y-1 mb-3">
                      {meal.foods.map((food, foodIndex) => (
                        <li key={foodIndex} className="flex">
                          <Check size={16} className="text-xfit-cyan mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{food}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-800 text-sm p-2 rounded">
                      {meal.macros}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-xfit-black rounded-lg p-6 h-full">
              <h3 className="text-2xl font-bold mb-6">Nutrition Guidelines</h3>
              
              <ul className="space-y-3">
                {dietPlan.guidelines.map((guideline, index) => (
                  <li key={index} className="flex">
                    <Check size={18} className="text-xfit-cyan mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{guideline}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/nutrition" className="btn-secondary inline-flex items-center">
                  <span>More Nutrition Resources</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DietPlanSection;
