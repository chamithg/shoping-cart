const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DISPLAY_ITEMS") {
    const fetchCart = action.payload;
    return {
      ...state,
      cart: fetchCart,
      loading: false,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "UPDATE") {
    //Unit Count
    const unitCount = state.cart.map((cartItem) => cartItem.amount);
    let amount = 0;
    unitCount.forEach((item) => (amount += item));
    //total price count
    const totalcount = state.cart.map(
      (cartItem) => cartItem.amount * cartItem.price
    );
    let total = 0;
    totalcount.forEach((item) => (total += item));

    return {
      ...state,
      total: parseFloat(total.toFixed(2)),
      amount: amount,
    };
  }

  return state;
};

export default reducer;
