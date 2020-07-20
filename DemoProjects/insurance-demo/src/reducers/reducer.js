import {
  DISPLAY_MODULES,
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  DISPLAY_CART_CONTENTS
} from "../actions/types";

const INITIAL_STATE = {
  modules: [],
  cart: [],
  total: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_MODULES:
      return { ...state, modules: action.payload };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: Math.round((state.total + action.payload.price) * 100) / 100
      };
    case DISPLAY_CART_CONTENTS:
      return state;
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.timeStamp !== action.payload.timeStamp),
        total:
          state.total - action.payload.price > 0
            ? Math.round((state.total - action.payload.price) * 100) / 100
            : 0
      };
    default:
      return state;
  }
};
export default reducer;
