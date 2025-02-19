import { motion } from "framer-motion";
import { FaHandshake, FaBalanceScale, FaHandHoldingHeart, FaUsers, FaShieldAlt, FaHandHoldingUsd, FaPeopleCarry, FaPuzzlePiece } from "react-icons/fa";

const staffData = [
  { id: 1, icon: <FaHandshake />, title: "Integrity" },
  { id: 2, icon: <FaBalanceScale />, title: "Accountability" },
  { id: 3, icon: <FaUsers />, title: "Respect" },
  { id: 4, icon: <FaHandHoldingHeart />, title: "Compassion" },
  { id: 5, icon: <FaShieldAlt />, title: "Commitment" },
  { id: 6, icon: <FaHandHoldingUsd />, title: "Courage" },
  { id: 7, icon: <FaPeopleCarry />, title: "Responsibility" },
  { id: 8, icon: <FaPuzzlePiece />, title: "Collaboration" },
];

const About = () => {
  return (
    <section className="w-full py-16 px-6 sm:px-8 lg:px-20 bg-red-500 text-neutral-800 font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-indigo-300">Our Value</h1>
        
      </div>

      {/* Staff Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {staffData.map((staff) => (
          <motion.div
            key={staff.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: staff.id * 0.1 }}
            className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 border-4 border-violet-300"
          >
            <div className="text-6xl text-indigo-500 mb-4">{staff.icon}</div>
            <h3 className="text-2xl font-bold text-blue-900">{staff.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
