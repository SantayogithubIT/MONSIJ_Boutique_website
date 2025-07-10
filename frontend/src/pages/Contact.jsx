import React from 'react';
import Title from '../components/Title';
//import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative bg-white min-h-screen py-16 px-6 sm:px-12 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-pink-600">
          <Title text1={'CONTACT'} text2={'US'} />
        </h1>
        <p className="text-center mb-10 text-gray-600">Have questions? We'd love to hear from you!</p>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your query"
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p>Monsij Boutique<br />64/1 Nilmoni Shome Street Bhadrakali<br />Uttarpara,Debaipukur, West Bengal 712232</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p>+91 98745 34853</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p>titli.2004@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
              <p>Mon - Fri: 10am - 6pm<br />Saturday: 11am - 4pm<br />Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
