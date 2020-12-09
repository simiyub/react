import React from 'react';
import ReactDOM from 'react-dom';
//import {configure, shallow} from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';

//configure({adapter:new Adapter()});


function Hello(props){
    return <h1>Hello at {props.now}</h1>
}

const moment = new Date(1588946400000)
let result
describe("When testing directly", () =>{
    beforeAll(()=>{
        result = Hello({now:moment.toISOString()});
    })

    it("returns a value", ()=>{
        expect(result).not.toBeNull();
    })
    it("is a H1 element", ()=>{
        expect(result.type).toBe("h1");
    })
    it("has children", ()=>{
        expect(result.props.children).toBeTruthy();
    })
    // it("should fail"), ()=>{
    //     expect(1+1).toBe(2);
    // }
})

describe ("When testing with ReactDOM", ()=>{
    it("renders without crashing", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()}/>, div);
    })
})

//Doesn't work at the moment as enzyme is incompatible with React 17.
// describe("When testing with enzyme", ()=>{
//     it("renders a h1 ", ()=>{
//         const wrapper = shallow(<Hello now = {moment.toISOString()}/>); 
//         expect( wrapper.find("h1").length).toBe(1);  
//     }) ;
// })