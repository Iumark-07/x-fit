
import React from "react";
import Layout from "@/components/layout/Layout";

function Tools() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Fitness Tools</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="font-semibold text-lg mb-2">Workout Tracker</h2>
            <p>Log your workouts and track progress across multiple fitness activities.</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">Meal Planner</h2>
            <p>Plan your meals and keep your nutrition goals on track!</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">BMI Calculator</h2>
            <p>Quickly calculate your Body Mass Index and track changes over time.</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Tools;
