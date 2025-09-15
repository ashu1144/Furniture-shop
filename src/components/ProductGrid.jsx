import React from 'react'
import ProductCard from './ProductCard';

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-4 max-sm:grid-cols-2 grid-rows-2 gap-2 py-5'>
        {products.map((product, index) => (
          <ProductCard key={product.id || index} product={product} index={index} />
        ))}
    </div>
  )
}

export default ProductGrid