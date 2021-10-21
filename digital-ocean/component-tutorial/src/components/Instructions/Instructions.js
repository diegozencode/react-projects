// import React from 'react';
import './Instructions.css';
import emoji from './emoji.svg';

// using arrow function implicit return it lose the function body
const Instructions = () => (
  <div className="instructions">
    <img alt="laughing crying emoji" src={emoji} />
    <p>Click on an emoji to view the emoji short name and test.</p>
  </div>
)

export default Instructions;
