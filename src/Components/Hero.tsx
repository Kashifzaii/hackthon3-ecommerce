import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section>
        <div className='w-full h-[770px] px-6 py-10'>
          <div className='flex flex-col md:flex-row w-full h-[584px]'>
            <div className='w-full md:w-[60%] h-[584] md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
              <div>
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the future with <br /> the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='w-[170px] h-[56px] bg-slate-600 text-white border border-gray-600 font-bold mt-12'>
                    View collection
                  </button>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className='w-[520px] md:w-[40%] h-[580px] md:h-[580px] bg-white flex justify-center items-end'>
              <Image src={'/images/Right Image.png'} width={520} height={584} alt='right' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;