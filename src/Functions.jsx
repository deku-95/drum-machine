import React from "react";


function Pad({ sound }) {
    const [active, setActive] = React.useState(false);
  
    React.useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, []);
  
    const handleKeyPress = (e) => {
      if (e.keyCode === sound.keyCode) {
        playSound();
      }
    };
  
    const playSound = () => {
      const audio = document.getElementById(sound.keyTrigger);
      setActive(true);
      setTimeout(() => setActive(false), 200);
      audio.currentTime = 0;
      audio.play();
    };
  
    return (
      <div className="btn">
        <button onClick={playSound} className="drum-pad">
          <audio className="clip" id={sound.keyTrigger} src={sound.url} />
          {sound.keyTrigger}
        </button>
      </div>
    );
  }

export {Pad};
