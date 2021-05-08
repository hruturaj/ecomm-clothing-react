import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import "./cart-icon-style.scss";

const CartIcon = ({ toggleCartHidden, totalItemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {totalItemCount} </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

const mapStateToProps = (state) => {
  return {
    totalItemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
