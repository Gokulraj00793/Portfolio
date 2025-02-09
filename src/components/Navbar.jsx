import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  // text-[#00FFFF]-
  return (
    <header className=" fixed  w-full top-0 left-0 text-black z-50 !overflow-visible">
      <nav className="mx-auto text-[24px] font-bold flex max-w-7xl p-5 lg:px-8 xl:px-8 justify-between">
        <h1 className="logoname ">Gokulraj_@</h1>
        {/* Responsive Menu Icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[28px]"
          >
            {menuOpen ? (
              <span className="material-symbols-outlined menuicon">close</span>
            ) : (
              <span className="material-symbols-outlined menuicon">menu</span>
            )}
          </button>
        </div>
        {/* Navigation Links */}

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } navbarglassy absolute mt-[10px] ml-[5px] top-full left-0   lg:static lg:flex lg:flex-row lg:gap-8 flex-col items-center gap-5 py-6 lg:py-0 transition-all duration-300 ease-in-out justify-center z-40 !overflow-visible border-[1px] solid `}
        >
          <a
            href="#hero"
            onClick={handleMenuClose}
            className="hover:text-green-600 bg-white/10 backdrop-blur-[15px] rounded-xl px-1"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleMenuClose}
            className="hover:text-green-600 bg-white/10 backdrop-blur-[15px] rounded-xl px-1"
          >
            About
          </a>
          <a
            href="#expertise"
            onClick={handleMenuClose}
            className="hover:text-green-600 bg-white/10 backdrop-blur-[15px] rounded-xl px-1"
          >
            Expertise
          </a>
          <a
            href="#certification"
            onClick={handleMenuClose}
            className="hover:text-green-600 bg-white/10 backdrop-blur-[15px] rounded-xl px-1"
          >
            Certifications
          </a>
          <a
            href="#work"
            onClick={handleMenuClose}
            className="hover:text-green-600 bg-white/10 backdrop-blur-[15px] rounded-xl px-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleMenuClose}
            className="hover:text-green-600 bg-white/10 backdrop-blur-[15px] rounded-xl px-1"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
