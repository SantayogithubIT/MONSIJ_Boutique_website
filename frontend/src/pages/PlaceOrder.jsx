import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const PlaceOrder = () => {
  const [methode, setMethode] = useState('COD');
  const { navigate, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({ ...data, [name]: value }))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount : order.amount,
      currency : order.currency,
      name : 'Order Payment',
      description : 'Order Payment',
      order_id : order.id,
      receipt : order.receipt,

      handler: async(response) =>{
          console.log(response);
          try {
            const { data } = await axios.post(backendURL + '/api/order/verifyRazorpay', response, {headers:{token}})
            if(data.success){
              navigate('/Order')
              setCartItems({})
            }
          } catch (error) {
            console.log(error);
            toast.error(error.message);
            
          }
          
      }
    }
    const rzp = new window.Razorpay(options);
    rzp.open();
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (methode) {
        case 'cod':{
          const response = await axios.post(backendURL + '/api/order/place', orderData, { headers: { token } })
          console.log(response.data);

          if (response.data.success) {
            setCartItems({})
            navigate('/Order')
          } else {
            toast.error(response.data.message)
          }
          break;
        }

        case 'razorpay': {
            const responseRazorpay = await axios.post(backendURL + '/api/order/razorpay', orderData, {headers: {token}})
            if(responseRazorpay.data.success){
              initPay(responseRazorpay.data.order);
              
            }
            break;
        }
        default:
          break;
      }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
      {/* LEFT SIDE */}
      <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
        <div className='text-xl sm:text--2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="text" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="email" placeholder='Email Address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="number" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border px-3.5 py-1.5 w-full border-gray-300 rounded' type="number" placeholder='Phone Number' />
      </div>
      {/* RIGHT SIDE */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment options can be added here */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethode('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${methode === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethode('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${methode === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4' >CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-pink-500 text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder