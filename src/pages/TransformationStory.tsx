
import React from "react";
import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Timer, Award } from "lucide-react";

const transformationStories = [
  {
    id: 1,
    name: "Arjun S.",
    age: 28,
    beforeImg: "public/lovable-uploads/dd172949-c8bc-46cd-8506-a6df5163b139.png",
    afterImg: "public/lovable-uploads/1d37303c-769b-4cc5-a386-0f6bfee78281.png",
    progressImages: [
      "public/lovable-uploads/dd172949-c8bc-46cd-8506-a6df5163b139.png",
      "public/lovable-uploads/dd10affd-1c02-46df-ba9f-dd605bdc972e.png",
      "public/lovable-uploads/1d37303c-769b-4cc5-a386-0f6bfee78281.png"
    ],
    quote: "Project X-Fit transformed not just my body, but my entire mindset. I went from making excuses to making progress.",
    weeks: 12,
    startWeight: "65kg",
    endWeight: "76kg",
    bodyFatBefore: "22%",
    bodyFatAfter: "12%",
    story: "I was always the skinny guy growing up. I tried countless gym programs but nothing seemed to work. I'd gain a little muscle, then lose motivation and quit. When I found Project X-Fit, something clicked. The focus wasn't just on workouts but on building a mindset of discipline and consistency. The first month was brutal – waking up at 5AM to train before work, meal prepping when all my friends were going out. But by week 6, people started noticing the changes. My shoulders were broader, my posture improved, and most importantly, I started to believe in myself. The X-Fit community kept me accountable on days I wanted to quit. Now, 12 weeks later, I'm not just physically stronger – I've carried that discipline into my career and relationships. This wasn't just a body transformation; it was a complete life upgrade.",
    workoutSplit: "Push/Pull/Legs (6 days/week)",
    nutrition: "High protein (180g/day), carb cycling, intermittent fasting",
    supplements: "Whey protein, creatine, pre-workout"
  },
  {
    id: 2,
    name: "Michael K.",
    age: 32,
    beforeImg: "public/lovable-uploads/63c6b3f6-c095-43a9-be1e-a93b4cadb1af.png",
    afterImg: "public/lovable-uploads/2d0b9027-687f-44ff-b20e-2d89c6ed9d88.png",
    progressImages: [
      "public/lovable-uploads/63c6b3f6-c095-43a9-be1e-a93b4cadb1af.png",
      "public/lovable-uploads/dbac7e9d-a625-400c-a40c-f272657a99a1.png",
      "public/lovable-uploads/2d0b9027-687f-44ff-b20e-2d89c6ed9d88.png"
    ],
    quote: "The street workouts and nutrition plans helped me shed 15kg and find my confidence again. This is the real deal.",
    weeks: 16,
    startWeight: "92kg",
    endWeight: "77kg",
    bodyFatBefore: "28%",
    bodyFatAfter: "14%",
    story: "After my second child was born, life got hectic. Late nights, stress eating, and zero exercise took a toll. I barely recognized myself in photos. At 92kg, I was constantly tired and my doctor warned about my rising blood pressure. I tried a few popular diets but nothing stuck. Then a friend recommended Project X-Fit. What made this different was how it fit into my busy life – no 2-hour gym sessions or complicated meal plans. The street workouts could be done at the local park while my kids played. The nutrition guidelines were simple but effective. The first month was about breaking bad habits. By month two, I dropped 7kg and had noticeably more energy. The biggest win wasn't even the physical changes – it was showing my kids what discipline and self-improvement look like. Now I'm 16 weeks in, 15kg lighter, and setting new fitness goals I never thought possible. If a busy dad with a full-time job can do this, anyone can.",
    workoutSplit: "Full body (3 days/week) + HIIT (2 days/week)",
    nutrition: "Calorie deficit (1800 cal/day), high protein, low refined carbs",
    supplements: "Protein shakes, multivitamin, omega-3"
  },
  {
    id: 3,
    name: "Rahul M.",
    age: 24,
    beforeImg: "public/lovable-uploads/7b0e4d47-5039-4437-a5c8-e51336877051.png",
    afterImg: "public/lovable-uploads/28d2c440-169c-40c5-b26e-763ec3b30a05.png",
    progressImages: [
      "public/lovable-uploads/7b0e4d47-5039-4437-a5c8-e51336877051.png",
      "public/lovable-uploads/dd10affd-1c02-46df-ba9f-dd605bdc972e.png",
      "public/lovable-uploads/28d2c440-169c-40c5-b26e-763ec3b30a05.png"
    ],
    quote: "No fancy gym, no problem. X-Fit showed me how to build muscle with minimal equipment in my own neighborhood.",
    weeks: 8,
    startWeight: "58kg",
    endWeight: "67kg",
    bodyFatBefore: "16%",
    bodyFatAfter: "11%",
    story: "Living in a small town with no gym seemed like the perfect excuse to never get in shape. I was the classic hardgainer – could eat anything and never gain weight. Or so I thought. Project X-Fit's approach was an eye-opener. They showed me how to use playground equipment, old tires, and even heavy rocks from a nearby construction site for resistance training. The nutrition plan was the real game-changer though. I had been severely under-eating protein and calories needed for growth. Following the X-Fit bulking plan, I started consuming 3,000 calories daily with 150g of protein. The first few weeks were uncomfortable – forcing myself to eat even when not hungry, dealing with DOMS (delayed onset muscle soreness) after intense workouts. By week 4, my strength exploded. Pull-ups went from 3 to 12, and I could finally fill out my t-shirts. The best part was proving that you don't need fancy equipment or supplements to transform your body – just knowledge, consistency, and heart.",
    workoutSplit: "Upper/Lower (4 days/week) + calisthenics",
    nutrition: "Calorie surplus (3000 cal/day), protein focus (2g per kg bodyweight)",
    supplements: "Mass gainer, creatine"
  }
];

