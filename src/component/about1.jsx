import { motion } from "framer-motion";
import about from "../assets/image/pip-65.jpg";


const AboutUs = () => {
  return (
    <div className="bg-white font-sans my-6 flex flex-col lg:flex-row items-stretch justify-center px-6 sm:px-8 lg:px-12">
      {/* Left: Text Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-red-500 text-white w-full lg:w-1/2  flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-6 sm:p-8 lg:p-12  rounded-lg"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Us</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg">
          PIP School is a nurturing environment where learning is fun, engaging, and effective. 
          Our mission is to provide top-quality education with a perfect balance of academics, creativity, and character development. 
          We foster a supportive community that encourages curiosity, innovation, and lifelong learning.
        </p>
      </motion.div>

      {/* Right: Image Section */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center  items-center "
      >
        <img 
          src={about} 
          alt="PIP School Community" 
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
