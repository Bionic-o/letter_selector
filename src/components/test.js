import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);
  const myInterval = useRef();

  function incrementCounter() {
    setFlag((f) => !f);
    if (flag) {
      myInterval.current = setInterval(
        () => setCounter((counter) => counter + 1),
        1000
      );
    } else {
      clearInterval(myInterval.current);
    }
  }

  function resetCounter() {
    clearInterval(myInterval.current);
    setCounter(0);
  }

  useEffect(() => {
    setFlag(true);
    // clearinterval on dismount
    return () => clearInterval(myInterval.current);
  }, []);


  //console.log(counter)
  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementCounter}>{flag ? "Start" : "Pause"}</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}