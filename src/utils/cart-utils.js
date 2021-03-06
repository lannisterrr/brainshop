const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }],
      };
    case 'INCREASE_ITEM_COUNT': {
      return {
        ...state,
        cart: state.cart.map(item => {
          return item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item;
        }),
      };
    }

    case 'CART_CLEAR':
      return {
        ...state,
        cart: [],
      };
    case 'DECREASE_COUNT':
      return {
        ...state,
        cart: state.cart.map(item => {
          console.log(item.count);
          return item.id === action.payload.id
            ? { ...item, count: item.count - 1 }
            : item;
        }),
      };
    case 'REMOVE_FROM_CART':
      const filteredData = state.cart.filter(i => i.id !== action.payload.id);
      return {
        ...state,
        cart: filteredData,
      };

    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: action.payload,
      };

    case 'SET_WISHLIST':
      return {
        ...state,
        wishlist: action.payload,
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return state;
  }
};

export { cartReducer };
