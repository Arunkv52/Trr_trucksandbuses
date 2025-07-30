import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { IoMdCall } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import "../Components/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white/90 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo md:px-5">
            <a href="#">
              <img src={Logo} alt="Volvo Logo" className="w-[250px] h-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-semibold ">
            <li>
              <a href="#" className="hover:text-blue-700 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition">
                Services
              </a>
            </li>
          </ul>

          {/* Contact Button - Desktop Only */}
          <a href="#" className="cursor-pointer">
            <div className="hidden md:flex items-center gap-2 bg-[#010115] hover:bg-[#709bcc] hover:cursor-pointer p-[18px] text-white font-semibold hover:opacity-90">
              <IoMdCall />
              <button>Contact</button>
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-800"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 pb-4">
            <ul className="flex flex-col gap-4 font-semibold">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">
                  <div className="flex items-center gap-2 bg-red-500 px-5 py-2 text-white rounded w-fit">
                    <IoMdCall />
                    <button>Contact</button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
