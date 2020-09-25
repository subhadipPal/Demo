import React, { useReducer, useCallback } from 'react';
import Axios from 'axios';
import { debounce } from 'lodash';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchGifs = async (tag) => {
  const GIF_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const { data } = await Axios.get(GIF_URL);

  return data;
};

const tagGifReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GIF':
      return { ...state, imgSrc: action.payload.imgSrc };
    case 'SET_TAG':
      return { ...state, tag: action.payload.tag };
    default:
      return state;
  }
};

export const Tag = () => {
  const [state, dispatch] = useReducer(tagGifReducer, {});

  const updateStateForGifs = (tag) => {
    fetchGifs(tag).then((data) => {
      const imgSrc = data.data.images.downsized_large.url;
      dispatch({
        type: 'SET_GIF',
        payload: { imgSrc },
      });
    });
  };

  const onTagChange = (newTagValue) => {
    if (!newTagValue) return;
    dispatch({
      type: 'SET_TAG',
      payload: {
        tag: newTagValue,
      },
    });

    updateStateForGifs(newTagValue);
  };

  const handler = useCallback(debounce(onTagChange, 1000), []);

  const handleClick = () => {
    updateStateForGifs(state.tag);
  };

  return (
    <div className="container">
      <h1>Tag V1</h1>
      <input type="text" placeholder="Enter Tag" onChange={(e) => handler(e.target.value)} />
      {state.imgSrc && <img width="200" src={state.imgSrc} alt="Tagged gif" />}
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};
