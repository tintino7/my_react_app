import React, {useState, useEffect, useRef} from 'react'
import styles from './StopWatch.module.css'

function StopWatch() {

    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalId = useRef(0)
    let startTimeRef = useRef(0)

    useEffect(() => {
        if (isRunning) {
            intervalId.current = setInterval(() => {
                setTimer(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalId.current);
        }
    
        return () => clearInterval(intervalId.current);
    }, [isRunning]);



    const start = () => {
        startTimeRef.current = Date.now() - timer
        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
    }

    const reset = () => {
        setIsRunning(false)
        setTimer(0)
    }

    const formatTimer = (timerValue) => {
        let milliSeconds = Math.floor(((timerValue) % 1000) / 10)
        let seconds =  Math.floor((timerValue / 1000) % 60)
        let minutes = Math.floor((timerValue / (1000 * 60)) % 60)
        let hours = Math.floor((timerValue/ (1000 * 60 * 60)) % 60)

        return `${appendZero(hours)}:${appendZero(minutes)}:${appendZero(seconds)}:${appendZero(milliSeconds)}`
    }

    const appendZero = (time) => {
        return (time < 10 ? `0${time}` : time)
    }

    return(
        <div className={styles.container}>
            <p className={styles.timer}>{formatTimer(timer)}</p>
            <button className={styles.startbutton} onClick={start}>Start</button>
            <button className={styles.stopbutton} onClick={stop}>Stop</button>
            <button className={styles.resetbutton} onClick={reset}>Reset</button>
        </div>
    )
}

export default StopWatch