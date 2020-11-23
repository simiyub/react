import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={axiosDemo}>AXIOS DEMO</button>
    </div>
  );
}

const requestListener =()=> {
  //console.log(this.);
}
const axiosDemo =()=>{

  var requestObject = new XMLHttpRequest();
  requestObject.addEventListener("load",requestListener);
  requestObject.open("GET", "https://topskills.tech/react/");
  requestObject.send();
}

export default App;
