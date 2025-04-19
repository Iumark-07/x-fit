
import React from "react";
import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const workouts = {
  chest: [
    {
      id: "bench-press",
      name: "Bench Press",
      description: "The king of chest exercises, targeting the entire pectoral region with emphasis on the middle chest.",
      sets: "4 sets of 8-12 reps",
      rest: "90-120 seconds",
      form: [
        "Lie flat on a bench with feet firmly on the ground",
        "Grip the bar slightly wider than shoulder width",
        "Lower the bar to mid-chest with elbows at about 45° angle",
        "Press upward until arms are fully extended, without locking elbows"
      ],
      variations: ["Incline", "Decline", "Close-grip", "Dumbbell"],
      image: "public/lovable-uploads/f8b28f2b-d35a-4ba1-9a89-038a79e867f3.png"
    },
    {
      id: "incline-dumbbell-press",
      name: "Incline Dumbbell Press",
      description: "Targets the upper chest, helping to build that shelf-like appearance at the top of your pecs.",
      sets: "3 sets of 10-12 reps",
      rest: "60-90 seconds",
      form: [
        "Set bench to 30-45° incline",
        "Hold dumbbells at shoulder level with palms facing forward",
        "Press the weights up until arms are extended (don't lock elbows)",
        "Lower the weights slowly to the starting position"
      ],
      variations: ["Neutral grip", "Alternating arms", "Single arm"],
      image: "public/lovable-uploads/5cb132b8-9018-432d-bf8e-e540403a7ab9.png"
    },
    {
      id: "chest-dips",
      name: "Chest Dips",
      description: "An advanced bodyweight movement that hits the lower chest fibers with intense tension.",
      sets: "3 sets of 8-15 reps",
      rest: "60-90 seconds",
      form: [
        "Position yourself on parallel bars with arms straight",
        "Lean your torso forward at about 45° angle",
        "Lower your body by bending elbows until you feel a stretch in your chest",
        "Push back up to the starting position without locking elbows"
      ],
      variations: ["Weighted", "Assisted", "Ring dips"],
      image: "public/lovable-uploads/9e941299-d9cb-42ff-a0df-78abe72ae074.png"
    }
  ],
  arms: [
    {
      id: "barbell-curl",
      name: "Barbell Curl",
      description: "The foundational bicep exercise that allows for maximum weight to be used for overall bicep development.",
      sets: "4 sets of 8-12 reps",
      rest: "60-90 seconds",
      form: [
        "Stand with feet shoulder-width apart, holding a barbell with an underhand grip",
        "Keep elbows close to your sides and stationary throughout the movement",
        "Curl the bar up to shoulder level, contracting the biceps",
        "Lower the weight in a controlled manner without swinging"
      ],
      variations: ["EZ-bar", "Wide grip", "Close grip", "21s method"],
      image: "public/lovable-uploads/667d17e4-df86-43d1-ac11-d3d7ce494146.png"
    },
    {
      id: "skull-crushers",
      name: "Skull Crushers",
      description: "Primary triceps builder that isolates all three heads of the triceps muscle with heavy loading potential.",
      sets: "3 sets of 10-12 reps",
      rest: "60-90 seconds",
      form: [
        "Lie flat on a bench holding a barbell or EZ bar over your chest with arms extended",
        "Keeping upper arms stationary, bend elbows to lower the weight toward your forehead",
        "Extend your arms to return to the starting position, focusing on triceps contraction",
        "Keep wrists firm and movement controlled throughout"
      ],
      variations: ["Dumbbell", "EZ-bar", "Single arm", "Decline bench"],
      image: "public/lovable-uploads/d546d267-9f40-44de-9a22-4d4ceaa64e21.png"
    },
    {
      id: "hammer-curls",
      name: "Hammer Curls",
      description: "Targets the brachialis and brachioradialis while also working the biceps for complete arm development.",
      sets: "3 sets of 10-15 reps",
      rest: "60 seconds",
      form: [
        "Stand holding dumbbells at your sides with palms facing your body",
        "Keeping upper arms stationary, curl the weights up while maintaining the neutral grip",
        "Squeeze at the top of the movement",
        "Lower with control back to the starting position"
      ],
      variations: ["Alternating", "Cross-body", "Seated", "Cable"],
      image: "public/lovable-uploads/0a928ef5-2152-421b-bab9-d106282db84d.png"
    }
  ],
  back: [
    {
      id: "pull-ups",
      name: "Pull-ups",
      description: "The ultimate upper back developer, engaging the lats, rhomboids, and rear delts simultaneously.",
      sets: "4 sets of 6-12 reps",
      rest: "90-120 seconds",
      form: [
        "Hang from a bar with hands slightly wider than shoulder-width apart",
        "Pull your body up until your chin clears the bar",
        "Focus on pulling with your back, not your arms",
        "Lower with control to a full hang position"
      ],
      variations: ["Wide grip", "Close grip", "Weighted", "Assisted"],
      image: "public/lovable-uploads/b0a2672f-55e8-451e-9f1c-4876cda48875.png"
    },
    {
      id: "barbell-rows",
      name: "Barbell Rows",
      description: "Heavy compound movement that builds thickness in the mid-back and targets the lats, rhomboids, and rear delts.",
      sets: "4 sets of 8-12 reps",
      rest: "90 seconds",
      form: [
        "Bend at the hips with a neutral spine, knees slightly bent",
        "Hold a barbell with hands slightly wider than shoulder width",
        "Pull the bar to your lower ribcage, keeping elbows close to your body",
        "Lower the weight in a controlled manner, feeling a stretch in your lats"
      ],
      variations: ["Pendlay row", "Underhand grip", "T-bar row"],
      image: "public/lovable-uploads/d99bfd30-576d-46b5-9936-0c03177fdafb.png"
    }
  ],
  shoulders: [
    {
      id: "overhead-press",
      name: "Overhead Press",
      description: "The fundamental shoulder builder that targets all three deltoid heads with emphasis on the front delts.",
      sets: "4 sets of 6-10 reps",
      rest: "90-120 seconds",
      form: [
        "Stand with feet shoulder-width apart holding a barbell at shoulder level",
        "Press the bar overhead until arms are fully extended",
        "Lower the weight under control back to the starting position",
        "Keep core tight and avoid excessive back arching"
      ],
      variations: ["Seated", "Dumbbell", "Push press", "Behind the neck (advanced)"],
      image: "public/lovable-uploads/7b8c21ca-372d-4d1d-b330-68f0b63c64ab.png"
    },
    {
      id: "lateral-raises",
      name: "Lateral Raises",
      description: "Isolation movement targeting the side deltoids to create width and that coveted capped shoulder look.",
      sets: "3 sets of 12-15 reps",
      rest: "60 seconds",
      form: [
        "Stand holding dumbbells at your sides with a slight bend in your elbows",
        "Raise the weights out to the sides until arms are parallel to the floor",
        "Maintain a slight bend in the elbows throughout",
        "Lower the weights slowly back to the starting position"
      ],
      variations: ["Cable", "Single arm", "Leaning", "Partial reps"],
      image: "public/lovable-uploads/2f838e48-9abe-41be-b896-2968f3c0610e.png"
    }
  ],
  legs: [
    {
      id: "barbell-squats",
      name: "Barbell Squats",
      description: "The king of all exercises, targeting the entire lower body with emphasis on the quadriceps and glutes.",
      sets: "4 sets of 6-10 reps",
      rest: "120-180 seconds",
      form: [
        "Position the bar across your upper back, not your neck",
        "Feet shoulder-width apart, toes slightly pointed out",
        "Bend at the knees and hips, keeping your back straight",
        "Lower until thighs are at least parallel to the floor",
        "Drive through your heels to return to the starting position"
      ],
      variations: ["High bar", "Low bar", "Front squat", "Box squat"],
      image: "public/lovable-uploads/3b55b8f4-4c22-4f61-a979-ef79de7f5cde.png"
    },
    {
      id: "romanian-deadlift",
      name: "Romanian Deadlift",
      description: "Targets the posterior chain, especially the hamstrings and glutes, while teaching proper hip hinge mechanics.",
      sets: "3 sets of 8-12 reps",
      rest: "90-120 seconds",
      form: [
        "Stand holding a barbell at hip level with a shoulder-width grip",
        "Push your hips back while maintaining a slight bend in your knees",
        "Lower the bar along your legs until you feel a stretch in your hamstrings",
        "Drive your hips forward to return to the starting position"
      ],
      variations: ["Dumbbell", "Single leg", "Trap bar", "Snatch grip"],
      image: "public/lovable-uploads/837056d0-16bb-4206-8e45-6c6805899645.png"
    }
  ],
  core: [
    {
      id: "hanging-leg-raises",
      name: "Hanging Leg Raises",
      description: "Advanced core exercise that targets the lower abs while building grip strength and shoulder stability.",
      sets: "3 sets of 10-15 reps",
      rest: "60-90 seconds",
      form: [
        "Hang from a pull-up bar with arms fully extended",
        "Keep your legs straight and raise them until they're parallel to the floor (or higher)",
        "Lower your legs slowly with control",
        "Avoid swinging or using momentum"
      ],
      variations: ["Knee raises", "Toes to bar", "Weighted", "Captain's chair"],
      image: "public/lovable-uploads/74377d4e-304a-4564-b905-8a9384891e9c.png"
    },
    {
      id: "plank",
      name: "Plank",
      description: "Isometric exercise that engages the entire core, including deep abdominal muscles, to build endurance and stability.",
      sets: "3 sets of 30-60 seconds",
      rest: "45-60 seconds",
      form: [
        "Position yourself in a forearm plank position with elbows under shoulders",
        "Keep your body in a straight line from head to heels",
        "Engage your core by drawing your navel toward your spine",
        "Breathe normally and avoid sagging hips or raising buttocks"
      ],
      variations: ["Side plank", "Plank with leg lift", "Plank with arm reach", "RKC plank"],
      image: "public/lovable-uploads/8b6f8c82-fea6-4310-b225-4054f6353f00.png"
    }
  ]
};

