import React, { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import {toast} from 'react-toastify';
import { useEffect } from 'react';
const Login = () => {
  const [currentState, setCurrentState]= useState('Login');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async(event) => {
   event.preventDefault();
   try {
    if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register' , {name, email, password});
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
           }else{
            toast.error(response.data.message);
            }
          }else{
            const response = await axios.post(backendUrl + '/api/user/login', {email, password});
            if(response.data.success){
              setToken(response.data.token);
              localStorage.setItem('token', response.data.token);
          }else{
            toast.error(response.data.message);
          }
         }    
    
   } catch (error) {
    console.log(error);
    toast.error('An error occurred while processing your request.');
    
   }
  }
  useEffect(() => {
  if(token){
    navigate('/'); // Redirect to home page if token is set
  }
  },[token])


  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-800 gap-4">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl text-pink-700">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-pink-700" />
      </div>
       {currentState === 'Login' ? '' :<input onChange={(e)=>setName(e.target.value)} value={name} className="border px-3.5 py-1.5 w-full border-gray-300 rounded-2xl" type="text" placeholder="Name" required />}
      <input   onChange={(e)=>setEmail(e.target.value)} value={email} 
        className="border px-3.5 py-1.5 w-full border-gray-300 rounded-2xl" type="email" placeholder="Email" required />
      <input  onChange={(e)=>setPassword(e.target.value)} value={password} 
        className="border px-3.5 py-1.5 w-full border-gray-300 rounded-2xl" type="password" placeholder="Password" required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Password?</p>
         {
            currentState === 'Login' ? 
            <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer text-pink-700'>Create an account</p> :
            <p onClick={()=> setCurrentState('Login')} className='cursor-pointer text-pink-700'>Login Here</p>
          }
        </div>
        <button className='bg-pink-400 text-white font-light px-8 py-2 mt-4'>{currentState === 'Login'? 'Sign In': 'Sign Up'}</button>
    </form>
  );
}

export default Login