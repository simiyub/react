import React from 'react';
import { Actions } from './Actions';
import { KeyResults } from './KeyResults';
import { PerformanceDate } from './PerformanceDate';

const Performance =()=>{
    return(

        <>
            <PerformanceDate/>
            <KeyResults/>  
            <Actions/>                      
            </>
            
    );

}

export default Performance;


