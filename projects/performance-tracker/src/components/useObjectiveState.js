import {React, useState} from 'react';

const useObjectiveState=()=>{
    const [state, setValues] = useState({'objective':''});

    const handleValueChange =(e)=>{
        setValues({[e.target.name]:e.target.value});
    }    

    return{
        state,
        handleValueChange
    }
        
    
    
}

export default useObjectiveState;