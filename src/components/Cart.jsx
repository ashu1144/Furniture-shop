import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../redux/slices/cartSlice';
import '../styles/Cart.css';

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping">Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
              </div>
              <p className="item-total">${item.totalPrice.toFixed(2)}</p>
              <button 
                className="remove-item" 
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal ({totalQuantity} items):</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;