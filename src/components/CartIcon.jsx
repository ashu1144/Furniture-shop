import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.png';
import '../styles/CartIcon.css';

const CartIcon = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <Link to="/cart" className="cart-icon-container">
      <img src={cartIcon} alt="Cart" className="cart-icon" />
      {totalQuantity > 0 && (
        <span className="cart-counter">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartIcon;