
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Arjun S.",
    beforeImg: "public/lovable-uploads/f8b28f2b-d35a-4ba1-9a89-038a79e867f3.png",
    afterImg: "public/lovable-uploads/5cb132b8-9018-432d-bf8e-e540403a7ab9.png",
    quote: "Project X-Fit transformed not just my body, but my entire mindset. I went from making excuses to making progress.",
    weeks: 12,
    readTime: "5 min read",
  },
  {
    id: 2,
    name: "Michael K.",
    beforeImg: "public/lovable-uploads/667d17e4-df86-43d1-ac11-d3d7ce494146.png",
    afterImg: "public/lovable-uploads/d546d267-9f40-44de-9a22-4d4ceaa64e21.png",
    quote: "The street workouts and nutrition plans helped me shed 15kg and find my confidence again. This is the real deal.",
    weeks: 16,
    readTime: "7 min read",
  },
  {
    id: 3,
    name: "Rahul M.",
    beforeImg: "public/lovable-uploads/9e941299-d9cb-42ff-a0df-78abe72ae074.png",
    afterImg: "public/lovable-uploads/0a928ef5-2152-421b-bab9-d106282db84d.png",
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
