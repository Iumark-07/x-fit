import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronRight } from "lucide-react";

const Workouts = () => {
  const muscleGroups = [
    {
      title: "Chest",
      imageSrc: "public/lovable-uploads/9de2c7bf-de4a-41a7-a5d6-8b864755b0ca.png",
      linkTo: "/workouts/chest",
    },
    {
      title: "Shoulders",
      imageSrc: "public/lovable-uploads/1d0d487c-154b-4ab2-9864-92d03ddfc6d3.png",
      linkTo: "/workouts/shoulders",
    },
    {
      title: "Legs",
      imageSrc: "public/lovable-uploads/dd172949-c8bc-46cd-8506-a6df5163b139.png",
      linkTo: "/workouts/legs",
    },
    {
      title: "Back",
      imageSrc: "public/lovable-uploads/a022b372-b8cd-44cf-94c7-65cac64a81cd.png",
      linkTo: "/workouts/back",
    },
    {
      title: "Arms",
      imageSrc: "public/lovable-uploads/7b0e4d47-5039-4437-a5c8-e51336877051.png",
      linkTo: "/workouts/arms",
    },
    {
      title: "Core",
      imageSrc: "public/lovable-uploads/1144195b-4ee9-4aef-8f77-30e5c0683013.png",
      linkTo: "/workouts/core",
    },
  ];

  return (
    <Layout>
      <div className="bg-xfit-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="neon-text-cyan">X-Fit</span> Workouts
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Scientifically designed training programs for maximum muscle growth, strength, and aesthetics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Muscle Groups */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {muscleGroups.map((muscle, index) => (
                <motion.div
                  key={muscle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                >
                  <Link to={muscle.linkTo} className="block">
                    <div className="absolute inset-0 bg-gradient-to-t from-xfit-black to-transparent z-10"></div>
                    <img
                      src={muscle.imageSrc}
                      alt={muscle.title}
                      className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-2xl font-bold">{muscle.title}</h3>
                      <div className="flex items-center mt-2 text-xfit-cyan group-hover:translate-x-2 transition-transform duration-300">
                        <span className="mr-1">Train now</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Training Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-xfit-black rounded-lg overflow-hidden">
                <div 
                  className="h-48 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center"
                  style={{
                    backgroundImage: "url('public/lovable-uploads/2262d29d-355d-419d-b9f0-b68121e97896.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <h3 className="text-2xl font-bold text-white">Beginner Program</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>3 days per week</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>45-min workouts</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>Full body approach</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>Minimal equipment</span>
                    </li>
                  </ul>
                  <a 
                    href="/downloads/beginner-program.pdf" 
                    className="btn-primary w-full text-center inline-flex items-center justify-center"
                    download
                  >
                    <Download size={16} className="mr-2" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-xfit-black rounded-lg overflow-hidden">
                <div 
                  className="h-48 bg-gradient-to-r from-red-900 to-orange-900 flex items-center justify-center"
                  style={{
                    backgroundImage: "url('public/lovable-uploads/dd10affd-1c02-46df-ba9f-dd605bdc972e.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <h3 className="text-2xl font-bold text-white">Intermediate Program</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>4-5 days per week</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>60-min workouts</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>Upper/Lower splits</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>Progressive overload</span>
                    </li>
                  </ul>
                  <a 
                    href="/downloads/intermediate-program.pdf" 
                    className="btn-primary w-full text-center inline-flex items-center justify-center"
                    download
                  >
                    <Download size={16} className="mr-2" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-xfit-black rounded-lg overflow-hidden">
                <div 
                  className="h-48 bg-gradient-to-r from-cyan-900 to-green-900 flex items-center justify-center"
                  style={{
                    backgroundImage: "url('public/lovable-uploads/1d37303c-769b-4cc5-a386-0f6bfee78281.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <h3 className="text-2xl font-bold text-white">Advanced Program</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>5-6 days per week</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>75-min workouts</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>PPL/Bro splits</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-xfit-cyan mr-2" />
                      <span>Advanced techniques</span>
                    </li>
                  </ul>
                  <a 
                    href="/downloads/advanced-program.pdf" 
                    className="btn-primary w-full text-center inline-flex items-center justify-center"
                    download
                  >
                    <Download size={16} className="mr-2" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="neon-text-cyan">Free Guide:</span> X-Fit Training Manual
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Download our comprehensive 30-page guide covering exercise technique, program design, nutrition basics, and recovery strategies. Everything you need to maximize your results.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded">Exercise Form</span>
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded">Progressive Overload</span>
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded">Rest Guidelines</span>
                  </div>
                  <a 
                    href="/downloads/x-fit-training-manual.pdf" 
                    className="btn-primary inline-flex items-center"
                    download
                  >
                    <Download size={16} className="mr-2" />
                    <span>Download Free Guide</span>
                  </a>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="public/lovable-uploads/dbac7e9d-a625-400c-a40c-f272657a99a1.png" 
                    alt="Training manual" 
                    className="rounded-lg shadow-lg w-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready For Your <span className="neon-text-red">Transformation?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands who have changed their lives with the X-Fit system.
            </p>
            <Link to="/train-now" className="btn-primary inline-flex items-center">
              <span>Get Your Custom Plan</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Workouts;
