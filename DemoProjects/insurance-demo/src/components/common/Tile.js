import React, { useState } from "react";

import "./Tile.css";

const Tile = props => {
  const { module, addToCart } = props;
  const [coverage, setCoverage] = useState(parseInt(module.coverageMax - module.coverageMin) / 2);
  const [price, setPrice] = useState((coverage * module.risk) / 100);
  return (
    <div className="tile">
      <div className="tile-description">
        <div>
          <i className={`${module.icon} icon`}></i>
        </div>
        <div className="tile-name">{module.name}</div>
        <div className="tile-risk">Risk(%): {module.risk}</div>
      </div>
      <div className="tile-footer">
        <div className="tile-range">
          <div className="field-label">
            Select Coverage: <span className="coverage-display">{coverage}</span>
          </div>
          <div className="slidecontainer">
            <span className="slider-step">{module.coverageMin}</span>
            <input
              type="range"
              min={module.coverageMin}
              max={module.coverageMax}
              value={coverage}
              className="slider"
              onChange={e => {
                setCoverage(e.target.value);
                setPrice((e.target.value * module.risk) / 100);
              }}
            ></input>
            <span className="slider-step">{module.coverageMax}</span>
          </div>
        </div>
        <div>
          PRICE at this Coverage:<span className="tile-price">{price}</span>
        </div>

        <button
          className="tile-button"
          onClick={() => {
            addToCart({
              id: module.id,
              name: module.name,
              coverage: coverage,
              price: price,
              timeStamp: Math.ceil(new Date().getTime() * Math.random() * Math.random())
            });
          }}
        >
          Add module to cart
        </button>
      </div>
    </div>
  );
};

export default Tile;
