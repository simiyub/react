import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render(){
    return (
      <div className="App">
        <h3>Hello</h3>
        <button onClick={asyncCallDemo}>AXIOS DEMO</button>
      </div>
    );
  }
  




let result = "";

const response =()=>{
  return result;
}


const requestListener =()=> {
  //console.log(this.);
}

function resolveAfter2Seconds(){
  return new Promise( resolve =>{
    setTimeout(() =>{
      resolve('resolved');
    },2000);
  });
}
async function asyncCallDemo(){
  console.log("calling");
  result = await resolveAfter2Seconds();
}
const axiosDemo =()=>{

  var requestObject = new XMLHttpRequest();
  requestObject.addEventListener("load",asyncCallDemo);
  //requestObject.open("GET", "https://topskills.tech/react/");
  //requestObject.send();
}

export default App;
