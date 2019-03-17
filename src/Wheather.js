import React from 'react';
import {WheatherIcon} from './WheatherIcon'

const WheatherStyle={
    width: '100px',
    height: '80px',
    border: '1px solid grey',
    marginLeft: 'auto',
    marginRight: 'auto',
    position:'relative',
    paddingBottom: '2px',
    paddingTop:'5px',
    fontSize:'10px',
    float: 'left'
}


export const Wheather = (props)=>{
    return(
        <div style={WheatherStyle}>
        {props.day}<br/>
        
         <WheatherIcon source={props.sourceU} /><br/>
        {props.temperature}°C
        
        </div>
    )
}