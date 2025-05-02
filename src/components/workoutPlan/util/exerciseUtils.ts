
import { ExerciseDemo } from "../types";

export const extractMuscleGroups = (focus: string): string[] => {
  const lowerFocus = focus.toLowerCase();
  const groups = [];
  
  if (lowerFocus.includes('chest')) groups.push('chest');
  if (lowerFocus.includes('back')) groups.push('back');
  if (lowerFocus.includes('shoulder') || lowerFocus.includes('delt')) groups.push('shoulders');
  if (lowerFocus.includes('leg')) groups.push('legs');
  if (lowerFocus.includes('arm') || lowerFocus.includes('bicep') || lowerFocus.includes('tricep')) groups.push('arms');
  if (lowerFocus.includes('core') || lowerFocus.includes('ab')) groups.push('core');
  
  // If no specific group found, default to full body
  if (groups.length === 0) {
    if (lowerFocus.includes('push')) groups.push('chest', 'shoulders', 'arms');
    else if (lowerFocus.includes('pull')) groups.push('back', 'arms');
    else if (lowerFocus.includes('full body')) groups.push('chest', 'back', 'legs', 'shoulders', 'arms');
    else groups.push('chest', 'back', 'legs', 'arms', 'shoulders'); // Default to all
  }
  
  return groups;
};

