import React from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';
import Button from '../Button/Button';

const Card = ({ image, price, name }) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      
      {/* Top Icons */}
      <div className="flex justify-between items-center mb-3 text-orange-500">
        <span className="cursor-pointer text-2xl sm:text-3xl text-zinc-200 hover:text-orange-500 transition-colors duration-300">
          <FaHeart />
        </span>
        <button className="cursor-pointer bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg hover:scale-105 transition-transform duration-300">
          <FaPlus />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 flex justify-center items-center mb-5 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="text-center space-y-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>
        <p className="text-orange-500 font-bold text-sm sm:text-base">₹{price.toFixed(2)}</p>
        <Button content="Shop Now" className="w-full mt-2" />
      </div>
    </div>
  );
};

export default Card;
