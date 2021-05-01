export const addItemToCart = (cartItems, cartItemToBeAdded) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToBeAdded.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToBeAdded.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToBeAdded, quantity: 1 }];
};
