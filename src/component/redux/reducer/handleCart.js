const getCartFromLocalStorage = () => {
    const cartFromStorage = localStorage.getItem("cart");
    return cartFromStorage ? JSON.parse(cartFromStorage) : [];
  };
  
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  const cart = getCartFromLocalStorage();
  
  const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
      case "ADDITEM":
        // Check if product is Already in the cart
        const exist = state.find((x) => x.id === product.id);
        if (exist) {
          // Increase the Quantity
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          );
        } else {
          const product = action.payload;
          return [
            ...state,
            {
              ...product,
              qty: 1,
            },
          ];
        }
  
      case "DELITEM":
        const exist1 = state.find((x) => x.id === product.id);
        if (exist1.qty === 1) {
          return state.filter((x) => x.id !== exist1.id);
        } else {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
  
      default:
        return state;
    }
  };
  
  // This function will save the cart to local storage whenever the cart changes.
  const handleCartWithLocalStorage = (state, action) => {
    const newState = handleCart(state, action);
    saveCartToLocalStorage(newState);
    return newState;
  };
  
  export default handleCartWithLocalStorage;
  