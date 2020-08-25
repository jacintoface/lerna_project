import React, { useState } from 'react';
import logo from './logo.svg';
import { add } from 'math'
import './App.css';

function App() {

  const [ count, setCount ] = useState(0)

  const click = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={click}>点击</button>
    </div>
  );
}

export default App;
