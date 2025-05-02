
import React from "react";
import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const muscleGroups = {
  chest: {
    title: "Chest Workouts",
    description: "Build a powerful, well-defined chest with these science-backed exercises.",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&q=80&w=1000",
    exercises: [
      {
        id: "bench-press",
        name: "Bench Press",
        description: "The king of chest exercises, targeting the entire pectoral region.",
        image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "incline-dumbbell-press",
        name: "Incline Dumbbell Press",
        description: "Targets the upper chest for that shelf-like appearance.",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "chest-dips",
        name: "Chest Dips",
        description: "Hits the lower chest fibers with intense tension.",
        image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  shoulders: {
    title: "Shoulder Workouts",
    description: "Sculpt 3D delts with these targeted movements for all three shoulder heads.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000",
    exercises: [
      {
        id: "overhead-press",
        name: "Overhead Press",
        description: "The fundamental shoulder builder for overall mass.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "lateral-raises",
        name: "Lateral Raises",
        description: "Creates width and that coveted capped shoulder look.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  back: {
    title: "Back Workouts",
    description: "Develop a wide, thick back with these pulling movements.",
    image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&q=80&w=1000",
    exercises: [
      {
        id: "pull-ups",
        name: "Pull-ups",
        description: "The ultimate upper back developer for width.",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "barbell-rows",
        name: "Barbell Rows",
        description: "Builds thickness in the mid-back.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  arms: {
    title: "Arm Workouts",
    description: "Build sleeve-busting arms with these bicep and tricep exercises.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000",
    exercises: [
      {
        id: "barbell-curl",
        name: "Barbell Curl",
        description: "The foundational bicep exercise for overall development.",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "skull-crushers",
        name: "Skull Crushers",
        description: "Primary triceps builder that isolates all three heads.",
        image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "hammer-curls",
        name: "Hammer Curls",
        description: "Targets the brachialis and brachioradialis for arm thickness.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  legs: {
    title: "Leg Workouts",
    description: "Build powerful, athletic legs with these lower body exercises.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000",
    exercises: [
      {
        id: "barbell-squats",
        name: "Barbell Squats",
        description: "The king of all exercises for lower body mass.",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "romanian-deadlift",
        name: "Romanian Deadlift",
        description: "Targets the posterior chain, especially hamstrings and glutes.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  core: {
    title: "Core Workouts",
    description: "Develop a strong, defined midsection with these targeted core exercises.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
    exercises: [
      {
        id: "hanging-leg-raises",
        name: "Hanging Leg Raises",
        description: "Advanced core exercise that targets the lower abs.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "plank",
        name: "Plank",
        description: "Isometric exercise that engages the entire core.",
        image: "https://images.unsplash.com/photo-1566241142559-40a9552f4706?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  }
};

const WorkoutsByGroup = () => {
  const { group } = useParams();
  const muscleGroup = group as keyof typeof muscleGroups;
  
  if (!muscleGroups[muscleGroup]) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Muscle group not found</h1>
          <p>The requested muscle group could not be found.</p>
          <Link to="/workouts" className="text-xfit-cyan hover:underline mt-4 inline-block">
            &larr; Back to workouts
          </Link>
        </div>
      </Layout>
    );
  }
  
  const currentGroup = muscleGroups[muscleGroup];

  return (
    <Layout>
      <div className="bg-xfit-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('${currentGroup.image}')`,
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
                <span className="neon-text-cyan">{currentGroup.title}</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {currentGroup.description}
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Exercises */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentGroup.exercises.map((exercise, index) => (
                <motion.div
                  key={exercise.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-lg hover:shadow-neon-cyan transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={exercise.image} 
                      alt={exercise.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{exercise.name}</h3>
                    <p className="text-gray-400 mb-4">{exercise.description}</p>
                    
                    <Link
                      to={`/workouts/${muscleGroup}/${exercise.id}`}
                      className="inline-flex items-center text-xfit-cyan hover:underline"
                    >
                      <span>View Exercise</span>
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Content */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Content</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-xfit-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Nutrition Tips for {muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1)}</h3>
                <p className="text-gray-400 mb-4">Optimize your diet to support {muscleGroup} growth and recovery with these evidence-based nutrition strategies.</p>
                <Link to="/nutrition" className="inline-flex items-center text-xfit-cyan hover:underline">
                  <span>Read nutrition guide</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-xfit-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Recovery Strategies</h3>
                <p className="text-gray-400 mb-4">Learn how to properly recover between {muscleGroup} workouts to maximize muscle growth and prevent overtraining.</p>
                <Link to="/mindset" className="inline-flex items-center text-xfit-cyan hover:underline">
                  <span>Read recovery guide</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorkoutsByGroup;
