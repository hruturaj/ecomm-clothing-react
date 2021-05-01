import CartActionsTypes from "./cart.types.js";

export const toggleCartHidden = () => {
  return {
    type: CartActionsTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionsTypes.ADD_ITEM,
    payload: item,
  };
};
