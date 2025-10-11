import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Testimonials = () => {
    return (
        <setion>
            <div className='max-w-[1400px] px-10 mx-auto py-20'>
                <Heading highlight='Customers' heading='Saying' />
                <div className='py-5 flex justify-end gap-x-3'>
                    <button className='text-2xl rounded-lg q-11 h-11 bg-zinc-100 hover:bg-orange-500 text-zinc-800 cursor-pointer flex justify-center items-center'>
                        <IoIosArrowBack />

                    </button>
                    <button className='text-2xl rounded-lg q-11 h-11 bg-zinc-100 hover:bg-orange-500 text-zinc-800 cursor-pointer flex justify-center items-center'>
                        <IoIosArrowForward />

                    </button>
                </div>
            </div>

        </setion>
    )
}

export default Testimonials
