
import React from "react";
import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Info, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mealPlans = [
  {
    id: 1,
    title: "Bulking Meal Plan",
    description: "3,500 calories per day with focus on lean protein and complex carbs.",
    image: "public/lovable-uploads/d5426006-f9f9-4459-b4f9-0675b0d39fed.png",
    tags: ["High Protein", "Bulking", "Mass Gain"],
    dailyCalories: 3500,
    protein: "180-220g",
    carbs: "400-450g",
    fats: "80-100g",
    mealFrequency: "5-6 meals per day",
    idealFor: "Hardgainers and individuals looking to maximize muscle growth",
    overview: "This scientifically-designed bulking plan ensures steady muscle growth without excessive fat gain. By strategically timing carbohydrate and protein intake around your workouts, you'll maximize muscle protein synthesis while minimizing fat storage. The meal plan emphasizes nutrient-dense whole foods to support recovery and growth.",
    sampleDay: [
      {
        meal: "Breakfast (7am)",
        foods: [
          "4 whole eggs + 4 egg whites scrambled",
          "100g oatmeal with honey and banana",
          "1 tbsp almond butter",
          "1 cup orange juice"
        ],
        macros: "Calories: 850, Protein: 45g, Carbs: 95g, Fat: 28g"
      },
      {
        meal: "Mid-Morning (10am)",
        foods: [
          "Protein shake (2 scoops whey protein)",
          "1 large banana",
          "40g mixed nuts"
        ],
        macros: "Calories: 550, Protein: 40g, Carbs: 45g, Fat: 20g"
      },
      {
        meal: "Lunch (1pm)",
        foods: [
          "200g chicken breast",
          "1.5 cups cooked brown rice",
          "Mixed vegetables sautéed in olive oil",
          "1 tbsp flaxseed oil"
        ],
        macros: "Calories: 700, Protein: 50g, Carbs: 80g, Fat: 20g"
      },
      {
        meal: "Pre-Workout (4pm)",
        foods: [
          "1 scoop whey protein",
          "1 cup rice cereal with milk",
          "1 tbsp honey"
        ],
        macros: "Calories: 400, Protein: 25g, Carbs: 60g, Fat: 5g"
      },
      {
        meal: "Post-Workout (6pm)",
        foods: [
          "2 scoops whey protein",
          "1 cup white rice or sweet potato",
          "1 tbsp coconut oil"
        ],
        macros: "Calories: 500, Protein: 40g, Carbs: 60g, Fat: 10g"
      },
      {
        meal: "Dinner (8pm)",
        foods: [
          "250g salmon or lean beef",
          "Large salad with olive oil dressing",
          "150g sweet potato",
          "1 cup Greek yogurt with berries"
        ],
        macros: "Calories: 700, Protein: 45g, Carbs: 60g, Fat: 25g"
      }
    ],
    guidelines: [
      "Consume a protein source with every meal",
      "Eat within 1 hour of waking up",
      "Prioritize carbs around workout times",
      "Drink at least 4 liters of water daily",
      "Adjust calories up by 200 if not gaining weight after 2 weeks",
      "Include a variety of protein sources: eggs, dairy, meat, fish, and plant proteins",
      "Take a rest day from strict eating once per week (still hitting protein targets)"
    ]
  },
  {
    id: 2,
    title: "Cutting Diet Protocol",
    description: "Lean out while maintaining muscle mass with this carb-cycling approach.",
    image: "public/lovable-uploads/a022b372-b8cd-44cf-94c7-65cac64a81cd.png",
    tags: ["Low Carb", "Fat Loss", "Muscle Retention"],
    dailyCalories: "2200-2500",
    protein: "180-220g",
    carbs: "150-250g (varies by day)",
    fats: "60-80g",
    mealFrequency: "4-5 meals per day",
    idealFor: "Those looking to reduce body fat while preserving muscle mass",
    overview: "This cutting protocol implements strategic carb cycling to accelerate fat loss while preserving hard-earned muscle. High carb days coincide with your most intense training sessions, while low carb days enhance fat burning on rest or light activity days. The plan maintains high protein throughout to prevent muscle catabolism during the caloric deficit.",
    sampleDay: [
      {
        meal: "Breakfast (7am)",
        foods: [
          "3 egg whites + 1 whole egg",
          "1/2 cup oatmeal (training day) OR 1/4 avocado (rest day)",
          "1 cup berries",
          "Black coffee"
        ],
        macros: "Training day: Calories: 400, Protein: 25g, Carbs: 45g, Fat: 8g | Rest day: Calories: 350, Protein: 20g, Carbs: 20g, Fat: 15g"
      },
      {
        meal: "Mid-Morning (10am)",
        foods: [
          "Protein shake (1 scoop whey protein)",
          "1 apple or small banana (training day only)",
          "10 almonds"
        ],
        macros: "Training day: Calories: 250, Protein: 25g, Carbs: 25g, Fat: 5g | Rest day: Calories: 150, Protein: 25g, Carbs: 0g, Fat: 5g"
      },
      {
        meal: "Lunch (1pm)",
        foods: [
          "150g chicken breast or white fish",
          "Large green salad with lemon and 1 tbsp olive oil",
          "1/2 cup brown rice (training day only)"
        ],
        macros: "Training day: Calories: 450, Protein: 40g, Carbs: 30g, Fat: 15g | Rest day: Calories: 350, Protein: 40g, Carbs: 5g, Fat: 15g"
      },
      {
        meal: "Pre-Workout (4pm - training days)",
        foods: [
          "1 scoop whey protein",
          "1 rice cake with 1 tsp honey"
        ],
        macros: "Calories: 200, Protein: 25g, Carbs: 15g, Fat: 3g"
      },
      {
        meal: "Dinner (7pm)",
        foods: [
          "200g lean beef, turkey or fish",
          "Unlimited non-starchy vegetables",
          "1/2 cup sweet potato (training day only)",
          "1 tbsp MCT or olive oil"
        ],
        macros: "Training day: Calories: 550, Protein: 40g, Carbs: 30g, Fat: 15g | Rest day: Calories: 450, Protein: 40g, Carbs: 10g, Fat: 15g"
      }
    ],
    guidelines: [
      "Follow a higher carb approach on training days (200-250g carbs)",
      "Switch to lower carbs on rest days (50-100g carbs)",
      "Maintain high protein intake every day",
      "Perform cardio in a fasted state for optimal fat burning",
      "Consider intermittent fasting (16/8 method) if plateau occurs",
      "Limit processed foods and added sugars",
      "Refeed once per week with higher carbs to reset hormones"
    ]
  },
  {
    id: 3,
    title: "Vegetarian Muscle Builder",
    description: "Plant-based protein sources and nutrition plan for optimal muscle growth.",
    image: "public/lovable-uploads/faca7818-a973-4eb1-9e06-0ff85d6ef050.png",
    tags: ["Vegetarian", "High Protein", "Plant-Based"],
    dailyCalories: "2800-3200",
    protein: "140-180g",
    carbs: "350-400g",
    fats: "70-90g",
    mealFrequency: "5-6 meals per day",
    idealFor: "Vegetarians looking to build significant muscle mass without animal products",
    overview: "This specialized vegetarian plan proves you don't need meat to build serious muscle. By strategically combining complementary plant proteins and supplementing with high-quality protein powders, this plan ensures you'll hit optimal protein targets. Special attention is given to key micronutrients that can be challenging to obtain on a vegetarian diet, such as iron, zinc, and vitamin B12.",
    sampleDay: [
      {
        meal: "Breakfast (7am)",
        foods: [
          "Tofu scramble (200g firm tofu) with nutritional yeast",
          "2 slices whole grain toast with peanut butter",
          "1 cup soy milk with fortified nutrients",
          "1 banana"
        ],
        macros: "Calories: 650, Protein: 35g, Carbs: 65g, Fat: 25g"
      },
      {
        meal: "Mid-Morning (10am)",
        foods: [
          "Plant protein shake (30g protein)",
          "1 cup mixed berries",
          "2 tbsp chia seeds"
        ],
        macros: "Calories: 300, Protein: 35g, Carbs: 20g, Fat: 10g"
      },
      {
        meal: "Lunch (1pm)",
        foods: [
          "Lentil and quinoa bowl (1 cup cooked)",
          "1 cup steamed vegetables",
          "1/2 avocado",
          "2 tbsp hemp seeds"
        ],
        macros: "Calories: 550, Protein: 25g, Carbs: 60g, Fat: 20g"
      },
      {
        meal: "Pre-Workout (4pm)",
        foods: [
          "1 scoop plant protein",
          "1 cup oatmeal with maple syrup",
          "1 apple"
        ],
        macros: "Calories: 450, Protein: 25g, Carbs: 70g, Fat: 5g"
      },
      {
        meal: "Post-Workout (6pm)",
        foods: [
          "Plant protein shake (30g protein)",
          "1 cup rice or sweet potato",
          "1 tbsp flaxseed oil"
        ],
        macros: "Calories: 400, Protein: 30g, Carbs: 50g, Fat: 10g"
      },
      {
        meal: "Dinner (8pm)",
        foods: [
          "Tempeh and seitan stir fry (200g total)",
          "1 cup brown rice",
          "Mixed vegetables with olive oil",
          "1 cup fortified plant yogurt"
        ],
        macros: "Calories: 650, Protein: 35g, Carbs: 75g, Fat: 15g"
      }
    ],
    guidelines: [
      "Focus on complete protein sources: soy products, quinoa, buckwheat",
      "Combine complementary proteins to improve amino acid profiles (beans with rice, etc)",
      "Supplement with plant-based protein powder to hit protein targets",
      "Consider creatine supplementation (vegetarians have lower natural levels)",
      "Include iron-rich foods with vitamin C to improve absorption",
      "Supplement with vitamin B12 and vitamin D3",
      "Track protein intake carefully, as plant proteins are less anabolic than animal proteins"
    ]
  }
];

