import React from 'react'
import { featured, all, Trending, bestseller, Newest } from '../Constant';
import ProductGrid from './ProductGrid'
import { useLocation, useNavigate } from 'react-router-dom';

const OurProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname === '/Furniture-shop/' ? 'Furniture-shop' : location.pathname.substring(1);
  return (
    <div id='ourproducts' className='max-w-[70vw] max-sm:max-w-[90vw] m-auto'>
        <div className='text-center text-3xl font-semibold p-5 '><h1>Our Product</h1></div>
        
        <div className='flex items-center justify-center gap-10 max-sm:gap-5 font-light text-sm p-10 ' >
            <div className={path === 'Furniture-shop' || path === 'Furniture-shop/all' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/Furniture-shop/')}><h2>All</h2></div>
            <div className={path === 'Furniture-shop/newest' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/Furniture-shop/newest')}><h2>NEWEST</h2></div>
            <div className={path === 'Furniture-shop/trending' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/Furniture-shop/trending')}><h2>TRENDING</h2></div>
            <div className={path === 'Furniture-shop/bestseller' ? 'underline cursor-pointer max-sm:min-w-20' : 'text-gray-700 cursor-pointer max-sm:min-w-20'} onClick={() => navigate('/Furniture-shop/bestseller')}><h2>BEST SELLER</h2></div>
            <div className={path === 'Furniture-shop/featured' ? 'underline cursor-pointer' : 'text-gray-700 cursor-pointer'} onClick={() => navigate('/Furniture-shop/featured')}><h2>FEATURED</h2></div>   
        </div>

        {path === 'Furniture-shop' || path === 'Furniture-shop/all' ? <ProductGrid products={all} /> : null}
        {path === 'Furniture-shop/newest' ? <ProductGrid products={Newest} /> : null}
        {path === 'Furniture-shop/trending' ? <ProductGrid products={Trending} /> : null}
        {path === 'Furniture-shop/bestseller' ? <ProductGrid products={bestseller} /> : null}
        {path === 'Furniture-shop/featured' ? <ProductGrid products={featured} /> : null}   
    </div>
  )
}

export default OurProducts
