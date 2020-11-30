import logo from './logo.svg';
import './App.css';
import React from 'react';

class ClassComponent extends React.Component{

  render(){
    return <h3>Class Component</h3>
  }
}

function App() {
  return (
    <div className="App">
      <h2>Components</h2>
      <div>{ClassComponent}</div>
    </div>
  );
}

export default App;
