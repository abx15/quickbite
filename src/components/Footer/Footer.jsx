import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap justify-between max-w-[1400px] mx-auto px-6 md:px-10 gap-10">

        {/* Brand Section */}
        <div className="flex-1 min-w-[250px]">
          <a className="text-2xl md:text-3xl font-bold" href="#" tabIndex={0}>
            Quic<span className="text-orange-500 uppercase">kB</span>ite
          </a>
          <p className="text-zinc-600 mt-5 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>
          <p className="text-zinc-800 capitalize mt-7 text-sm">
            2025 &copy; All rights reserved
          </p>
        </div>

        {/* Company */}
        <ul className="flex-1 min-w-[180px]">
          <li>
            <h5 className="font-bold text-zinc-800 text-2xl">Company</h5>
          </li>
          <li className="mt-5">
            <a className="hover:text-orange-500 text-zinc-800" href="#">About</a>
          </li>
          <li className="mt-5">
            <a className="hover:text-orange-500 text-zinc-800" href="#">FAQ's</a>
          </li>
          <li className="mt-5">
            <a className="hover:text-orange-500 text-zinc-800" href="#">Careers</a>
          </li>
        </ul>

        {/* Support */}
        <ul className="flex-1 min-w-[180px]">
          <li>
            <h5 className="font-bold text-zinc-800 text-2xl">Support</h5>
          </li>
          <li className="mt-5">
            <a className="hover:text-orange-500 text-zinc-800" href="#">Support Center</a>
          </li>
          <li className="mt-5">
            <a className="hover:text-orange-500 text-zinc-800" href="#">Feedback</a>
          </li>
          <li className="mt-5">
            <a className="hover:text-orange-500 text-zinc-800" href="#">Contact Us</a>
          </li>
        </ul>

        {/* Stay Connected */}
        <div className="flex-1 min-w-[250px]">
          <h5 className="font-bold text-zinc-800 text-2xl">Stay Connected</h5>
          <p className="text-zinc-600 mt-5 text-sm">
            Subscribe to get special offers, updates, and new product info.
          </p>

          {/* Email Input */}
          <form className="mt-6 flex items-center bg-white rounded-full shadow-sm overflow-hidden max-w-[300px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-sm outline-none text-zinc-700"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-zinc-700">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
