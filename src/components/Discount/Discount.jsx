import React from 'react'
import Button from '../Button/Button'
import FruitsSet from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section
      className='bg-zinc-100 bg-right bg-no-repeat bg-contain'
      style={{ backgroundImage: `url(${FruitsSet})` }}
    >
      <div className='flex md:flex-row flex-col max-w-[1400px] mx-auto md:py-10 pl-5 pr-5 md:pl-10'>
        <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center mt-5 md:mt-0'>
          25%
        </span>

        <div className='max-w-[600px]'>
          <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold mt-2'>
            First Order Discount
          </h3>
          <p className='text-zinc-600 my-6 pr-3'>
            Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
          </p>
          <Button content="Get A Discount" />
        </div>
      </div>
    </section>
  )
}

export default Discount
