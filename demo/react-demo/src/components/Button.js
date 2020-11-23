import React from 'react';
import ReactDOM from 'react-dom';

const Button =(props)=>{
    return(
        <button className="submit">{props.name}</button>
    )
}

export default Button;