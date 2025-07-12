import React, { useState } from 'react';
import Logo from '../assets/volvo-logo.png';
import { IoMdCall } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import '../Components/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className='w-full fixed top-0 left-0 z-50 bg-white shadow-md'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='logo'>
            <a href='#'>
              <img src={Logo} alt='Volvo Logo' className='w-[120px] h-auto' />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-6 font-semibold '>
            <li><a href='#' className='hover:text-blue-700 transition'>Our Cars</a></li>
            <li><a href='#' className='hover:text-blue-700 transition'>Shop</a></li>
            <li><a href='#' className='hover:text-blue-700 transition'>Owners</a></li>
            <li><a href='#' className='hover:text-blue-700 transition'>About us</a></li>
          </ul>

          {/* Contact Button - Desktop Only */}
          <div className='hidden md:flex items-center gap-2 bg-[#010115] hover:bg-[#709bcc] hover:cursor-pointer p-[18px] text-white font-semibold hover:opacity-90'>
            <IoMdCall />
            <button>Contact</button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-3xl text-gray-800'
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className='md:hidden bg-white shadow-lg px-4 pb-4'>
            <ul className='flex flex-col gap-4 font-semibold'>
              <li><a href='#'>Our Cars</a></li>
              <li><a href='#'>Shop</a></li>
              <li><a href='#'>Owners</a></li>
              <li><a href='#'>About us</a></li>
              <li>
                <div className='flex items-center gap-2 bg-red-500 px-4 py-2 text-white rounded'>
                  <IoMdCall />
                  <button>Contact</button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
