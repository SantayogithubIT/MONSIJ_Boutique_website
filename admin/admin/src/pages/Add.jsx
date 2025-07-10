import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
     const [image1, setImage1] = useState(false);
     const [image2, setImage2] = useState(false);
     const [image3, setImage3] = useState(false);
     const [image4, setImage4] = useState(false);

     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const [price, setPrice] = useState('');
     const [category, setCategory] = useState('Women');
      const [subCategory, setSubCategory] = useState('Topwear');
      const [bestseller, setBestseller] = useState(false);
      const [sizes, setSizes] = useState([]);

      const onSubmitHandler = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);  
        formData.append('category', category);
        formData.append('subCategory', subCategory);
        formData.append('bestseller', bestseller);
        formData.append('sizes', JSON.stringify(sizes));

        image1 && formData.append('image1', image1);
        image2 && formData.append('image2', image2);    
        image3 && formData.append('image3', image3);
        image4 && formData.append('image4', image4);
        
        const response = await axios.post(backendUrl + '/api/product/add', formData, {headers: {token}})
        if(response.data.success){
          toast.success(response.data.message);
          setName('');
          setDescription(''); 
          setPrice('');
          setCategory('');
          setSubCategory(''); 
          setBestseller(false);
          setSizes([]);
          setImage1(false);
          setImage2(false);
          setImage3(false);   
          setImage4(false);
        }else{
          toast.error(response.data.message);
        }
      } catch (error) {
          console.log("Error adding product:", error);
          toast.error("Failed to add product. Please try again.");  
      }
      }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full h-full items-start gap-3'>
        <p className='mb-2 text-pink-600'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])}  type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])}  type="file" id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
          </label>
        </div>
        <div className='w-full'>
          <p className='mb-2'>Product Name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type Here' required />
        </div>

        <div className='w-full'>
          <p className='mb-2'>Product Description</p>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description}  className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Write Description Here' required />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

          <div>
            <p  className='mb-2' >Product Category</p>
            <select onChange={(e)=>setCategory(e.target.value)} value={category}  className='w-full px-3 py-2' >
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="children">Children</option>
            </select>
          </div>

          <div>
            <p className='mb-2' >Sub Category</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory}  className='w-full px-3 py-2'>
              <option value="Topwear">Topwear</option>
              <option value="Sarees">Sarees</option>
              <option value="Winterwear">Winterwear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div>
            <p className='mb-2'>Product Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price}  className='w-full px-3 py-2 sm:w-[120px]'  type="number" placeholder='1000' required />
          </div>

        </div>
        <div>
          <p className='mb-2'>Product Sizes</p>
          <div className='flex gap-3'>
            <div onClick={()=> setSizes(prev => prev.includes('XS') ? prev.filter(size => size !== 'XS') : [...prev, 'XS'])}>
              <p className={`${sizes.includes('XS') ? 'bg-pink-600 text-white' : 'bg-slate-200'}  px-3 py-1 cursor-pointer`} >XS</p>
            </div>

            <div onClick={()=> setSizes(prev => prev.includes('S') ? prev.filter(size => size !== 'S') : [...prev, 'S'])}>
              <p className={`${sizes.includes('S') ? 'bg-pink-600 text-white' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}  >S</p>
            </div>

            <div onClick={()=> setSizes(prev => prev.includes('M') ? prev.filter(size => size !== 'S') : [...prev, 'M'])}>
              <p className={`${sizes.includes('M') ? 'bg-pink-600 text-white' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}  >M</p>
            </div>

            <div onClick={()=> setSizes(prev => prev.includes('L') ? prev.filter(size => size !== 'L') : [...prev, 'L'])}>
              <p className={`${sizes.includes('L') ? 'bg-pink-600 text-white' : 'bg-slate-200'}  px-3 py-1 cursor-pointer`} >L</p>
            </div>

            <div onClick={()=> setSizes(prev => prev.includes('XL') ? prev.filter(size => size !== 'XL') : [...prev, 'XL'])}>
              <p className={`${sizes.includes('XL') ? 'bg-pink-600 text-white' : 'bg-slate-200'}  px-3 py-1 cursor-pointer`} >XL</p>
            </div>

            <div onClick={()=> setSizes(prev => prev.includes('XXL') ? prev.filter(size => size !== 'XXL') : [...prev, 'XXL'])}>
              <p className={`${sizes.includes('XXL') ? 'bg-pink-600 text-white' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}  >XXL</p>
            </div>

            <div onClick={()=> setSizes(prev => prev.includes('Free Size') ? prev.filter(size => size !== 'Free Size') : [...prev, 'Free Size'])}>
              <p className={`${sizes.includes('Free Size') ? 'bg-pink-600 text-white' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}  >Free Size</p>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mb-2'>
          <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller}  type="checkbox"  id="bestseller" />
          <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
        </div>

        <button type='submit' className='bg-pink-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>
        Add Product
        </button>
    </form>
  )
}

export default Add