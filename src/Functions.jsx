import React from "react";

function Pad({ sound, record }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.keyCode === sound.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audio = document.getElementById(sound.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 150);
    audio.currentTime = 0;
    audio.play();
    record(sound.id + "");
  };

  return (
    <div className="wrapper">
      <button id={sound.id} onClick={playSound} className={`drum-pad ${active && "active"}`}>
        <audio className="clip" id={sound.keyTrigger} src={sound.url} />
        {sound.keyTrigger}
      </button>
    </div>
  );
}

export { Pad };
