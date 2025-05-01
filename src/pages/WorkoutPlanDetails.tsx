
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type WorkoutPlanData = {
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

type DietPlanType = {
  title: string;
  description: string;
  meals: Array<{
    name: string;
    foods: string[];
    macros: string;
  }>;
  guidelines: string[];
};

type ExerciseDemo = {
  name: string;
  description: string;
  instructions: string[];
  image: string;
  muscleGroup: string;
};

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
      generateDietPlan(parsedPlan.goal);
      
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
  
  const extractMuscleGroups = (focus: string): string[] => {
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
  
  const getExerciseDemos = (muscleGroup: string): ExerciseDemo[] => {
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
  
  const generateDietPlan = (goal: string) => {
    let dietPlan: DietPlanType;
    
    switch(goal) {
      case 'bulking':
        dietPlan = {
          title: "Muscle Building Diet Plan",
          description: "Strategic caloric surplus with high protein for maximum muscle growth.",
          meals: [
            {
              name: "Breakfast (7-8 AM)",
              foods: [
                "4 whole eggs + 2 egg whites, scrambled",
                "1 cup oatmeal with 1 tbsp honey and 1 banana",
                "1 tbsp natural peanut butter",
                "1 cup orange juice"
              ],
              macros: "Calories: 850 | Protein: 45g | Carbs: 95g | Fat: 28g"
            },
            {
              name: "Mid-Morning (10-11 AM)",
              foods: [
                "Protein shake (2 scoops whey protein)",
                "1 medium banana",
                "1/4 cup mixed nuts"
              ],
              macros: "Calories: 490 | Protein: 50g | Carbs: 35g | Fat: 18g"
            },
            {
              name: "Lunch (1-2 PM)",
              foods: [
                "8 oz (225g) chicken breast",
                "1.5 cups brown rice",
                "2 cups mixed vegetables",
                "1 tbsp olive oil"
              ],
              macros: "Calories: 780 | Protein: 60g | Carbs: 85g | Fat: 15g"
            },
            {
              name: "Pre-Workout (30-60 min before)",
              foods: [
                "1 scoop whey protein",
                "1 medium apple",
                "2 rice cakes"
              ],
              macros: "Calories: 300 | Protein: 25g | Carbs: 40g | Fat: 2g"
            },
            {
              name: "Post-Workout",
              foods: [
                "2 scoops whey protein",
                "1 cup white rice or 1 large sweet potato",
                "1 tsp honey"
              ],
              macros: "Calories: 450 | Protein: 50g | Carbs: 50g | Fat: 3g"
            },
            {
              name: "Dinner (7-8 PM)",
              foods: [
                "8 oz (225g) lean beef or salmon",
                "2 cups mixed vegetables",
                "1 medium sweet potato",
                "1 tbsp olive oil"
              ],
              macros: "Calories: 650 | Protein: 50g | Carbs: 45g | Fat: 25g"
            }
          ],
          guidelines: [
            "Consume 1g of protein per pound of bodyweight daily",
            "Prioritize whole food sources over supplements",
            "Eat every 3-4 hours to maximize muscle protein synthesis",
            "Drink at least 1 gallon (3.8L) of water daily",
            "Focus on nutrient timing around workouts",
            "Incorporate a variety of protein sources for complete amino acid profile",
            "Allow for one flexible meal per week to improve adherence"
          ]
        };
        break;
        
      case 'cutting':
        dietPlan = {
          title: "Fat Loss Diet Plan",
          description: "Strategic caloric deficit with high protein to preserve muscle while cutting fat.",
          meals: [
            {
              name: "Breakfast (7-8 AM)",
              foods: [
                "3 egg whites + 1 whole egg",
                "1/2 cup oatmeal or 2 slices ezekiel bread",
                "1/2 cup berries",
                "Black coffee or green tea"
              ],
              macros: "Calories: 350 | Protein: 25g | Carbs: 35g | Fat: 8g"
            },
            {
              name: "Mid-Morning (10-11 AM)",
              foods: [
                "1 scoop protein powder mixed with water",
                "1 small apple or 1/2 cup berries",
                "10 almonds"
              ],
              macros: "Calories: 230 | Protein: 25g | Carbs: 15g | Fat: 8g"
            },
            {
              name: "Lunch (1-2 PM)",
              foods: [
                "5 oz (140g) chicken breast or white fish",
                "2 cups green vegetables (spinach, broccoli, etc.)",
                "1/2 cup brown rice or quinoa",
                "1 tsp olive oil"
              ],
              macros: "Calories: 390 | Protein: 40g | Carbs: 30g | Fat: 8g"
            },
            {
              name: "Afternoon Snack (4-5 PM)",
              foods: [
                "1/4 cup cottage cheese or 1 scoop protein",
                "1 small piece of fruit or vegetable sticks",
                "5 almonds"
              ],
              macros: "Calories: 180 | Protein: 20g | Carbs: 10g | Fat: 5g"
            },
            {
              name: "Dinner (7-8 PM)",
              foods: [
                "5 oz (140g) lean protein (turkey, fish, tofu)",
                "2 cups green vegetables or salad",
                "1/4 avocado or 1 tsp olive oil",
                "Herbs and spices to taste"
              ],
              macros: "Calories: 350 | Protein: 35g | Carbs: 15g | Fat: 15g"
            }
          ],
          guidelines: [
            "Maintain 500-700 calorie deficit from maintenance level",
            "Keep protein high at 1-1.2g per pound of bodyweight",
            "Prioritize protein and vegetables at every meal",
            "Stay well-hydrated with at least 3L of water daily",
            "Consider intermittent fasting (16:8 method) if plateaued",
            "Limit processed foods, added sugars and alcohol",
            "Perform cardio preferably in fasted state for optimal fat burning",
            "Include a refeed day every 7-10 days with higher carbs"
          ]
        };
        break;
        
      case 'athletic-base':
        dietPlan = {
          title: "Performance Nutrition Plan",
          description: "Balanced nutrition focused on supporting athletic performance and recovery.",
          meals: [
            {
              name: "Breakfast (7-8 AM)",
              foods: [
                "2 whole eggs + 3 egg whites",
                "1 cup oatmeal with berries",
                "1/2 avocado",
                "Green tea or coffee"
              ],
              macros: "Calories: 520 | Protein: 35g | Carbs: 45g | Fat: 20g"
            },
            {
              name: "Mid-Morning (10-11 AM)",
              foods: [
                "1 scoop protein powder",
                "1 medium banana",
                "1 tbsp nut butter"
              ],
              macros: "Calories: 300 | Protein: 25g | Carbs: 30g | Fat: 8g"
            },
            {
              name: "Lunch (1-2 PM)",
              foods: [
                "6 oz (170g) lean protein (chicken, fish)",
                "1 cup brown rice or sweet potato",
                "2 cups mixed vegetables",
                "1 tbsp olive oil"
              ],
              macros: "Calories: 550 | Protein: 45g | Carbs: 50g | Fat: 15g"
            },
            {
              name: "Pre-Training (30-60 min before)",
              foods: [
                "1 piece of fruit",
                "BCAA drink or 1/2 scoop protein powder"
              ],
              macros: "Calories: 150 | Protein: 10g | Carbs: 25g | Fat: 0g"
            },
            {
              name: "Post-Training",
              foods: [
                "1.5 scoops protein powder",
                "1 cup berries or 1 banana",
                "1 cup almond milk"
              ],
              macros: "Calories: 300 | Protein: 35g | Carbs: 25g | Fat: 5g"
            },
            {
              name: "Dinner (7-8 PM)",
              foods: [
                "6 oz (170g) grass-fed beef or wild salmon",
                "Large green salad with vegetables",
                "1/2 cup quinoa or sweet potato",
                "1 tbsp extra virgin olive oil"
              ],
              macros: "Calories: 550 | Protein: 40g | Carbs: 30g | Fat: 25g"
            }
          ],
          guidelines: [
            "Balance macronutrients according to training schedule (higher carbs on intense training days)",
            "Focus on nutrient quality and timing around workouts",
            "Prioritize pre and post-workout nutrition for performance and recovery",
            "Include a variety of colorful fruits and vegetables for micronutrients",
            "Stay hydrated with electrolytes during intense training",
            "Consume anti-inflammatory foods like fatty fish, berries, and nuts",
            "Time carbohydrates primarily around workout windows",
            "Get adequate omega-3 fatty acids for recovery"
          ]
        };
        break;
        
      default:
        dietPlan = {
          title: "Balanced Nutrition Plan",
          description: "Well-rounded diet to support general fitness and health goals.",
          meals: [
            {
              name: "Breakfast (7-8 AM)",
              foods: [
                "2 whole eggs",
                "1 slice whole grain toast",
                "1/4 avocado",
                "1/2 cup berries",
                "Black coffee or tea"
              ],
              macros: "Calories: 350 | Protein: 20g | Carbs: 25g | Fat: 15g"
            },
            {
              name: "Mid-Morning (10-11 AM)",
              foods: [
                "1 scoop protein powder",
                "1 small apple",
                "10 almonds"
              ],
              macros: "Calories: 220 | Protein: 25g | Carbs: 15g | Fat: 7g"
            },
            {
              name: "Lunch (1-2 PM)",
              foods: [
                "4 oz (115g) protein source (chicken, fish, tofu)",
                "2 cups mixed salad greens",
                "1/2 cup cooked quinoa or brown rice",
                "1 tbsp olive oil and vinegar dressing"
              ],
              macros: "Calories: 400 | Protein: 30g | Carbs: 30g | Fat: 15g"
            },
            {
              name: "Afternoon Snack (4-5 PM)",
              foods: [
                "Greek yogurt (5.3 oz/150g)",
                "1 tbsp honey or maple syrup",
                "1/4 cup berries"
              ],
              macros: "Calories: 200 | Protein: 15g | Carbs: 25g | Fat: 3g"
            },
            {
              name: "Dinner (7-8 PM)",
              foods: [
                "4 oz (115g) lean protein (turkey, fish, lean beef)",
                "1 cup roasted vegetables",
                "1/2 cup starchy carbs (sweet potato, rice)",
                "1 tsp olive oil or butter"
              ],
              macros: "Calories: 380 | Protein: 30g | Carbs: 30g | Fat: 12g"
            }
          ],
          guidelines: [
            "Focus on whole, minimally processed foods",
            "Include protein with each meal",
            "Fill half your plate with vegetables and fruits",
            "Choose complex carbohydrates over refined options",
            "Include healthy fats from avocados, nuts, seeds, and oils",
            "Drink at least 8 glasses of water daily",
            "Limit added sugars, excessive sodium, and highly processed foods",
            "Practice mindful eating and portion control"
          ]
        };
    }
    
    setDietPlan(dietPlan);
  };
  
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
        {/* Hero Section */}
        <section className="relative py-16 px-4">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('public/lovable-uploads/bc5becae-44ad-493e-a43b-b48d440a416c.png')",
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
        
        {/* Workout Plan Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <span className="neon-text-red">Weekly</span> Training Plan
            </h2>
            
            <div className="mb-12">
              {planData.plan.exercises.map((exercise, index) => (
                <motion.div
                  key={index}
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
                        <h3 className="text-xl font-bold">{exercise.day}: <span className="text-xfit-cyan">{exercise.focus}</span></h3>
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
                          <p className="text-gray-300">{exercise.movements}</p>
                        </div>
                        
                        {exerciseDemos[exercise.focus] && exerciseDemos[exercise.focus].length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Exercise Demonstrations:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                              {exerciseDemos[exercise.focus].map((demo, demoIndex) => (
                                <div key={demoIndex} className="bg-gray-900 rounded-lg overflow-hidden">
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
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
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
        
        {/* Nutrition Plan Section */}
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
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready To <span className="neon-text-red">Level Up?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get access to premium workout plans, nutritional guidance, and expert coaching.
            </p>
            <Link to="/subscription-plans" className="btn-primary inline-flex items-center">
              <span>Upgrade Your X-Fit Journey</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorkoutPlanDetails;
