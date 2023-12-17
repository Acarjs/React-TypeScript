import { useEffect, useState, useRef } from 'react';
import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers.context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const internal = useRef<number | null>(null); //this will hold "timer" reference. This ref will hold initially a null value but eventually receive a number. Refs won't get created whenever this component function runs again.
  console.log(internal);

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0 && internal.current) {
    clearInterval(internal.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);
    internal.current = timer;

    return () => clearInterval(timer); //if it returns something, it should be a function. This will a cleanup function that's automatically called by React right before this useEffect function runs again or at least right before the component unmounts.
  }, []);

  let formattedRemainingTime = +(remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 100} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

// When we execute the function setInvertal will run every 50 miliseconds that will update the state. The state update will trigger this Timer function component again(It will execute this component function again). And then, we will set a new interval. But behind the scenes, the old interval will also still be running. And therefore, will add more and more intervals and will effectively end up in an INFINITE LOOP. That should be managed by using useEffect().

//useEffect(() => { }, []); this function will be executed by React whenever the component function did execute. So right after the component function did execute, but only if at least one of the dependencies stored in this dependendicies array did change. If dependency array is empty then this function only runs once after this app component function executed  for the first time.
