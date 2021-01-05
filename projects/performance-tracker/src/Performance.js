import React from 'react';
import { Actions } from './Actions';
import { KeyResults } from './KeyResults';
import { PerformanceDate } from './PerformanceDate';

const Performance =()=>{
    return(
        //Use fragment instead of div
        <div>
        <div>
            <PerformanceDate/>
            <KeyResults/>            
            </div>
        <div>

        <Actions/>
        </div>
        </div>            
    );

}

export default Performance;


