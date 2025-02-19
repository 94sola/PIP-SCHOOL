
import { FaHandsHelping, FaChalkboardTeacher, FaEye, FaHandshake } from 'react-icons/fa';
import Wrapper from "./Wrapper";




const Hero = () => {
    return (
        <div  className="relative bg-rose-400 flex items-center justify-center text-gray-700 w-full px-6 sm:px-8 pt-40 font-[Eudoxus Sans]" >
            <Wrapper>
                <div className="rounded-[12px] py-12 px-8 bg-[#fbffff]/80 w-full max-w-8xl">
                    <div className="relative z-20 bg-transparent text-center">
                        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-gray-700 mb-8">
                            Why Choose <span className="text-blue-600">PIP School?</span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Dedication */}
                            <div className="flex flex-col items-center text-center">
                                <FaHandsHelping className="text-yellow-400 text-6xl mb-3" />
                                <h3 className="text-2xl font-semibold mb-3 bg-yellow-300 px-4 py-1 rounded-lg text-black">
                                    Dedication
                                </h3>
                                <p className="text-gray-800 text-lg">
                                    Our passionate teachers and staff go above and beyond to nurture young minds with care and commitment.
                                </p>
                            </div>

                            {/* Experience */}
                            <div className="flex flex-col items-center text-center">
                                <FaChalkboardTeacher className="text-pink-500 text-6xl mb-3" />
                                <h3 className="text-2xl font-semibold mb-3 bg-pink-400 px-4 py-1 rounded-lg text-black">
                                    Experience
                                </h3>
                                <p className="text-gray-800 text-lg">
                                    With years of excellence in early childhood education, we provide a strong foundation for lifelong learning.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="flex flex-col items-center text-center">
                                <FaEye className="text-green-500 text-6xl mb-3" />
                                <h3 className="text-2xl font-semibold mb-3 bg-green-400 px-4 py-1 rounded-lg text-black">
                                    Vision
                                </h3>
                                <p className="text-gray-800 text-lg">
                                    Our vision is to create a joyful and engaging learning environment where every child thrives.
                                </p>
                            </div>

                            {/* Honesty */}
                            <div className="flex flex-col items-center text-center">
                                <FaHandshake className="text-red-500 text-6xl mb-3" />
                                <h3 className="text-2xl font-semibold mb-3 bg-red-400 px-4 py-1 rounded-lg text-black">
                                    Honesty
                                </h3>
                                <p className="text-gray-800 text-lg">
                                    We maintain transparency in our fees and policies, ensuring trust and peace of mind for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Hero;
