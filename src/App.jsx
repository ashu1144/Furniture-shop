import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import OfferBanner from './components/OfferBanner'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OfferBanner />
      <div className='sticky top-0 z-99999'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/Furniture-shop/' element={<Home />} />
        <Route path='/Furniture-shop/all' element={<Home />} />
        <Route path='/Furniture-shop/newest' element={<Home />} />
        <Route path='/Furniture-shop/trending' element={<Home />} />
        <Route path='/Furniture-shop/bestseller' element={<Home />} />
        <Route path='/Furniture-shop/featured' element={<Home />} />
        <Route path='/Furniture-shop/login' element={<Login />} />
        <Route path='/Furniture-shop/cart' element={<Cart />} />
        <Route path='/Furniture-shop/search' element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
