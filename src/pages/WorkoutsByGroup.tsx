
import React from "react";
import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const muscleGroups = {
  chest: {
    title: "Chest Workouts",
    description: "Build a powerful, well-defined chest with these science-backed exercises.",
    image: "public/lovable-uploads/b30ee79f-4239-4a52-9f3f-abc7e9cc38ab.png",
    exercises: [
      {
        id: "bench-press",
        name: "Bench Press",
        description: "The king of chest exercises, targeting the entire pectoral region.",
        image: "public/lovable-uploads/f8b28f2b-d35a-4ba1-9a89-038a79e867f3.png"
      },
      {
        id: "incline-dumbbell-press",
        name: "Incline Dumbbell Press",
        description: "Targets the upper chest for that shelf-like appearance.",
        image: "public/lovable-uploads/5cb132b8-9018-432d-bf8e-e540403a7ab9.png"
      },
      {
        id: "chest-dips",
        name: "Chest Dips",
        description: "Hits the lower chest fibers with intense tension.",
        image: "public/lovable-uploads/9e941299-d9cb-42ff-a0df-78abe72ae074.png"
      }
    ]
  },
  shoulders: {
    title: "Shoulder Workouts",
    description: "Sculpt 3D delts with these targeted movements for all three shoulder heads.",
    image: "public/lovable-uploads/3e53c2be-ae73-4fff-8fca-34066e4e3687.png",
    exercises: [
      {
        id: "overhead-press",
        name: "Overhead Press",
        description: "The fundamental shoulder builder for overall mass.",
        image: "public/lovable-uploads/7b8c21ca-372d-4d1d-b330-68f0b63c64ab.png"
      },
      {
        id: "lateral-raises",
        name: "Lateral Raises",
        description: "Creates width and that coveted capped shoulder look.",
        image: "public/lovable-uploads/2f838e48-9abe-41be-b896-2968f3c0610e.png"
      }
    ]
  },
  back: {
    title: "Back Workouts",
    description: "Develop a wide, thick back with these pulling movements.",
    image: "public/lovable-uploads/691a6da0-368e-40ad-8c51-3efee5b7a1b5.png",
    exercises: [
      {
        id: "pull-ups",
        name: "Pull-ups",
        description: "The ultimate upper back developer for width.",
        image: "public/lovable-uploads/b0a2672f-55e8-451e-9f1c-4876cda48875.png"
      },
      {
        id: "barbell-rows",
        name: "Barbell Rows",
        description: "Builds thickness in the mid-back.",
        image: "public/lovable-uploads/d99bfd30-576d-46b5-9936-0c03177fdafb.png"
      }
    ]
  },
  arms: {
    title: "Arm Workouts",
    description: "Build sleeve-busting arms with these bicep and tricep exercises.",
    image: "public/lovable-uploads/de2cb329-a13c-463f-958d-da85a6e55864.png",
    exercises: [
      {
        id: "barbell-curl",
        name: "Barbell Curl",
        description: "The foundational bicep exercise for overall development.",
        image: "public/lovable-uploads/667d17e4-df86-43d1-ac11-d3d7ce494146.png"
      },
      {
        id: "skull-crushers",
        name: "Skull Crushers",
        description: "Primary triceps builder that isolates all three heads.",
        image: "public/lovable-uploads/d546d267-9f40-44de-9a22-4d4ceaa64e21.png"
      },
      {
        id: "hammer-curls",
        name: "Hammer Curls",
        description: "Targets the brachialis and brachioradialis for arm thickness.",
        image: "public/lovable-uploads/0a928ef5-2152-421b-bab9-d106282db84d.png"
      }
    ]
  },
  legs: {
    title: "Leg Workouts",
    description: "Build powerful, athletic legs with these lower body exercises.",
    image: "public/lovable-uploads/a05e1e2e-4122-48bc-a9c4-fbe576c3e9ec.png",
    exercises: [
      {
        id: "barbell-squats",
        name: "Barbell Squats",
        description: "The king of all exercises for lower body mass.",
        image: "public/lovable-uploads/3b55b8f4-4c22-4f61-a979-ef79de7f5cde.png"
      },
      {
        id: "romanian-deadlift",
        name: "Romanian Deadlift",
        description: "Targets the posterior chain, especially hamstrings and glutes.",
        image: "public/lovable-uploads/837056d0-16bb-4206-8e45-6c6805899645.png"
      }
    ]
  },
  core: {
    title: "Core Workouts",
    description: "Develop a strong, defined midsection with these targeted core exercises.",
    image: "public/lovable-uploads/53da4c27-1994-44eb-af21-00dfb84fc378.png",
    exercises: [
      {
        id: "hanging-leg-raises",
        name: "Hanging Leg Raises",
        description: "Advanced core exercise that targets the lower abs.",
        image: "public/lovable-uploads/74377d4e-304a-4564-b905-8a9384891e9c.png"
      },
      {
        id: "plank",
        name: "Plank",
        description: "Isometric exercise that engages the entire core.",
        image: "public/lovable-uploads/8b6f8c82-fea6-4310-b225-4054f6353f00.png"
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
