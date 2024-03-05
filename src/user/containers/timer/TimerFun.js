import React, { useState, useEffect } from 'react';
import style from './timer.module.css';

function TimerFun(props) {

  // 1. Constructor-like state initialization in a functional component
  const [time, setTime] = useState(new Date());

  // 2. Render phase
  const click = () => {
    setTime(new Date());
  }

  // 3. useEffect block is executed once, similar to componentDidMount in class components
  useEffect(() => {
    // 4. Updating Phase: setInterval to repeatedly call click 
    const timeRef = setInterval(click, 1000);

    // 5. Unmount Phase: Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(timeRef);
    }
  }, []);

  // 6. JSX to render the component
  return (
    <div className={style.timerContainer}>
      <h1 className={style.timerHeading}>Watch</h1>
      <h1 className={style.timerDisplay}>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default TimerFun;
