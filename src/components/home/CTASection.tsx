
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const CTASection = () => {
  const tiers = [
    {
      name: "Free Trial",
      price: "₹0",
      duration: "7 days",
      features: [
        "Basic workout plans",
        "Limited exercise library",
        "Basic nutrition tips",
        "Community access",
      ],
      cta: "Start Free",
      link: "/membership/free",
      popular: false,
    },
    {
      name: "Monthly Grind",
      price: "₹12.9",
      duration: "per month",
      features: [
        "Full workout library",
        "Custom training plans",
        "Nutrition guidance",
        "Progress tracking",
        "Weekly challenges",
      ],
      cta: "Join Now",
      link: "/membership/monthly",
      popular: true,
    },
    {
      name: "Elite Warrior",
      price: "₹99.9",
      duration: "per month",
      features: [
        "Everything in Monthly",
        "1-on-1 coaching calls",
        "Premium Discord access",
        "Exclusive workout programs",
        "Custom nutrition plans",
        "Quarterly X-Fit merch",
      ],
      cta: "Upgrade to Elite",
      link: "/membership/elite",
      popular: false,
    },
  ];

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
            <span className="neon-text-cyan">Join</span> the Movement
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the tier that fits your goals and commit to the grind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden ${
                tier.popular
                  ? "border-2 border-xfit-cyan relative shadow-neon-cyan transform md:-translate-y-4"
                  : "border border-gray-800"
              }`}
            >
              {tier.popular && (
                <div className="bg-xfit-cyan text-xfit-black text-center py-1 font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="bg-gradient-to-br from-gray-900 to-black p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-1">{tier.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        size={18}
                        className={`mr-2 mt-0.5 ${
                          tier.popular ? "text-xfit-cyan" : "text-gray-400"
                        }`}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={tier.link}
                  className={`block text-center py-3 px-4 rounded font-bold transition-all duration-300 ${
                    tier.popular
                      ? "bg-xfit-cyan text-black hover:shadow-neon-cyan"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">
            All plans include a 100% satisfaction guarantee. No hidden fees.
          </p>
          <p className="text-gray-400">
            Have questions? <a href="/faq" className="text-xfit-cyan hover:underline">Check our FAQs</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
