import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style.css";

import Canv from './components/Canvas'
import { ExpandTransition } from "./components/visual/ExpandTransition";
import { Scene } from './components/visual/ShaderCanvas';



function App() {

  return (
    <div className="App">
      
      {/* <Canv></Canv> */}
      {/* <ExpandTransition /> */}
      <Scene />

    </div>
  );
}

export default App;
