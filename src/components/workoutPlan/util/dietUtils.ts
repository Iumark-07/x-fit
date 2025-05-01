
import { DietPlanType } from "../types";

export const generateDietPlan = (goal: string): DietPlanType => {
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
              "5 oz (140g) lean protein (turkey, fish, lean beef)",
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
  
  return dietPlan;
};
