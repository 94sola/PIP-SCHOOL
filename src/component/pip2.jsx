import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import teacher1 from "../assets/image/parent2.jpg";
import teacher2 from "../assets/image/parent.jpg";
import teacher3 from "../assets/image/parent3.jpg";
import teacher4 from "../assets/image/team1.jpg";
import teacher5 from "../assets/image/team3.jpg";
import teacher6 from "../assets/image/team2.jpg";



const testimonials = [
  { id: 1, name: "Mrs Esther Bakare", text: "PIP School has provided my child with the best education. The teachers are incredibly dedicated, and the curriculum is well-structured to ensure holistic learning.", image: teacher1, bgColor: "bg-amber-200", textColor: "text-green-950" },
  { id: 2, name: "Mrs Grace Andrew", text: "Since joining PIP School, my child has developed excellent learning habits. The school's supportive environment has made a huge difference in our lives.", image: teacher2, bgColor: "bg-blue-100", textColor: "text-blue-950" },
  { id: 3, name: "Mr David Adebanjo", text: "The school's approach to education is exceptional. The staff genuinely care about each student's growth, and it shows in their learning outcomes.", image: teacher3, bgColor: "bg-yellow-100", textColor: "text-yellow-900" },
  { id: 4, name: "Mrs Talabi Adedosu", text: "PIP School has been a game-changer for my children. Their confidence has grown, and their love for learning has increased tremendously.", image: teacher4, bgColor: "bg-purple-100", textColor: "text-purple-900" },
  { id: 5, name: "Mr John Doe", text: "I admire how PIP School integrates academics with extracurricular activities. The balance they provide ensures overall development for the students.", image: teacher5, bgColor: "bg-red-200", textColor: "text-red-950" },
  { id: 6, name: "Mrs Jane Smith", text: "A well-rounded school with an amazing team of teachers who always put the students first. I'm grateful for the positive impact on my child.", image: teacher6, bgColor: "bg-pink-200", textColor: "text-pink-900" },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="font-sans py-12 px-4 sm:px-8 lg:px-16 bg-sky-200 text-slate-600 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-1/3 text-left lg:pl-28">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Testimonials</h1>
        <p className="text-lg max-w-lg">Some kind words from our parents.</p>
        <div className="mt-6">
          <Link to="/testimonial">
            <button className="bg-sky-400 hover:text-teal-950 hover:bg-cyan-300 text-gray-200 font-bold py-2 px-4 rounded-sm transition">
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 flex flex-col items-center">
        <div className="relative w-full max-w-3xl mx-auto mt-8 p-8 md:p-10 rounded-xl shadow-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className={`${testimonials[index].bgColor} ${testimonials[index].textColor} p-6 rounded-lg`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 shadow-md"
                />
                <h3 className="mt-3 font-semibold text-xl md:text-2xl">{testimonials[index].name}</h3>
              </div>
              <p className="mt-4 text-lg md:text-xl italic">{testimonials[index].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center w-full max-w-3xl mt-4">
          <button onClick={prevTestimonial} className="text-yellow-600 text-3xl px-4 py-2">
            <FaChevronLeft />
          </button>
          <button onClick={nextTestimonial} className="text-yellow-600 text-3xl px-4 py-2">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
