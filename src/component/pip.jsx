import { motion } from "framer-motion";
import { FaBaby, FaPaintBrush, FaGraduationCap } from "react-icons/fa";

const PipAcademy = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-neutral-500 to-yellow-400 font-sans text-white">
      
      {/* Header Section */}
      <div className="text-center py-16 px-6 sm:px-10 lg:px-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
          🎨 Welcome to <span className="text-yellow-300">PIP Academy</span>! 📚
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-yellow-100">
          A nurturing space where every child <span className="px-2 rounded-lg bg-blue-950 text-yellow-300">learns, grows, and thrives</span>! Our academy fosters creativity, exploration, and a lifelong love for learning. 🌟
        </p>
      </div>

      {/* Learning Stages Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 text-black">
          
          {/* Creche - Little Explorers */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-red-600 text-white p-12 rounded-xl shadow-2xl text-center transform transition"
          >
            <FaBaby className="text-6xl mx-auto text-yellow-300" />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-6">Little Explorers 🍼</h3>
            <p className="mt-4 text-lg sm:text-xl text-yellow-100">
              A warm and caring environment where our youngest learners begin their journey with sensory play, early social skills, and endless curiosity! 👶✨
            </p>
          </motion.div>

          {/* Pre-school - Creative Minds */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-yellow-500 text-white p-12 rounded-xl shadow-2xl text-center transform transition duration-300"
          >
            <FaPaintBrush className="text-6xl mx-auto text-yellow-200" />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-6">Creative Minds 🎨</h3>
            <p className="mt-4 text-lg sm:text-xl text-blue-950">
              Encouraging creativity through music, art, and storytelling, our preschoolers develop a love for self-expression and imagination! 🎭📖
            </p>
          </motion.div>

          {/* Primary - Future Leaders */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-blue-950 text-white p-12 rounded-xl shadow-2xl text-center transform transition duration-300"
          >
            <FaGraduationCap className="text-6xl mx-auto text-yellow-300" />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-6">Future Leaders 🎓</h3>
            <p className="mt-4 text-lg sm:text-xl text-yellow-100">
              Developing problem-solving skills, critical thinking, and leadership abilities, our primary students prepare for a bright future! 🚀📚
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-100">
          🌟 Join the PIP Academy Family! 🎒
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-yellow-200 max-w-4xl mx-auto">
          Every child deserves a fun and engaging education. Let's embark on this <span className="px-2 py-1 text-xl rounded-lg bg-cyan-400 text-black">learning adventure</span> together! 🌈✨
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="mt-8 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full text-xl transition duration-300 hover:bg-yellow-500"
        >
          Enroll Now 🎉
        </motion.button>
      </div>
    </div>
  );
};

export default PipAcademy;
