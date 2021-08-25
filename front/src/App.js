import React from "react";
import './App.css';

import MenuAppBar from "./component/MenuAppBar";
import MovingTextBox from "./component/MovingTextBox";
import LogoBox from "./component/LogoBox";

function App() {
  return (
    <div className="App">
        <MenuAppBar />
      <header className="App-header">
          <LogoBox />
          <MovingTextBox />
      </header>
    </div>
  );
}

export default App;
