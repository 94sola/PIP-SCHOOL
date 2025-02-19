import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpg";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setActiveDropdown(null); // Close dropdowns when opening mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null); // Close dropdowns when clicking a link
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
    <header className="bg-gradient-to-r from-pink-200 via-red-300 to-green-700 text-white font-sans shadow-lg sticky top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 sm:px-8 lg:px-20 py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src={logo} alt="PIP School Logo" className="rounded-full w-12 sm:w-16 h-auto shadow-lg" />
          <span className="ml-3 text-xl text-cyan-800 font-bold">PIP School</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-3xl text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static bg-purple-200 lg:bg-transparent top-16 left-0 w-full lg:w-auto lg:flex flex-col lg:flex-row lg:items-center transition-all duration-300 ease-in-out shadow-lg lg:shadow-none text-blue-950 lg:text-white ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 text-lg font-medium font-sans lg:items-center px-8 lg:px-0 py-4 lg:py-0">
            <li>
              <Link to="/" className="hover:text-yellow-300" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            {/* Dropdown Menus */}
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center gap-2 hover:text-yellow-300 focus:outline-none"
                  aria-expanded={activeDropdown === menu.title}
                >
                  {menu.title}
                  <FaChevronDown
                    className={`transition-transform ${activeDropdown === menu.title ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === menu.title && (
                  <ul className="absolute top-full left-0 bg-cyan-300 text-blue-950 mt-1 py-1 pl-16 lg:pl-2 shadow-lg rounded-lg w-52 lg:w-auto">
                    {menu.links.map((item, i) => (
                      <li key={i} className="py-2 px-4 hover:bg-yellow-300 rounded-lg">
                        <Link to={item.link} onClick={closeMobileMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <Link to="/gallery" className="hover:text-yellow-300" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-yellow-300" onClick={closeMobileMenu}>
                News & Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
