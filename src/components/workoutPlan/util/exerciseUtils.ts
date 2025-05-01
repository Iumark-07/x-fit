
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
        image: "public/lovable-uploads/f8b28f2b-d35a-4ba1-9a89-038a79e867f3.png",
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
        image: "public/lovable-uploads/5cb132b8-9018-432d-bf8e-e540403a7ab9.png",
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
        image: "public/lovable-uploads/9e941299-d9cb-42ff-a0df-78abe72ae074.png",
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
        image: "public/lovable-uploads/b0a2672f-55e8-451e-9f1c-4876cda48875.png",
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
        image: "public/lovable-uploads/d99bfd30-576d-46b5-9936-0c03177fdafb.png",
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
        image: "public/lovable-uploads/7b8c21ca-372d-4d1d-b330-68f0b63c64ab.png",
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
        image: "public/lovable-uploads/2f838e48-9abe-41be-b896-2968f3c0610e.png",
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
        image: "public/lovable-uploads/3b55b8f4-4c22-4f61-a979-ef79de7f5cde.png",
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
        image: "public/lovable-uploads/837056d0-16bb-4206-8e45-6c6805899645.png",
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
        image: "public/lovable-uploads/667d17e4-df86-43d1-ac11-d3d7ce494146.png",
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
        image: "public/lovable-uploads/d546d267-9f40-44de-9a22-4d4ceaa64e21.png",
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
        image: "public/lovable-uploads/0a928ef5-2152-421b-bab9-d106282db84d.png",
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
        image: "public/lovable-uploads/74377d4e-304a-4564-b905-8a9384891e9c.png",
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
        image: "public/lovable-uploads/8b6f8c82-fea6-4310-b225-4054f6353f00.png",
        muscleGroup: "core"
      }
    ]
  };
  
  return demosByGroup[muscleGroup] || [];
};
