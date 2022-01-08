import React from "react";
import "./App.css";
import { Pad } from "./Functions";
import keySounds from "./KeySounds";

function App() {
 const [pressedKeys, record] = React.useState("");
  return (
    <div className="App">
      
     
      <div className="drum-machine container">
      <header className="App-header">
        <h2>Drum Machine</h2>
      </header>
        <div id="display" className="wrapper">
          {keySounds.map((sound) => (
            <Pad key={sound.id} sound={sound}  className="drum-pad" id={sound.id} record={record} />
          ))}
          </div>
          <br />
          {/* Show they key trigger you pressed */}

          <h3 class>You pressed: {pressedKeys}</h3>
          <br />
          <p>Created by Alejandro for FreeCodeCamp</p>
        
      </div>
    </div>
  );
}

export default App;
