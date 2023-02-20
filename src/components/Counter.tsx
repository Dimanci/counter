import React from 'react';
import {Button} from "./Button";

type CounterPropsType= {
    error:boolean
    counter: number
    maxValue:number
    increase:()=>void
    resetCounter:()=>void
    startValue: number
}



export const Counter = (props:CounterPropsType) => {
    return (
        <div className="display">
            {props.error?<div id={'error'}>Enter valid number</div>:<div className={props.counter == props.maxValue ? 'counterRed' : 'counter'}>
                {props.counter}
            </div>}
            <div className='counterButtons'>
                <Button name={'ADD'} callback={props.increase} classname={'addButton'} counter={props.counter == props.maxValue}/>
                <Button name={'RESET'} callback={props.resetCounter} classname={'resetButton'}
                        counter={props.counter == props.startValue}/>
            </div>

        </div>
    );
};

