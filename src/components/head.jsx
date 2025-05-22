import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-indigo-600 shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">ASRAR</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navItems.map(({ id, label }) => (
            <li key={id}>
             <Link
  to={id}
  smooth={true}
  spy={true}
  hashSpy={false}  // ✅ Add this line
  offset={-80}
  duration={500}
  className="cursor-pointer hover:text-yellow-300"
  activeClass="text-yellow-300 font-semibold"
>
  {label}
</Link>

            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-4 pb-4 pt-2">
          <ul className="space-y-4 text-white font-medium">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  spy={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  className="block cursor-pointer hover:text-yellow-300"
                  activeClass="text-yellow-300 font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
