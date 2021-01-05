import React from 'react';
import useObjectiveState from './useObjectiveState';

const Objective =(props)=>{

    const {
        state,
        handleValueChange

    } = useObjectiveState();
    
    return(
        <form>
            <img className="logo" src="./images/objective.png"/>
            <h3>Create your objectives here</h3>
            <div>
            <label>Objective</label>
            <textarea id="objective" type="text" name="objective" className="objective" onChange={handleValueChange}></textarea>
            </div>
            <div>
            <label>Start Date</label>
            <input type="date" className="startdate"></input>
            </div>
            <div>
            <label>End Date</label>
            <input type="date" className="enddate"></input>
            </div>
            <div>
            <label>Owner</label>
            <select className="owner">
                <option value="bramwell">Bramwell</option>
            </select>
            </div> 
            <div>
            <label>Status</label>
            <select className="status">
                <option value="new">New</option>
                <option value="inprogress">In Progress</option>
                <option value="onhold">On Hold</option>   
                <option value="done">Done</option>                                             
            </select>
            </div>    
            <button className="submit" type="submit" onClick={props.handleClick}>Submit</button> 
            <button className="reset" type="reset">Reset</button>                                
        </form>


    )
}


export default Objective;