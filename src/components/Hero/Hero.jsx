import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section>
            <div className=' max-w-[1400px] mx-auto px-10 min-h-screen flex md:flex-row flex-col items-center md:pt-25 pt-35'>
                {/* Hero content  */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4 '>
                        Testy Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Vagegies</span> <br /> In Your City
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[530px] md:mt-5 md:mb-10 mt-4 mb-8 '>Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button content="Shop Now" />
                </div>

                {/* hero img  */}
                <div className='flex-1'>
                    <img src={Grocery} alt="hero image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
