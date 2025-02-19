import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpg";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      title: "Classes",
      links: [
        { label: "Creche", link: "/creche" },
        { label: "Preschool Classes", link: "/preschool" },
        { label: "Nursery", link: "/nursery" },
        { label: "Primary", link: "/primary" },
      ],
    },
    {
      title: "Team",
      links: [
        { label: "Our Team", link: "/team" },
        { label: "Testimonials", link: "/testimonial" },
      ],
    },
  ];

  return (
    <header className="bg-gray-300 text-cyan-950 font-sans shadow-lg sticky top-0 left-0 w-full z-50">
      <Wrapper>
        <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 relative">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src={logo} alt="PIP School Logo" className="rounded-full w-12 sm:w-16 h-auto shadow-lg" />
            <span className="ml-3 text-xl text-cyan-900 font-bold">PIP School</span>
          </Link>

          <div className="hidden lg:flex flex-grow justify-center space-x-8">
            <ul className="flex gap-6 text-lg font-medium">
              <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
              {menuItems.map((menu, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(menu.title)}
                    className="flex items-center gap-2 hover:text-cyan-900"
                    aria-expanded={activeDropdown === menu.title}
                  >
                    {menu.title}
                    <FaChevronDown className={`transition-transform ${activeDropdown === menu.title ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === menu.title && (
                    <ul className="absolute top-full left-0 bg-cyan-300 text-blue-950 mt-1 py-1 shadow-lg rounded-lg w-52">
                      {menu.links.map((item, i) => (
                        <li key={i} className="py-2 px-4 hover:bg-yellow-300 rounded-lg">
                          <Link to={item.link} onClick={closeMobileMenu}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li><Link to="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
              <li><Link to="/news" className="hover:text-yellow-300">News</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-md w-64"
              aria-label="Search"
            />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-3xl text-cyan-950 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-purple-200 text-blue-950 shadow-lg px-8 py-6 flex flex-col items-center">
          <ul className="flex flex-col gap-4 text-lg font-medium w-full text-center">
            <li><Link to="/" className="hover:text-yellow-300" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300" onClick={closeMobileMenu}>About</Link></li>
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center justify-center gap-2 w-full hover:text-cyan-900"
                  aria-expanded={activeDropdown === menu.title}
                >
                  {menu.title}
                  <FaChevronDown className={`transition-transform ${activeDropdown === menu.title ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === menu.title && (
                  <ul className="mt-2 bg-cyan-300 text-blue-950 rounded-lg w-full">
                    {menu.links.map((item, i) => (
                      <li key={i} className="py-2 px-4 text-center hover:bg-yellow-300 rounded-lg">
                        <Link to={item.link} onClick={closeMobileMenu}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li><Link to="/gallery" className="hover:text-blue-400" onClick={closeMobileMenu}>Gallery</Link></li>
            <li><Link to="/news" className="hover:text-blue-400" onClick={closeMobileMenu}>News & Events</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-4 px-4 py-2 border rounded-md w-full"
            aria-label="Search"
          />
        </div>
      )}
      </Wrapper>
    </header>
  );
};

export default Nav;
