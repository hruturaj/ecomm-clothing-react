import React from "react";

import "./cart-dropdown-style.scss";

import { CustomButton } from "../custom-button/custom-buttom.component.jsx";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton> Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
