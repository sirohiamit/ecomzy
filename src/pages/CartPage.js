import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';
import { useNavigate } from 'react-router-dom';


function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <>
      {cartItems.length > 0 ? (
        <div className='cart_wrapper w-75 m-auto'>
          <div className='cart-cards'>
            {cartItems?.map((value) => {
              return <CartCard key={value.id} value={value} />
            })}
          </div>
          <div className='cart-summary'>
            <div className='top-summary-section'>
              <div className='cart-heading'>YOUR CART</div>
              <div className='summary-heading'>SUMMARY</div>
              <div className='summary-total-items'>{`Total Items: ${cartItems.length}`}</div>
            </div>
            <div className='bottom-summary-section d-flex flex-column gap-3'>
              <div className='summary-total-amount'>{`Total Amount: $${cartItems.reduce((total, currentPrice)=> total + currentPrice.price, 0).toFixed(2)}`}</div>
              <div className='summary-checkout-btn'>
                <button className='btn'>Checkout Now</button>
              </div>
            </div>
          </div>
        </div>) : (
        <div className='cart_empty_wrapper w-75 m-auto d-flex flex-column gap-2 align-items-center justify-content-center'>
          <div className='cart-empty-heading'>YOUR CART EMPTY!</div>
          <button className='btn' onClick={()=> navigate('/')}>Shop Now</button>
        </div>)}
    </>
  )
}

export default CartPage;
