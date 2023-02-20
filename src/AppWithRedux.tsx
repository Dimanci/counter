import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import './components/CounterDisplay.css'
import './components/CounterSettings.css'
import './components/Buttons.css'


function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(startValue)
    let [error, setError] = useState(false)


    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxCount', e.currentTarget.value)
        maxValue = parseInt(e.currentTarget.value)
        setMaxValue(maxValue)
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('startCounter', e.currentTarget.value)
        counter = parseInt(e.currentTarget.value)
        startValue = parseInt(e.currentTarget.value)
        setStartValue(startValue)
        if (startValue < 0 || startValue >= maxValue) {
            setError(true)
        }else {
            setError(false)
        }

    }
    useEffect(() => {
        let maxCount = localStorage.getItem('maxCount')
        if (maxCount) {
            maxValue = JSON.parse(maxCount)
        }
        let startCounter = localStorage.getItem('startCounter')
        if (startCounter) {
            counter = JSON.parse(startCounter)
        }
        setMaxValue(maxValue)
        setStartValue(counter)
        setCounter(counter)
    }, [])

    const setCounterSettings = () => {
        setMaxValue(maxValue)
        setCounter(startValue)
        setStartValue(startValue)
        if (counter < 0 || counter >= maxValue && startValue < 0 || startValue >= maxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }

    function increase() {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    function resetCounter() {
        setCounter(startValue)
    }

    return (
        <div className='main'>
            <div className='counterItself'>

                <Settings startValue={startValue} maxValue={maxValue} setMaxValueHandler={setMaxValueHandler}
                          setStartValueHandler={setStartValueHandler} setCounterSettings={setCounterSettings}/>
                <Counter error={error} counter={counter} maxValue={maxValue}
                         increase={increase} resetCounter={resetCounter} startValue={startValue}/>

            </div>
        </div>
    );
}

export default App;
