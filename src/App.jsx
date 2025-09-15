import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import OfferBanner from './components/OfferBanner'
import Footer from './components/Footer'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OfferBanner />
      <div className='sticky top-0 z-99999'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newest' element={<Home />} />
        <Route path='/trending' element={<Home />} />
        <Route path='/bestseller' element={<Home />} />
        <Route path='/featured' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