const TransformationStory = () => {
  const { id } = useParams<{ id: string }>();
  const storyId = parseInt(id || "1");
  
  const story = transformationStories.find(s => s.id === storyId) || transformationStories[0];
  
  return (
    <Layout>
      <div className="bg-xfit-black py-12 px-4">
        <div className="container mx-auto">
          <Link to="/mindset" className="inline-flex items-center text-xfit-cyan mb-8">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Mindset</span>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {story.name}'s <span className="neon-text-red">Transformation</span>
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-800 rounded-full px-4 py-1 flex items-center">
                  <Calendar size={16} className="mr-2 text-xfit-cyan" />
                  <span>{story.weeks} weeks</span>
                </div>
                <div className="bg-gray-800 rounded-full px-4 py-1 flex items-center">
                  <Timer size={16} className="mr-2 text-xfit-cyan" />
                  <span>Age: {story.age}</span>
                </div>
                <div className="bg-gray-800 rounded-full px-4 py-1 flex items-center">
                  <Award size={16} className="mr-2 text-xfit-cyan" />
                  <span>{story.startWeight} → {story.endWeight}</span>
                </div>
              </div>
              <blockquote className="italic text-gray-300 text-xl border-l-4 border-xfit-cyan pl-4 mb-6">
                "{story.quote}"
              </blockquote>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {story.story}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex space-x-2 h-[400px]">
                <div className="w-1/2 relative overflow-hidden rounded-lg">
                  <div className="absolute top-2 left-2 bg-xfit-black/80 text-white text-xs px-2 py-1 rounded z-10">
                    Before
                  </div>
                  <img 
                    src={story.beforeImg} 
                    alt={`${story.name} before`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 relative overflow-hidden rounded-lg">
                  <div className="absolute top-2 right-2 bg-xfit-cyan/80 text-black text-xs px-2 py-1 rounded z-10">
                    After {story.weeks} weeks
                  </div>
                  <img 
                    src={story.afterImg} 
                    alt={`${story.name} after`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-4">
                {story.progressImages.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-32">
                    <img 
                      src={img} 
                      alt={`Progress ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The <span className="neon-text-cyan">Blueprint</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-xfit-cyan">Training Split</h3>
                <p className="text-gray-300">{story.workoutSplit}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-xfit-cyan">Nutrition</h3>
                <p className="text-gray-300">{story.nutrition}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-xfit-cyan">Supplements</h3>
                <p className="text-gray-300">{story.supplements}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to start <span className="neon-text-red">your transformation?</span></h2>
            <Link to="/membership" className="btn-primary inline-block">
              Join X-Fit Today
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransformationStory;
