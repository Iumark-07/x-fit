
import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-xfit-black border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text-cyan">Project X-Fit</h3>
            <p className="text-gray-400 mb-4">
              Train where the streets meet strength. Your journey. Your grind. Built from the bottom.
            </p>
            <p className="text-gray-500 italic text-sm">Crafted in silence. Forged by fire.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/workouts" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Workout Hub
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Nutrition & Recovery
                </Link>
              </li>
              <li>
                <Link to="/mindset" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Mindset & Community
                </Link>
              </li>
              <li>
                <Link to="/train-now" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Train Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/challenges" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Tools & Trackers
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-xfit-cyan transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <Mail size={16} className="mr-2 text-xfit-cyan" />
              <a href="mailto:umarkhetab714@gmail.com" className="hover:text-xfit-cyan transition-colors">
                umarkhetab714@gmail.com
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-xfit-cyan text-gray-400 hover:text-xfit-cyan transition-all hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-xfit-cyan text-gray-400 hover:text-xfit-cyan transition-all hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M15 20V8" />
                  <path d="M8 12h7" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-xfit-cyan text-gray-400 hover:text-xfit-cyan transition-all hover:scale-110"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Project X-Fit. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Powered by <span className="text-xfit-cyan">IUMARK-07</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
