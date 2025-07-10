import axios from 'axios';
import React, { useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

   const onSubmitHandler = async (e) => {
    try {
      e.preventDefault(); 

      const response = await axios.post(backendUrl + '/api/user/admin', {email, password});
      if(response.data.success){
        setToken(response.data.token)
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
        console.error("Login failed:", error);
         toast.error(error.message);  
    }
   }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Admin Panel</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)}
            value={email}
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:opacity-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login