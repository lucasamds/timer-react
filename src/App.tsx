import './App.css'
import { useState } from 'react'
import Buttons from './components/ButtonsComponent'
import Timer from './components/TimerComponent'

function App() {

  const [timer, setTimer] = useState({minutes: 0, seconds: 0, milliseconds: 0});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerInterval, setTimerInterval] = useState<number>();
  const [startActive, setStartActive] = useState(true);
  
  const startTimer = () => {
    playTime = Date.now();
    configTimer();
    setStartActive(false);
    setTimerInterval(setInterval(configTimer, 10));
  }

  let playTime: number ;
  let newM: number;
  let newS: number;
  let newMS: number;

  const configTimer = () => {
    let diff = (Date.now() - playTime) + timeElapsed;
    setTimeElapsed(diff);
    newM = Math.floor(diff/60000);
    diff %= 60000;
    newS = Math.floor(diff/1000);
    newMS = diff % 1000
    return setTimer({...timer, minutes:newM, seconds:newS, milliseconds:newMS});
    
}

  const pauseTimer = () => {
    clearInterval(timerInterval);
    setStartActive(true);
  }

  const resetTimer = () => {
    clearInterval(timerInterval);
    setStartActive(true);
    setTimer({...timer, minutes:0, seconds:0, milliseconds:0});
    setTimeElapsed(0);
  }

  return (
    <div className="h-full">            
      <div className="text-white flex flex-col max-h-[70vh]
            items-center h-full gap-14 justify-center">
        <Timer  timer = {timer} />
        <Buttons startActive={startActive} startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer}/>
      </div>
    </div>
  )
}

export default App
