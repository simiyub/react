import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../../containers/App';
import { mount } from 'enzyme';

let mountedApp;

beforeEach(()=>{
  mountedApp = mount(<App/>);
})
describe ("App tests", ()=>{
  it('renders without crashing', () => {
    mountedApp = mount(<App/>);
  });

  it("renders child component form", ()=>{
    const form = mountedApp.find("Form");
    expect(form.length).toBe(1);

  });

  it("renders image",()=>{
    const logo = mountedApp.find('img')
    expect(logo.length).toBe(1);
   })



})

