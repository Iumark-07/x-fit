
import React from "react";
import Layout from "@/components/layout/Layout";

function Trackers() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Trackers</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="font-semibold text-lg mb-2">Workout Tracker</h2>
            <p>Record your workouts daily and analyze your progress by week or month.</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">Nutrition Tracker</h2>
            <p>Keep a log of your meals and monitor your calories and macros.</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">Water Intake Tracker</h2>
            <p>Track your daily water intake to stay hydrated.</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Trackers;
