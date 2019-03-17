import React from 'react';

export const WheatherIcon = (props)=>{
    return(
        <img src={require('C:/Users/Marcin/Documents/react/tut2/src/'+props.source+'.png')} alt='ikona' width='45px' height='45px'  />
    )
}