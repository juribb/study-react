import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

import './App.css';


function App() {
  const name = "react";
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24, // 기본단위 px
    padding : '1rem'
  }
  return (
    <Wrapper>
        <Hello/>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
        <Hello name = "react" color="red" />
        <Hello color="pink" isSpecial/>
        <Counter />
    </Wrapper>
  );
}

export default App;
