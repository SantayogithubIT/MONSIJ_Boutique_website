import { Link, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';// adjust path as needed
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const {addTocart, products} = useContext(ShopContext);
  const [proData, setProData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [tab, setTab] = useState('desc');

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProData(found);
      setImage(found.image[0]);
    } else {
    setProData(null);
  }
  }, [productId, products]);

  return proData ? (
    <div className='p-8 border-t text-pink-600'>
      {/* Product Section */}
      <div className='flex-1 flex flex-col gap-3 sm:flex-row'>
        {/* Left: Images */}
        <div className='w-full sm:w-[80%]'>
    <img src={image} alt={proData.name} className='w-full h-auto object-cover' />
  </div>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            proData.image.map((item, index) => (
            <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
            ))
          }
        </div>

        {/* Right: Details */}
        <div className='flex flex-col gap-3 max-w-xl'>
          <h2 className='text-2xl font-semibold'>{proData.name}</h2>
          <div className='flex items-center gap-2'>
            <div className='text-red-500 text-lg'>★★★★☆</div>
            <div>({proData.reviews || 122})</div>
          </div>
          <div className='text-2xl font-bold text-black'>₹{proData.price}</div>
          <p className='text-gray-600'>
          {proData.description} </p>

          {/* Sizes */}
          <div>
            <h3 className='font-medium mb-2'>Select Size</h3>
            <div className='flex gap-3'>
              {['XS' ,'S', 'M', 'L', 'XL', 'XXL','Free Size'].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border ${selectedSize === size ? 'bg-pink-600 text-white' : 'text-black'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className='bg-pink-600 text-white py-3 mt-5 w-40 hover:bg-gray-800 transition'
            onClick={() => addTocart(proData._id, selectedSize)}
          >
            ADD TO CART
          </button>

          <ul className='text-sm mt-4 text-gray-500 list-disc pl-5'>
            <li>100% Original product.</li>
            <li>Cash on delivery is available on this product.</li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className='mt-10 border-t pt-6'>
        <div className='flex gap-6 mb-4'>
          <button
            onClick={() => setTab('desc')}
            className={`pb-2 border-b-2 ${tab === 'desc' ? 'border-black font-medium' : 'border-transparent text-gray-500'}`}
          >
            Description
          </button>
          <button
            onClick={() => setTab('review')}
            className={`pb-2 border-b-2 ${tab === 'review' ? 'border-black font-medium' : 'border-transparent text-gray-500'}`}
          >
            Reviews ({proData.reviews || 122})
          </button>
        </div>
        {tab === 'desc' ? (
          <p className='text-gray-600 max-w-3xl'>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence...
          </p>
        ) : (
          <p className='text-gray-600 italic'>Customer reviews will appear here.</p>
        )}
      </div>

      {/* Related Products */}
     {/* Related Products Section */}
      <RelatedProduct category={proData.category} subCategory={proData.subCategory} />

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
