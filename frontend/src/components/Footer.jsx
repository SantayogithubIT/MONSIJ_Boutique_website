import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
   <footer className="bg-white text-gray-800 px-6 md:px-20 py-12 border-t">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Logo and Description */}
        <div>
            <img src={assets.logo} alt="" />
          {/* <h2 className="text-2xl font-bold tracking-wider">
            MONSIJ<span className="text-pink-500">.</span>
          </h2> */}
          <p className="font-semibold mt-4 text-sm leading-6 text-gray-600">
            ✨ Elegant & Professional
          </p>
          <p className='mt-4 text-sm leading-6 text-gray-600'>
            Monsiji is where style meets soul.
 We bring timeless fashion to life with care, creativity, and craftsmanship.
  Designed with love, worn with pride.</p>
        </div>

        {/* Middle: Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>+91-9874534853</li>
            <li>imonbhaduri@gmail.com</li>
            <li><a href="https://www.instagram.com/monsijboutique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
            <li><a href="https://www.facebook.com/monsijboutique">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        Made with love by Santayo K & Priyanka S 💝.
      </div>
    </footer>
  );
};

export default Footer;