import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "15-Day Trial",
    price: "$9.90",
    duration: "15 days",
    features: [
      "Access to basic workouts",
      "Limited exercise library",
      "Community chat access",
      "Basic nutrition tips",
    ],
    cta: "Start Trial",
    link: "/auth?plan=trial",
  },
  {
    name: "Monthly Plan",
    price: "$19.99",
    duration: "per month",
    features: [
      "Full workout library access",
      "Personalized training plans",
      "Premium nutrition guides",
      "Progress tracking tools",
      "Weekly live sessions",
      "Priority community support",
    ],
    cta: "Choose Monthly",
    link: "/auth?plan=monthly",
    popular: true,
  },
  {
    name: "Yearly Plan",
    price: "$199.90",
    duration: "per year",
    features: [
      "All Monthly Plan features",
      "Save over $40 annually",
      "Exclusive seasonal content",
      "Early access to new features",
      "Personal coach consultation",
      "Custom meal planning",
    ],
    cta: "Choose Yearly",
    link: "/auth?plan=yearly",
  },
];

const SubscriptionPlans = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-xfit-black pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="neon-text-cyan">X-Fit</span> Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your body and mind with the plan that fits your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden ${
                  plan.name === "Monthly Plan"
                    ? "border-2 border-xfit-cyan relative shadow-neon-cyan"
                    : "border border-gray-800"
                }`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.duration}</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <Check size={18} className="mr-2 mt-0.5 text-xfit-cyan" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to={plan.link}
                        className={`block text-center py-3 px-4 rounded font-bold transition-all duration-300 ${
                          plan.name === "Monthly Plan"
                            ? "bg-xfit-cyan text-black hover:shadow-neon-cyan"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="max-w-2xl mx-auto p-4 bg-gray-900/50 rounded-lg mb-8">
              <p className="text-yellow-400 font-medium">
                Note: The full app experience is currently in progress. Some features may not function fully at this time. Thank you for your patience and support!
              </p>
            </div>
            <p className="text-gray-400 mb-4">
              All plans include a 100% satisfaction guarantee. Cancel anytime.
            </p>
            <p className="text-gray-400">
              Have questions?{" "}
              <Link to="/faq" className="text-xfit-cyan hover:underline">
                Check our FAQs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubscriptionPlans;
