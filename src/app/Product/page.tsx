"use client";
import { useState } from "react";
import Header from '@/Components/Header';
import Newsletter from '@/Components/Newsletter'
import Image from 'next/image';
import React from 'react';
import Features from '@/Components/Features'

const Product = () => {
const [amount, setAmount] = useState(1); // State to manage the input value


  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-12 bg-gray-50">
  {/* <!-- Image Section --> */}
  <div className="w-full md:w-1/2">
    <Image src="/Images/chair.png" alt="The Dandy Chair" width={600} height={600} className="rounded-lg shadow-md w-full"/>
  </div>

  {/* <!-- Details Section --> */}
  <div className="w-full md:w-1/2">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">The Dandy Chair</h1>
    <p className="text-xl font-semibold text-gray-600 mb-6">£250</p>

    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Description</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        A timeless design, with premium materials features as one of our most popular and iconic pieces.
        The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>Premium material</li>
        <li>Handmade upholstery</li>
        <li>Quality timeless classic</li>
      </ul>
    </div>

    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Dimensions</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <span className="block text-gray-600 font-semibold">Height</span>
          <span className="block text-gray-800">110cm</span>
        </div>
        <div>
          <span className="block text-gray-600 font-semibold">Width</span>
          <span className="block text-gray-800">75cm</span>
        </div>
        <div>
          <span className="block text-gray-600 font-semibold">Depth</span>
          <span className="block text-gray-800">50cm</span>
        </div>
      </div>
    </div>

    <div className="mb-6">
    <div className="flex items-center space-x-4">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Amount:</h2>
      
        <input type="number" value={amount} min="1"  onChange={(e) => setAmount(Number(e.target.value))} className="w-21 border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 py-3"/>
        <button className="bg-[#2A254B] text-white px-8 py-4 hover:bg-purple-900 transition gap-y-8">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
<div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-2xl font-semibold">You might also like</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/Images/creamic1.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/Images/creamic2.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/Images/creamic3.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/Images/cramic4.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
              View collection
            </button>
          </div>
        </div>
        <Features />
        <Newsletter />
</>
  );
}

export default Product