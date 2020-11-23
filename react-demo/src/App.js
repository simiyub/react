import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import DestructuringDemo from './Destructuring';


const DemoSimpleState = () =>{

    const initialStateWithoutFunction = () =>{
        console.log('running initialStateWithoutFunction');
        return 0;
    }
    //This works - But is run every time the component is rendered for functional components
   const [count, setCount] = useState(initialStateWithoutFunction());
    //However, use this version because it will only be run when you first initiated the component
    // const [count, setCount] = useState( ()=>{
    //     console.log('running initial state function version')
    //     return 0;
    // })

    
    function decrement(){
        //Use the function version  - Explain
        setCount(prevCount => prevCount-1)
    }

    function increment(){
        //Use the function version 
        setCount(prevCount => prevCount+1)
    }
    return <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
}

const DemoObjectState = () =>{

    const useForm = (initialValues) =>{
        const [values,setValues] = useState(initialValues)

        return [
            values,
            (attr,value) => {
                setValues(
                    {
                        ...values,
                        attr : value

                    }
                )
                console.log(values)
            }
        ]

    }

    const [values, handleChange ] = useForm({name:""})


    return ( <div>
        <input name='name' onChange = {e => handleChange("name",e.target.value)}></input>
        <input name='age' onChange = {e => handleChange("age",e.target.value)}></input>
    </div>

    )

    //setState inside function components overwrote the useState values when using an object
    //this is because it's menat to be setting state for individual values
    // const [val, setValue] = useState({ name: "" })

    // const setInput = (e) => {
    //     return { ...prev, [e.target:}
    // }

    // return (
    //     <div>
    //         <span>Name</span>
    //         <input type='text' onChange={setValue}></input>
    //         <span>age</span>
    //         <input type='number'></input>
    //         <br></br>
    //         <button>Display</button>
    //         <label>{val.name}</label>
    //         <label>{val.age}</label>
    //     </div>


    // )
}

const DemoForm = () => {

    const [{count1, count2}, setCount] = useState(()=>({count1:0, count2:-1}))

    return <div>
        <button onClick={()=>setCount(currentState =>({
            ...currentState,
            count1: currentState.count1 + 1, count2:currentState.count2 +2
        }))}>+</button>

    <span>count 1: {count1}</span>
    <span>     count 2: {count2}</span>
    </div>

}

const App = () => {
return (
    <div>
        {/* <DemoSimpleState/>
        <DemoObjectState/>
        <DemoForm/> */}
        <DestructuringDemo/>
    </div>

)
}

// class Clocks extends React.Component{

// constructor(props){
// super(props);
// this.state = {
//     date    :   new Date()
// }
// }

// tick(){
//     this.setState( {date    : new Date()});
// }
// componentDidMount(){
//     this.timerID = setInterval(
//         () => this.tick(),1000
//     );
// }

// componentWillUnmount(){
//     clearInterval(this.timerID);
// }
// render(){
// return(
// <div>
// <h1>Hello. It is {this.state.date.toLocaleTimeString()}.</h1>
// </div>
// )
// }
// }


//ReactDOM.render(<Clock/>,document.getElementById('root'));



//function App(props) {
//  return <div>
//  <div>Hello {props.UserInfo}</div>
//  <div></div>
//</div>
//}

//function User(props){
//return (
//<div>

//</div>
//)
//}

//const user = <User name="New User" />;
//ReactDOM.render(user, document.getElementById('root'));

//const comment = <Comment UserInfo="New USER" date = {new Date()}/>
//ReactDOM.render(comment, document.getElementById('root'));

export default App;