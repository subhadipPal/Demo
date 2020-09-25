import { useReducer, useEffect } from 'react';
import Axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const GIF_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const fetchGifs = async (tag) => {
  const { data } = await Axios.get(tag ? `${GIF_URL}&tag=${tag}` : GIF_URL);

  return data;
};

const gifReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GIF':
      return { ...state, imgSrc: action.payload.imgSrc };
    case 'SET_TAG':
      return { ...state, tag: action.payload.tag };
    default:
      return state;
  }
};

export const useGif = (tag) => {
  const [state, dispatch] = useReducer(gifReducer, {});

  const updateStateForGifs = (tag) => {
    fetchGifs(tag).then((data) => {
      const imgSrc = data.data.images.downsized_large.url;
      dispatch({
        type: 'SET_GIF',
        payload: { imgSrc },
      });
    });
  };

  useEffect(() => {
    updateStateForGifs(tag);
    dispatch({
      type: 'SET_TAG',
      payload: { tag },
    });
  }, [tag]);

  return {
    gif: state.imgSrc,
    updateStateForGifs,
  };
};
