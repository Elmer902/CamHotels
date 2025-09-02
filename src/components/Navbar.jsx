import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../public/Logo.png";
import English from "../public/English_icon.png";
import Person from "../public/person.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#1B53E2]/90 fixed w-full z-20 font-itim shadow-md">
      <nav className="flex justify-between items-center px-6 md:px-8 h-[83px]">
        {/* Logo */}
       <NavLink to="/Home">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-20 text-white font-semibold">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/stays"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-white"
            }
          >
            Stays
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-white"
            }
          >
            Bookings
          </NavLink>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/user">
            <img src={Person} alt="User" className="w-8" />
          </NavLink>
          <img src={English} alt="English" className="w-12" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1B53E2]/90 w-full px-6 py-4 flex flex-col gap-4 text-white font-semibold">
          <NavLink
            to="/Home"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/stays"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-white"
            }
          >
            Stays
          </NavLink>
          <NavLink
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-white"
            }
          >
            Bookings
          </NavLink>
          <div className="flex items-center gap-4 mt-2">
            <NavLink to="/user" onClick={() => setMenuOpen(false)}>
              <img src={Person} alt="User" className="w-8" />
            </NavLink>
            <img src={English} alt="English" className="w-12" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
