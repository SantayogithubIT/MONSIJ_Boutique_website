import React from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
         <Title text1={'ABOUT'} text2={'US'} />
        </h1>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <img
              src={assets.admin}
              alt="Mother of MONSIJ."
              className="rounded-2xl shadow-2xl w-full object-cover border-4 border-pink-200"
            />
            <p className="text-center mt-4 text-lg font-medium text-gray-600">Founder & Mother of MONSIJ.</p>
          </div>

          {/* Text */}
          <div className="w-full lg:w-2/3 text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              <span className="font-bold text-pink-600">Monsij</span> was founded with a vision to redefine fashion by blending simplicity, sustainability, and personal style. Each piece we offer is a reflection of timeless aesthetics and thoughtful craftsmanship.
            </p>
            <p className="mb-4">
              Our journey started with a deep passion for quality fabrics and an eye for detail. Today, <span className="font-semibold">Monsij.</span> stands as a boutique brand that values customer connection as much as creativity.
            </p>
            <p className="mb-4">
              Whether you're dressing for comfort or confidence, our collection is designed to empower you — because style isn't just about what you wear, it's about how you wear it.
            </p>
            <p>
              Thank you for being part of our story. We invite you to explore, express, and embrace your true self — the Forever way.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Get in Touch</h3>
        <p className="text-gray-600">Have questions or feedback? Reach out to us anytime at <a href="mailto:monsijboutique46@gmail.com" className="text-pink-600 hover:underline">monsijboutique46@gmail.com</a>.</p>
      </div>
    </div>
  );
};

export default About;
