import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import hero1 from "../assets/image/pip-school.jpg";
import hero2 from "../assets/image/pip-8.jpg";
import hero3 from "../assets/image/pip-nur.jpg"; 
import hero4 from "../assets/image/pip-cre.jpg"; 
import hero5 from "../assets/image/pip-10.jpg";
import hero6 from "../assets/image/pip-51.jpg";


function PipSchool() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [hero1, hero2, hero3, hero4, hero5, hero6,]; // Include hero4 here

  const handleImageClick = (image) => {
    setSelectedImage(prevImage => (prevImage === image ? null : image));
  };

  return (
    <div
      className="relative bg-blue-950 flex flex-col items-center justify-center text-white px-6 sm:px-12 lg:px-24 py-10"
      onClick={() => setSelectedImage(null)} 
    >
      <header className="text-center space-y-6 mb-12">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-yellow-400 px-4 py-2 rounded-lg text-purple-900">
            Welcome
          </span>
          <span className="bg-blue-400 px-4 py-2 rounded-lg text-white">to</span>
          <span className="bg-green-400 px-4 py-2 rounded-lg text-yellow-900">
            PIP
          </span>
          <span className="bg-red-400 px-4 py-2 rounded-lg text-white">
            School!
          </span>
          <span className="ml-2">🎠📚</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-semibold px-6 py-3 bg-white text-blue-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A place where{" "}
          <span className="text-red-500 font-bold">learning</span> meets{" "}
          <span className="text-yellow-400 font-bold">adventure</span> and{" "}
          <span className="text-green-500 font-bold">imagination</span>! 🚀
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        <motion.div
          className="space-y-6 text-center md:text-left mt-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg inline-block">
            Why PIP School?
          </h2>
          <ul className="text-2xl space-y-3">
            <li className="bg-red-400 px-2 py-2 rounded-lg text-white">
              🎨 Engaging and interactive learning 
            </li>
            <li className="bg-blue-400 px-4 py-2 rounded-lg text-white">
              📚 Encouraging creativity and curiosity
            </li>
            <li className="bg-green-400 px-4 py-2 rounded-lg text-white">
              🎭 Play-based educational approach
            </li>
            <li className="bg-yellow-400 px-4 py-2 rounded-lg text-purple-900">
              🌎 A nurturing and inclusive environment
            </li>
          </ul>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-yellow-400 text-zinc-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-800 transition duration-300 text-2xl shadow-lg">
                Learn More
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition duration-300 text-2xl shadow-lg"
              >
                Join Us
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`PIP School Fun ${index}`}
              className="w-36 sm:w-44 md:w-48 lg:w-52 h-auto rounded-2xl shadow-xl transform transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevents closing when clicking image
                handleImageClick(image);
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Removed Enlarged Image/GIF Section */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
          <motion.div
            className="relative p-4 rounded-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-[600px] h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default PipSchool;
