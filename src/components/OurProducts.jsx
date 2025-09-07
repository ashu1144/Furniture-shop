import React from 'react'
import { featured, all, Trending, bestseller, Newest } from '../Constant';
import ProductGrid from './ProductGrid'
import { Routes, Route, NavLink } from 'react-router-dom';

const OurProducts = () => {
  return (
    <div id='ourproducts' className='max-w-[70vw] m-auto'>
        <div className='text-center text-3xl font-semibold p-5 '><h1>Our Product</h1></div>
        
        <div className='flex items-center justify-center gap-10 font-light text-sm p-10 ' >
            <NavLink className={({ isActive }) => isActive ? 'underline' : 'text-gray-700'} to='/'><h2>All</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'underline' : 'text-gray-700'} to='newest'><h2>NEWEST</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'underline' : 'text-gray-700'} to='trending'><h2>TRENDING</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'underline' : 'text-gray-700'} to='bestseller'><h2>BEST SELLER</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'underline' : 'text-gray-700'} to='featured'><h2>FEATURED</h2></NavLink>
        </div>

        <Routes>
          <Route path="/" element={<ProductGrid products={all} />} />
          <Route path="newest" element={<ProductGrid products={Newest} />} />
          <Route path="trending" element={<ProductGrid products={Trending} />} />
          <Route path="bestseller" element={<ProductGrid products={bestseller} />} />
          <Route path="featured" element={<ProductGrid products={featured} />} />
        </Routes>
    </div>
  )
}

export default OurProducts
