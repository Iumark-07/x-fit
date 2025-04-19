
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-xfit-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-poppins font-bold text-2xl">
            <span className="neon-text-cyan">Project</span>{" "}
            <span className="neon-text-red">X-Fit</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:neon-text-cyan transition-all">
            Home
          </Link>
          <Link to="/workouts" className="text-white hover:neon-text-cyan transition-all">
            Workouts
          </Link>
          <Link to="/nutrition" className="text-white hover:neon-text-cyan transition-all">
            Nutrition
          </Link>
          <Link to="/mindset" className="text-white hover:neon-text-cyan transition-all">
            Mindset
          </Link>
          <Link to="/about" className="text-white hover:neon-text-cyan transition-all">
            About
          </Link>
          <Link to="/train-now" className="btn-primary">
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className="text-xfit-cyan" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-xfit-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="text-white hover:neon-text-cyan py-2 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/workouts"
            className="text-white hover:neon-text-cyan py-2 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Workouts
          </Link>
          <Link
            to="/nutrition"
            className="text-white hover:neon-text-cyan py-2 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Nutrition
          </Link>
          <Link
            to="/mindset"
            className="text-white hover:neon-text-cyan py-2 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Mindset
          </Link>
          <Link
            to="/about"
            className="text-white hover:neon-text-cyan py-2 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/train-now"
            className="btn-primary inline-block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
