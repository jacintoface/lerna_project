import React, { useState } from 'react';
import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import { add } from 'math'
import './App.css';
import testCenterRouter from '../packages/test-center/src/route.config'

console.log(testCenterRouter, '--testCenterRouter')

function Home() {
  return (
    <div>Home</div>
  )
}

function Profile () {
  return (
    <div>Profile</div>
  )
}

function App({ history }) {

  const [ count, setCount ] = useState(0)

  const click = () => {
    history.push('/')
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={click}>点击</button>  
      
      <BrowserRouter>
        <Entry />
      </BrowserRouter> 
    </div>
  );
}

function Entry () {
    return (
      <>
        <Link to='/home'>Home</Link>
        <Link to='/profile'>profile</Link>
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        {testCenterRouter.map(({ component, path }, index) => (
          <Route path={path} component={component} key={index}></Route>
        ))}
      </>
    )
}

export default App;
