import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div className="flex flex-col pl-4 items-center md:items-center">
          <h1 className="text-3xl font-bold bg-yellow-300 text-black px-4 py-1 rounded-lg text-center">
            PIP Elementary School
          </h1>
          <p className="mt-2 text-gray-300 text-lg leading-relaxed max-w-xs">
            At PIP School, we are committed to providing a nurturing and inspiring learning environment where young minds 
            can grow academically, socially, and emotionally. 
          </p>
          <div className="mt-4 space-y-2 text-lg">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 28 Efon Alaye Street, Off Orisunbare Road, ShaSha, Lagos, Nigeria
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +234 807 179 3276 / +234 802 307 3276
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> pipschool@gmail.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col pl-4 items-center md:items-center">
          <h3 className="text-xl font-semibold mb-4 bg-pink-400 px-4 py-1 rounded-lg text-black">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-300 transition">Gallery</Link></li>
            <li><Link to="/event" className="hover:text-yellow-300 transition">News & Events</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col pl-4 items-center md:items-center">
          <h3 className="text-xl font-semibold mb-4 bg-purple-500 px-4 py-1 rounded-lg text-black text-center">
            Get in Touch
          </h3>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="text-sm font-semibold">First Name*</label>
                <input type="text" className="p-2 border-b border-yellow-300 bg-transparent w-full focus:outline-none" placeholder="John" />
              </div>
              <div className="w-full">
                <label className="text-sm font-semibold">Last Name*</label>
                <input type="text" className="p-2 border-b border-yellow-300 bg-transparent w-full focus:outline-none" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Email*</label>
              <input type="email" className="p-2 border-b border-yellow-300 bg-transparent w-full focus:outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-semibold">Subject*</label>
              <input type="text" className="p-2 border-b border-yellow-300 bg-transparent w-full focus:outline-none" placeholder="Subject of your message" />
            </div>
            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea className="p-2 border-b border-yellow-300 bg-transparent w-full focus:outline-none" rows="3" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="items-start hover:bg-yellow-300  hover:text-blue-700 text-gray-200 font-bold py-2 px-4 rounded-lg transition">
              Submit
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="flex flex-col pl-4 items-center md:items-center">
          <h3 className="text-xl font-semibold mb-4 bg-red-500 px-4 py-1 rounded-lg text-black">Follow Us</h3>
          <div className="space-y-3 text-lg">
            <a href="https://facebook.com" className="flex items-center gap-3 hover:text-yellow-300 transition">
              <FaFacebook className="text-2xl" /> Facebook
            </a>
            <a href="https://instagram.com" className="flex items-center gap-3 hover:text-pink-500 transition">
              <FaInstagram className="text-2xl" /> Instagram
            </a>
            <a href="https://twitter.com" className="flex items-center gap-3 hover:text-blue-400 transition">
              <FaTwitter className="text-2xl" /> Twitter
            </a>
            <a href="https://wa.me/2348071793276" className="flex items-center gap-3 hover:text-green-400 transition">
              <FaWhatsapp className="text-2xl" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-white pt-4">
        <p>&copy; {new Date().getFullYear()} PIP School - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
