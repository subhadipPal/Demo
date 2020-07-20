import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteItemFromCart } from "../../actions";
import "./Cart.css";
import history from "../../history";

const Cart = () => {
  const cart = useSelector(state => state.data.cart);
  const total = useSelector(state => state.data.total);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <div className="header">
        <div className="text">Insurance shopping cart</div>
        <i
          className="backward icon"
          onClick={() => {
            history.push("/");
          }}
        ></i>
      </div>
      <div className="body">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Coverage selected</th>
              <th>Module Price</th>
              <th>Remove module</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => {
              return (
                <tr key={item.timeStamp}>
                  <td>{item.name}</td>
                  <td>{item.coverage}</td>
                  <td>{item.price}</td>
                  <td>
                    <i
                      className="window close icon"
                      onClick={() => {
                        dispatch(deleteItemFromCart(item.timeStamp, item.price));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="cart-footer">
            <tr>
              <th colSpan="2">Total :</th>
              <td className="tile-price">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default Cart;
