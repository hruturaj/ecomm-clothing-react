import CartActionsTypes from "./cart.types.js";

const toggleCartHidden = () => {
  return {
    type: CartActionsTypes.TOGGLE_CART_HIDDEN,
  };
};

export default toggleCartHidden;
