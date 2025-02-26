import { useEffect, useState } from 'react';
import getRemainingTime from './countDownTimer.js';
import CounterAtom from "./CounterAtom";
const CounterContainer = ({ countDownLimit }) => {
    const defaultRemainingTime = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    }
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTime(countdown))
    }
    useEffect(() => {
        const timer = setInterval(() => {
            updateRemainingTime(countDownLimit)
        }, 1000)

        return () => clearInterval(timer)
    }, [countDownLimit])
  return (
    <div className="flex grow gap-2">
        <CounterAtom delay={14} time="Days" timeleft={remainingTime.days}/>
        <CounterAtom delay={15} time="Hrs" timeleft={remainingTime.hours}/>
        <CounterAtom delay={16} time="Mins" timeleft={remainingTime.minutes}/>
        <CounterAtom delay={17} time="Secs" isHidden={true} timeleft={remainingTime.seconds}/>
    </div>
  );
};

export default CounterContainer;
