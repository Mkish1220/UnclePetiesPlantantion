import React from 'react'
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

      <img src={Logo} alt='UPP Logo' style={{ width: '200px' }} />
      
    </div>
  );
};

export default Navbar;