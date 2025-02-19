import { motion, AnimatePresence } from "framer-motion"; 
import { FaStar, FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import cre from "../assets/image/pip-cre.jpg";
import pre from "../assets/image/pip-pre.jpg";
import nur from "../assets/image/pip-nur.jpg";
import pri from "../assets/image/pip-11.jpg";



// PIP School Theme Colors
const pipColors = {
  primary: "#FFC107", // Yellow
  secondary: "#E91E63", // Pink
  darkBlue: "#0D47A1", // Deep Blue
  background: "#FFF9C4", // Light Yellow
};

// Activity data with corresponding page routes
const activities = [
  { img: cre, title: "Creche Class", desc: "A warm, caring space where tiny explorers begin their journey with love, laughter, and early learning adventures.", link: "/creche" },
  { img: pre, title: "Preschool Class", desc: "A world of imagination and creativity where young learners engage in fun, hands-on activities that spark curiosity.", link: "/preschool" },
  { img: nur, title: "Nursery Class", desc: "An interactive learning experience where foundational skills are nurtured through play, discovery, and teamwork.", link: "/nursery" },
  { img: pri, title: "Primary Class", desc: "A dynamic and engaging environment that builds confidence, critical thinking, and a love for lifelong learning.", link: "/primary" },
];

const Pip = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle navigation
  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  return (
    <div className="py-14 px-4 flex flex-col items-center" style={{ backgroundColor: pipColors.background }}>
      {/* Header Section */}
      <motion.div
        className="w-full bg-yellow-300 max-w-4xl text-center rounded-3xl py-8 shadow-2xl flex items-center justify-center"
        style={{ borderBottom: `8px solid ${pipColors.secondary}` }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold flex items-center gap-5" style={{ color: pipColors.darkBlue }}>
          <FaStar className="animate-spin text-[40px]" style={{ color: pipColors.secondary }} />
          Explore, Learn & Grow!
        </h1>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="text-2xl italic text-center mt-6 max-w-3xl px-4 text-gray-800 font-semibold flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <FaQuoteLeft className="text-pink-500 text-3xl" />
        “Education is the key to unlocking the world, a passport to freedom.” — Oprah Winfrey
        <FaQuoteRight className="text-pink-500 text-3xl" />
      </motion.div>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-6 mt-10">
        <button className="p-4 bg-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 shadow-lg" onClick={handlePrev}>
          <FaArrowLeft className="text-3xl" />
        </button>

        <div className="flex gap-4">
          {activities.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-blue-950 scale-125" : "bg-gray-400"}`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <button className="p-4 bg-gray-300 rounded-full hover:bg-pink-500 hover:text-white transition duration-300 shadow-lg" onClick={handleNext}>
          <FaArrowRight className="text-3xl" />
        </button>
      </div>

      {/* Activities Section with AnimatePresence */}
      <div className="mt-10 w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center"
          >
            {/* Make Card Clickable with Link */}
            <Link to={activities[selectedIndex].link} className="w-full h-full flex flex-col items-center">
              {/* Image Section */}
              <motion.img
                src={activities[selectedIndex].img}
                alt={activities[selectedIndex].title}
                className="w-full h-[400px] object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Content Section */}
              <div className="text-center mt-6">
                <h3 className="text-4xl font-bold" style={{ color: pipColors.darkBlue }}>
                  {activities[selectedIndex].title}
                </h3>
                <p className="text-gray-800 text-xl leading-relaxed mt-4 font-medium">
                  {activities[selectedIndex].desc}
                </p>
              </div>

              {/* Button linking to activity page */}
              <button
                className="mt-6 px-6 py-2 bg-blue-950 text-white font-bold text-xl cursor-pointer rounded-lg hover:bg-blue-600 transition-all duration-300"
                
              >
                Go to {activities[selectedIndex].title}
              </button>
            </Link>

            {/* Animated Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 h-3 w-full"
              style={{ backgroundColor: pipColors.primary }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Pip;
