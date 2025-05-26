import React, { useState, useRef } from "react";

const CustomTimer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Custom Timer</h1>
      <h2>{formatTime(time)}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={startTimer} style={buttonStyle}>
          Start
        </button>
        <button onClick={pauseTimer} style={buttonStyle}>
          Pause
        </button>
        <button onClick={resetTimer} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default CustomTimer;
