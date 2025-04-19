
import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Utensils, BarChart4, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const mealPlans = [
  {
    id: 1,
    title: "Bulking Meal Plan",
    description: "3,500 calories per day with focus on lean protein and complex carbs.",
    image: "public/lovable-uploads/d5426006-f9f9-4459-b4f9-0675b0d39fed.png",
    tags: ["High Protein", "Bulking", "Mass Gain"],
  },
  {
    id: 2,
    title: "Cutting Diet Protocol",
    description: "Lean out while maintaining muscle mass with this carb-cycling approach.",
    image: "public/lovable-uploads/a022b372-b8cd-44cf-94c7-65cac64a81cd.png",
    tags: ["Low Carb", "Fat Loss", "Muscle Retention"],
  },
  {
    id: 3,
    title: "Vegetarian Muscle Builder",
    description: "Plant-based protein sources and nutrition plan for optimal muscle growth.",
    image: "public/lovable-uploads/faca7818-a973-4eb1-9e06-0ff85d6ef050.png",
    tags: ["Vegetarian", "High Protein", "Plant-Based"],
  },
];

const Nutrition = () => {
  return (
    <Layout>
      <div className="bg-xfit-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="neon-text-cyan">Nutrition</span> Science
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                You can't out-train a bad diet. Fuel your body with science-backed nutrition optimized for your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Three Pillars of <span className="neon-text-cyan">X-Fit Nutrition</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our approach combines traditional wisdom with cutting-edge nutritional science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-xfit-cyan transition-all duration-300"
              >
                <div className="mb-4 text-xfit-cyan">
                  <Utensils size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nutrient Timing</h3>
                <p className="text-gray-400 mb-4">
                  Strategic intake of specific nutrients around your training window to maximize muscle protein synthesis and recovery.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Pre-workout carb loading</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Intra-workout supplementation</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Post-workout anabolic window</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-xfit-cyan transition-all duration-300"
              >
                <div className="mb-4 text-xfit-cyan">
                  <BarChart4 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Macro Optimization</h3>
                <p className="text-gray-400 mb-4">
                  Precisely tailored protein, carbohydrate, and fat ratios customized to your body type and specific goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Body type specific macros</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Carb cycling protocols</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Progressive calorie adjustment</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-xfit-cyan transition-all duration-300"
              >
                <div className="mb-4 text-xfit-cyan">
                  <BrainCircuit size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sustainable Approach</h3>
                <p className="text-gray-400 mb-4">
                  Nutrition strategies you can maintain long-term without extreme restriction or unhealthy behaviors.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Flexible meal planning</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Strategic refeeds</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                    <span>Whole food foundations</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meal Plans Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Goal-Specific <span className="neon-text-cyan">Meal Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scientifically formulated nutrition programs designed for your body type and training goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mealPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-xfit-black rounded-lg overflow-hidden shadow-lg hover:shadow-neon-cyan transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plan.tags.map((tag) => (
                        <span key={tag} className="bg-gray-800 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/nutrition/meal-plan/${plan.id}`}
                      className="btn-primary w-full text-center inline-block"
                    >
                      View Full Plan
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Guide Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="neon-text-cyan">Free Nutrition Guide:</span> The Desi Cutting Plan
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Get our 7-day meal plan with Indian-inspired recipes that help you cut fat while maintaining muscle. Includes grocery lists, macro breakdowns, and prep instructions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded">Vegan Options</span>
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded">Budget Friendly</span>
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded">Quick Recipes</span>
                  </div>
                  <Link to="/nutrition/free-guide" className="btn-primary inline-flex items-center">
                    <span>Download Free Guide</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="public/lovable-uploads/e3d4ec09-4b6c-4055-be23-310c180884ba.png" 
                    alt="Nutrition guide" 
                    className="rounded-lg shadow-lg w-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Nutrition;
