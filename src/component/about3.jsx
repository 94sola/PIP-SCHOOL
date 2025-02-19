import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-white font-sans flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-24 py-12">
      
      {/* Mission Section with Icon */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-red-500 shadow-lg border border-blue-600 w-full max-w-4xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 sm:p-12 lg:p-16 rounded-3xl"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
        >
          Our <span className="text-yellow-300">Mission</span>
        </motion.h1>

        {/* Mission Icon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-8xl mb-6 text-yellow-300"
        >
          <i className="fas fa-graduation-cap"></i> {/* Graduation Cap Icon */}
        </motion.div>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-xl font-medium leading-relaxed text-gray-200 max-w-3xl"
        >
          At PIP School, we believe every child deserves to learn in a <span className='text-yellow-300'>safe</span> and <span className='text-pink-300'>stimulating</span> environment.  
          Our mission is to ignite curiosity, encourage creativity, and build character through a well-rounded education.
          <br /><br />
          We nurture <span className="text-green-300">confident</span>, <span className="text-purple-300">compassionate</span> young minds who are ready to explore, discover, and grow into the leaders of tomorrow! 🎉
        </motion.p>
      </motion.div>

      {/* Vision Section with Icon */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-red-500 border border-green-600 shadow-lg text-gray-800 w-full max-w-4xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 sm:p-12 lg:p-16 mt-12 lg:mt-0 rounded-3xl"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
        >
          Our <span className="text-yellow-300">Vision</span>
        </motion.h1>

        {/* Vision Icon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-8xl mb-6 text-yellow-300"
        >
          <i className="fas fa-lightbulb"></i> {/* Lightbulb Icon for Vision */}
        </motion.div>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-xl font-medium leading-relaxed text-gray-200 max-w-3xl"
        >
          Our vision is to create a joyful learning space where children <span className='text-red-300'>explore</span>, <span className='text-blue-300'>experiment</span>, and <span className='text-orange-300'>express</span> themselves freely.  
          <br /><br />
          PIP School is dedicated to developing bright young minds by <span className="text-yellow-300">nurturing curiosity</span>, <span className="text-purple-300">building confidence</span>, and <span className="text-pink-300">instilling values</span> that last a lifetime.  
          <br /><br />
          We want every child to dream big, learn joyfully, and embrace the world with open arms! 🌍✨
        </motion.p>
      </motion.div>

    </div>
  );
};

export default AboutUs;
