import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Form from '../Form';
import { shallow, mount } from 'enzyme';
let mountedForm;
let mountedButton;
let props;

beforeEach(()=>{
  props = {
    username:"user1"
  }
  mountedButton = shallow(<Form {...props}/>); 
  
})

describe("Form basic tests", ()=>{

it('renders without crashing', () => {
  mountedForm = mount(<Form/>);
});

it("renders a form", ()=>{
  const form = mountedForm.find("form");
  expect(form.length).toBe(1);

});

it("renders two button", ()=>{
  const mountedButton = mountedForm.find("button");
  expect(mountedButton.length).toBe(2);
})

})
