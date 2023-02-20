import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type SettingsPropsType = {
    startValue: number
    maxValue: number
    setMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setCounterSettings: () => void

}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            <div className='settings'>
                <div className='values'>
                    <div className='maxValue'>
                        <span>Max Value</span>
                        <div><input value={props.maxValue} type='number' style={{fontSize: '20px', width: '100px', textAlign: 'center'}}
                                    onChange={props.setMaxValueHandler}/>
                        </div>
                    </div>
                    <div className='startValue'>
                        <span>Start Value</span>
                        <div><input value={props.startValue} type='number' style={{fontSize: '20px', width: '100px', textAlign: 'center'}}
                                    onChange={props.setStartValueHandler}/>
                        </div>
                    </div>
                </div>
                <div className='settingsButton'>
                    <Button name={'SET'} classname={'setButton'} callback={props.setCounterSettings}/>
                </div>
            </div>
        </div>
    );
};
