import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DarryCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'


const Category = () => {

    const renderCards = category.map(card => {
        return (
            <div className='flex-1 basis-[300px]' key={card.id}>
                <div className='w-full min-h-[30vh] relative -md-10'>
                    <img className='absolute bottom-0' src={card.image} alt="" />
                </div>
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl '>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.descriptrion}</p>
                    <Button content="See All" />
                </div>

            </div>
        )
    })
    return (
        <section>
            <div className=' max-w-[1400px] mx-auto px-10  py-20'>
                <Heading highlight="Shop" heading="by Category" />

                {/* Catefory cards  */}

                <div className='flex flex-wrap gap-10 md:mt-15'>
                    {renderCards}
                </div>
            </div>

        </section>
    )
}

export default Category


const category = [

    {
        id: 1,
        title: 'Fruits & Veggies',
        descriptrion: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsCat,

    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        descriptrion: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DarryCat,

    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        descriptrion: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: SeaFoodCat,

    }
]

