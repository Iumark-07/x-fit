
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder-story" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-6">
              Meet <span className="neon-text-red">Umar</span>, 
              <br />
              <span className="neon-text-cyan">The Founder</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Growing up in a neighborhood with no access to gyms or professional training, I had to get creative. 
              Park benches, rusty bars, and concrete walls became my first gym.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              After years of trial and error, I transformed not just my physique but my entire approach to fitness. 
              I realized that true strength wasn't built in fancy gyms with expensive equipment—it was forged through 
              consistency, creativity, and an unbreakable mindset.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-primary inline-flex items-center">
                <span>My Full Story</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-xfit-cyan/20 to-xfit-red/20 rounded-lg blur-xl opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1000" 
                alt="Umar Khitab - Founder of X-Fit" 
                className="relative rounded-lg w-full shadow-lg hover:shadow-neon-cyan transition-all duration-500"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div className="px-4 py-2 bg-xfit-black/60 rounded-lg backdrop-blur-sm border border-gray-800">
                <p className="text-center text-xfit-cyan font-medium">Iumark-07</p>
                <p className="text-center text-gray-400 text-sm">Founder of Project X-Fit</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
