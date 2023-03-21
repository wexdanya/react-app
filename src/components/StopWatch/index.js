import React, { useEffect, useState } from "react";
import styles from "./StopWatch.module.scss";
const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const handlebutton = () => {
    setRunning(!isRunning);
  };
  const resetButton = () =>{
    setTimer(0)
    if(isRunning){
        handlebutton()
    }
  }
  useEffect(() => {
    console.log("Effect started");
    if (isRunning) {
      const intId = setInterval(() => {
        console.log("Enterval started");
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
      return () => {
        console.log("Enterval cleaned");
        clearInterval(intId);
      };
    }
  }, [isRunning]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__watch}>
        <h2>{timer}</h2>
        <button onClick={handlebutton}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={resetButton}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
