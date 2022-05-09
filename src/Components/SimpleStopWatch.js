import React, { useState, useRef } from "react";
import "./SimpleStopWatch.css";

function SimpleStopWatch() {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const countRef = useRef(null);

  function onStartClick() {
    setIsStart(true);
    countRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }
  function onStopClick() {
    setIsStart(false);
    clearInterval(countRef.current);
  }
  function onResetClick(){
    setIsStart(false);
    setCount(0)
    clearInterval(countRef.current);
  }
  return (
    <div className="stop-watch">
      <h1>Simple Stopwatch</h1>
      <h1>{count}</h1>
      {!isStart ? (
        <button className="btn green" onClick={onStartClick}>
          Start
        </button>
      ) : (
        <button className="btn red" onClick={onStopClick}>
          Stop
        </button>
      )}
      <button className="btn blue" onClick={onResetClick}>
        Reset
      </button>
    </div>
  );
}

export default SimpleStopWatch;
