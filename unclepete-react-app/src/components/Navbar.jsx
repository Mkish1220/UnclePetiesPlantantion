import React from 'react'



import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';


const Navbar = () => {
 
  

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='product' smooth={true} duration={500}>
            Product
          </Link>
        </li>
        <li>
          <Link to='nursery' smooth={true} duration={500}>
            Nursery
          </Link>
        </li>
        <li>
          <Link to='aboutus' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      </div>

  );
};

export default Navbar;