import Link from 'next/link';
import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import React from 'react'

const Header2 = () => {
  return (
    <header className="bg-white shadow py-4 px-6">
        <div className="flex item-center justify-between bg-white py-4 px-8">
  
      {/* Left Section: Search Icon */}
      <div className="hidden md:flex space-x-4 text-gray-600 item-end text-right">
        <Link href="/Search" className="flex items-start space-x-2 hover:text-gray-800 transition duration-200 ease-in-out">
              <FaSearch className="text-black" />
            </Link>
            </div>
             {/* Center Section: Logo */}
            <div className="flex-1 text-center">
                <Link href="/Home" className='text-2xl font-bold text-gray-900'>Avion</Link></div>

                {/* Right Section: Profile and Cart Icons */}
                <Link href="About" className="hover:text-gray-900 px-6">About</Link>
                <Link href="/profile" className="flex items-center space-x-4 mr-4 hover:text-gray-800 transition duration-200 ease-in-out">
              <FaUserAlt className="text-black" />
            </Link>
          <Link href="/CartItem" className="flex items-center space-x-2 hover:text-gray-800 transition duration-200 ease-in-out">
              <FaShoppingCart className="text-black" />
            </Link>
  
      
  
      
    </div>
  
  
    {/* <!-- Sub Navbar --> */}
    <div className="bg-white text-gray-700 border-t w-[full] h-[64px]">
      <nav className="flex justify-center space-x-6 py-3 w-[full] h-[64px]">
        <Link href="/HV2" className="hover:text-gray-900">HV2</Link>
        <Link href="/Product" className="hover:text-gray-900">Product</Link>
        <Link href="/ProductsList" className="hover:text-gray-900">All Products</Link>
        <Link href="#" className="hover:text-gray-900">Table</Link>
        <Link href="/#" className="hover:text-gray-900">Chairs</Link>
        <Link href="#" className="hover:text-gray-900">Crockery</Link>
        <Link href="#" className="hover:text-gray-900">Cutlery</Link>
      </nav>
    </div>
  </header>
  
  )
}

export default Header2
