import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import RelatedProduct from './components/RelatedProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
      <div className='px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-pink-600'>
        
        <ToastContainer />
        <Navbar />
        <Searchbar />
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/collection' element={<Collection/>} />
           <Route path='/About' element={<About />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path='/Product/:productId' element={<Product/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/Order' element={<Orders />} />
           <Route path='/cart' element={<Cart />}/>
           <Route path='/placeOrder' element={<PlaceOrder/>} />
           <Route path='/relatedProduct/:productId' element={<RelatedProduct />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App