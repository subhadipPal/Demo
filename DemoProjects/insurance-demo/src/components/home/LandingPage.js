import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tile from "../common/Tile";

import { addItemToCart, displayCartContents } from "../../actions";
import "./LandingPage.css";

const LandingPage = () => {
  const modules = useSelector(state => state.data.modules);
  const cart = useSelector(state => state.data.cart);
  const dispatch = useDispatch();
  const addToCart = item => {
    dispatch(addItemToCart(item));
  };
  return (
    <div className="app">
      <div className="header">
        <div className="text">Insurance modules</div>
        <i
          className="shopping cart icon"
          onClick={() => {
            dispatch(displayCartContents());
          }}
        >
          <span className="badge">{cart.length}</span>
        </i>
      </div>
      <div className="body">
        {modules.map(module => (
          <Tile key={module.id} module={module} addToCart={addToCart}></Tile>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
