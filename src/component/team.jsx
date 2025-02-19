import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import principal from "../assets/image/principal.jpg";
import teacher1 from "../assets/image/parent2.jpg";
import teacher2 from "../assets/image/parent.jpg";
import teacher3 from "../assets/image/parent3.jpg";
import teacher4 from "../assets/image/team1.jpg";
import teacher5 from "../assets/image/team3.jpg";
import teacher6 from "../assets/image/team2.jpg";
import Wrapper from "./Wrapper";


const staffData = [
  {
    id: 1,
    name: "Mrs. John Williams",
    position: "Proprietress",
    image: principal,
    about:
      "As the proud owner of PIP School, Mrs. Williams brings her passion for educational excellence to the forefront, ensuring each student is nurtured to reach their full potential. Her vision drives the school towards achieving a harmonious blend of fun and education.",
  },
  {
    id: 2,
    name: "Mrs. Olivia Carter",
    position: "Head Teacher",
    image: teacher1,
  },
  {
    id: 3,
    name: "Miss Sarah Johnson",
    position: "Creche Teacher",
    image: teacher4,
  },
  {
    id: 4,
    name: "Miss. Emily Smith",
    position: "Preschool Teacher",
    image: teacher2,
  },
  {
    id: 5,
    name: "Mr. Samson Brown",
    position: "Head of Sports",
    image: teacher3,
  },
  {
    id: 6,
    name: "Mr. Samson Brown",
    position: "Nursery Teacher",
    image: teacher5,
  },
  {
    id: 7,
    name: "Miss. Emily Smith",
    position: "Primary Teacher",
    image: teacher6,
  },
];

const Staff = () => {
  return (
    <section className="w-full py-16 px-6 sm:px-8 lg:px-20 bg-indigo-200 text-neutral-800 font-sans">
      <Wrapper>
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Visionary Team</h2>
        <h3 className="text-xl sm:text-2xl text-black">
          Passionate educators shaping tomorrow’s leaders with creativity and knowledge.
        </h3>
      </div>

      {/* Principal Section */}
      <div className="flex justify-center">
        <div className="bg-violet-200 text-white rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto">
          <img
            src={staffData[0].image}
            alt={staffData[0].name}
            className="w-full h-80 object-cover rounded-t-lg"
          />
          <div className="p-6 text-center">
            <h3 className="text-3xl font-extrabold text-blue-950">{staffData[0].name}</h3>
            <h4 className="text-2xl font-semibold text-gray-700">{staffData[0].position}</h4>
            <p className="mt-2 text-lg text-gray-800">{staffData[0].about}</p>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {staffData.slice(1).map((staff) => (
          <div
            key={staff.id}
            className="text-blue-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition border-4 border-violet-300 duration-300"
          >
            <img src={staff.image} alt={staff.name} className="w-full h-72 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">{staff.name}</h3>
              <p className="text-lg text-gray-700">{staff.position}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Wrapper>
    </section>
  );
};

export default Staff;
