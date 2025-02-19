import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRegCheckCircle, FaFootballBall, FaFlask, FaMicrophone, FaSnowflake, FaGraduationCap, FaPaintBrush, FaClipboard } from "react-icons/fa";  // Added new icons
import Wrapper from "./Wrapper";




const newsEvents = [
  {
    id: 1,
    title: "Annual Sports Day!",
    date: "March 15, 2025",
    description: "Get ready for a day filled with fun activities, games, and friendly competition! Parents are welcome to cheer on their little champions.",
    bgColor: "bg-yellow-200",
    textColor: "text-gray-900",
    size: "lg",
    icon: <FaFootballBall className="text-white" />,  // Sports Day icon
    buttonBgColor: "bg-yellow-900",  // Button background color
    buttonTextColor: "text-gray-200", // Button text color
  },
  {
    id: 2,
    title: "Science Fair Extravaganza",
    date: "April 10, 2025",
    description: "Discover the innovative projects created by our brilliant students! Join us for a hands-on experience filled with excitement and creativity.",
    bgColor: "bg-green-200",
    textColor: "text-gray-900",
    size: "sm",
    icon: <FaFlask className="text-white" />,  // Science Fair icon
    buttonBgColor: "bg-green-800",  // Button background color
    buttonTextColor: "text-white", // Button text color
  },
  {
    id: 3,
    title: "PIP School Talent Show",
    date: "May 5, 2025",
    description: "A night of music, dance, and performances by our talented students. Come and enjoy the show!",
    bgColor: "bg-red-300",
    textColor: "text-gray-900",
    size: "sm",
    icon: <FaMicrophone className="text-white" />,  // Talent Show icon
    buttonBgColor: "bg-red-700",  // Button background color
    buttonTextColor: "text-white", // Button text color
  },
  {
    id: 4,
    title: "Christmas Carol Celebration",
    date: "December 20, 2025",
    description: "Join us for an evening of festive joy as our students perform classic Christmas carols! A wonderful way to get into the holiday spirit.",
    bgColor: "bg-blue-400",
    textColor: "text-gray-900",
    size: "lg",
    icon: <FaSnowflake className="text-white" />,  // Christmas Carol icon
    buttonBgColor: "bg-blue-700",  // Button background color
    buttonTextColor: "text-white", // Button text color
  },
  {
    id: 5,
    title: "End of Session Graduation Ceremony",
    date: "June 30, 2025",
    description: "Celebrate the achievements of our students as we mark the end of the school year with a heartwarming graduation ceremony. Join us to applaud our graduates!",
    bgColor: "bg-purple-300",
    textColor: "text-gray-900",
    size: "sm",
    icon: <FaGraduationCap className="text-white" />,  // Graduation icon
    buttonBgColor: "bg-purple-800",  // Button background color
    buttonTextColor: "text-gray-900", // Button text color
  },
  {
    id: 6,
    title: "Art and Craft Day",
    date: "July 25, 2025",
    description: "Unleash your creativity in our fun-filled Art and Craft Day! Join us for a colorful and artistic experience.",
    bgColor: "bg-pink-400",
    textColor: "text-gray-900",
    size: "sm",
    icon: <FaPaintBrush className="text-white" />,  // Art and Craft icon
    buttonBgColor: "bg-pink-800",  // Button background color
    buttonTextColor: "text-white", // Button text color
  },
  {
    id: 7,
    title: "Execution Day",
    date: "August 15, 2025",
    description: "Get ready for a day of action and execution! Our students will take the lead in various projects and challenges.",
    bgColor: "bg-orange-300",
    textColor: "text-gray-900",
    size: "lg",
    icon: <FaClipboard className="text-white" />,  // Execution icon
    buttonBgColor: "bg-orange-800",  // Button background color
    buttonTextColor: "text-white", // Button text color
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const openCalendar = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Event")}&dates=${formattedDate}T000000Z/${formattedDate}T235959Z`;
    window.open(calendarLink, "_blank");
  };

  return (
    <div className="bg-teal-200 to-black py-12 px-6 sm:px-12 lg:px-20 text-gray-800 font-sans flex flex-col items-center justify-center">
      <Wrapper>
        <h1 className="text-4xl font-bold text-center text-fuchsia-800 mb-6">News & Events</h1>
        <p className="text-lg text-center text-gray-600 mb-10">Stay updated with the latest happenings at PIP School!</p>

        {/* Flexbox container for events */}
        <div className="flex flex-wrap justify-center gap-12 w-full max-w-screen-xl">
          {newsEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${event.bgColor} w-80 h-96`}  // Increased card height to 96 (24rem)
            >
              <div className={`flex flex-col items-center justify-center p-6 text-center ${event.textColor}`}>
                <div className="mb-4 text-4xl">{event.icon}</div>  {/* Display the icon */}
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm flex items-center justify-center gap-2 mb-4">
                  <FaCalendarAlt className="text-white" /> {event.date}
                </p>
                <p className="text-sm mb-6">{event.description}</p>
                <button
                  onClick={() => openCalendar(event.date)}  // Call openCalendar with the event's date
                  className={`mt-4 ${event.buttonBgColor} hover:bg-opacity-90 ${event.buttonTextColor} font-bold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2`}
                >
                  <FaRegCheckCircle className="text-white" /> Save the Date!
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-xl p-6 max-w-lg w-full text-center">
              <h2 className="text-2xl font-bold text-fuchsia-700 mb-4">{selectedNews.title}</h2>
              <p className="text-gray-700 mb-4">{selectedNews.description}</p>
              <button
                onClick={() => setSelectedNews(null)}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default News;
