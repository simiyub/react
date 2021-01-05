import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {mount, shallow} from 'enzyme';

describe("Tests for app to check it renders all required modules", ()=>{

  it ("should render without crashing", ()=>{
    shallow(<App/>);
  })
  it ("should render performance component without crashing", ()=>{
    const app = mount(<App/>);
    const performance = app.find("Performance");
    expect(performance.length).toBe(1);
  })
})

