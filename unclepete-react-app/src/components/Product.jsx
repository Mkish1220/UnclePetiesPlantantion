import React from 'react';

import tintures from '../assets/tintures.jpg';
import seeds2 from '../assets/seeds2.jpg';
import seeds from '../assets/seeds.jpg';
import platteredibles from '../assets/platteredibles.jpg';
import stock from '../assets/stock.jpg';
import hempseed from '../assets/hempseed.jpg';
import gummies from '../assets/gummies.jpg';
import flower from '../assets/flower.jpg';
import edibles from '../assets/edibles.jpg';
import cookiesleaf from '../assets/cookiesleaf.jpg';
import cbd from '../assets/cbd.jpg';
import bud from '../assets/bud.jpg';


const Product = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-green-600 '>Our Products</p>
              <p className='py-4'>We create a variety of Products. Please take a look. </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={tintures} alt="HTML icon" />
                  <p className='my-4'>tintures</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={bud} alt="HTML icon" />
                  <p className='my-4'>bud</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={cbd} alt="HTML icon" />
                  <p className='my-4'>cbd</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={cookiesleaf} alt="HTML icon" />
                  <p className='my-4'>cookiesleaf</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={edibles} alt="HTML icon" />
                  <p className='my-4'>edibles</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={flower} alt="HTML icon" />
                  <p className='my-4'>flower</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={gummies} alt="HTML icon" />
                  <p className='my-4'>gummies</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={hempseed} alt="HTML icon" />
                  <p className='my-4'>hempseed</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={stock} alt="HTML icon" />
                  <p className='my-4'>stock</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={platteredibles} alt="HTML icon" />
                  <p className='my-4'>platteredibles</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={seeds} alt="HTML icon" />
                  <p className='my-4'>seeds</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={seeds2} alt="HTML icon" />
                  <p className='my-4'>seeds2</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Product;