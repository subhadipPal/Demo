import React, { useState, useCallback } from 'react';
import { useGif } from '../useGif';
import { debounce } from 'lodash';

export const TagV2 = () => {
  const [tag, setTag] = useState('');
  const { gif, updateStateForGifs } = useGif(tag);

  const onTagChange = (newTagValue) => {
    setTag(newTagValue);
    updateStateForGifs(newTagValue);
  };

  const handler = useCallback(debounce(onTagChange, 1000), []);

  const handleClick = () => updateStateForGifs(tag);

  return (
    <div className="container">
      <h1>Tag V2</h1>
      <input type="text" placeholder="Enter Tag" onChange={(e) => handler(e.target.value)} />
      {gif && <img width="200" src={gif} alt="Tagged gif" />}
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};
