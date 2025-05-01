
export type WorkoutPlanData = {
  bodyType: string;
  ageRange: string;
  goal: string;
  frequency: string;
  plan: {
    title: string;
    exercises: Array<{
      day: string;
      focus: string;
      movements: string;
    }>;
  };
};

export type DietPlanType = {
  title: string;
  description: string;
  meals: Array<{
    name: string;
    foods: string[];
    macros: string;
  }>;
  guidelines: string[];
};

export type ExerciseDemo = {
  name: string;
  description: string;
  instructions: string[];
  image: string;
  muscleGroup: string;
};
