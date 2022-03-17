import React from 'react';
import { useCart } from '../context/cart-context';

export default function CartSummary() {
  const { cartData, state } = useCart();
  return (
    <section class="cart__order-summary m-v-8">
      <main class="cart__sumary-content p-8">
        <header class="heading-4">Price Details</header>
        <hr />
        <div class="order-data">
          <p class="f-6">Price({cartData.length} items)</p>
          <p class="f-6">Rs. {state.totalPrice}</p>
        </div>
        <div class="order-data">
          <p class="f-6">Original Price</p>
          <p class="f-6">Rs. {parseInt(state.totalPrice) + 200}</p>
        </div>
        <div class="order-data">
          <p class="f-6">Delivery Charges</p>
          <p class="f-6">Rs. 40</p>
        </div>
        <hr />
        <div class="order-data">
          <p class="heading-3">Total Amount</p>
          <p class="heading-3"> Rs. {parseInt(state.totalPrice) + 40}</p>
        </div>
        <hr />
        <p class="f-6">You Will Save Rs. 200 on this Order</p>
        <button class="btn btn-danger t-c-1 final-cta w-100">Buy Now</button>
      </main>
    </section>
  );
}