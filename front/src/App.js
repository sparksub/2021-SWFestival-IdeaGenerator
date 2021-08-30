import React from "react";
import './App.css';

import MenuAppBar from "./component/MenuAppBar";
import MovingTextBox from "./component/MovingTextBox";
import LogoBox from "./component/LogoBox";
import InputBox from "./component/InputBox";

function App() {
  return (
    <div className="App">
        <MenuAppBar />
      <header className="App-header">
          <LogoBox />
          <MovingTextBox />
          <InputBox />
      </header>
    </div>
  );
}

export default App;
