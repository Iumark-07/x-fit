
import React from "react";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9)), url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2380&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-xfit-black"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 opacity-0 animate-slide-in-bottom" style={{ animationDelay: "0.3s" }}>
          <span className="block">Train where the</span>
          <span className="neon-text-cyan">streets meet strength.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto opacity-0 animate-slide-in-bottom" style={{ animationDelay: "0.6s" }}>
          Your journey. Your grind. Built from the bottom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-in-bottom" style={{ animationDelay: "0.9s" }}>
          <Link
            to="/subscription-plans"
            className="btn-primary w-full sm:w-auto"
          >
            Join X-Fit Today
          </Link>
          <Link
            to="founder-story"
            smooth={true}
            duration={800}
            className="text-white hover:text-xfit-cyan transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10">
        <Link to="founder-story" smooth={true} duration={800} className="cursor-pointer">
          <ChevronDown size={32} className="text-white" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
