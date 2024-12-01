import React from 'react';
import ProductCard from './ProductCard';

const Body = () => {
  return (
    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-3'>
        <input
          type='text'
          class='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search...'
        />
        Search
      </div>
      <div className='flex flex-wrap justify-center gap-4 product-items'>
        <ProductCard
          title='Clothing bags'
          description='Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your '
          price='$109.95'
          image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        />
        <ProductCard
          title='Slim Fit T-Shirts'
          description='Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable'
          price='$259'
          image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
        />
        <ProductCard
          title='Mens Cotton Jacket'
          description='great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working style, contrast '
          price='$500'
          image='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
        />
      </div>
    </section>
  );
};

export default Body;
