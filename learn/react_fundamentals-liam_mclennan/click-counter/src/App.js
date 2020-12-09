import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div onClick={props.onClick} >Clicked {props.clicks}</div>
  );
}

export default App;
