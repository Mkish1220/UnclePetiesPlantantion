import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-green-600 font-bold text-4xl sm:text-7xl'>Welcome To Uncle Peties</p>
        <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Hemp Plantation
        </h1>
        <h2 className='text-[#8892b0] py-6 max-w[800px]'>
          We are a Florida Grown and Raise Hemp Farm located right in the Middle of Florida. 
          We are a family owned and operated by locals who are passionate about the Hemp Industry.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        We are dedicated to providing the highest quality Hemp products to our customers. 
        We are committed to providing the best customer service and support to our customers.
          
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>
            View Products
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;