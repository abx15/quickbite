import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Card from '../Cards/Card';
import Button from '../Button/Button';

const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All');

    const filteredItems = activeTab === 'All'? ProductList: ProductList.filter(item => item.category === activeTab);

    const renderCards = filteredItems.slice(0, 8).map((product) => {
        return (
            <Card image={product.image} name={product.name} price={product.price} />
        )
    });

    return (
        <section>
            <div className='mx-auto max-w-[1400px] px-10 py-20'>
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className='flex gap-3 justify-center mt-10'>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`cursor-pointer px-5 py-2 text-lg rounded-lg ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100 text-gray-600'}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product listing */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-20'>
                    {renderCards}
                </div>

                <div className='mt-15 mx-auto w-fit'>
                    <Button content="View More" />
                </div>
            </div>
        </section>
    )
}

export default Products;
