import React, { useEffect, useReducer, useRef } from 'react';
import Axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const useEffectOnce = (callback) => {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      callback();
      didRun.current = true;
    }
  });
};

const fetchGifs = async () => {
  const GIF_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const { data } = await Axios.get(GIF_URL);

  return data;
};

const randomGifReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GIF':
      return { ...state, imgSrc: action.payload.imgSrc };
    default:
      return state;
  }
};

export const Random = () => {
  const [state, dispatch] = useReducer(randomGifReducer, {});

  const updateStateForGifs = () => {
    fetchGifs().then((data) => {
      const imgSrc = data.data.images.downsized_large.url;
      dispatch({
        type: 'SET_GIF',
        payload: { imgSrc },
      });
    });
  };

  const handleClick = (e) => {
    updateStateForGifs();
  };

  useEffectOnce(() => {
    updateStateForGifs();
  });

  return (
    <div className="container">
      <h1>Random</h1>
      {state.imgSrc && <img width="200" src={state.imgSrc} alt="random gif" />}
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};
