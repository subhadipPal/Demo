import React from 'react';
import './App.css';
import { Random } from './components/Random_V1';
import { RandomV2 } from './components/Random_V2';
import { Tag } from './components/Tag_V1';
import { TagV2 } from './components/Tag_V2';

export const App = () => (
  <div>
    <h1>Random Gif App</h1>
    <div className="main-container">
      <Random />
      <Tag />
      <RandomV2 />
      <TagV2 />
    </div>
  </div>
);
