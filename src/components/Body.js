import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Category from './Category';
import ShimmerCard from './ShimmerCard';
import { Link } from 'react-router-dom';

const Body = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchApiProducts();
  }, []);

  async function fetchApiProducts() {
    const data = await fetch('https://fakestoreapi.com/products');
    const productsData = await data.json();
    setFilteredItems(productsData);
    setAllProducts(productsData);
  }

  function handleRatingFilter(minRate, maxRate) {
    setFilteredItems(
      allProducts.filter(
        (product) =>
          product.rating.rate >= minRate && product.rating.rate < maxRate
      )
    );
  }

  function handleResetFilter() {
    setFilteredItems(allProducts);
  }
  function handleSearchFilter() {
    const searchedProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(searchedProducts);
  }
  if (filteredItems.length === 0) {
    return (
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        {Array(20)
          .fill('')
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-3'>
        <input
          type='text'
          className='px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search the products...'
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button onClick={handleSearchFilter}>Search</button>
      </div>
      <div className='flex flex-wrap gap-2'>
        <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg '
          onClick={handleResetFilter}
        >
          All Products
        </button>
        <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={() => {
            handleRatingFilter(1, 2);
          }}
        >
          Rating 1-2 ⭐
        </button>
        <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={() => {
            handleRatingFilter(2, 3);
          }}
        >
          Rating 2-3 ⭐
        </button>
        <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={() => {
            handleRatingFilter(3, 4);
          }}
        >
          Rating 3-4 ⭐
        </button>
        <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={() => {
            handleRatingFilter(4, 5);
          }}
        >
          Rating 4-5 ⭐
        </button>
      </div>
      <Category />
      <div className='flex flex-wrap justify-center gap-4 product-items'>
        <h2 className='w-full mb-4 text-xl font-semibold text-center text-gray-800'>
          Total Items: {filteredItems.length}
        </h2>
        {filteredItems.map((product) => (
          <Link to={'/products/' + product.id} key={product.id}>
            <ProductCard productItem={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Body;
