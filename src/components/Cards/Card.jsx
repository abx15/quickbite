import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
const Card = ({ image, price, name }) => {
    return (
        <div className='bg-zinc-100 p-5 rounded-2xl '>
            {/* cart icons  */}
            <div className='flex justify-between text-2xl mb-3 text-orange-500'>
                <span className='cursor-pointer text-3xl text-zinc-200 hover:text-orange-500'>
                    <FaHeart />
                </span>
                <button className='cursor-pointer bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg'>
                    <FaPlus />
                </button>
            </div>

            {/* cart img  */}
            <div className='w-full h-52 flex justify-center items-center mb-5'>
                <img className='object-contain ' src={image} alt="Some Images" />
            </div>
            {/* cart content  */}
            <div className='text-center space-y-3'>
                <h3 className='text-lg font-semibold'>{name}</h3>
                <p className='text-orange-500'>₹{price.toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Card
