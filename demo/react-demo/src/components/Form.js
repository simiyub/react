import React from 'react';
import './Form.css'
import Button from './Button';
const Form =(props)=>{
return (

    <div className="Form">
    <h4>Just demos</h4>
    <form>
      <input className="userName" type="text" id="username" name="username"  placeholder="username"></input>
      <br/>
      <br/>
      <input type="password" id="password" placeholder="password"></input>
      <br/>
      <br/>
      <Button/>
      <button type="reset">Reset</button>
    </form>
  </div> 
)

}

export default Form;