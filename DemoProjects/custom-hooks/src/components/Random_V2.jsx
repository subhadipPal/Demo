import React from 'react';
import { useGif } from '../useGif';

export const RandomV2 = () => {
  const { gif, updateStateForGifs } = useGif(null);

  const handleClick = () => updateStateForGifs(null);

  return (
    <div className="container">
      <h1>Random V2</h1>
      {gif && <img width="200" src={gif} alt="Random V2 gif" />}
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};
