import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import cart from '../assets/cart.png';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id || index,
      name: product.title,
      price: parseFloat(product.price.replace('$', '')),
      image: product.img,
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
        <img src={product.img} alt={product.title} />
      </div>
      {/* desc */}
      <div className="flex justify-between items-center p-1">
        <div>
          <h1 className="font-semibold">{product.title}</h1>
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