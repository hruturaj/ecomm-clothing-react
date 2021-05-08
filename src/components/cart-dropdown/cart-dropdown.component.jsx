import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown-style.scss";

import { CustomButton } from "../custom-button/custom-buttom.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton> Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
