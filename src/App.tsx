import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style.css";

import Canv from './components/Canvas'
import { ExpandTransition } from "./components/visual/ExpandTransition";
import { Scene } from './components/visual/ShaderCanvas';
// import FBOScene from './components/fboCurl/FBOCanvas';
import FBOScene from './components/fboBox/FBOCanvas';


function App() {

  return (
    <div className="App">
      
      {/* vehicles particles */}
      {/* <Canv></Canv> */}

      {/* 이미지 확장 모션 */}
      {/* <ExpandTransition /> */}

      {/* 이미지 파티클 */}
      {/* <Scene /> */}

      {/* FBO */}
      <FBOScene />
    </div>
  );
}

export default App;
