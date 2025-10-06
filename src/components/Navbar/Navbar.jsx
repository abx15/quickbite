import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { IoBagHandle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggelMenu = () => {
    setShowMenu(!showMenu);
  }


  return (
    <header className='bg-white fixed top-0 right-0 left-0'>
      <nav className='flex justify-between max-w-[1400px] items-center mx-auto md:h-[14vh] h-[12vh] px-10'>
        <a className='text-3xl font-bold' href="">Quic<span className='text-orange-500 uppercase'>kB</span>ite</a>

        {/* Desktop menu */}

        <ul className='md:flex items-center gap-x-15 hidden'>
          <li><a className='font-semibold tracking-wider text-orange-500' href="">Home</a></li>
          <li><a className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500' href="">About us</a></li>
          <li><a className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500' href="">Process</a></li>
          <li><a className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500' href="">Contact us</a></li>
        </ul>

        {/* Mobile menu  */}

        <ul className={`flex flex-col gap-y-6 bg-orange-500 p-8 items-center md:hidden absolute top-[80px] left-1/2 w-[90%] rounded-lg shadow-lg
  transform transition-transform duration-300 ease-in-out
  ${showMenu ? '-translate-x-1/2' : '-translate-x-[200%]'}`}>
          <li>
            <a className="font-semibold tracking-wider text-white hover:text-zinc-200 transition" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold tracking-wider text-white hover:text-zinc-200 transition" href="#">
              About us
            </a>
          </li>
          <li>
            <a className="font-semibold tracking-wider text-white hover:text-zinc-200 transition" href="#">
              Process
            </a>
          </li>
          <li>
            <a className="font-semibold tracking-wider text-white hover:text-zinc-200 transition" href="#">
              Contact us
            </a>
          </li>

          {/* Search Box */}
          <li className="w-full max-w-sm">
            <div className="flex items-center bg-white rounded-full overflow-hidden border-2 border-orange-500">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search..."
                autoComplete="off"
                className="flex-1 h-[40px] px-4 text-sm text-zinc-700 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center text-xl">
                <FiSearch />
              </button>
            </div>
          </li>
        </ul>



        {/* Nav action  */}

        <div className='flex items-center gap-x-5'>
          <div className='md:flex bg-white p-1 border-2 border-orange-500 rounded-full hidden'>
            <input type="text" name='text' id='text' placeholder='search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl' ><FiSearch /></button>
          </div>
          <a href="" className='text-zinc-800 text-2xl'><GoHeartFill /></a>

          <a href="" className='text-zinc-800 text-2xl'><IoBagHandle /></a>

          <button href="" onClick={toggelMenu} className='text-zinc-800 text-3xl md:hidden'>
            {showMenu?<RxCross2 />:<IoMenu/>}
          </button>
        </div>





      </nav>
    </header >
  )
}

export default Navbar
