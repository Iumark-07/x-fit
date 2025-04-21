
import React from "react";
import Layout from "@/components/layout/Layout";

function FAQ() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="font-semibold text-lg mb-2">How do I join X-Fit Community?</h2>
            <p>Click "Join Now" in the top navbar and sign up with your details. Once logged in, you can participate in the community chat and more.</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">Is my data secure?</h2>
            <p>Yes! Your data is securely stored in our Supabase database and is only accessible by you.</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">How can I track my progress?</h2>
            <p>Visit the "Trackers" page to log and monitor your workouts, nutrition, and more.</p>
          </li>
          <li>
            <h2 className="font-semibold text-lg mb-2">How to start a challenge?</h2>
            <p>Browse current challenges on the Challenges page and join directly!</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default FAQ;
