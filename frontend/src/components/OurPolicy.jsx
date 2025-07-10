import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-xs md:text-base text-gray-900'> 
    <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-500'>At Monsiji, we want you to love what you wear. </p>
        <p className='text-gray-500'>If you're not satisfied, We provide hasslefree exchange polocy.</p>
    </div>
    <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-500'>You can exchange items within 7 days of delivery.</p>
        <p className='font-semibold text-gray-500'>Products must be unused, with tags intact.</p>
        <p className='font-bold text-gray-600'> Exchanges are subject to availability. No refunds—only size or product exchange.</p>
    </div>
    <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-500'>We Provide 24/7 Customer Support.</p>
    </div>

    </div>
  )
}

export default OurPolicy