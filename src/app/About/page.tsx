
import React from "react";
import Image from "next/image";
import Features from "@/Components/Features"
import News from "@/Components/Newsletter"
import Header from "@/Components/Header"



const About = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-3xl sm:text-3xl text-center md:text-left text-lg mt-[40px] text-custom-purpl">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple hover:bg-gray">
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-[598px] items-center justify-around text-white px-4 py-16 space-y-8 md:space-y-0">
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

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <Image
          src="/Images/about2.png"
          alt="Service"
          width={400}
          height={400}
          className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
        </div>
      </div>
      <Features />
        <News />
    </div>
  );
};

export default About;