const WorkoutDetail = () => {
  const { group, id } = useParams();
  
  // Find the current workout based on group and id
  const muscleGroup = group as keyof typeof workouts;
  const workout = workouts[muscleGroup]?.find(w => w.id === id);
  
  // Get next and previous workout IDs for navigation
  const currentIndex = workouts[muscleGroup]?.findIndex(w => w.id === id) || 0;
  const prevWorkout = currentIndex > 0 ? workouts[muscleGroup][currentIndex - 1] : null;
  const nextWorkout = currentIndex < (workouts[muscleGroup]?.length - 1) ? workouts[muscleGroup][currentIndex + 1] : null;
  
  if (!workout) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Workout not found</h1>
          <p>The requested workout could not be found.</p>
          <Link to="/workouts" className="text-xfit-cyan hover:underline mt-4 inline-block">
            &larr; Back to workouts
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-xfit-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('${workout.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Link to={`/workouts/${muscleGroup}`} className="text-gray-400 hover:text-white inline-flex items-center mb-4">
                <ArrowLeft size={16} className="mr-1" />
                <span>Back to {muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1)} Workouts</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {workout.name}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {workout.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 rounded-full">
                  <span className="text-xfit-cyan font-medium">{workout.sets}</span>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 rounded-full">
                  <span className="text-xfit-cyan font-medium">Rest: {workout.rest}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Exercise Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 order-2 md:order-1"
              >
                <h2 className="text-2xl font-bold mb-6 text-xfit-cyan">Proper Form</h2>
                <ol className="space-y-4">
                  {workout.form.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-xfit-cyan text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
                
                <h2 className="text-2xl font-bold mb-6 mt-10 text-xfit-cyan">Variations</h2>
                <div className="flex flex-wrap gap-2">
                  {workout.variations.map((variation, index) => (
                    <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                      {variation}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <img 
                  src={workout.image} 
                  alt={workout.name} 
                  className="w-full h-auto rounded-lg shadow-neon-cyan" 
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <section className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="flex justify-between">
              {prevWorkout ? (
                <Link to={`/workouts/${muscleGroup}/${prevWorkout.id}`} className="inline-flex items-center text-gray-400 hover:text-white">
                  <ArrowLeft size={16} className="mr-2" />
                  <span>Previous: {prevWorkout.name}</span>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextWorkout ? (
                <Link to={`/workouts/${muscleGroup}/${nextWorkout.id}`} className="inline-flex items-center text-gray-400 hover:text-white">
                  <span>Next: {nextWorkout.name}</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorkoutDetail;
