
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type BodyType = "slim" | "bulky" | "short" | "average" | null;
type AgeRange = "<18" | "18-25" | "26-35" | "36+" | null;
type Goal = "bulking" | "cutting" | "athletic-base" | "recovery" | "energy" | null;
type Frequency = "2-3" | "4-5" | "6-7" | null;

const TrainNowSection = () => {
  const [step, setStep] = useState(1);
  const [bodyType, setBodyType] = useState<BodyType>(null);
  const [ageRange, setAgeRange] = useState<AgeRange>(null);
  const [goal, setGoal] = useState<Goal>(null);
  const [frequency, setFrequency] = useState<Frequency>(null);
  const [planGenerated, setPlanGenerated] = useState(false);

  const handleBodyTypeSelect = (type: BodyType) => {
    setBodyType(type);
    setStep(2);
  };

  const handleAgeRangeSelect = (range: AgeRange) => {
    setAgeRange(range);
    setStep(3);
  };

  const handleGoalSelect = (selectedGoal: Goal) => {
    setGoal(selectedGoal);
    setStep(4);
  };

  const handleFrequencySelect = (freq: Frequency) => {
    setFrequency(freq);
    setStep(5);
    setPlanGenerated(true);
  };

  const resetForm = () => {
    setStep(1);
    setBodyType(null);
    setAgeRange(null);
    setGoal(null);
    setFrequency(null);
    setPlanGenerated(false);
  };

  // Generate a specific workout plan based on user selections
  const getWorkoutPlan = () => {
    if (!bodyType || !ageRange || !goal || !frequency) return null;
    
    let planTitle = "";
    let exercises = [];
    
    // Determine plan title based on selections
    if (goal === "bulking" && bodyType === "slim") {
      planTitle = "PROJECT BULK: HARDGAINER PROTOCOL";
      exercises = [
        { day: "Day 1", focus: "Chest & Triceps", movements: "Bench Press, Incline DB Press, Dips, Cable Flyes, Close-Grip Bench" },
        { day: "Day 2", focus: "Rest/Cardio", movements: "Light Jog + Mobility Work" },
        { day: "Day 3", focus: "Legs & Core", movements: "Barbell Squats, Romanian Deadlifts, Hanging Leg Raise, Leg Press, Calf Raises" },
        { day: "Day 4", focus: "Back & Biceps", movements: "Pull-ups, Rows, Curls, Lat Pulldowns, Face Pulls" },
        { day: "Day 5", focus: "Shoulders & Arms", movements: "Military Press, Lateral Raises, Tricep Extensions, Front Raises, Shrugs" }
      ];
    } else if (goal === "cutting") {
      planTitle = "SHRED FACTORY: DEFINITION PROTOCOL";
      exercises = [
        { day: "Day 1", focus: "Full Body + HIIT", movements: "Compound Lifts + 15min HIIT Finisher" },
        { day: "Day 2", focus: "Cardio + Core", movements: "30min Steady State + Ab Circuit" },
        { day: "Day 3", focus: "Upper Body + Intervals", movements: "Push/Pull Split + Sprint Intervals" },
        { day: "Day 4", focus: "Rest/Active Recovery", movements: "Walking + Mobility Work" },
        { day: "Day 5", focus: "Lower Body + HIIT", movements: "Leg Focus + Tabata Protocol" }
      ];
    } else if (goal === "athletic-base") {
      planTitle = "ATHLETE X: PERFORMANCE MATRIX";
      exercises = [
        { day: "Day 1", focus: "Power Development", movements: "Olympic Lifts + Plyometrics" },
        { day: "Day 2", focus: "Conditioning", movements: "Circuit Training + Agility Work" },
        { day: "Day 3", focus: "Strength Base", movements: "Heavy Compounds + Core Stability" },
        { day: "Day 4", focus: "Recovery", movements: "Mobility + Light Movement" },
        { day: "Day 5", focus: "Speed & Agility", movements: "Sprint Work + Reactive Drills" }
      ];
    } else {
      planTitle = "X-FIT CUSTOM PROTOCOL";
      exercises = [
        { day: "Day 1", focus: "Push Emphasis", movements: "Upper Body Push + Accessories" },
        { day: "Day 2", focus: "Active Recovery", movements: "Mobility + Light Cardio" },
        { day: "Day 3", focus: "Pull Emphasis", movements: "Back Focus + Bicep Work" },
        { day: "Day 4", focus: "Lower Body", movements: "Leg Development + Core" },
        { day: "Day 5", focus: "Full Body Integration", movements: "Compound Movements + Finishers" }
      ];
    }
    
    return { title: planTitle, exercises };
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">What's your body type?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["slim", "bulky", "short", "average"].map((type) => (
                <button
                  key={type}
                  className="p-4 border border-gray-700 rounded-lg hover:border-xfit-cyan hover:bg-xfit-black/30 transition-all"
                  onClick={() => handleBodyTypeSelect(type as BodyType)}
                >
                  <span className="text-lg capitalize">{type}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">What's your age range?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["<18", "18-25", "26-35", "36+"].map((range) => (
                <button
                  key={range}
                  className="p-4 border border-gray-700 rounded-lg hover:border-xfit-cyan hover:bg-xfit-black/30 transition-all"
                  onClick={() => handleAgeRangeSelect(range as AgeRange)}
                >
                  <span className="text-lg">{range}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">What's your goal?</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: "bulking", label: "Bulking - Gain size and strength" },
                { id: "cutting", label: "Cutting - Lose fat, maintain muscle" },
                { id: "athletic-base", label: "Athletic Base - Improve overall fitness" },
                { id: "recovery", label: "Recovery - Rehab from injury" },
                { id: "energy", label: "Energy - Boost daily energy levels" },
              ].map((item) => (
                <button
                  key={item.id}
                  className="p-4 border border-gray-700 rounded-lg hover:border-xfit-cyan hover:bg-xfit-black/30 transition-all text-left"
                  onClick={() => handleGoalSelect(item.id as Goal)}
                >
                  <span className="text-lg">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">How often can you train?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: "2-3", label: "2-3 days/week" },
                { id: "4-5", label: "4-5 days/week" },
                { id: "6-7", label: "6-7 days/week" },
              ].map((item) => (
                <button
                  key={item.id}
                  className="p-4 border border-gray-700 rounded-lg hover:border-xfit-cyan hover:bg-xfit-black/30 transition-all"
                  onClick={() => handleFrequencySelect(item.id as Frequency)}
                >
                  <span className="text-lg">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        const workoutPlan = getWorkoutPlan();
        return (
          <div className="space-y-8">
            <div className="bg-xfit-black/60 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-2 neon-text-cyan">
                {workoutPlan?.title || "PERSONALIZED WORKOUT PLAN"}
              </h3>
              <p className="text-gray-400 mb-4">
                User: {bodyType} | {ageRange} | {goal?.replace("-", " ")} | {frequency} days/week
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Week Sample:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="py-2 pr-4 text-xfit-cyan">Day</th>
                        <th className="py-2 pr-4 text-xfit-cyan">Focus</th>
                        <th className="py-2 text-xfit-cyan">Key Movements</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workoutPlan?.exercises.map((exercise, index) => (
                        <tr key={index} className={index < workoutPlan.exercises.length - 1 ? "border-b border-gray-800" : ""}>
                          <td className="py-3 pr-4 font-medium">{exercise.day}</td>
                          <td className="py-3 pr-4">{exercise.focus}</td>
                          <td className="py-3">{exercise.movements}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/workouts" className="btn-primary inline-flex items-center justify-center">
                  <span>View Full Plan</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <button 
                  onClick={resetForm} 
                  className="btn-secondary inline-flex items-center justify-center">
                  Rebuild Plan
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="train-now" className="section-padding relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 12, 12, 0.9), rgba(12, 12, 12, 0.9)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-red">Train Now</span> - Interactive AI Builder
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a personalized training plan built specifically for your body type, goals, and schedule.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 shadow-lg">
            {getStepContent()}
          </div>

          {!planGenerated && step > 1 && (
            <div className="mt-6 text-center">
              <button onClick={() => setStep(step - 1)} className="text-gray-400 hover:text-white">
                &larr; Back to previous step
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrainNowSection;
