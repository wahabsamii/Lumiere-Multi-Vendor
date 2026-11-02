import React, { useContext } from 'react'
import Title from './Title';
import { useCart } from '../context/cart';

const CartTotal = () => {
    const [cart, , , currency] = useCart();
    const delivery_fee = 50;
    const totalAmount = cart.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 1), 0);
    
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {totalAmount.toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {totalAmount === 0 ? 0 : totalAmount + delivery_fee}.00</b>
            </div>
      </div>
    </div>
  )
}

export default CartTotal
