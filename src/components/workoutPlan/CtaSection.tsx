
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready To <span className="neon-text-red">Level Up?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Get access to premium workout plans, nutritional guidance, and expert coaching.
        </p>
        <Link to="/subscription-plans" className="btn-primary inline-flex items-center">
          <span>Upgrade Your X-Fit Journey</span>
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
