import React, { useState, useEffect, useCallback } from 'react'


function counterCountDown() {
    let startTime = new Date('Dec 31, 2020 00:00:00').getTime()
    let currentTime = new Date().getTime()
    let deltaTime = startTime - currentTime

    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60
    let days = hours * 24
    let d = Math.floor(deltaTime / days)
    let h = Math.floor((deltaTime % (days)) / hours)
    let m = Math.floor((deltaTime % (hours)) / minutes)
    let s = Math.floor((deltaTime % (minutes)) / seconds)

    return { d, h, m, s }
}

let { d, h, m, s } = counterCountDown()

const CountDown = () => {

    const [days, setDays] = useState(d)
    const [hours, setHours] = useState(h)
    const [minutes, setMinutes] = useState(m)
    const [seconds, setSeconds] = useState(s)

    // useEffect(() => {
    //     let daysId = setInterval(() => {
    //         setDays(prevDay => prevDay + 1)  
    //     }, 1000)
    //     return () => {
    //         clearInterval(daysId)
    //     }
    // }, 
    // [days]
    // )

    // useEffect(() => {
    //     let hoursId = setInterval(() => {
    //         setHours(prevhour => prevhour + 1)  
    //     }, 1000)
    //     return () => {
    //         clearInterval(hoursId)
    //     }
    // }, 
    // [hours]
    // )

    useEffect(() => {
        let minutesId
            minutesId = setInterval(() => {
                    if (seconds === 1) {
                        setMinutes(prevMinute => prevMinute + 1)
                    }
                    else {
                        setMinutes(m)
                    }
            }, 1000)

        return () => {
            clearInterval(minutesId)
        }
    },
        [minutes]
    )

    useEffect(() => {
        let secondsId = setInterval(() => {
            if (seconds < 59) {
                setSeconds(prevSeconds => prevSeconds + 1)
            } else {
                setSeconds(1)
            }
        }, 1000)

        return () => {
            clearInterval(secondsId)
        }
    },
        [seconds]
    )

    return (
        <div className='countdown'>
            <div id='day'>{days}</div>
            <div id='hour'>{hours}</div>
            <div id='minute'>{minutes}</div>
            <div id='second'>{seconds}</div>
        </div>
    );
}

export default CountDown;