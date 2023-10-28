import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style.css";

import Canv from './components/Canvas'
import { ExpandTransition } from "./components/visual/ExpandTransition";



function App() {

  return (
    <div className="App">
      
      {/* <Canv></Canv> */}
      <ExpandTransition />


    </div>
  );
}

export default App;
