import Image from 'next/image';
import { VscPassFilled } from "react-icons/vsc";
import Ceramics from '@/Components/Ceramics';
import React from 'react';
import Features from "@/Components/Features"
import Header2 from '@/Components/Header2';

const HV2 = () => {
  return (
    <>
    <Header2 />
    <Image 
        src="/Images/P2Hero Blocks.png"
        alt="img"
        width={1440}
        height={704} />

        <Features />

    <Ceramics />
    <div className="flex flex-col md:flex-row w-full h-[598px] items-center justify-around text-white px-4 py-16">
            <div className="bg-[#2A254B] w-[50%] h-[478px] py-12 md:p-16 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4x1">It started with a small idea</h1>
              <p className="mt-8 text-xl">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
              <button className="bg-input-bg h-12 w-40 rounded-sm mt-40 text-white bg-gray-700">
                View Collection
              </button>
            </div>
            <div className="w-[630px] md:w-2/4.5">
              <Image
                src="/Images/about1.png"
                alt="About main"
                width={630}
                height={478}
                className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
            
          </div>
          <section className="min-h-[40vh] relative bg-[url('/Images/camel1.png')] w-[1440px] h-[464px] bg-cover bg-center py-16 px-4">
          
      {/* Overlay for background dimming */}
      <div className="container flex justify-center items-center flex-col text-center"> {/* Flexbox applied here */}
    {/* "Join the club" Text */}
    <h2 className="text-3xl font-bold text-white mb-4 mt-10">
      Join the club and get the benefits
    </h2>

    {/* Description Text */}
    <p className="text-lg text-white mb-6">
      Sign up for our newsletter and receive exclusive offers on<br/> new ranges, sales, pop-up stores, and more.
    </p>

    {/* Benefits List */}
    <ul className="flex justify-center space-x-6 mb-6 text-white sm:flex-wrap sm:space-x-0 sm:space-y-2 sm:justify-start">
          <li className="flex items-center space-x-2">
            <span><VscPassFilled /></span> <span>Exclusive offers</span>
          </li>
          <li className="flex items-center space-x-2">
            <span><VscPassFilled /></span> <span>Free events</span>
          </li>
          <li className="flex items-center space-x-2">
            <span><VscPassFilled /></span> <span>Large discounts</span>
          </li>
        </ul>

    {/* Sign Up Button */}
    <div className="flex items-center mt-4">
      <input 
        type="email" 
        className="py-2 px-12 border rounded-lg w-full sm:w-auto" 
        placeholder="Enter your email" 
      />
      <button 
        type="submit" 
        className="signup-button bg-[#2A254B] text-white py-2 px-6 rounded-lg ml-1"
      >
        Sign Up
      </button>
    </div>
  </div>
  </section>
    </>






  );
}

export default HV2;
