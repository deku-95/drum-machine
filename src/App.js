import React from "react";
import "./App.css";
import { Pad } from "./Functions";
import keySounds from "./KeySounds";

const script = document.createElement("script");
script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
script.async = true;
document.body.appendChild(script);

function App() {
  const [pressedKeys, record] = React.useState("");
  return (
    <div className="App">
      <div id="drum-machine" className="drum-machine container">
        <header className="App-header">
          <h2>Drum Machine</h2>
        </header>
        <div  className="wrapper">
          {keySounds.map((sound) => (
            <Pad
              key={sound.id}
              sound={sound}
              className='drum-pad'
              id={sound.id}
              record={record}
            />
          ))}
        </div>
        <br />

        <h3 class>You pressed: <span id="display">{pressedKeys}</span></h3>
        <br />
        <p>
          Created by{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/deku-95">
            Alejandro
          </a>{" "}
          for FreeCodeCamp
        </p>
      </div>
    </div>
  );
}

export default App;
