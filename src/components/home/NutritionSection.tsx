
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Utensils, Moon, ArrowRight } from "lucide-react";

const NutritionSection = () => {
  const nutritionCards = [
    {
      id: 1,
      title: "Clean Indian Fusion Recipes",
      description: "Traditional flavors with optimal macros. Perfect for building muscle without sacrificing taste.",
      icon: <Utensils size={24} />,
      link: "/nutrition/recipes",
    },
    {
      id: 2,
      title: "Goal-Based Meal Plans",
      description: "Custom nutrition strategies for bulking, cutting, and maintenance phases.",
      icon: <Utensils size={24} />,
      link: "/nutrition/meal-plans",
    },
    {
      id: 3,
      title: "Recovery & Sleep Optimization",
      description: "Maximize gains with proper recovery techniques, mobility work, and sleep hacks.",
      icon: <Moon size={24} />,
      link: "/nutrition/recovery",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 12, 12, 0.9), rgba(12, 12, 12, 0.9)), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-cyan">Nutrition</span> & Recovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fuel your transformation with nutrition plans designed for your goals and recovery strategies to maximize results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {nutritionCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-xfit-black rounded-lg p-6 hover:shadow-neon-cyan transition-all duration-300 border border-gray-800 hover:border-xfit-cyan h-full flex flex-col"
            >
              <div className="mb-4 text-xfit-cyan">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{card.description}</p>
              <Link
                to={card.link}
                className="inline-flex items-center text-xfit-cyan hover:underline mt-auto"
              >
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold mb-4">
                Free Nutrition Guide: The Desi Cutting Plan
              </h3>
              <p className="text-gray-400 mb-4">
                Get our 7-day meal plan with Indian-inspired recipes that help you cut fat while maintaining muscle. Includes grocery lists, macro breakdowns, and prep instructions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">Vegan Options</span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">Budget Friendly</span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">Quick Recipes</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link to="/nutrition/free-guide" className="btn-primary w-full text-center">
                Download Free Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
