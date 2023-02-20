import React from 'react';

type buttonPropsType = {
    name: string
    callback?:()=> void
    classname: string
    counter?: boolean

}

export const Button = (props:buttonPropsType) => {
    const buttonClassName = 'Button'+ ' ' + props.classname + ' ' + (props.counter && 'disabledButton')
    return (
        <button disabled={props.counter}
            className={buttonClassName}
            onClick={props.callback}>{props.name}</button>
    );
};
