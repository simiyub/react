import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [values, setValue] = useState({title:''})

  const handleChange = (e) => {

    const {name, value} = e => setValue( 
    {  ...values,
      [e.target.name] : e.target.value
    })

    console.log(values)

  }
  return (
    <div className="App">
<h1>File Upload Service</h1>
<form>
  <input type='text' placeholder="Search for a Title.." name='search' onChange={handleChange}></input>
  <button type='submit' name='search'></button><br/><br/>
  <h3>Upload a File </h3>
  <label>Title</label>
  <input name='title' type='text' onChange={handleChange}></input>
  <label>Date</label>
  <input name='date' type='date'></input>
  <label>Reference</label>
  <input name='reference' type='text'></input><p/>
  <label><b>Content Type:</b> </label>
  <label>Preach</label>
  <input name='contentradio' type='radio' id='preach' value='preach'/>
  <label>Music</label>
  <input name='contentradio' type='radio' id='music' value='music'/><p/>
  <label>Speaker</label>
  <input name='speaker' type='text'></input><p/>
  <label>Comment</label>
  <input name='comment' type='textarea'></input><p/>
  <label>Browse for file</label>
  <input name='file' type='file'></input><p/>
  <button type='submit' name='upload'>Upload</button><br/><br/>

</form>
    </div>
  );
}

export default App;