export const getExerciseDemos = (muscleGroup: string): ExerciseDemo[] => {
  // Map of exercise demos by muscle group
  const demosByGroup: {[key: string]: ExerciseDemo[]} = {
    chest: [
      {
        name: "Bench Press",
        description: "The king of chest exercises, targeting the entire pectoral region.",
        instructions: [
          "Lie flat on a bench with your feet firmly planted on the ground",
          "Grip the barbell slightly wider than shoulder width",
          "Lower the bar to your mid-chest with elbows at 45° angle",
          "Press the bar back up to full extension without locking elbows",
          "Focus on contracting your chest throughout the movement"
        ],
        image: "public/lovable-uploads/4baabc15-2858-4f18-8373-79d84613fa8f.png",
        muscleGroup: "chest"
      },
      {
        name: "Incline Dumbbell Press",
        description: "Targets the upper chest for that shelf-like appearance.",
        instructions: [
          "Set bench to 30-45° incline",
          "Hold dumbbells above your chest with palms facing forward",
          "Lower the weights with control until elbows are at 90°",
          "Press back up while squeezing your upper chest",
          "Maintain a slight arch in your lower back throughout"
        ],
        image: "public/lovable-uploads/d99bfd30-576d-46b5-9936-0c03177fdafb.png",
        muscleGroup: "chest"
      },
      {
        name: "Chest Dips",
        description: "Hits the lower chest fibers with intense tension.",
        instructions: [
          "Position yourself on parallel bars with a slight forward lean",
          "Lower your body until you feel a stretch in your chest",
          "Keep elbows slightly flared outward",
          "Push back up to the starting position",
          "Focus on using chest muscles, not triceps, to drive the movement"
        ],
        image: "public/lovable-uploads/dd172949-c8bc-46cd-8506-a6df5163b139.png",
        muscleGroup: "chest"
      }
    ],
    back: [
      {
        name: "Pull-ups",
        description: "The ultimate upper back developer for width.",
        instructions: [
          "Hang from a bar with hands slightly wider than shoulder width",
          "Pull your body up until your chin clears the bar",
          "Focus on driving elbows down and back",
          "Lower with control to a full hang position",
          "Maintain a slight arch in your back throughout"
        ],
        image: "public/lovable-uploads/7ad0ea82-3174-49a3-9a23-d9bbd9c5927a.png",
        muscleGroup: "back"
      },
      {
        name: "Barbell Rows",
        description: "Builds thickness in the mid-back.",
        instructions: [
          "Bend at hips with knees slightly bent and back flat",
          "Grip barbell with hands shoulder-width apart",
          "Pull bar to lower ribcage while keeping elbows close to body",
          "Squeeze shoulder blades together at the top",
          "Lower with control and repeat, maintaining torso position"
        ],
        image: "public/lovable-uploads/d546d267-9f40-44de-9a22-4d4ceaa64e21.png",
        muscleGroup: "back"
      }
    ],
    shoulders: [
      {
        name: "Overhead Press",
        description: "The fundamental shoulder builder for overall mass.",
        instructions: [
          "Start with barbell at shoulder height, hands slightly wider than shoulders",
          "Press bar directly overhead until arms are fully extended",
          "Keep core tight and avoid excessive arching in lower back",
          "Lower the bar with control to starting position",
          "Drive through heels and keep shoulders down away from ears"
        ],
        image: "public/lovable-uploads/461c7ee2-a064-4922-a675-ccf19df49cbd.png",
        muscleGroup: "shoulders"
      },
      {
        name: "Lateral Raises",
        description: "Creates width and that coveted capped shoulder look.",
        instructions: [
          "Stand with dumbbells at sides, slight bend in elbows",
          "Raise arms out to sides until parallel with floor",
          "Keep wrists neutral and thumbs slightly higher than pinkies",
          "Lower with control, don't let arms swing",
          "Focus on using side delts, not traps, to raise the weight"
        ],
        image: "public/lovable-uploads/3e53c2be-ae73-4fff-8fca-34066e4e3687.png",
        muscleGroup: "shoulders"
      }
    ],
    legs: [
      {
        name: "Barbell Squats",
        description: "The king of all exercises for lower body mass.",
        instructions: [
          "Position bar across upper traps/rear delts, not on neck",
          "Stand with feet shoulder-width apart, toes slightly turned out",
          "Descend by breaking at hips first, then knees",
          "Lower until thighs are at least parallel to ground",
          "Drive through heels and midfoot to stand back up, keeping chest up"
        ],
        image: "public/lovable-uploads/2262d29d-355d-419d-b9f0-b68121e97896.png",
        muscleGroup: "legs"
      },
      {
        name: "Romanian Deadlift",
        description: "Targets the posterior chain, especially hamstrings and glutes.",
        instructions: [
          "Hold barbell at hip level with hands shoulder-width apart",
          "Push hips back while maintaining slight knee bend",
          "Lower bar along shins until you feel stretch in hamstrings",
          "Keep back flat and shoulders retracted throughout",
          "Drive hips forward to stand up, squeezing glutes at the top"
        ],
        image: "public/lovable-uploads/1737b16e-342f-4076-96a8-436445857880.png",
        muscleGroup: "legs"
      }
    ],
    arms: [
      {
        name: "Barbell Curl",
        description: "The foundational bicep exercise for overall development.",
        instructions: [
          "Stand with feet shoulder-width apart, grip barbell at shoulder width",
          "Keep elbows tucked to sides throughout movement",
          "Curl bar up in controlled manner, focusing on biceps contraction",
          "Hold briefly at top position with maximum flexion",
          "Lower with control, fully extending arms at bottom"
        ],
        image: "public/lovable-uploads/3283543e-30d9-4bf8-827d-1b3d6695f754.png",
        muscleGroup: "arms"
      },
      {
        name: "Skull Crushers",
        description: "Primary triceps builder that isolates all three heads.",
        instructions: [
          "Lie on bench with barbell held at arms' length above chest",
          "Keep upper arms stationary, perpendicular to floor",
          "Lower weight by bending elbows until bar is just above forehead",
          "Extend arms back to starting position, focusing on triceps",
          "Keep elbows pointed toward ceiling throughout"
        ],
        image: "public/lovable-uploads/de2cb329-a13c-463f-958d-da85a6e55864.png",
        muscleGroup: "arms"
      },
      {
        name: "Hammer Curls",
        description: "Targets the brachialis and brachioradialis for arm thickness.",
        instructions: [
          "Stand with dumbbells at sides, palms facing your body",
          "Curl weights up while maintaining neutral grip (thumbs up)",
          "Focus on keeping elbows stationary against sides",
          "Raise until forearms are vertical, biceps fully contracted",
          "Lower with control back to starting position"
        ],
        image: "public/lovable-uploads/dd10affd-1c02-46df-ba9f-dd605bdc972e.png",
        muscleGroup: "arms"
      }
    ],
    core: [
      {
        name: "Hanging Leg Raises",
        description: "Advanced core exercise that targets the lower abs.",
        instructions: [
          "Hang from pull-up bar with hands slightly wider than shoulders",
          "Keep shoulder blades pulled down and back",
          "Raise legs together until parallel to ground or higher",
          "Focus on using abs to lift, not momentum or hip flexors",
          "Lower legs with control, avoiding swinging"
        ],
        image: "public/lovable-uploads/4b6929c0-c013-4ba8-a905-f3a4bb0a7377.png",
        muscleGroup: "core"
      },
      {
        name: "Plank",
        description: "Isometric exercise that engages the entire core.",
        instructions: [
          "Start in push-up position but resting on forearms",
          "Create straight line from head to heels",
          "Engage core by drawing navel toward spine",
          "Keep shoulders down and back, neck neutral",
          "Hold position while breathing normally"
        ],
        image: "public/lovable-uploads/53da4c27-1994-44eb-af21-00dfb84fc378.png",
        muscleGroup: "core"
      }
    ]
  };
  
  return demosByGroup[muscleGroup] || [];
};
