import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import './App.css';

// function component
const App = () => {
  return <div className="App">
    <h1>Hello, World!!!</h1>
    <TodoList />
  </div>
};

export default hot(module)(App);
