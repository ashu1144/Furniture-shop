import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import cart from '../assets/cart.png';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Convert price from string format (e.g. "$20") to number format (e.g. 20)
    const priceValue = typeof product.price === 'string' && product.price.startsWith('$') 
      ? parseFloat(product.price.substring(1)) 
      : product.price;
      
    dispatch(addToCart({
      id: product.id || index,
      name: product.name || product.title,
      price: priceValue,
      image: product.image || product.img,
    }));
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.2 }}
      viewport={{ once: true }}
      className="hover:scale-103 duration-100 ease-in-out"
    >
      {/* img */}
      <div className="rounded-md">
        <img src={product.image || product.img} alt={product.name || product.title} className="w-full h-48 object-cover" />
      </div>
      {/* desc */}
      <div className="flex justify-between items-center p-1">
        <div>
          <h1 className="font-semibold">{product.name || product.title}</h1>
          <p className="text-sm">{product.price}</p>
        </div>

        {/* cart */}
        <div>
          <button onClick={handleAddToCart}>
            <img src={cart} alt="Add to cart" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;