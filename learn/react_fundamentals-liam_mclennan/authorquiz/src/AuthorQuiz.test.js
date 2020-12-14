import { render, screen } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';
import React from 'react';
import ReactDOM from 'react-dom';

import {Enzyme, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight: 'none'
}

describe("Author Quiz", ()=>{
  it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />,div);
  })
})

describe("When no answer has been selected", ()=>{
  let wrapper;
  beforeAll(()=>{
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>);
  });

  it("Should have no background color", ()=>{
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
  })
})

describe("When wrong answer has been selected", ()=>{
let wrapper;
beforeAll(()=>{
  wrapper = mount(<AuthorQuiz {...(Object.assign({},state,{highlight:'wrong'}))} onAnswerSelected={()=>{}}  />);  
})

it("Should have a red background color ", () =>{
    expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
})

})

describe("When correct answer has been selected", ()=>{
  let wrapper;
  beforeAll(()=>{
    wrapper = mount(<AuthorQuiz {...(Object.assign({},state,{highlight:'correct'}))} onAnswerSelected={()=>{}}  />);  
  })
  
  it("Should have a green background color ", () =>{
    expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('green');
  });
  
  });

  describe("When the first answer is selected", ()=>{
    let wrapper;
    const handleAnswerSelected = jest.fn();

    beforeAll(()=>{
      wrapper = mount(
      <AuthorQuiz {...state} onAnswerSelected={ handleAnswerSelected}  />);  
      wrapper.find('.answer').first().simulate('click');      
    })

    it("onAnswerSelected should be called", () =>{
      handleAnswerSelected();
      expect(handleAnswerSelected).toHaveBeenCalled();
    }) 

    it("should receive the shining", ()=>{
      handleAnswerSelected("The Shining");
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
    })

    
    }) 
