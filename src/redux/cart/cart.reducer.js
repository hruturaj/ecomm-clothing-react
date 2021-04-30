import CartActionsTypes from "./cart.types.js";

const initialState = {
  hidden: true,
};

const CartReducer = (currentstate = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentstate,
        hidden: !currentstate.hidden,
      };
    default:
      return currentstate;
  }
};

export default CartReducer;
