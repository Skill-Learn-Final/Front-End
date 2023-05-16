import { NavBarP } from "components";
import React from "react";
import "../styles/cart.css";
import EmptyCart from "../assets/images/empty_cart.svg";

const Cart = () => {
  return (
    <>
      <div className="bg-light_green flex flex-row text-center justify-center emptyPage">
        <div className="cart-container">
          <img src={EmptyCart} alt="Empty Cart" />
          <h1>Once you add items to your cart, they will appear here</h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
