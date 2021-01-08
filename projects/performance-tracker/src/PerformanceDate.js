import React from 'react';

export const PerformanceDate = () => {
    return <>
        <h4>Date Details here</h4>
        {<div>
            <label>Date</label>
        <input type="date" id="performancedate" name="performancedate"></input>
        </div>}
        <div> 
            <label>Start</label>
            <input type="time" id="start" name="start"></input>
            <label>End</label>
            <input type="time" id="end" name="end"></input>             
         </div>
    </>;
};
