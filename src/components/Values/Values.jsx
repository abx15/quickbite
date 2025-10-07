import React from 'react'
import Heading from '../Heading/Heading'
import { FaHandshake, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import BasketImage from '../../assets/basket-full-vegetables.png'

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHandshake />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'We prioritize food safety above all. Our kitchen is always clean and hygienic, and we use fresh ingredients.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'We use only 100% organic and chemical-free ingredients. Every dish is fresh and healthy, sourced from trusted organic farms.',
        icon: <FaSeedling />
    },
];

const Values = () => {

    const leftValues = value.slice(0, 2).map(item => (
        <div key={item.id} className='flex flex-row-reverse items-center gap-6'>
            <div>
                <span className='flex justify-center items-center text-white text-2xl bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 rounded-full shadow-md'>
                    {item.icon}
                </span>
            </div>
            <div className='text-right'>
                <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                <p className='text-zinc-600 text-base mt-2'>{item.para}</p>
            </div>
        </div>
    ));

    const rightValues = value.slice(2).map(item => (
        <div key={item.id} className='flex items-center gap-6'>
            <div>
                <span className='flex justify-center items-center text-white text-2xl bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 rounded-full shadow-md'>
                    {item.icon}
                </span>
            </div>
            <div className='text-left'>
                <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                <p className='text-zinc-600 text-base mt-2'>{item.para}</p>
            </div>
        </div>
    ));

    return (
        <section className='py-20'>
            <div className='max-w-[1400px] mx-auto px-6'>
                <Heading highlight="Our" heading="Values" />

                {/* Layout */}
                <div className='flex flex-wrap justify-center items-center gap-16 mt-16'>

                    {/* Left Side */}
                    <div className='flex flex-col justify-between gap-16 w-full md:w-[30%]'>
                        {leftValues}
                    </div>

                    {/* Center Image */}
                    <div className='w-full md:w-[30%] flex justify-center'>
                        <img
                            className='w-[350px] max-w-full mx-auto'
                            src={BasketImage}
                            alt="Basket of vegetables"
                        />
                    </div>

                    {/* Right Side */}
                    <div className='flex flex-col justify-between gap-16 w-full md:w-[30%]'>
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
