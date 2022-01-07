import React from "react";
import "./App.css";
import { Pad } from "./Functions";
import keySounds from "./KeySounds";

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <h2>Drum Machine</h2>
      </header>
      <div className="drum-machine">
        
        <div id="drum-machine" className="container">
          {keySounds.map((sound) => (
            <Pad key={sound.id} sound={sound}  className="drum-pad" id={sound.id} />
          ))}

          <br />

          <p>Created from Alejandro as a FCC project</p>
        </div>
      </div>
    </div>
  );
}

export default App;
