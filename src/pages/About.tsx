
import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="bg-xfit-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('public/lovable-uploads/f8c56184-b34b-4436-973d-4c5ee7f7f916.png')",
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
                About <span className="neon-text-red">Umar</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                The journey from street workouts to building a fitness revolution
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="public/lovable-uploads/f8c56184-b34b-4436-973d-4c5ee7f7f916.png" 
                  alt="Umar Khitab" 
                  className="rounded-lg w-full h-auto shadow-neon-cyan" 
                />
                <div className="mt-4 text-center">
                  <p className="text-xfit-cyan font-medium text-lg">Iumark-07</p>
                  <p className="text-gray-400">Founder of Project X-Fit</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">
                  <span className="neon-text-cyan">My Story</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Growing up in a neighborhood with no access to gyms or professional training, I had to get creative. 
                  At 16, I was the skinny kid who couldn't do a single pull-up. Park benches, rusty bars, and concrete walls 
                  became my first gym.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  After years of trial and error, I transformed not just my physique but my entire approach to fitness. 
                  I realized that true strength wasn't built in fancy gyms with expensive equipment—it was forged through 
                  consistency, creativity, and an unbreakable mindset.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I started coaching others who faced similar challenges—no money for gym memberships, no access to 
                  equipment—I saw the same transformations happening. That's when Project X-Fit was born. A system built 
                  for those willing to put in the work, no matter their circumstances.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, our community spans across continents, with thousands transforming their bodies using minimal 
                  equipment and maximum determination. This isn't just another fitness program—it's a movement for those 
                  who refuse to let circumstances dictate their potential.
                </p>

                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-4">Connect with Iumark-07</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com/iumark07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <Instagram size={24} />
                    </a>
                    <a href="https://youtube.com/iumark07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <Youtube size={24} />
                    </a>
                    <a href="mailto:contact@project-xfit.com" className="text-gray-400 hover:text-white">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">My <span className="neon-text-red">Philosophy</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide every workout, every meal plan, and every transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-xfit-cyan">Mindset First, Body Second</h3>
                <p className="text-gray-300">
                  The strongest muscle in your body is your mind. Train it daily, and your body will follow.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-xfit-cyan">No Excuses, Only Solutions</h3>
                <p className="text-gray-300">
                  You don't need fancy equipment to build an impressive physique—just consistency and creativity.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-xfit-cyan">Community Over Competition</h3>
                <p className="text-gray-300">
                  We rise by lifting others. Your success is the community's success, and we celebrate every victory together.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Origin of Iumark-07 Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-2 md:order-1"
                >
                  <h2 className="text-3xl font-bold mb-6">
                    The Origin of <span className="neon-text-red">Iumark-07</span>
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The name "Iumark-07" has a special significance in my journey. The "I" represents the individual power we all possess, "umark" is a play on my name, and "07" marks the year I began my transformation from a skinny teenager to a dedicated athlete.
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    This persona emerged as I developed my unique training philosophy, combining street workouts with scientific principles. It's a reminder that even without resources, we can build something extraordinary through determination and knowledge.
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Today, Iumark-07 isn't just my brand—it's a symbol of the transformative potential that exists in every person willing to put in the work, regardless of their starting point or circumstances.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="order-1 md:order-2"
                >
                  <img 
                    src="public/lovable-uploads/7b8c21ca-372d-4d1d-b330-68f0b63c64ab.png" 
                    alt="Iumark-07 origin" 
                    className="rounded-lg shadow-lg" 
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your <span className="neon-text-cyan">Transformation?</span></h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands who have already changed their bodies and lives with the X-Fit system.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/train-now" className="btn-primary">
                  Get My Custom Plan
                </Link>
                <Link to="/workouts" className="btn-secondary">
                  Explore Workouts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