const MealPlanDetails = () => {
  const { id } = useParams<{ id: string }>();
  const planId = parseInt(id || "1");
  
  const plan = mealPlans.find(p => p.id === planId) || mealPlans[0];
  const [openMeals, setOpenMeals] = React.useState<number[]>([0]);
  
  const toggleMeal = (index: number) => {
    if (openMeals.includes(index)) {
      setOpenMeals(openMeals.filter(i => i !== index));
    } else {
      setOpenMeals([...openMeals, index]);
    }
  };
  
  return (
    <Layout>
      <div className="bg-xfit-black py-12 px-4">
        <div className="container mx-auto">
          <Link to="/nutrition" className="inline-flex items-center text-xfit-cyan mb-8">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Nutrition</span>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {plan.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {plan.tags.map(tag => (
                  <span key={tag} className="bg-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                {plan.overview}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Daily Calories</h3>
                  <p className="text-xfit-cyan font-bold text-xl">{plan.dailyCalories}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Meal Frequency</h3>
                  <p className="text-xfit-cyan font-bold text-xl">{plan.mealFrequency}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Protein</h3>
                  <p className="text-xfit-cyan font-bold text-xl">{plan.protein}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Carbs</h3>
                  <p className="text-xfit-cyan font-bold text-xl">{plan.carbs}</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <Info size={20} className="text-xfit-cyan mr-2" />
                  <h3 className="text-lg font-semibold">Ideal For</h3>
                </div>
                <p className="text-gray-300">{plan.idealFor}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-[300px] rounded-lg overflow-hidden mb-6">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Guidelines</h3>
                <ul className="space-y-3">
                  {plan.guidelines.map((guideline, index) => (
                    <li key={index} className="flex">
                      <Check size={18} className="text-xfit-cyan mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Sample <span className="neon-text-cyan">Meal Plan</span>
            </h2>
            
            <div className="space-y-4">
              {plan.sampleDay.map((meal, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-0">
                    <button 
                      className="w-full flex justify-between items-center p-4"
                      onClick={() => toggleMeal(index)}
                    >
                      <div className="flex items-center">
                        <Clock size={18} className="text-xfit-cyan mr-3" />
                        <span className="font-medium text-lg">{meal.meal}</span>
                      </div>
                      {openMeals.includes(index) ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                    
                    {openMeals.includes(index) && (
                      <div className="p-4 pt-0 border-t border-gray-800">
                        <ul className="mb-4 space-y-2">
                          {meal.foods.map((food, foodIndex) => (
                            <li key={foodIndex} className="flex">
                              <Check size={16} className="text-xfit-cyan mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-300">{food}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gray-800 p-2 rounded text-sm">
                          {meal.macros}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to transform your <span className="neon-text-cyan">nutrition?</span></h2>
            <Link to="/membership" className="btn-primary inline-block">
              Get All Meal Plans
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MealPlanDetails;
