import {
  DISPLAY_MODULES,
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  DISPLAY_CART_CONTENTS
} from "./types";

import history from "../history";

export const displayModules = () => {
  return {
    type: DISPLAY_MODULES,
    payload: [
      {
        id: 0,
        icon: "bicycle",
        name: "Bike",
        coverageMin: 0,
        coverageMax: 3000,
        risk: 30
      },
      {
        id: 1,
        icon: "gem",
        name: "Jewelry",
        coverageMin: 500,
        coverageMax: 10000,
        risk: 5
      },
      {
        id: 2,
        icon: "microchip",
        name: "Electronics",
        coverageMin: 500,
        coverageMax: 6000,
        risk: 35
      },
      {
        id: 3,
        icon: "football ball",
        name: "Sports Equipment",
        coverageMin: 0,
        coverageMax: 20000,
        risk: 30
      }
    ]
  };
};

export const addItemToCart = module => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: module
  };
};

export const deleteItemFromCart = (timeStamp, price) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: { timeStamp, price }
  };
};

export const displayCartContents = () => {
  history.push("/cart");
  return {
    type: DISPLAY_CART_CONTENTS
  };
};
