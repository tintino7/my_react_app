import React, {useState, useEffect} from 'react'

function DigitalClock(){

    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    })

    
    useEffect(() => {
        document.title = `${twelveHourFormat(time.getHours())} : ${time.getMinutes()} : ${time.getSeconds()}`
    },[time])


    /* Change 24 hours format 12 hours format */
    const twelveHourFormat = (hour) => {
        return (hour === 12 || hour === 0 ? 12 : hour%12)
    }

    /* Append zero if number is less than 10 */
    const appendZero = (number) => {
        return number < 10 ? `0${number}` : `${number}`
    }
    
    return(
        <div className='clock-container'>
            <p className='clock'> 
                {appendZero(twelveHourFormat(time.getHours()))}:
                {appendZero(time.getMinutes())}:
                {appendZero(time.getSeconds())}
            </p>
        </div>
        
    )
}

export default DigitalClock