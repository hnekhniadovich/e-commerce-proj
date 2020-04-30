import React from 'react';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{imageUrl}</span>
    <span className='price'>{price}</span>
    <span className='remove-button'>&#10005;</span>
  </div>
);

export default CheckoutItem;