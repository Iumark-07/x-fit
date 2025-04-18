
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MuscleCardProps {
  title: string;
  imageSrc: string;
  linkTo: string;
  delay: number;
}

const MuscleCard: React.FC<MuscleCardProps> = ({ title, imageSrc, linkTo, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-lg group cursor-pointer"
    >
      <Link to={linkTo} className="block">
        <div className="absolute inset-0 bg-gradient-to-t from-xfit-black to-transparent z-10"></div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex items-center mt-2 text-xfit-cyan group-hover:translate-x-2 transition-transform duration-300">
            <span className="mr-1">Train now</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const WorkoutHub = () => {
  const muscleGroups = [
    {
      title: "Chest",
      imageSrc: "public/lovable-uploads/53da4c27-1994-44eb-af21-00dfb84fc378.png",
      linkTo: "/workouts/chest",
    },
    {
      title: "Shoulders",
      imageSrc: "public/lovable-uploads/3e53c2be-ae73-4fff-8fca-34066e4e3687.png",
      linkTo: "/workouts/shoulders",
    },
    {
      title: "Legs",
      imageSrc: "public/lovable-uploads/dd10affd-1c02-46df-ba9f-dd605bdc972e.png",
      linkTo: "/workouts/legs",
    },
    {
      title: "Back",
      imageSrc: "public/lovable-uploads/691a6da0-368e-40ad-8c51-3efee5b7a1b5.png",
      linkTo: "/workouts/back",
    },
    {
      title: "Arms",
      imageSrc: "public/lovable-uploads/de2cb329-a13c-463f-958d-da85a6e55864.png",
      linkTo: "/workouts/arms",
    },
    {
      title: "Core",
      imageSrc: "public/lovable-uploads/63c6b3f6-c095-43a9-be1e-a93b4cadb1af.png",
      linkTo: "/workouts/core",
    },
  ];

  return (
    <section id="workout-hub" className="bg-xfit-black section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-cyan">Train</span> Your Whole Temple
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every rep is a ritual. Every drop of sweat proves you're not done yet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {muscleGroups.map((muscle, index) => (
            <MuscleCard
              key={muscle.title}
              title={muscle.title}
              imageSrc={muscle.imageSrc}
              linkTo={muscle.linkTo}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutHub;
