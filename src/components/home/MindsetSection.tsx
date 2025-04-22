
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Alex M.",
    beforeImg: "public/lovable-uploads/e5e88667-dfe1-47bc-aaf8-5503ea07d0ba.png",
    afterImg: "public/lovable-uploads/1d0d487c-154b-4ab2-9864-92d03ddfc6d3.png",
    quote: "Project X-Fit transformed not just my body, but my entire mindset. I went from making excuses to making progress.",
    weeks: 12,
    readTime: "5 min read",
  },
  {
    id: 2,
    name: "David K.",
    beforeImg: "public/lovable-uploads/7096f8cd-5e27-4b57-9542-bf94c3316a37.png",
    afterImg: "public/lovable-uploads/1144195b-4ee9-4aef-8f77-30e5c0683013.png",
    quote: "The street workouts and nutrition plans helped me build muscle and find my confidence again. This is the real deal.",
    weeks: 16,
    readTime: "7 min read",
  },
  {
    id: 3,
    name: "Marcus R.",
    beforeImg: "public/lovable-uploads/f0026673-44d8-4ed3-a79d-456e9d7beed5.png",
    afterImg: "public/lovable-uploads/9de2c7bf-de4a-41a7-a5d6-8b864755b0ca.png",
    quote: "No fancy gym, no problem. X-Fit showed me how to build muscle with minimal equipment in my own neighborhood.",
    weeks: 8,
    readTime: "4 min read",
  },
];

const MindsetSection = () => {
  return (
    <section className="bg-xfit-black section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-red">Mindset</span> & Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from people just like you who transformed their bodies and minds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative flex h-48">
                <div className="w-1/2 relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-xfit-black/80 text-white text-xs px-2 py-1 rounded z-10">
                    Before
                  </div>
                  <img
                    src={testimonial.beforeImg}
                    alt={`${testimonial.name} before`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-xfit-cyan/80 text-black text-xs px-2 py-1 rounded z-10">
                    After {testimonial.weeks} weeks
                  </div>
                  <img
                    src={testimonial.afterImg}
                    alt={`${testimonial.name} after`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <span className="text-gray-400 text-sm">{testimonial.readTime}</span>
                </div>
                <p className="text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                <Link
                  to={`/mindset/transformation/${testimonial.id}`}
                  className="inline-flex items-center text-xfit-cyan hover:underline"
                >
                  <span>Read full story</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/mindset" className="btn-primary inline-flex items-center">
            <span>Join the X-Fit Community</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
