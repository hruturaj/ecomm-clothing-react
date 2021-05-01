import CartActionsTypes from "./cart.types.js";
import { addItemToCart } from "./cart.utils.js";

const initialState = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (currentstate = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentstate,
        hidden: !currentstate.hidden,
      };

    case CartActionsTypes.ADD_ITEM:
      return {
        ...currentstate,
        cartItems: addItemToCart(currentstate.cartItems, action.payload),
      };

    default:
      return currentstate;
  }
};

export default CartReducer;
