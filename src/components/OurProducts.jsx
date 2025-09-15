import React from 'react'
import { featured, all, Trending, bestseller, Newest } from '../Constant';
import ProductGrid from './ProductGrid'
import { useLocation, useNavigate } from 'react-router-dom';

const OurProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split('/').pop();
  return (
    <div id='ourproducts' className='max-w-[70vw] max-sm:max-w-[90vw] m-auto'>
        <div className='text-center text-3xl font-semibold p-5 '><h1>Our Product</h1></div>
        
        <div className='flex items-center justify-center gap-10 max-sm:gap-5 font-light text-sm p-10 ' >
            <div className={path === '' || path === '/' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/')}><h2>All</h2></div>
            <div className={path === 'newest' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/newest')}><h2>NEWEST</h2></div>
            <div className={path === 'trending' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/trending')}><h2>TRENDING</h2></div>
            <div className={path === 'bestseller' ? 'underline cursor-pointer max-sm:min-w-20' : 'text-gray-700 cursor-pointer max-sm:min-w-20'} onClick={() => navigate('/bestseller')}><h2>BEST SELLER</h2></div>
            <div className={path === 'featured' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/featured')}><h2>FEATURED</h2></div>
        </div>

        {path === '' || path === '/' ? <ProductGrid products={all} /> : null}
        {path === 'newest' ? <ProductGrid products={Newest} /> : null}
        {path === 'trending' ? <ProductGrid products={Trending} /> : null}
        {path === 'bestseller' ? <ProductGrid products={bestseller} /> : null}
        {path === 'featured' ? <ProductGrid products={featured} /> : null}
    </div>
  )
}

export default OurProducts
