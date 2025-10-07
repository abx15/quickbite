import React, { useEffect, useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { IoBagHandle, IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Accessibility: Close menu with Esc key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowMenu(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      role="banner"
    >
      <nav
        className="flex justify-between max-w-[1400px] items-center mx-auto h-[12vh] md:h-[14vh] px-4 md:px-10"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a className="text-2xl md:text-3xl font-bold" href="#" tabIndex={0}>
          Quic<span className="text-orange-500 uppercase">kB</span>ite
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-10 lg:gap-x-16">
          <li>
            <a className="font-semibold tracking-wider text-orange-500" href="#">Home</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500" href="#">About us</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500" href="#">Process</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500" href="#">Contact us</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-6 bg-orange-500 p-8 items-center md:hidden absolute top-[72px] left-1/2 w-[90vw] max-w-xs rounded-xl shadow-xl transition-transform duration-300 ease-in-out ${
            showMenu ? '-translate-x-1/2' : '-translate-x-[200%]'
          }`}
          style={{ zIndex: 100 }}
        >
          {["Home", "About us", "Process", "Contact us"].map((item) => (
            <li key={item}>
              <a className="font-semibold tracking-wider text-white hover:text-zinc-200 focus:text-zinc-200 transition" href="#" tabIndex={0}>
                {item}
              </a>
            </li>
          ))}
          {/* Search Box */}
          <li className="w-full max-w-sm">
            <form className="flex items-center bg-white rounded-full overflow-hidden border-2 border-orange-500">
              <input
                type="text"
                placeholder="Search..."
                autoComplete="off"
                className="flex-1 h-10 px-4 text-sm text-zinc-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center text-xl"
                aria-label="Search"
              >
                <FiSearch />
              </button>
            </form>
          </li>
        </ul>

        {/* Nav Actions */}
        <div className="flex items-center gap-x-4 md:gap-x-6">
          {/* Desktop Search */}
          <form className="hidden md:flex bg-white p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-10 px-3 text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl"
              aria-label="Search"
            >
              <FiSearch />
            </button>
          </form>
          {/* Heart & Bag Icons */}
          <a href="#" className="text-zinc-800 text-2xl" aria-label="Wishlist"><GoHeartFill /></a>
          <a href="#" className="text-zinc-800 text-2xl" aria-label="Cart"><IoBagHandle /></a>
          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="text-zinc-800 text-3xl md:hidden focus:outline-none"
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
          >
            {showMenu ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
