import Link from 'next/link';
import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa'; // Import icons
import React from 'react';



export default function Header() {
  return (
    // <!-- Header Section -->
<header className="bg-gray-50 border-b">
  {/* <!-- Top Navbar --> */}
  <div className="bg-[#2A254B] text-white text-sm py-2 flex justify-center text-center ">
    <span>Free delivery on all orders over $50 with code easter at checkout</span>
    <button className=" flex absolute right-4 mr-4 item-end text-white hover:underline">✖</button>
  </div>

  {/* <!-- Main Navbar --> */}
  <div className="flex justify-between bg-white py-4 px-8">
    {/* <!-- Logo --> */}
    <Link href="/Home" className="text-2xl font-bold text-gray-900">Avion</Link>

    {/* <!-- Navigation Links --> */}
    <nav className="hidden md:flex space-x-4 text-gray-600 item-end text-right">
      <Link href="/About" className="hover:text-gray-900">About us</Link>
      <Link href="contact" className="hover:text-gray-900">Contact</Link>
      <Link href="#" className="hover:text-gray-900">Blog</Link>
      <Link href="/Search" className="flex items-center space-x-2 hover:text-gray-800 transition duration-200 ease-in-out">
            <FaSearch className="text-black" />
          </Link>

          <Link href="/profile" className="flex items-center space-x-2 hover:text-gray-800 transition duration-200 ease-in-out">
            <FaUserAlt className="text-black" />
          </Link>
        <Link href="/CartItem" className="flex items-center space-x-2 hover:text-gray-800 transition duration-200 ease-in-out">
            <FaShoppingCart className="text-black" />
          </Link>

    </nav>

    
  </div>


  {/* <!-- Sub Navbar --> */}
  <div className="bg-gray-200 text-gray-700 border-t w-[full] h-[64px]">
    <nav className="flex justify-center space-x-6 py-3 w-[full] h-[64px] ">
      <Link href="/HV2" className="hover:text-gray-900">HV2</Link>
      <Link href="/Product" className="hover:text-gray-900">Product</Link>
      <Link href="/ProductsList" className="hover:text-gray-900">All Product</Link>
      <Link href="#" className="hover:text-gray-900">Tables</Link>
      <Link href="#" className="hover:text-gray-900">Chairs</Link>
      <Link href="#" className="hover:text-gray-900">Crockery</Link>
      <Link href="#" className="hover:text-gray-900">Tableware</Link>
      <Link href="#" className="hover:text-gray-900">Cutlery</Link>
    </nav>
  </div>
</header>
    
    
  );
}