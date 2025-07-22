import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-xl shadow-md overflow-hidden bg-white">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-8 py-10 text-[#2f2f2f] bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-[2px] bg-[#2f2f2f]"></span>
          <p className="text-sm sm:text-base font-medium uppercase tracking-widest">Welcome to</p>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-snug mb-6 text-pink-600">
          Monsij <span className='text-black'>Boutique</span>
        </h1>
        <button className="group flex items-center gap-2 text-sm sm:text-base font-semibold text-pink-700 hover:text-pink-400 transition-colors">
          Shop Now
          <span className="w-8 h-[2px] bg-pink-700 group-hover:bg-pink-400 transition-all duration-200"></span>
        </button>
      </div>

      {/* Right Side - Full Image Display */}
      <div className="w-full sm:w-1/2 bg-white p-4 flex items-center justify-center">
        <img
          src={assets.hero2}
          alt="Hero"
          className="w-full h-auto object-contain max-h-[500px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero