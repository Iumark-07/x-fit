
import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const mindsetArticles = [
  {
    id: 1,
    title: "Mental Toughness: The Bodybuilder's Secret Weapon",
    excerpt: "How the mind becomes your strongest muscle when pushing beyond physical limits.",
    image: "public/lovable-uploads/4baabc15-2858-4f18-8373-79d84613fa8f.png",
    category: "Motivation",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Breaking Plateaus: Psychological Strategies",
    excerpt: "Learn how elite athletes overcome mental blocks when progress stalls.",
    image: "public/lovable-uploads/1d37303c-769b-4cc5-a386-0f6bfee78281.png",
    category: "Growth",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Visualization Techniques for Maximum Muscle Activation",
    excerpt: "Scientific proof that mental imagery improves muscle recruitment and growth.",
    image: "public/lovable-uploads/2262d29d-355d-419d-b9f0-b68121e97896.png",
    category: "Technique",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "From Skinny to Shredded: The Mindset Shift",
    excerpt: "How successful transformations start with mental reprogramming before physical changes.",
    image: "public/lovable-uploads/e9bc0e57-c4e9-44ee-b000-dacfba81c4c5.png",
    category: "Transformation",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Building Discipline: The Daily Practice",
    excerpt: "Small daily habits that compound into extraordinary mental toughness over time.",
    image: "public/lovable-uploads/051b0f7d-1a28-4d31-bad9-202fb7aecf2a.png",
    category: "Habits",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "The Pain-Growth Connection",
    excerpt: "Why embracing discomfort is essential for both physical and mental development.",
    image: "public/lovable-uploads/28d2c440-169c-40c5-b26e-763ec3b30a05.png",
    category: "Mindset",
    readTime: "9 min read",
  },
];

const Mindset = () => {
  return (
    <Layout>
      <div className="bg-xfit-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('public/lovable-uploads/f1577887-c7b3-486f-84f8-409879f17cc9.png')",
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
                <span className="neon-text-red">Mindset</span> Mastery
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your physique by first transforming your mind. The body achieves what the mind believes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mindsetArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-lg hover:shadow-neon-cyan transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-xfit-cyan/20 text-xfit-cyan text-xs px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
                    <Link
                      to={`/mindset/article/${article.id}`}
                      className="inline-flex items-center text-xfit-cyan hover:underline"
                    >
                      <span>Read more</span>
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold italic mb-8">
                "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character."
              </h2>
              <p className="text-xfit-cyan text-xl">— Arnold Schwarzenegger</p>
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4">Join Our Mindset Warriors Community</h2>
                  <p className="text-gray-300 mb-4">
                    Connect with like-minded individuals who understand that physical transformation begins with mental dedication. Share your journey, challenges, and victories.
                  </p>
                  <Link to="/community" className="btn-primary inline-flex items-center">
                    <span>Join the Community</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
                <div className="md:w-1/3 md:pl-8">
                  <img 
                    src="public/lovable-uploads/bc5becae-44ad-493e-a43b-b48d440a416c.png" 
                    alt="Mindset community" 
                    className="rounded-lg w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Mindset;
