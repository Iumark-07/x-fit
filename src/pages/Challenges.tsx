
import React from "react";
import Layout from "@/components/layout/Layout";

function Challenges() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">X-Fit Challenges</h1>
        <div>
          <p>Challenge yourself and join our active challenges below!</p>
          <ul className="mt-6 space-y-4">
            <li>
              <span className="font-semibold">30-Day Fitness Streak:</span> Workout every day for 30 days.
            </li>
            <li>
              <span className="font-semibold">Nutrition Reset:</span> Log your healthy meals for 2 weeks.
            </li>
            <li>
              <span className="font-semibold">Mindset Mastery:</span> Daily gratitude journaling and meditation.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Challenges;
