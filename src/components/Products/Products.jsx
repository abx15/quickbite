import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import ProductList from '../ProductList/ProductList';
import Card from '../Cards/Card';
import Button from '../Button/Button';

const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems =
    activeTab === 'All'
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, visibleCount).map((product) => (
    <Card
      key={product.id || product.name} // use id if available
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-8 sm:mt-10 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`cursor-pointer px-4 sm:px-5 py-2 text-sm sm:text-lg rounded-lg transition-all duration-300
                ${
                  activeTab === category
                    ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-lg'
                    : 'bg-zinc-100 text-gray-600 hover:bg-orange-100'
                }`}
              onClick={() => {
                setActiveTab(category);
                setVisibleCount(8); // reset visible count when switching tab
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-9 mt-10 sm:mt-16">
          {renderCards}
        </div>

        {/* View More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-8 sm:mt-12 mx-auto w-fit">
            <Button
              content="View More"
              onClick={handleViewMore}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
