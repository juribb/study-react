import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";

import "./App.css";
import UserList from "./UserList";

// 기본적인 사용과 input box 다루기
function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본단위 px
    padding: "1rem",
  };
  return (
    <Wrapper>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Hello name="react" color="red" />
      <Hello color="pink" isSpecial />
      <Counter />
      <InputSample />
      <InputSample2 />
      <UserList />
    </Wrapper>
  );
}

export default App;
