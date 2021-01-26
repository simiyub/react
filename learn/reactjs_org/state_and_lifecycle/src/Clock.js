import React from 'react';

function tick() {
    const element = (
        <div>
            <h1>
                Hello, World
            </h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    return element;
    
}

const Clock =()=> {
    return(
        <div>{tick()}</div>
    );
}

export default Clock;