import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-red-500 font-sans flex items-center justify-center px-8 sm:px-12 lg:px-28 py-12">
      {/* Text Section with New Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 sm:p-12 lg:p-20 rounded-3xl border-4 border-red-700"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-600 mb-6 sm:mb-8"
        >
          The Story of PIP School
        </motion.h1>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg font-medium leading-relaxed text-gray-700"
        >
          🌱 **Humble Beginnings**  
          It all started with a simple dream—to create a school where children could learn **with joy, creativity, and curiosity**.  
          PIP School began in a small, colorful classroom, where laughter and learning went hand in hand. The vision was clear:  
          to **build an educational space that inspires young minds** and nurtures their growth.  

          <br /><br />

          🎓 **Growing into a Community**  
          As more families joined, PIP School blossomed into a thriving **learning hub**, where children were encouraged  
          to **think big, dream bigger, and believe in their potential**. We introduced **innovative teaching methods**,  
          blending academics with **art, music, science, and play**.  

          <br /><br />

          🚀 **Shaping the Future**  
          Today, PIP School is a beacon of **excellence in education**. We continue to create an environment where  
          every child is **a leader, a creator, and a lifelong learner**. The journey doesn’t stop here—we are  
          **building the future, one bright mind at a time**!  

          <br /><br />

          🌟 At PIP School, **learning is an adventure**—and every student is a shining star! 🌟  
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
